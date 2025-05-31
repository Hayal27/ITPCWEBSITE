
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export const BACKEND_URL = "https://13b2-196-191-61-253.ngrok-free.app"; // Base URL for your backend

// Generic request function using axios
export async function request<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
  try {
    const response = await axios({
      url: `${BACKEND_URL}/api${url}`,
      ...options,
      headers: {
        // Authorization headers or other common headers can be added here
        ...options.headers,
      },
    });
    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const errorData = axiosError.response.data as { message?: string; error?: string };
      console.error('API Error Response:', errorData);
      throw new Error(errorData?.message || errorData?.error || `Request failed with status ${axiosError.response.status}`);
    } else if (axiosError.request) {
      console.error('API No Response:', axiosError.request);
      throw new Error('No response received from server. Please check your network connection and backend server.');
    } else {
      console.error('API Request Setup Error:', axiosError.message);
      throw new Error(axiosError.message || 'An unknown error occurred during the request setup.');
    }
  }
}

// Updated Comment interface
export interface Comment {
  id: string | number;
  postId?: string | number; // Or newsItemId, ensure consistency with backend
  name: string;
  email?: string; // Optional, as per new interface
  text: string;
  date: string; // ISO string
  parentId?: string | number | null;
  replies?: Comment[];
  approved: boolean; // Crucial for filtering and counting
  createdAt?: string;
  updatedAt?: string;
}

export interface NewsItem {
  id: number | string;
  title: string;
  date: string; // ISO string format expected from backend for date
  category: string;
  image: string[]; // Updated: Expect an array of image URLs from backend
  imageAltText?: string; // General alt text or for the primary image
  description: string;
  featured: boolean;
  readTime: string;
  youtubeUrl?: string;
  tags?: string[];
  comments?: number; // This might represent the count of comments
  commentsData?: Comment[]; // To hold actual comment objects for a news item, uses updated Comment interface
  createdAt?: string;
  updatedAt?: string; // Added based on your JSON response
}

export interface EventItem {
  id: number | string;
  title: string;
  date: string; // ISO string format expected from backend for date
  time: string;
  venue: string;
  image: string | null; // Updated: Expect a single image URL or null
  imageAltText?: string;
  description: string;
  featured: boolean;
  registrationLink: string;
  capacity: string;
  youtubeUrl?: string; // Added for consistency, though not in your event example
  tags?: string[];
  comments?: number; // This might represent the count of comments
  // Events might not have detailed commentsData like news, or you might add it later
  createdAt?: string;
  updatedAt?: string; // Added based on your JSON response (assuming events might have it too)
}

// FormData types for creating/updating posts
// NewsFormData now uses imageFiles for multiple image uploads
export type NewsFormData = Omit<NewsItem, 'id' | 'comments' | 'commentsData' | 'image' | 'createdAt' | 'updatedAt'> & { 
  imageFiles?: File[]; // For multiple file uploads
};

export type EventFormData = Omit<EventItem, 'id' | 'comments' | 'image' | 'createdAt' | 'updatedAt'> & { 
  imageFile?: File; // For single file upload
};


// Helper to build FormData for News
const buildNewsFormData = (newsData: Partial<NewsFormData>): FormData => {
  const formData = new FormData();
  (Object.keys(newsData) as Array<keyof Partial<NewsFormData>>).forEach(key => {
    // Skip imageFiles and tags as they are handled separately
    if (key === 'imageFiles' || key === 'tags') return;

    const value = newsData[key];
    if (value !== undefined && value !== null) {
      if (key === 'youtubeUrl' && value === '') { // Don't append empty youtubeUrl
        return;
      }
      formData.append(key, typeof value === 'boolean' ? String(value) : String(value));
    }
  });

  if (newsData.tags && newsData.tags.length > 0) {
    newsData.tags.forEach(tag => formData.append('tags', tag));
  } else if (newsData.tags === undefined || (Array.isArray(newsData.tags) && newsData.tags.length === 0)) {
    // No action needed if tags are empty or undefined, unless backend requires explicit empty value
  }

  if (newsData.imageFiles && newsData.imageFiles.length > 0) {
    newsData.imageFiles.forEach(file => {
      formData.append('newsImages', file, file.name); // Backend expects 'newsImages'
    });
  }
  return formData;
};

// Helper to build FormData for Events (remains for single image)
const buildEventFormData = (eventData: Partial<EventFormData>): FormData => {
  const formData = new FormData();
  (Object.keys(eventData) as Array<keyof Partial<EventFormData>>).forEach(key => {
    if (key === 'imageFile' || key === 'tags') return; 
    const value = eventData[key];
    if (value !== undefined && value !== null) {
       if (typeof value === 'boolean') {
        formData.append(key, String(value));
      } else {
        formData.append(key, String(value));
      }
    }
  });
  if (eventData.tags && eventData.tags.length > 0) {
    eventData.tags.forEach(tag => formData.append('tags', tag));
  } else if (eventData.tags === undefined || (Array.isArray(eventData.tags) && eventData.tags.length === 0)) {
    // No action needed
  }

  if (eventData.imageFile instanceof File) {
    formData.append('imageFile', eventData.imageFile, eventData.imageFile.name); // Backend expects 'imageFile' for events
  }
  return formData;
};

// --- NEWS API ---
export const getNews = async (): Promise<NewsItem[]> => {
  const response = await request<{ success: boolean, news: NewsItem[] }>('/newsf', { method: 'GET' });
  if (response.success) {
    return response.news.map(n => ({
        ...n, 
        date: n.date ? n.date.split('T')[0] : '',
        tags: Array.isArray(n.tags) ? n.tags : [],
        image: Array.isArray(n.image) ? n.image : (n.image ? [n.image] : []),
        commentsData: Array.isArray(n.commentsData) ? n.commentsData.map(c => ({
            ...c, 
            approved: Boolean(c.approved), // Ensure boolean conversion here too if commentsData can come from getNews
            replies: Array.isArray(c.replies) ? c.replies.map(r => ({...r, approved: Boolean(r.approved), replies: r.replies || []})) : []
        })) : [],
    }));
  }
  throw new Error("Failed to fetch news or backend response was not successful.");
};

export const updateNewsItem = async (id: string | number, newsData: Partial<NewsFormData>): Promise<NewsItem> => {
  const formData = buildNewsFormData(newsData);
  const updatedItem = await request<NewsItem>(`/editNews/${id}`, {
    method: 'PUT',
    data: formData,
  });
  return {
      ...updatedItem, 
      date: updatedItem.date ? updatedItem.date.split('T')[0] : '',
      tags: Array.isArray(updatedItem.tags) ? updatedItem.tags : [],
      image: Array.isArray(updatedItem.image) ? updatedItem.image : (updatedItem.image ? [updatedItem.image] : []),
      commentsData: Array.isArray(updatedItem.commentsData) ? updatedItem.commentsData.map(c => ({
          ...c, 
          approved: Boolean(c.approved), // Ensure boolean conversion
          replies: Array.isArray(c.replies) ? c.replies.map(r => ({...r, approved: Boolean(r.approved), replies: r.replies || []})) : []
      })) : [],
    };
};

export const deleteNewsItem = async (id: string | number): Promise<void> => {
  await request<{ success: boolean, message?: string }>(`/deleteNews/${id}`, { method: 'DELETE' });
};

// --- EVENTS API ---
export const getEvents = async (): Promise<EventItem[]> => {
  const response = await request<{ success: boolean, events: EventItem[] }>('/eventsf', { method: 'GET' });
  if (response.success) {
    return response.events.map(e => ({
        ...e, 
        date: e.date ? e.date.split('T')[0] : '',
        tags: Array.isArray(e.tags) ? e.tags : [],
        image: e.image === "" ? null : e.image, 
    }));
  }
  throw new Error("Failed to fetch events or backend response was not successful.");
};

export const updateEventItem = async (id: string | number, eventData: Partial<EventFormData>): Promise<EventItem> => {
  const formData = buildEventFormData(eventData);
  const updatedItem = await request<EventItem>(`/editEvent/${id}`, {
    method: 'PUT',
    data: formData,
  });
  return {
      ...updatedItem, 
      date: updatedItem.date ? updatedItem.date.split('T')[0] : '',
      tags: Array.isArray(updatedItem.tags) ? updatedItem.tags : [],
      image: updatedItem.image === "" ? null : updatedItem.image,
    };
};

export const deleteEventItem = async (id: string | number): Promise<void> => {
  await request<{ success: boolean, message?: string }>(`/deleteEvent/${id}`, { method: 'DELETE' });
};

// --- COMMENTS API ---

export interface CommentPayload {
  name: string;
  email: string; // Kept email here as it's part of the submission form
  text: string;
  parentId?: string | number | null; // Updated to match Comment interface
}

// Interface for the result of calculateCommentCounts
export interface CommentCounts {
  totalComments: number;
  approvedComments: number;
  pendingComments: number;
}

/**
 * Posts a new comment or a reply to a news item.
 * @param newsItemId The ID of the news item.
 * @param commentData The comment payload.
 * @returns The newly created comment object from the backend.
 */
export const postNewsComment = async (
  newsItemId: string | number, // This is effectively the postId
  commentData: CommentPayload
): Promise<Comment> => { 
  try {
    const response = await request<{ success: boolean; comment: Comment }>( 
      `/news/${newsItemId}/comments`, // Note: This uses /news/ not /newsf/
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { ...commentData, postId: newsItemId }, 
      }
    );

    if (response.success && response.comment) {
      return { 
        ...response.comment, 
        approved: Boolean(response.comment.approved), // Ensure boolean conversion for returned comment
        replies: response.comment.replies ? response.comment.replies.map(r => ({...r, approved: Boolean(r.approved)})) : [],
      };
    } else {
      throw new Error(
        (response as any).message || 'Failed to post comment or backend response was not successful.'
      );
    }
  } catch (error) {
    console.error('Error posting comment:', error);
    throw error instanceof Error ? error : new Error('An unknown error occurred while posting the comment.');
  }
};

/**
 * Fetches all comments for a given post ID.
 * Sorts comments and their replies by date, newest first.
 */
export const getCommentsForPost = async (postId: string | number): Promise<Comment[]> => {
  const response = await request<{ success: boolean, comments: any[] }>(`/newsf/${postId}/comments`, { method: 'GET' }); // Temporarily use any[] for raw comments

  if (response.success && Array.isArray(response.comments)) {
    console.log(`Raw comments received from backend for post ${postId}:`, JSON.stringify(response.comments, null, 2)); 

    const mapAndSortComments = (comments: any[]): Comment[] => { // Accept any[] for raw input
      return comments
        .map(c => ({
          ...c,
          approved: Boolean(c.approved), // Convert to boolean
          replies: c.replies && c.replies.length > 0 ? mapAndSortComments(c.replies) : [],
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };
    return mapAndSortComments(response.comments);
  }
  throw new Error((response as any).message || "Failed to fetch comments or invalid data format.");
};

/**
 * Calculates the total, approved, and pending comment counts from a list of comments.
 * This function recursively counts comments and their replies.
 * @param comments - An array of Comment objects (where 'approved' is boolean).
 * @returns An object containing totalComments, approvedComments, and pendingComments.
 */
export const calculateCommentCounts = (comments: Comment[]): CommentCounts => {
  let totalComments = 0;
  let approvedComments = 0;
  let pendingComments = 0;

  const count = (commentList: Comment[]) => {
    for (const comment of commentList) {
      totalComments++;
      if (comment.approved) { // This check now uses a boolean
        approvedComments++;
      } else {
        pendingComments++;
      }
      if (comment.replies && comment.replies.length > 0) {
        count(comment.replies);
      }
    }
  };

  count(comments);

  return {
    totalComments,
    approvedComments,
    pendingComments,
  };
};

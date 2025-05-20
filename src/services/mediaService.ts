// src/services/mediaService.ts
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

// Ensure this matches your actual backend URL
export const BACKEND_URL = "https://5faf-196-188-225-153.ngrok-free.app"; // Or your environment variable

// --- Generic Request Function ---
export async function request<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
  try {
    const response = await axios({
      url: `${BACKEND_URL}/api${endpoint}`, // Assuming all backend routes are prefixed with /api
      ...options,
      headers: {
        // Common headers like Authorization can be added here if needed globally
        // e.g., 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        ...options.headers,
      },
    });
    return response.data as T;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const errorData = axiosError.response.data as { message?: string; error?: string };
      console.error('API Error Response:', errorData, 'Status:', axiosError.response.status, 'Endpoint:', endpoint);
      throw new Error(errorData?.message || errorData?.error || `Request to ${endpoint} failed with status ${axiosError.response.status}`);
    } else if (axiosError.request) {
      console.error('API No Response:', axiosError.request, 'Endpoint:', endpoint);
      throw new Error(`No response received from server for ${endpoint}. Check network or backend server.`);
    } else {
      console.error('API Request Setup Error:', axiosError.message, 'Endpoint:', endpoint);
      throw new Error(axiosError.message || `An unknown error occurred during the request setup for ${endpoint}.`);
    }
  }
}

// --- Media Item Interface (Updated) ---
export interface MediaItem {
  id: string | number;
  title: string;
  description?: string;
  category: string; // This field remains as items might still have a category property
  date: string; // Expected as ISO string from backend, will be formatted to yyyy-mm-dd for forms/display
  type: 'image' | 'video' | string; // Type from backend (e.g., 'image', 'video')
  src: string; // URL of the media (from backend `src`)
  poster?: string; // Optional: URL for video poster image (from backend `poster`)
  youtubeUrl?: string; // Optional: YouTube URL (from backend `youtube_url_original`)
  
  // Optional fields that might not come from the getMediaItems endpoint directly
  tags?: string[]; 
  imageAltText?: string; 
  createdAt?: string; 
  updatedAt?: string; 
}

// --- Media API Functions ---

/**
 * Fetches all media items.
 * Updated to align with backend:
 * - Endpoint changed to /media (assuming based on typical naming)
 * - Response key changed to mediaItems
 * - Field names updated: type, src, poster, youtubeUrl
 */
export const getMediaItems = async (): Promise<MediaItem[]> => {
  // Assuming the backend endpoint for `getMediaItems` controller is `/media`
  // and it returns `{ success: true, mediaItems: results }`
  const response = await request<{ success: boolean; mediaItems: any[] }>('/mediaf', { method: 'GET' });
  
  if (response.success && Array.isArray(response.mediaItems)) {
    return response.mediaItems.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category: item.category,
      date: item.date ? new Date(item.date).toISOString().split('T')[0] : '', // Ensure date is formatted consistently
      type: item.type, // 'image', 'video', etc. from backend
      src: item.src,
      poster: item.poster,
      youtubeUrl: item.youtubeUrl, // Mapped from youtube_url_original by backend
      tags: Array.isArray(item.tags) ? item.tags : (item.tags ? String(item.tags).split(',') : []), // Basic tag parsing if tags are a comma-separated string or array
    }));
  }
  throw new Error("Failed to fetch media items or backend response was not successful.");
};

import React, { useState, useEffect, useCallback, JSX } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './NewsEvents.css';
import {
  getNews,
  getEvents,
  NewsItem as ApiNewsItem,
  EventItem,
  postNewsComment,
  CommentPayload,
  Comment as ApiComment,
  getCommentsForPost,
  calculateCommentCounts,
  CommentCounts
} from '../../services/apiService';

interface Comment extends ApiComment {}

interface NewsItem extends ApiNewsItem {
  commentsData?: Comment[];
  commentsCount?: number;
  approvedCommentsCount?: number;
  pendingCommentsCount?: number;
}

interface HeroSlide {
  image: string;
  title: string;
  description: string;
}

type FilterType =
  | 'all'
  | 'Infrastructure'
  | 'Innovation'
  | 'Startup Ecosystem'
  | 'Strategic Partnerships'
  | 'Events & Summits'
  | 'Awards & Recognition'
  | 'Government Initiatives'
  | 'Community Engagement';

type YearType = 'all' | '2024' | '2023' | '2022';
type TabType = 'news' | 'events';

const heroSlides: HeroSlide[] = [
  { image: '/images/hero/news-events-hero3.jpeg', title: 'Global Tech Partnerships', description: 'Connect with industry leaders and explore collaboration opportunities in our world-class facilities.' },
  { image: '/images/hero/news-events-hero.png', title: 'Latest Updates & Announcements', description: 'Stay informed about the latest developments, innovations, and opportunities at Ethiopian IT Park.' },
  { image: '/images/hero/news-events-hero2.jpg', title: 'Innovation & Technology Hub', description: "Experience the pulse of Ethiopia's growing tech ecosystem and be part of our success stories." },
  { image: '/images/hero/it-park-building.jpg', title: 'State-of-the-Art Facilities', description: 'Our modern infrastructure and purpose-built spaces provide the perfect environment for technology companies to thrive.' },
  { image: '/images/hero/news-events-hero1.png', title: 'Upcoming Events & Programs', description: 'Discover our upcoming tech events, workshops, and networking opportunities designed to foster innovation.' },
];

const categories: FilterType[] = [
  'all', 'Infrastructure', 'Innovation', 'Startup Ecosystem', 'Strategic Partnerships',
  'Events & Summits', 'Awards & Recognition', 'Government Initiatives', 'Community Engagement',
];
const years: YearType[] = ['all', '2024', '2023', '2022'];

const NEWS_ITEMS_PER_PAGE = 6;

const getEventStatus = (eventDateString: string): 'upcoming_or_today' | 'past' => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  try {
    const eventDate = new Date(eventDateString);
    if (isNaN(eventDate.getTime())) return 'past';
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today ? 'upcoming_or_today' : 'past';
  } catch {
    return 'past';
  }
};

const filterApprovedComments = (comments?: Comment[]): Comment[] => {
  if (!Array.isArray(comments)) return [];
  return comments
    .filter(comment => comment.approved)
    .map(comment => ({
      ...comment,
      replies: comment.replies ? filterApprovedComments(comment.replies) : [],
    }));
};

const NewsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<FilterType>('all');
  const [selectedYear, setSelectedYear] = useState<YearType>('all');
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [allEvents, setAllEvents] = useState<EventItem[]>([]);
  const [filteredData, setFilteredData] = useState<(NewsItem | EventItem)[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [detailItem, setDetailItem] = useState<(NewsItem | EventItem) | null>(null);
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [latestEvents, setLatestEvents] = useState<EventItem[]>([]);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [isSubmittingComment, setIsSubmittingComment] = useState<boolean>(false);
  const [commentSubmissionError, setCommentSubmissionError] = useState<string | null>(null);
  const [commentSubmissionSuccessMessage, setCommentSubmissionSuccessMessage] = useState<string | null>(null);
  const [currentPageNews, setCurrentPageNews] = useState<number>(1);
  const [totalFilteredNewsCount, setTotalFilteredNewsCount] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ type?: string; id?: string }>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const baseNewsItems = await getNews();
        const enrichedNewsItemsPromises = baseNewsItems.map(async (item) => {
          try {
            const allCommentsForPost = await getCommentsForPost(item.id) as Comment[];
            const counts: CommentCounts = calculateCommentCounts(allCommentsForPost);
            return {
              ...item,
              commentsData: allCommentsForPost,
              commentsCount: counts.totalComments,
              approvedCommentsCount: counts.approvedComments,
              pendingCommentsCount: counts.pendingComments,
            } as NewsItem;
          } catch {
            return {
              ...item,
              commentsData: [],
              commentsCount: 0,
              approvedCommentsCount: 0,
              pendingCommentsCount: 0,
            } as NewsItem;
          }
        });
        const newsItemsWithFullComments = await Promise.all(enrichedNewsItemsPromises);
        setAllNews(newsItemsWithFullComments);
        setLatestNews([...newsItemsWithFullComments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4));
        const eventItems = await getEvents();
        setAllEvents(eventItems);
        setLatestEvents([...eventItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4));
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let sourceData = activeTab === 'news' ? allNews : allEvents;
    let filtered = [...sourceData];
    if (searchQuery) {
      const lowerSearchQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerSearchQuery) ||
          item.description.toLowerCase().includes(lowerSearchQuery) ||
          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerSearchQuery)))
      );
    }
    if (selectedCategory !== 'all' && activeTab === 'news') {
      filtered = filtered.filter(
        (item) => (item as NewsItem).category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (selectedYear !== 'all') {
      filtered = filtered.filter((item) => item.date.startsWith(selectedYear));
    }
    if (activeTab === 'news') {
      setTotalFilteredNewsCount(filtered.length);
      const startIndex = (currentPageNews - 1) * NEWS_ITEMS_PER_PAGE;
      const endIndex = startIndex + NEWS_ITEMS_PER_PAGE;
      setFilteredData(filtered.slice(startIndex, endIndex));
    } else {
      setFilteredData(filtered);
      setTotalFilteredNewsCount(0);
    }
  }, [searchQuery, selectedCategory, selectedYear, allNews, allEvents, activeTab, currentPageNews]);

  useEffect(() => {
    if (activeTab === 'news') setCurrentPageNews(1);
  }, [searchQuery, selectedCategory, selectedYear, activeTab]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;
  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) nextSlide();
    else if (swipe > swipeConfidenceThreshold) prevSlide();
  };

  const nextSlide = useCallback(() => setCurrentImageIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1)), []);
  const prevSlide = useCallback(() => setCurrentImageIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1)), []);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const { type, id } = params;
    if (type && id) {
      if (type !== activeTab) setActiveTab(type as TabType);
      let itemToSet: NewsItem | EventItem | null = null;
      const sourceDataForDetail = type === 'news' ? allNews : allEvents;
      if (sourceDataForDetail.length > 0) {
        itemToSet = sourceDataForDetail.find(item => item.id.toString() === id) || null;
        setDetailItem(itemToSet);
        if (itemToSet) {
          setTimeout(() => {
            const el = document.getElementById("news-events-detail");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }
      } else if (!isLoading) {
        setDetailItem(null);
      }
    } else {
      setDetailItem(null);
    }
  }, [params, location.pathname, allNews, allEvents, isLoading, activeTab]);

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'N/A';
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      let date = new Date(dateString);
      if (dateString.length === 10) date = new Date(dateString + 'T00:00:00Z');
      if (isNaN(date.getTime())) return "Invalid Date";
      return date.toLocaleDateString('en-US', options);
    } catch {
      return "Invalid Date";
    }
  };

  const formatCommentDate = (dateString: string): string => {
    if (!dateString) return 'N/A';
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch { return "Invalid Date"; }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchQuery(e.target.value);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => setSelectedCategory(e.target.value as FilterType);
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>): void => setSelectedYear(e.target.value as YearType);

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
    setDetailItem(null);
    setReplyingTo(null);
    setCommentSubmissionError(null);
    setCommentSubmissionSuccessMessage(null);
    navigate(`/resources/digital/news/${tab}`);
  };

  const handleShowDetail = (item: NewsItem | EventItem) => {
    setReplyingTo(null);
    setCommentSubmissionError(null);
    setCommentSubmissionSuccessMessage(null);
    setDetailItem(item);
    if ('category' in item) {
      navigate(`/resources/digital/news/news/${item.id}`);
    } else {
      navigate(`/resources/digital/news/events/${item.id}`);
    }
  };

  const handleCloseDetail = () => {
    setDetailItem(null);
    setReplyingTo(null);
    setCommentSubmissionError(null);
    setCommentSubmissionSuccessMessage(null);
    navigate(`/resources/digital/news/${activeTab}`);
  };

  const handleCommentSubmit = async (
    commentInput: { name: string; email: string; text: string },
    parentId: string | null = null
  ) => {
    if (detailItem && 'category' in detailItem) {
      setIsSubmittingComment(true);
      setCommentSubmissionError(null);
      setCommentSubmissionSuccessMessage(null);
      const payload: CommentPayload = { ...commentInput, parentId };
      try {
        await postNewsComment(detailItem.id, payload);
        setCommentSubmissionSuccessMessage("Your comment has been submitted and is awaiting moderation.");
        setReplyingTo(null);
      } catch {
        setCommentSubmissionError("Failed to post comment.");
        throw new Error("Failed to post comment.");
      } finally {
        setIsSubmittingComment(false);
      }
    }
  };

  const renderTags = (tags?: string[]) =>
    tags && tags.length > 0 ? (
      <div className="mb-1">
        {tags.map((tag) => (
          <span key={tag} className={`news-events-tag ${tag.toLowerCase().replace(/\s+/g, '-')}`}>
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </span>
        ))}
      </div>
    ) : null;

  // --- Tailwind-based Card Layouts ---
  const renderNewsCard = (item: NewsItem) => (
    <div
      className="news-events-card bg-white rounded-2xl shadow-card flex flex-col h-full transition hover:shadow-lg cursor-pointer"
      onClick={() => handleShowDetail(item)}
    >
      <img
        src={Array.isArray(item.image) && item.image.length > 0 ? item.image[0] : '/images/placeholder-news.jpg'}
        alt={item.title.replace(/<[^>]*>?/gm, '')}
        className="news-events-card-image w-full h-56 object-cover rounded-t-2xl"
        onError={(e) => (e.currentTarget.src = '/images/placeholder-news.jpg')}
      />
      <div className="news-events-card-body flex flex-col flex-1 p-6">
        <div className="news-events-card-meta flex items-center gap-3 mb-2 text-gray-500">
          <span className="news-events-badge">{item.category}</span>
          <span className="news-events-card-date-highlight flex items-center">
            <i className="bi bi-calendar3"></i> {formatDate(item.date)}
          </span>
        </div>
        {renderTags(item.tags)}
        <div className="news-events-card-title font-bold text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
        <div className="news-events-card-text text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: item.description.substring(0, 120) + (item.description.length > 120 ? '...' : '') }} />
        <div className="flex justify-between items-center mt-auto">
          <button
            className="news-events-read-more-btn border border-primary-default text-primary-default bg-gray-50 font-semibold rounded-md px-4 py-2 hover:bg-primary hover:text-white transition"
            onClick={e => { e.stopPropagation(); handleShowDetail(item); }}
          >
            View Details
          </button>
          <span className="news-events-card-comments-highlight" title="Approved Comments">
            <i className="bi bi-chat-dots"></i> {item.approvedCommentsCount ?? 0} Comments
          </span>
        </div>
      </div>
    </div>
  );

  const renderEventCard = (item: EventItem) => {
    const eventStatus = getEventStatus(item.date);
    const cardClasses = ["news-events-card", "bg-white", "rounded-2xl", "shadow-card", "flex", "flex-col", "h-full", "transition", "hover:shadow-lg", "cursor-pointer"];
    if (eventStatus === 'upcoming_or_today') cardClasses.push("event-is-upcoming");
    return (
      <div className={cardClasses.join(" ")} onClick={() => handleShowDetail(item)}>
        <img
          src={item.image || '/images/placeholder-event.jpg'}
          alt={item.title.replace(/<[^>]*>?/gm, '')}
          className="news-events-card-image w-full h-56 object-cover rounded-t-2xl"
          onError={(e) => (e.currentTarget.src = '/images/placeholder-event.jpg')}
        />
        <div className="news-events-card-body flex flex-col flex-1 p-6">
          <div className="news-events-card-meta flex items-center gap-3 mb-2 text-gray-500">
            <span className={`news-events-badge ${eventStatus === 'upcoming_or_today' ? 'badge-upcoming' : 'badge-past'}`}>{eventStatus === 'upcoming_or_today' ? 'Upcoming' : 'Past'}</span>
            <span className="news-events-card-date-highlight flex items-center">
              <i className="bi bi-calendar3"></i> {formatDate(item.date)}
            </span>
            <span className="news-events-card-readtime flex items-center"><i className="bi bi-people"></i> {item.capacity}</span>
          </div>
          {renderTags(item.tags)}
          <div className="news-events-card-title font-bold text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
          <div className="news-events-card-text text-gray-600 mb-4">
            <span><i className="bi bi-clock"></i> {item.time}</span><br />
            <span><i className="bi bi-geo-alt"></i> {item.venue}</span>
          </div>
          <div className="flex justify-between items-center mt-auto">
            {(item.registrationLink && item.registrationLink !== '#') && (
              <a
                className="news-events-register-btn bg-primary-default text-white font-semibold rounded-md px-4 py-2 hover:bg-accent transition"
                href={item.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                Register
              </a>
            )}
            <span className="text-muted" title="Comments"><i className="bi bi-chat-dots"></i> {item.comments ?? 0}</span>
          </div>
        </div>
      </div>
    );
  };

  // Sidebar card
  const renderSidebarCard = (
  item: NewsItem | EventItem,
  type: 'news' | 'event'
) => {
  const badgeText =
    type === 'news'
      ? (item as NewsItem).category
      : getEventStatus((item as EventItem).date) === 'upcoming_or_today'
      ? 'Upcoming'
      : 'Past';
  const commentCount =
    type === 'news'
      ? (item as NewsItem).approvedCommentsCount ?? 0
      : (item as EventItem).comments || 0;
  const imageSrc =
    type === 'news'
      ? Array.isArray((item as NewsItem).image) && (item as NewsItem).image.length > 0
        ? (item as NewsItem).image[0]
        : '/images/placeholder-news-thumb.jpg'
      : (item as EventItem).image || '/images/placeholder-event-thumb.jpg';

  return (
    <div
      key={item.id.toString()}
      className="news-events-sidebar-card flex items-center gap-1 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-3 mb-2 cursor-pointer border border-gray-100 group"
      onClick={() => handleShowDetail(item)}
      title={item.title.replace(/<[^>]*>?/gm, '')}
      style={{ minHeight: 100 }}
    >
      <div className="news-events-sidebar-img-wrap w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
        <img
          src={imageSrc}
          alt={item.title.replace(/<[^>]*>?/gm, '')}
          className="news-events-sidebar-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          onError={e => {
            (e.currentTarget as HTMLImageElement).src =
              type === 'news'
                ? '/images/placeholder-news-thumb.jpg'
                : '/images/placeholder-event-thumb.jpg';
          }}
        />
      </div>
      <div className="news-events-sidebar-body flex-1 min-w-0 flex flex-col justify-between h-full">
        <div>
          <div
            className="news-events-sidebar-title font-semibold text-[1rem] text-gray-900 leading-tight line-clamp-2 group-hover:text-primary-default transition-colors cursor-pointer"
            dangerouslySetInnerHTML={{
              __html:
                item.title.length > 80
                  ? item.title.substring(0, 80) + '...'
                  : item.title,
            }}
          />
        </div>
        <div className="news-events-sidebar-meta flex items-center gap-2 mt-2 text-xs text-gray-500">
          <span className="news-events-sidebar-badge">{badgeText}</span>
          <span className="news-events-sidebar-date">{formatDate(item.date)}</span>
          <span className="news-events-card-comments-highlight flex items-center ml-auto">
            <i className="bi bi-chat-dots mr-1"></i>
            {commentCount}
          </span>
        </div>
      </div>
    </div>
  );
};

  // Comments
  const renderCommentWithReplies = (comment: Comment, newsItemId: string | number, level = 0): JSX.Element => (
    <div key={comment.id} className={`news-events-comment-card level-${level} ${replyingTo === comment.id ? 'replying-active-parent' : ''} mb-4`}>
      <div className="card-body p-4">
        <div className="flex justify-between text-gray-500 mb-2 text-sm">
          <span><i className="bi bi-person-fill"></i> {comment.name}</span>
          <small><i className="bi bi-clock-history"></i> {formatCommentDate(comment.date)}</small>
        </div>
        <div className="card-text mb-2">{comment.text}</div>
        <div className="comment-actions">
          <button
            className="btn-link text-secondary text-xs"
            onClick={() => { setReplyingTo(comment.id === replyingTo ? null : String(comment.id)); setCommentSubmissionError(null); setCommentSubmissionSuccessMessage(null); }}
          >
            {replyingTo === comment.id ? 'Cancel Reply' : 'Reply'}
          </button>
        </div>
        {replyingTo === comment.id && (
          <div className="mt-3 mb-2 p-3 bg-gray-100 rounded">
            <CommentForm
              onSubmit={handleCommentSubmit}
              newsItemId={newsItemId}
              parentId={String(comment.id)}
              onCancelReply={() => { setReplyingTo(null); setCommentSubmissionError(null); setCommentSubmissionSuccessMessage(null); }}
              isReplyForm={true}
              isSubmitting={isSubmittingComment}
              submissionError={commentSubmissionError}
              submissionSuccess={commentSubmissionSuccessMessage}
            />
          </div>
        )}
        {comment.replies && comment.replies.length > 0 && (
          <div className="news-events-comment-replies mt-3 pl-4 border-l">
            {comment.replies.map(reply => renderCommentWithReplies(reply, newsItemId, level + 1))}
          </div>
        )}
      </div>
    </div>
  );

  // Pagination
  const renderNewsPaginationControls = () => {
    if (activeTab !== 'news' || totalFilteredNewsCount <= NEWS_ITEMS_PER_PAGE) return null;
    const totalPages = Math.ceil(totalFilteredNewsCount / NEWS_ITEMS_PER_PAGE);
    let items = [];
    const MAX_VISIBLE_PAGES = 5;
    if (totalPages <= MAX_VISIBLE_PAGES + 2) {
      for (let number = 1; number <= totalPages; number++) {
        items.push(
          <button
            key={number}
            className={`px-3 py-1 rounded ${number === currentPageNews ? 'bg-primary-default text-white' : 'bg-white border text-primary-default'} mx-1`}
            onClick={() => handleNewsPageChange(number)}
          >
            {number}
          </button>
        );
      }
    } else {
      items.push(
        <button key={1} className={`px-3 py-1 rounded ${1 === currentPageNews ? 'bg-primary-default text-white' : 'bg-white border text-primary-default'} mx-1`} onClick={() => handleNewsPageChange(1)}>1</button>
      );
      let startPage = Math.max(2, currentPageNews - Math.floor((MAX_VISIBLE_PAGES - 2) / 2));
      let endPage = Math.min(totalPages - 1, currentPageNews + Math.ceil((MAX_VISIBLE_PAGES - 2) / 2) - 1);
      if (currentPageNews <= Math.floor(MAX_VISIBLE_PAGES / 2)) {
        endPage = MAX_VISIBLE_PAGES - 1;
        startPage = 2;
      } else if (currentPageNews > totalPages - Math.floor(MAX_VISIBLE_PAGES / 2)) {
        startPage = totalPages - MAX_VISIBLE_PAGES + 2;
        endPage = totalPages - 1;
      }
      if (startPage > 2) items.push(<span key="start-ellipsis" className="mx-1">...</span>);
      for (let number = startPage; number <= endPage; number++) {
        items.push(
          <button
            key={number}
            className={`px-3 py-1 rounded ${number === currentPageNews ? 'bg-primary-default text-white' : 'bg-white border text-primary-default'} mx-1`}
            onClick={() => handleNewsPageChange(number)}
          >
            {number}
          </button>
        );
      }
      if (endPage < totalPages - 1) items.push(<span key="end-ellipsis" className="mx-1">...</span>);
      items.push(
        <button key={totalPages} className={`px-3 py-1 rounded ${totalPages === currentPageNews ? 'bg-primary-default text-white' : 'bg-white border text-primary-default'} mx-1`} onClick={() => handleNewsPageChange(totalPages)}>{totalPages}</button>
      );
    }
    return (
      <div className="flex justify-center mt-6 news-events-pagination">
        <button className="px-3 py-1 rounded bg-white border text-primary-default mx-1" onClick={() => handleNewsPageChange(currentPageNews - 1)} disabled={currentPageNews === 1}>Prev</button>
        {items}
        <button className="px-3 py-1 rounded bg-white border text-primary-default mx-1" onClick={() => handleNewsPageChange(currentPageNews + 1)} disabled={currentPageNews === totalPages}>Next</button>
      </div>
    );
  };

  const handleNewsPageChange = (pageNumber: number) => {
    setCurrentPageNews(pageNumber);
    const contentSection = document.querySelector('.news-events-content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Comment Form
  const CommentForm: React.FC<{
    onSubmit: (commentData: { name: string; email: string; text: string }, parentId?: string | null) => Promise<void>;
    newsItemId: string | number;
    parentId?: string | null;
    onCancelReply?: () => void;
    isReplyForm?: boolean;
    isSubmitting?: boolean;
    submissionError?: string | null;
    submissionSuccess?: string | null;
  }> = ({
    onSubmit, newsItemId, parentId = null, onCancelReply, isReplyForm = false,
    isSubmitting = false, submissionError = null, submissionSuccess = null
  }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !text.trim()) {
        setFormError('All fields are required.');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setFormError('Please enter a valid email address.');
        return;
      }
      setFormError(null);
      try {
        await onSubmit({ name, email, text }, parentId);
        setName('');
        setEmail('');
        setText('');
      } catch {}
    };

    return (
      <form onSubmit={handleSubmit} className={`news-events-comment-form ${isReplyForm ? 'reply-form' : ''}`}>
        <h5 className="mb-3">{isReplyForm ? 'Write a Reply' : 'Leave a Comment'}</h5>
        {formError && <div className="alert alert-danger">{formError}</div>}
        {submissionError && <div className="alert alert-danger">{submissionError}</div>}
        {submissionSuccess && <div className="alert alert-success">{submissionSuccess}</div>}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required disabled={isSubmitting} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required disabled={isSubmitting} />
        </div>
        <div className="mb-3">
          <label className="form-label">{isReplyForm ? 'Your Reply' : 'Your Comment'}</label>
          <textarea className="form-control" rows={isReplyForm ? 2 : 3} placeholder={isReplyForm ? 'Write your reply...' : 'Your Comment'} value={text} onChange={e => setText(e.target.value)} required disabled={isSubmitting} />
        </div>
        <button type="submit" className="btn btn-primary text-white" disabled={isSubmitting}>
          {isSubmitting ? <span>Submitting...</span> : <span className="gradient-text">{isReplyForm ? 'Post Reply' : 'Post Comment'}</span>}
        </button>
        {isReplyForm && onCancelReply && (
          <button type="button" className="btn btn-outline-secondary ml-2" onClick={onCancelReply} disabled={isSubmitting}>Cancel</button>
        )}
      </form>
    );
  };

  // Main content layout
  const renderMainContent = () => {
    if (detailItem) {
      const isNewsItem = 'category' in detailItem;
      const allCommentsOfDetailItem = isNewsItem ? (detailItem as NewsItem).commentsData || [] : [];
      const approvedCommentsForDisplay = filterApprovedComments(allCommentsOfDetailItem);
      const displayableCommentCount = isNewsItem
        ? ((detailItem as NewsItem).approvedCommentsCount ?? approvedCommentsForDisplay.length)
        : ((detailItem as EventItem).comments || 0);

      return (
        <section className="news-events-detail-section" id="news-events-detail">
          <div className="news-events-detail-image-bg">
            <img src={isNewsItem ? (Array.isArray((detailItem as NewsItem).image) && (detailItem as NewsItem).image.length > 0 ? (detailItem as NewsItem).image[0] : '/images/placeholder-news-large.jpg') : ((detailItem as EventItem).image || '/images/placeholder-event-large.jpg')} alt={detailItem.title.replace(/<[^>]*>?/gm, '')} className="news-events-detail-img" onError={(e) => (e.currentTarget.src = (isNewsItem ? '/images/placeholder-news-large.jpg' : '/images/placeholder-event-large.jpg'))} />
          </div>
          <div className="news-events-detail-card">
            <div className="news-events-detail-meta">
              <span className="news-events-badge">{isNewsItem ? (detailItem as NewsItem).category : (getEventStatus(detailItem.date) === 'upcoming_or_today' ? 'Upcoming Event' : 'Past Event')}</span>
              <span className="news-events-card-date-highlight"><i className="bi bi-calendar3"></i> {formatDate(detailItem.date)}</span>
              {!isNewsItem && <span><i className="bi bi-alarm"></i> {(detailItem as EventItem).time}</span>}
              {!isNewsItem && <span><i className="bi bi-geo-alt-fill"></i> {(detailItem as EventItem).venue}</span>}
              {!isNewsItem && <span><i className="bi bi-people"></i> {(detailItem as EventItem).capacity}</span>}
              <span className="news-events-detail-comments news-events-card-comments-highlight"><i className="bi bi-chat-dots"></i> {displayableCommentCount} Comments</span>
            </div>
            {renderTags(detailItem.tags)}
            <h2 className="news-events-detail-title" dangerouslySetInnerHTML={{ __html: detailItem.title }}></h2>
            <div className="news-events-detail-desc" dangerouslySetInnerHTML={{ __html: detailItem.description.replace(/\n/g, '<br />') }}></div>
            {!isNewsItem && (detailItem as EventItem).registrationLink && (detailItem as EventItem).registrationLink !== '#' && getEventStatus(detailItem.date) === 'upcoming_or_today' && (
              <a className="btn btn-success mt-3 mb-3" href={(detailItem as EventItem).registrationLink} target="_blank" rel="noopener noreferrer">Register for Event</a>
            )}
            <button className="news-events-detail-back-btn" onClick={handleCloseDetail}><i className="bi bi-arrow-left"></i> Back to {activeTab === 'news' ? 'News' : 'Events'}</button>
            {isNewsItem && (
              <div className="news-events-comments-section mt-4 pt-4 border-t">
                <h4 className="mb-3">Comments ({displayableCommentCount})</h4>
                {approvedCommentsForDisplay.length > 0 ? (
                  approvedCommentsForDisplay.filter(c => !c.parentId).map(comment =>
                    renderCommentWithReplies(comment, detailItem.id)
                  )
                ) : (
                  <p>No approved comments yet. Be the first to comment!</p>
                )}
                <div className="mt-4">
                  <CommentForm onSubmit={handleCommentSubmit} newsItemId={detailItem.id} isSubmitting={isSubmittingComment} submissionError={commentSubmissionError} submissionSuccess={commentSubmissionSuccessMessage} />
                </div>
              </div>
            )}
          </div>
        </section>
      );
    }
    return (
      <section className="news-events-content-section">
        <div className="container mx-auto px-4">
          {error && <div className="alert alert-danger my-3">{error}</div>}
          {isLoading && filteredData.length === 0 ? (
            <div className="text-center py-5"><span className="news-events-spinner" /><p>Loading {activeTab}...</p></div>
          ) : !isLoading && filteredData.length === 0 && !error ? (
            <div className="text-center py-5"><h3 className="news-events-no-results">No {activeTab} found matching your criteria.</h3><p className="text-muted">Try adjusting your search or filters, or check back later for new content.</p></div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((item) =>
                  activeTab === 'news'
                    ? renderNewsCard(item as NewsItem)
                    : renderEventCard(item as EventItem)
                )}
              </div>
              {renderNewsPaginationControls()}
            </>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="news-events-page">
      {/* Hero Section */}
      <section className="news-events-hero-section">
        <div className="news-events-hero-slider">
          <div className="news-events-hero-fixed-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="news-events-hero-slide"
                style={{ backgroundImage: `url('${heroSlides[currentImageIndex].image}')` }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
              >
                <div className="news-events-hero-overlay"></div>
              </motion.div>
            </AnimatePresence>
            <div className="news-events-hero-content container mx-auto">
              <div className="flex items-center min-h-[120px]">
                <div className="lg:w-2/3">
                  <motion.div
                    key={`text-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="news-events-hero-text"
                  >
                    <h1 className="news-events-hero-title">{heroSlides[currentImageIndex].title}</h1>
                    <p className="news-events-hero-description">{heroSlides[currentImageIndex].description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="news-events-hero-controls">
              <span className="news-events-hero-counter">{currentImageIndex + 1}/{heroSlides.length}</span>
              <span className="news-events-hero-arrows">
                <BsChevronLeft className="news-events-hero-arrow" onClick={prevSlide} aria-label="Previous slide" tabIndex={0} role="button" />
                <BsChevronRight className="news-events-hero-arrow" onClick={nextSlide} aria-label="Next slide" tabIndex={0} role="button" />
              </span>
            </div>
            <div className="news-events-hero-indicators">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`news-events-hero-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="news-events-main-layout">
        <div className="container-fluid px-0">
          <div className="flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="news-events-main-content bg-[var(--news-neutral)] px-4 py-8 flex-1">
              {/* Intro */}
              <section className="news-events-intro-section">
                <div className="container mx-auto">
                  <div className="flex justify-center">
                    <div className="lg:w-11/12 text-center">
                      <p className="news-events-intro-text">
                        Ethiopian IT Park stands at the heart of Ethiopia's technology revolution. Through strategic initiatives, groundbreaking events, and pioneering collaborations, we foster a thriving ecosystem for startups, entrepreneurs, innovators, and global partners.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Filters */}
              <section className="news-events-filters-section sticky top-[var(--header-height)] z-50 shadow">
                <div className="container mx-auto">
                  <div className="flex flex-wrap gap-3 items-center">
                    <input
                      type="text"
                      placeholder="Search news and events..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="news-events-search-input flex-1 min-w-[180px]"
                      aria-label="Search news and events"
                    />
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className="news-events-category-select min-w-[140px]"
                      aria-label="Select category"
                      disabled={activeTab !== 'news'}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <select
                      value={selectedYear}
                      onChange={handleYearChange}
                      className="news-events-year-select min-w-[100px]"
                      aria-label="Select year"
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <div className="flex gap-2">
                      <button
                        className={`news-events-tab-button px-4 py-2 rounded-lg font-semibold ${activeTab === 'news' ? 'bg-primary-default text-white' : 'bg-white border border-primary-default text-primary-default'}`}
                        onClick={() => handleTabChange('news')}
                      >
                        News
                      </button>
                      <button
                        className={`news-events-tab-button px-4 py-2 rounded-lg font-semibold ${activeTab === 'events' ? 'bg-primary-default text-white' : 'bg-white border border-primary-default text-primary-default'}`}
                        onClick={() => handleTabChange('events')}
                      >
                        Events
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Main Content */}
              {renderMainContent()}
            </div>
            {/* Sidebar */}
            <div className="news-events-sidebar-col w-full lg:w-[370px] px-3 py-8 border-l border-gray-200">
              <aside className="news-events-sidebar">
                {/* Latest News */}
                <div className="news-events-sidebar-header">
                  <span className="news-events-sidebar-title-main">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ marginRight: 6, verticalAlign: 'middle' }}>
                      <rect width="18" height="18" rx="4" fill="#0C7C92" />
                      <path d="M7 12.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Latest News
                  </span>
                </div>
                <div className="news-events-sidebar-list">
                {isLoading && latestNews.length === 0 && !error ? (
                  <div className="text-center p-3">
                    <span className="news-events-spinner" />
                  </div>
                ) : latestNews.length > 0 ? (
                  latestNews.map(item => renderSidebarCard(item, 'news'))
                ) : !error && !isLoading ? (
                  <p className="text-muted p-2">No recent news.</p>
                ) : null}
              </div>
              {/* Upcoming Events */}
              <div className="news-events-sidebar-header mt-4">
                <span className="news-events-sidebar-title-main">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{ marginRight: 6, verticalAlign: 'middle' }}>
                    <rect width="18" height="18" rx="4" fill="#6EC9C4" />
                    <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Upcoming Events
                </span>
              </div>
              <div className="news-events-sidebar-list">
                {isLoading && latestEvents.length === 0 && !error ? (
                  <div className="text-center p-3">
                    <span className="news-events-spinner" />
                  </div>
                ) : latestEvents.length > 0 ? (
                  latestEvents
                    .filter(event => getEventStatus(event.date) === 'upcoming_or_today')
                    .map(item => renderSidebarCard(item, 'event'))
                ) : !error && !isLoading ? (
                  <p className="text-muted p-2">No upcoming events.</p>
                ) : null}
              </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
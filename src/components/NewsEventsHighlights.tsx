import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  getNews, 
  getEvents, 
  NewsItem, 
  EventItem,
  getCommentsForPost,
  calculateCommentCounts,
  Comment,
  CommentCounts
} from "../services/apiService";

// Highlight type: image can be string, string[], undefined, or null
export type Highlight = {
  id: number | string;
  title: string;
  date: string;
  image?: string | string[] | null;
  description: string;
  type: "news" | "event";
  commentCountToDisplay: number;
};

interface NewsEventsHighlightsProps {
  onShowDetail?: (item: NewsItem | EventItem) => void;
}

const PLACEHOLDER_NEWS_IMAGE = '/images/placeholder-news.jpg';
const PLACEHOLDER_EVENT_IMAGE = '/images/placeholder-event.jpg';

const NewsEventsHighlights: React.FC<NewsEventsHighlightsProps> = ({ onShowDetail }) => {
  const navigate = useNavigate();
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [allNewsItems, setAllNewsItems] = useState<NewsItem[]>([]);
  const [allEventItems, setAllEventItems] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHighlightsData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedNews = await getNews();
        const fetchedEvents = await getEvents();

        setAllNewsItems(fetchedNews);
        setAllEventItems(fetchedEvents);

        const sortedNews = [...fetchedNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const sortedEvents = [...fetchedEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        const newsHighlightsPromises = sortedNews.slice(0, 2).map(async (newsItem): Promise<Highlight> => {
          let approvedComments = 0;
          try {
            const allCommentsForPost: Comment[] = await getCommentsForPost(newsItem.id);
            const counts: CommentCounts = calculateCommentCounts(allCommentsForPost);
            approvedComments = counts.approvedComments;
          } catch (commentError) {
            console.warn(`NewsEventsHighlights: Failed to fetch/process comments for news item ${newsItem.id}:`, commentError);
            approvedComments = newsItem.comments ?? 0;
          }
          return {
            id: newsItem.id,
            title: newsItem.title,
            date: newsItem.date,
            image: newsItem.image ?? null,
            description: newsItem.description,
            type: "news" as const,
            commentCountToDisplay: approvedComments,
          };
        });

        const eventHighlightsProcessed = sortedEvents.slice(0, 1).map((eventItem): Highlight => ({
          id: eventItem.id,
          title: eventItem.title,
          date: eventItem.date,
          image: eventItem.image ?? null,
          description: eventItem.description,
          type: "event" as const,
          commentCountToDisplay: eventItem.comments ?? 0,
        }));

        const resolvedNewsHighlights = await Promise.all(newsHighlightsPromises);

        const newHighlights: Highlight[] = [
          ...resolvedNewsHighlights,
          ...eventHighlightsProcessed,
        ];
        setHighlights(newHighlights);

      } catch (err) {
        console.error("Failed to fetch news/events highlights:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHighlightsData();
  }, []);

  // Always return a string for image src
  const getImageUrl = (image: string | string[] | undefined | null, type: "news" | "event"): string => {
    if (Array.isArray(image)) {
      return image.length > 0 ? image[0] : (type === "news" ? PLACEHOLDER_NEWS_IMAGE : PLACEHOLDER_EVENT_IMAGE);
    }
    if (typeof image === "string" && image.trim() !== "") {
      return image;
    }
    return type === "news" ? PLACEHOLDER_NEWS_IMAGE : PLACEHOLDER_EVENT_IMAGE;
  };

  // Map highlight to the actual NewsItem or EventItem from the data arrays
  const getNewsOrEventByHighlight = (item: Highlight): NewsItem | EventItem | undefined => {
    if (item.type === "news") {
      return allNewsItems.find(n => n.id === item.id);
    } else {
      return allEventItems.find(e => e.id === item.id);
    }
  };

  // Go to detail and scroll to footer
  const goToDetail = (item: Highlight) => {
    const dataItem = getNewsOrEventByHighlight(item);
    if (onShowDetail && dataItem) {
      onShowDetail(dataItem);
      setTimeout(() => {
        const el = document.getElementById("footer");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(`/resources/digital/news/${item.type === "news" ? "news" : "events"}/${item.id}#footer`);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p>Loading highlights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600">
        <p>Failed to load highlights: {error}</p>
      </div>
    );
  }

  if (highlights.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No news or events highlights available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {highlights.map((item) => (
        <div
          key={item.id.toString()} 
          className="bg-white rounded-xl shadow-card border border-gray-100 hover:shadow-2xl transition group overflow-hidden flex flex-col"
          onClick={() => goToDetail(item)}
          style={{ cursor: "pointer" }}
        >
          <div className="w-full h-48 overflow-hidden">
            <img
              src={getImageUrl(item.image, item.type)}
              alt={item.title.replace(/<[^>]*>?/gm, '')}
              className="w-full h-full object-cover group-hover:scale-105 transition"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = item.type === 'news' ? PLACEHOLDER_NEWS_IMAGE : PLACEHOLDER_EVENT_IMAGE;
              }}
            />
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.type === "news" ? "bg-primary-default/10 text-primary-default" : "bg-primary-light/10 text-primary-light"}`}>
                {item.type === "news" ? "News" : "Event"}
              </span>
              <span className="text-xs text-gray-400">
                {new Date(item.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </div>
            <h3 
              className="font-semibold text-lg text-primary-dark mb-1 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <p 
              className="text-sm text-gray-600 mb-3 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
            <div className="flex items-center justify-between mt-auto">
              <button
                className="text-primary-default text-sm font-medium hover:underline transition bg-transparent border-none p-0"
                style={{ cursor: "pointer" }}
                onClick={e => {
                  e.stopPropagation(); 
                  goToDetail(item);
                }}
              >
                Read More &raquo;
              </button>
              <span className="flex items-center gap-1 text-xs text-gray-400" title={item.type === 'news' ? "Approved Comments" : "Comments"}>
                <svg width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 20 20"><path d="M10 18c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7zm0-1.5c-3.314 0-6-2.239-6-5.5s2.686-5.5 6-5.5 6 2.239 6 5.5-2.686 5.5-6 5.5zm0-7.5a2 2 0 110 4 2 2 0 010-4z"/></svg>
                {item.commentCountToDisplay} Comments 
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsEventsHighlights;
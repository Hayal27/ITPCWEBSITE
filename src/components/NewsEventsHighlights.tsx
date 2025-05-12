import React from "react";
import { useNavigate } from "react-router-dom";
import { newsData, eventsData, NewsItem, EventItem } from "../pages/NewsEvents/NewsEvents";

// Generate highlights from the same data as NewsEvents page
const highlights = [
  ...newsData.slice(0, 2).map(item => ({
    id: item.id,
    title: item.title,
    date: item.date,
    image: item.image,
    description: item.description,
    type: "news" as const,
    comments: item.comments ?? 0,
  })),
  ...eventsData.slice(0, 1).map(item => ({
    id: item.id,
    title: item.title,
    date: item.date,
    image: item.image,
    description: item.description,
    type: "event" as const,
    comments: item.comments ?? 0,
  })),
];

export type Highlight = {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  type: "news" | "event";
  comments: number;
};

interface NewsEventsHighlightsProps {
  onShowDetail?: (item: NewsItem | EventItem) => void;
}

// Map highlight to the actual NewsItem or EventItem from the data arrays
function getNewsOrEventByHighlight(item: Highlight): NewsItem | EventItem | undefined {
  if (item.type === "news") {
    return newsData.find(n => n.id === item.id);
  } else {
    return eventsData.find(e => e.id === item.id);
  }
}

const NewsEventsHighlights: React.FC<NewsEventsHighlightsProps> = ({ onShowDetail }) => {
  const navigate = useNavigate();

  // Go to the correct News/Events detail page and scroll to detail section
  const goToDetail = (item: Highlight) => {
    const dataItem = getNewsOrEventByHighlight(item);
    if (onShowDetail && dataItem) {
      onShowDetail(dataItem);
      setTimeout(() => {
        const el = document.getElementById("news-events-detail");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(`/resources/digital/news/${item.type === "news" ? "news" : "events"}/${item.id}`);
      setTimeout(() => {
        const el = document.getElementById("news-events-detail");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400); // delay for navigation/render
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {highlights.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-card border border-gray-100 hover:shadow-2xl transition group overflow-hidden flex flex-col"
          onClick={() => goToDetail(item)}
          style={{ cursor: "pointer" }}
        >
          <div className="h-48 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full group-hover:scale-105 transition"
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
            <h3 className="font-semibold text-lg text-primary-dark mb-1 line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.description}</p>
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
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <svg width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 20 20"><path d="M10 18c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7zm0-1.5c-3.314 0-6-2.239-6-5.5s2.686-5.5 6-5.5 6 2.239 6 5.5-2.686 5.5-6 5.5zm0-7.5a2 2 0 110 4 2 2 0 010-4z"/></svg>
                {item.comments} Comments
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsEventsHighlights;
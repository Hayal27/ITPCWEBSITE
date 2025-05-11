import React from "react";

// Realistic, LinkedIn-style highlights (replace with real data or props)
const highlights = [
  {
    id: 1,
    title: "Ethiopian IT Park Expansion 2025",
    date: "2024-04-15",
    image: "/images/news/expansion.jpg",
    description: "Major expansion plans to accommodate growing tech ecosystem and international partnerships.",
    type: "news",
    comments: 12,
  },
  {
    id: 2,
    title: "Tech Innovation Summit 2024",
    date: "2024-06-15",
    image: "/images/events/summit.jpg",
    description: "Join us for the annual Tech Innovation Summit featuring global tech leaders and local innovators.",
    type: "event",
    comments: 23,
  },
  {
    id: 3,
    title: "New Innovation Hub Launch",
    date: "2024-04-10",
    image: "/images/news/innovation-hub.jpg",
    description: "State-of-the-art innovation hub opens its doors to startups and tech entrepreneurs.",
    type: "news",
    comments: 5,
  },
];

const NewsEventsHighlights: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {highlights.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-card border border-gray-100 hover:shadow-2xl transition group overflow-hidden flex flex-col"
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
            <a
              href={`/news-events#${item.id}`}
              className="text-primary-default text-sm font-medium hover:underline transition"
            >
              Read More &raquo;
            </a>
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

export default NewsEventsHighlights;
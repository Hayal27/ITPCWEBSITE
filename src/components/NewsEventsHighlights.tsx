import React from "react";

// Example highlights (replace with real data or props)
const highlights = [
  {
    id: 1,
    title: "Ethiopian IT Park Expansion 2025",
    date: "2024-04-15",
    image: "/images/news/expansion.jpg",
    description: "Major expansion plans to accommodate growing tech ecosystem and international partnerships.",
    type: "news",
  },
  {
    id: 2,
    title: "Tech Innovation Summit 2024",
    date: "2024-06-15",
    image: "/images/events/summit.jpg",
    description: "Join us for the annual Tech Innovation Summit featuring global tech leaders and local innovators.",
    type: "event",
  },
  {
    id: 3,
    title: "New Innovation Hub Launch",
    date: "2024-04-10",
    image: "/images/news/innovation-hub.jpg",
    description: "State-of-the-art innovation hub opens its doors to startups and tech entrepreneurs.",
    type: "news",
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
          <span className="text-xs uppercase tracking-wider text-primary-default font-bold mb-2">
            {item.type === "news" ? "News" : "Event"}
          </span>
          <h3 className="font-semibold text-lg text-primary-dark mb-2 line-clamp-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>
          <span className="text-xs text-gray-400 mt-auto">{new Date(item.date).toLocaleDateString()}</span>
        </div>
      </div>
    ))}
  </div>
);

export default NewsEventsHighlights;
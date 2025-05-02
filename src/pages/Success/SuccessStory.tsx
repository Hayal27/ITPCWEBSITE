import React, { useState } from "react";
import "./SuccessStory.css";

// --- Mock Data ---
const SECTORS = ["All", "ICT", "HealthTech", "AgriTech", "FinTech", "EdTech"];
const PROGRAMS = ["All", "Incubation", "Acceleration", "Partnerships"];
const YEARS = ["All", "2025", "2024", "2023", "2022"];
const STAGES = ["All", "Idea", "Growth", "Scale-Up"];
const LOCATIONS = ["All", "Addis Ababa", "Hawassa", "Bahir Dar", "Dire Dawa"];

const STORIES = [
  {
    id: 1,
    name: "Zentech",
    logo: "https://dummyimage.com/60x60/0C7C92/fff&text=Z",
    photo: "https://dummyimage.com/400x250/6EC9C4/16284F&text=Zentech+Team",
    industry: "FinTech",
    summary: "From Garage to Global: How Zentech scaled from Ethiopian IT Park.",
    year: "2024",
    stage: "Scale-Up",
    location: "Addis Ababa",
    program: "Acceleration",
    founder: "Abel Tesfaye",
    detail: {
      challenge: "Limited access to financial infrastructure.",
      idea: "Digital wallets for micro-businesses.",
      support: "Incubation, funding, and mentorship at Ethiopian IT Park.",
      growth: "Expanded to 5 countries, 1M+ users, $3M revenue.",
      next: "AI-driven lending platform.",
      quote: "The Park’s mentorship and network made global growth possible.",
      media: "https://dummyimage.com/600x300/0C7C92/fff&text=Award+Ceremony",
      partners: ["TechAfrica", "BlueLake Ventures"],
      website: "https://zentech.et",
    },
  },
  {
    id: 2,
    name: "MedNet",
    logo: "https://dummyimage.com/60x60/16284F/fff&text=M",
    photo: "https://dummyimage.com/400x250/0C7C92/6EC9C4&text=MedNet+Team",
    industry: "HealthTech",
    summary: "Bridging the Health Gap: MedNet’s Life-Saving Platform.",
    year: "2023",
    stage: "Growth",
    location: "Hawassa",
    program: "Incubation",
    founder: "Selamawit Girma",
    detail: {
      challenge: "Rural healthcare access.",
      idea: "Telemedicine for remote communities.",
      support: "Seed funding, office space, and clinical partnerships.",
      growth: "Serving 100k+ patients, 20 hospitals onboarded.",
      next: "Mobile clinics and AI diagnosis.",
      quote: "We saved lives thanks to the Park’s support.",
      media: "https://dummyimage.com/600x300/6EC9C4/fff&text=Clinic+Launch",
      partners: ["Health4All", "UNDP"],
      website: "https://mednet.et",
    },
  },
  {
    id: 3,
    name: "Code Girls Ethiopia",
    logo: "https://dummyimage.com/60x60/6EC9C4/fff&text=CGE",
    photo: "https://dummyimage.com/400x250/f4f4f4/0C7C92&text=Code+Girls",
    industry: "EdTech",
    summary: "Empowering Women in Tech from Day One.",
    year: "2025",
    stage: "Idea",
    location: "Addis Ababa",
    program: "Partnerships",
    founder: "Liya Mekonnen",
    detail: {
      challenge: "Low female participation in tech.",
      idea: "Coding bootcamps for girls.",
      support: "Mentorship, funding, and outreach from the Park.",
      growth: "Trained 2,000+ girls, 35% job placement.",
      next: "National expansion and scholarships.",
      quote: "The Park turned our vision into reality.",
      media: "https://dummyimage.com/600x300/16284F/fff&text=Bootcamp",
      partners: ["GirlsInTech", "SheCodes"],
      website: "https://codegirls.et",
    },
  },
  {
    id: 4,
    name: "AgriCloud",
    logo: "https://dummyimage.com/60x60/f4f4f4/0C7C92&text=A",
    photo: "https://dummyimage.com/400x250/16284F/6EC9C4&text=AgriCloud",
    industry: "AgriTech",
    summary: "Reaching Farmers with AgriCloud – A Startup Born in the Park.",
    year: "2022",
    stage: "Growth",
    location: "Bahir Dar",
    program: "Incubation",
    founder: "Daniel Kebede",
    detail: {
      challenge: "Fragmented market info for farmers.",
      idea: "Mobile app for real-time prices & advice.",
      support: "Technical support and market access.",
      growth: "50k+ farmers, 12 regions covered.",
      next: "IoT integration for smart farming.",
      quote: "Our impact grew with the Park’s ecosystem.",
      media: "https://dummyimage.com/600x300/0C7C92/fff&text=Farmer+Training",
      partners: ["AgriFuture", "World Bank"],
      website: "https://agricloud.et",
    },
  },
];

const TESTIMONIALS = [
  {
    name: "Liya Mekonnen",
    title: "Co-Founder, EduLink",
    quote:
      "Ethiopian IT Park was the launchpad that brought our vision to life. The infrastructure and mentorship transformed our startup.",
    photo: "https://dummyimage.com/80x80/0C7C92/fff&text=LM",
    video: "",
  },
  {
    name: "Abel Tesfaye",
    title: "CEO, Zentech",
    quote:
      "The Park’s global network and support made it possible for us to scale internationally.",
    photo: "https://dummyimage.com/80x80/6EC9C4/fff&text=AT",
    video: "",
  },
  {
    name: "Selamawit Girma",
    title: "Founder, MedNet",
    quote:
      "We saved lives thanks to the Park’s support and partnerships.",
    photo: "https://dummyimage.com/80x80/16284F/fff&text=SG",
    video: "",
  },
];

const IMPACT_STATS = [
  { label: "Startups Supported", value: "200+" },
  { label: "Jobs Created", value: "8,000+" },
  { label: "Female Founders Featured", value: "35%" },
  { label: "Regional Coverage", value: "12 Cities" },
  { label: "Funds Raised", value: "$12 Million" },
  { label: "Product Launches", value: "350+" },
];

// --- Component ---
const SuccessStory: React.FC = () => {
  // Filter state
  const [sector, setSector] = useState("All");
  const [program, setProgram] = useState("All");
  const [year, setYear] = useState("All");
  const [stage, setStage] = useState("All");
  const [location, setLocation] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedStory, setSelectedStory] = useState<typeof STORIES[0] | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Filtering logic
  const filteredStories = STORIES.filter((story) => {
    return (
      (sector === "All" || story.industry === sector) &&
      (program === "All" || story.program === program) &&
      (year === "All" || story.year === year) &&
      (stage === "All" || story.stage === stage) &&
      (location === "All" || story.location === location) &&
      (search === "" ||
        story.name.toLowerCase().includes(search.toLowerCase()) ||
        story.summary.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Carousel logic
  const nextTestimonial = () =>
    setTestimonialIdx((idx) => (idx + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setTestimonialIdx((idx) =>
      idx === 0 ? TESTIMONIALS.length - 1 : idx - 1
    );

  return (
    <div className="ssp-root">
      {/* HERO */}
      <section className="ssp-hero">
        <div className="ssp-hero__bg">
          <video
            className="ssp-hero__video"
            autoPlay
            muted
            loop
            poster="https://dummyimage.com/1200x400/0C7C92/fff&text=IT+Park"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="ssp-hero__content">
          <h1 className="ssp-hero__headline">
            Transforming Ideas into Impactful Innovations
          </h1>
          <p className="ssp-hero__subheadline">
            Discover how Ethiopian IT Park empowers startups, tech firms, and visionaries to succeed and scale across Africa and beyond.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="ssp-filters">
        <input
          className="ssp-filters__search"
          type="search"
          placeholder="Search stories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search success stories"
        />
        <select className="ssp-filters__select" value={sector} onChange={e => setSector(e.target.value)}>
          {SECTORS.map(s => <option key={s}>{s}</option>)}
        </select>
        <select className="ssp-filters__select" value={program} onChange={e => setProgram(e.target.value)}>
          {PROGRAMS.map(p => <option key={p}>{p}</option>)}
        </select>
        <select className="ssp-filters__select" value={year} onChange={e => setYear(e.target.value)}>
          {YEARS.map(y => <option key={y}>{y}</option>)}
        </select>
        <select className="ssp-filters__select" value={stage} onChange={e => setStage(e.target.value)}>
          {STAGES.map(s => <option key={s}>{s}</option>)}
        </select>
        <select className="ssp-filters__select" value={location} onChange={e => setLocation(e.target.value)}>
          {LOCATIONS.map(l => <option key={l}>{l}</option>)}
        </select>
      </section>

      {/* STORIES GRID */}
      <section className="ssp-stories">
        {filteredStories.length === 0 && (
          <div className="ssp-stories__empty">
            No stories found. Try adjusting your filters.
          </div>
        )}
        <div className="ssp-stories__grid">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="ssp-story-card"
              tabIndex={0}
              role="button"
              aria-label={`Read more about ${story.name}`}
              onClick={() => setSelectedStory(story)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedStory(story);
              }}
            >
              <div className="ssp-story-card__photo">
                <img src={story.photo} alt={`${story.name} team`} />
                <img
                  className="ssp-story-card__logo"
                  src={story.logo}
                  alt={`${story.name} logo`}
                />
              </div>
              <div className="ssp-story-card__content">
                <h3 className="ssp-story-card__title">{story.name}</h3>
                <div className="ssp-story-card__industry">{story.industry}</div>
                <p className="ssp-story-card__summary">{story.summary}</p>
                <div className="ssp-story-card__meta">
                  <span>{story.location}</span>
                  <span>{story.year}</span>
                  <span>{story.stage}</span>
                  <span>{story.program}</span>
                </div>
                <button className="ssp-story-card__cta">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY DETAIL MODAL */}
      {selectedStory && (
        <div
          className="ssp-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedStory.name} details`}
          tabIndex={-1}
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="ssp-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ssp-modal__close"
              onClick={() => setSelectedStory(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="ssp-modal__banner">
              <img src={selectedStory.detail.media} alt="Story media" />
              <img
                className="ssp-modal__logo"
                src={selectedStory.logo}
                alt={`${selectedStory.name} logo`}
              />
            </div>
            <div className="ssp-modal__body">
              <h2>{selectedStory.name}</h2>
              <div className="ssp-modal__meta">
                <span>{selectedStory.industry}</span>
                <span>{selectedStory.location}</span>
                <span>{selectedStory.year}</span>
                <span>{selectedStory.stage}</span>
                <span>{selectedStory.program}</span>
              </div>
              <div className="ssp-modal__sections">
                <section>
                  <h4>The Challenge</h4>
                  <p>{selectedStory.detail.challenge}</p>
                </section>
                <section>
                  <h4>The Idea</h4>
                  <p>{selectedStory.detail.idea}</p>
                </section>
                <section>
                  <h4>Support from Ethiopian IT Park</h4>
                  <p>{selectedStory.detail.support}</p>
                </section>
                <section>
                  <h4>Growth & Milestones</h4>
                  <p>{selectedStory.detail.growth}</p>
                </section>
                <section>
                  <h4>What’s Next</h4>
                  <p>{selectedStory.detail.next}</p>
                </section>
                <section className="ssp-modal__quote">
                  <blockquote>
                    “{selectedStory.detail.quote}”
                  </blockquote>
                  <cite>— {selectedStory.founder}</cite>
                </section>
                <section>
                  <h4>Partners</h4>
                  <div className="ssp-modal__partners">
                    {selectedStory.detail.partners.map((p) => (
                      <span key={p} className="ssp-modal__partner">
                        {p}
                      </span>
                    ))}
                  </div>
                </section>
                <section>
                  <a
                    href={selectedStory.detail.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ssp-modal__website"
                  >
                    Visit Website
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TESTIMONIAL CAROUSEL */}
      <section className="ssp-testimonials">
        <h2 className="ssp-testimonials__headline">Spotlight: What Founders Say</h2>
        <div className="ssp-testimonials__carousel">
          <button
            className="ssp-testimonials__arrow"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <div className="ssp-testimonials__item">
            <img
              src={TESTIMONIALS[testimonialIdx].photo}
              alt={TESTIMONIALS[testimonialIdx].name}
              className="ssp-testimonials__photo"
            />
            <blockquote className="ssp-testimonials__quote">
              “{TESTIMONIALS[testimonialIdx].quote}”
            </blockquote>
            <div className="ssp-testimonials__author">
              <span>{TESTIMONIALS[testimonialIdx].name}</span>
              <span>{TESTIMONIALS[testimonialIdx].title}</span>
            </div>
          </div>
          <button
            className="ssp-testimonials__arrow"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </section>

      {/* IMPACT INFOGRAPHIC */}
      <section className="ssp-impact">
        <h2 className="ssp-impact__headline">Impact by Numbers</h2>
        <div className="ssp-impact__stats">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.label} className="ssp-impact__stat">
              <span className="ssp-impact__value">{stat.value}</span>
              <span className="ssp-impact__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SUBMISSION CTA */}
      <section className="ssp-cta">
        <h2 className="ssp-cta__headline">Be the Next Story</h2>
        <p className="ssp-cta__desc">
          Share your journey and inspire the next generation of innovators. Submit your success story, request a spotlight interview, or nominate a company for recognition.
        </p>
        <form className="ssp-cta__form" onSubmit={e => { e.preventDefault(); alert('Thank you for your submission!'); }}>
          <input className="ssp-cta__input" type="text" placeholder="Your Name / Company" required />
          <input className="ssp-cta__input" type="email" placeholder="Your Email" required />
          <textarea className="ssp-cta__input" placeholder="Share your story or nominate someone..." required />
          <button className="ssp-cta__submit" type="submit">Submit Story</button>
        </form>
      </section>
    </div>
  );
};

export default SuccessStory;
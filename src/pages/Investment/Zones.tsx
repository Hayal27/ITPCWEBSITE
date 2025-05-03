import React, { JSX, useState } from "react";
import "./Zones.css";
import {
  IconHeadphones,
  IconFlask,
  IconCode,
  IconCpu,
  IconBook,
  IconDeviceDesktopAnalytics
} from "@tabler/icons-react";

// --- Type for all possible zone names ---
type ZoneName =
  | "BPO Zone"
  | "Innovation & Research Zone"
  | "Software Development Zone"
  | "Digital Mining Zone"
  | "Training & Skills Zone"
  | "IoT & Hardware Zone";

// --- Icon mapping for each zone (type-safe) ---
const ICON_MAP: Record<ZoneName, JSX.Element> = {
  "BPO Zone": <IconHeadphones size={32} color="#fff" stroke={2.2} />,
  "Innovation & Research Zone": <IconFlask size={32} color="#fff" stroke={2.2} />,
  "Software Development Zone": <IconCode size={32} color="#fff" stroke={2.2} />,
  "Digital Mining Zone": <IconCpu size={32} color="#fff" stroke={2.2} />,
  "Training & Skills Zone": <IconBook size={32} color="#fff" stroke={2.2} />,
  "IoT & Hardware Zone": <IconDeviceDesktopAnalytics size={32} color="#fff" stroke={2.2} />
};

// --- Data for Zones ---
const ZONES: {
  name: ZoneName;
  color: string;
  images: string[];
  summary: string;
  details: {
    purpose: string;
    features: string[];
    tenants: string;
  };
}[] = [
  {
    name: "BPO Zone",
    color: "#0C7C92",
    images: [
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Plug-and-play office spaces, global connectivity, and secure hosting for world-class BPO operations.",
    details: {
      purpose: "To host customer service, telemarketing, helpdesk, and back-office support operations targeting global clients.",
      features: [
        "Soundproofed office pods",
        "High-speed fiber internet",
        "International bandwidth & VOIP",
        "Power backup & 24/7 access",
        "Shared HR/recruitment pool"
      ],
      tenants: "Call centers, international BPOs, customer service providers, outsourcing firms."
    }
  },
  {
    name: "Innovation & Research Zone",
    color: "#6EC9C4",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Labs, partnerships, and funding for R&D centers, innovation hubs, and university collaborations.",
    details: {
      purpose: "To accelerate innovation through access to labs, partnerships, and funding.",
      features: [
        "Innovation labs",
        "Research facilities with academic access",
        "Hackathon halls and event venues",
        "IP registration support"
      ],
      tenants: "R&D centers, universities, health/Agri/FinTech startups, innovation hubs."
    }
  },
  {
    name: "Software Development Zone",
    color: "#16284F",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Flexible offices, dev servers, and design labs for product teams and SaaS companies.",
    details: {
      purpose: "A vibrant ecosystem for software engineering teams to build, scale, and ship products.",
      features: [
        "Flexible co-working and team offices",
        "Private dev servers & cloud integration",
        "Version control & code management spaces",
        "UI/UX and design labs"
      ],
      tenants: "Dev studios, SaaS companies, FinTech, digital startups."
    }
  },
  {
    name: "Digital Mining Zone",
    color: "#0C7C92",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Licensed, energy-efficient environments for blockchain and crypto mining operations.",
    details: {
      purpose: "Designed for blockchain companies and crypto mining farms.",
      features: [
        "High-power capacity with cooling",
        "Energy-efficient architecture",
        "Licensed mining environments",
        "Secured and regulated operation zones"
      ],
      tenants: "Crypto miners, blockchain infra providers, data farms."
    }
  },
  {
    name: "Training & Skills Zone",
    color: "#6EC9C4",
    images: [
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Classrooms, online tools, and internship pipelines for digital universities and academies.",
    details: {
      purpose: "To host academic institutions and coding academies for the next-gen digital workforce.",
      features: [
        "Classrooms and lecture halls",
        "Online/offline training tools",
        "Examination servers and LMS hosting",
        "Internships pipeline with Park companies"
      ],
      tenants: "EdTech platforms, digital universities, tech bootcamps."
    }
  },
  {
    name: "IoT & Hardware Zone",
    color: "#16284F",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    ],
    summary: "Smart device testing, embedded systems, and electronics startups find a home here.",
    details: {
      purpose: "For smart device testing, embedded systems, and electronics startups.",
      features: [
        "Device labs and testing benches",
        "Electronics prototyping facilities",
        "IoT network infrastructure",
        "Hardware accelerator support"
      ],
      tenants: "IoT startups, embedded systems, hardware innovators."
    }
  }
];

// --- Success Stories ---
const STORIES = [
  {
    logo: "https://dummyimage.com/60x60/0C7C92/fff&text=BPO",
    name: "EthioCall Solutions",
    story: "Scaled from 20 to 300+ agents, serving global telecoms from the BPO Zone.",
    founder: "Sara Tadesse",
    metric: "Created 300+ jobs"
  },
  {
    logo: "https://dummyimage.com/60x60/6EC9C4/fff&text=MIN",
    name: "BlockMine Africa",
    story: "Achieved 99.9% uptime and lowest energy cost per hash in the Digital Mining Zone.",
    founder: "Yohannes Asfaw",
    metric: "1000+ mining rigs"
  },
  {
    logo: "https://dummyimage.com/60x60/16284F/fff&text=DEV",
    name: "NileSoft",
    story: "Launched a fintech SaaS platform now used in 5 countries.",
    founder: "Lidya Mekonnen",
    metric: "Serving 50,000+ users"
  }
];

// --- Benefits Table ---
type BenefitRow = {
  zone: string;
  power: boolean;
  conn: boolean;
  res: boolean;
  inc: boolean | string;
  collab: string;
};
const BENEFITS: BenefitRow[] = [
  { zone: "BPO", power: true, conn: true, res: true, inc: true, collab: "Medium" },
  { zone: "R&D", power: true, conn: true, res: true, inc: true, collab: "High" },
  { zone: "Software", power: true, conn: true, res: true, inc: true, collab: "High" },
  { zone: "Mining", power: true, conn: true, res: false, inc: true, collab: "Low" },
  { zone: "Training", power: true, conn: true, res: true, inc: "Medium", collab: "High" }
];

// --- Zone Color Map ---
const ZONE_COLORS: Record<string, string> = {
  BPO: "#0C7C92",
  "R&D": "#6EC9C4",
  Software: "#16284F",
  Mining: "#0C7C92",
  Training: "#6EC9C4"
};
const getZoneColor = (zone: string) => ZONE_COLORS[zone] || "#0C7C92";

// --- Gallery Images ---
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
];

// --- Interactive Map Data (example) ---
const MAP_ZONES: {
  name: ZoneName;
  left: string;
  top: string;
  color: string;
  icon: JSX.Element;
}[] = [
  { name: "BPO Zone", left: "15%", top: "35%", color: "#0C7C92", icon: <IconHeadphones size={22} color="#fff" stroke={2} /> },
  { name: "Innovation & Research Zone", left: "40%", top: "20%", color: "#6EC9C4", icon: <IconFlask size={22} color="#fff" stroke={2} /> },
  { name: "Software Development Zone", left: "60%", top: "38%", color: "#16284F", icon: <IconCode size={22} color="#fff" stroke={2} /> },
  { name: "Digital Mining Zone", left: "25%", top: "70%", color: "#0C7C92", icon: <IconCpu size={22} color="#fff" stroke={2} /> },
  { name: "Training & Skills Zone", left: "75%", top: "65%", color: "#6EC9C4", icon: <IconBook size={22} color="#fff" stroke={2} /> },
  { name: "IoT & Hardware Zone", left: "55%", top: "60%", color: "#16284F", icon: <IconDeviceDesktopAnalytics size={22} color="#fff" stroke={2} /> }
];

const Zones: React.FC = () => {
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const [mapActive, setMapActive] = useState<number | null>(null);
  const [galleryActive, setGalleryActive] = useState<number | null>(null);

  return (
    <div className="zone-root">
      {/* HERO */}
      <section className="zone-hero zone-full-bleed">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Ethiopian IT Park Hero"
          className="zone-hero__img"
        />
        <div className="zone-hero__overlay">
          <h1 className="zone-hero__title">
            Explore Our Sector-Specific Zones — Tailored for Growth
          </h1>
          <p className="zone-hero__subtitle">
            Ethiopian IT Park features specialized zones for different tech and innovation sectors, with the right environment, infrastructure, and support.
          </p>
          <div className="zone-hero__cta">
            <button className="zone-btn zone-btn--primary">🔍 Browse Available Zones</button>
            <button className="zone-btn zone-btn--secondary">📥 Download Zone Guide</button>
            <button className="zone-btn zone-btn--accent">🏢 Apply for a Space</button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="zone-intro">
        <h2 className="zone-section-title">Why Zone-Based Development?</h2>
        <p>
          To foster sectoral excellence and efficient clustering, Ethiopian IT Park is divided into specialized zones — each tailored with appropriate infrastructure, talent, and policy support for its unique function. Whether you’re a startup, BPO provider, researcher, or enterprise, there’s a zone built for you.
        </p>
      </section>

      {/* INTERACTIVE MAP */}
      <section className="zone-map-section">
        <h2 className="zone-section-title">Interactive Park Map</h2>
        <div className="zone-map__container">
          <img src="https://dummyimage.com/800x400/cccccc/222&text=IT+Park+Map" alt="IT Park Map" className="zone-map__image" />
          {MAP_ZONES.map((zone, idx) => (
            <button
              key={zone.name}
              className={`zone-map__marker${mapActive === idx ? " active" : ""}`}
              style={{ left: zone.left, top: zone.top, background: zone.color }}
              onClick={() => setMapActive(mapActive === idx ? null : idx)}
              aria-label={zone.name}
            >
              <span className="zone-map__icon">{zone.icon}</span>
            </button>
          ))}
          {mapActive !== null && (
            <div className="zone-map__info" style={{
              left: MAP_ZONES[mapActive].left,
              top: `calc(${MAP_ZONES[mapActive].top} + 4%)`
            }}>
              <h4>{MAP_ZONES[mapActive].name}</h4>
              <div>
                {ZONES[mapActive].images &&
                  <div className="zone-map__images">
                    {ZONES[mapActive].images.map((img, i) =>
                      <img key={i} src={img} alt="" className="zone-map__thumb" />
                    )}
                  </div>
                }
                <p>{ZONES[mapActive].summary}</p>
              </div>
              <button className="zone-map__close" onClick={() => setMapActive(null)}>✕</button>
            </div>
          )}
        </div>
        <p className="zone-map__note">Click a zone icon to view images and info.</p>
      </section>

      {/* ZONES OVERVIEW */}
      <section className="zone-overview">
        <h2 className="zone-section-title">Our Strategic Investment Zones</h2>
        <div className="zone-overview__grid">
          {ZONES.map((zone, idx) => (
            <div
              className={`zone-card${activeZone === idx ? " zone-card--active" : ""}`}
              key={zone.name}
              style={{ borderColor: zone.color }}
              onClick={() => setActiveZone(activeZone === idx ? null : idx)}
            >
              <div className="zone-card__icon" style={{ background: zone.color }}>
                {ICON_MAP[zone.name]}
              </div>
              <img src={zone.images[0]} alt={zone.name + " image"} className="zone-card__img" />
              <h3>{zone.name}</h3>
              <p>{zone.summary}</p>
              {/* Mini gallery for each zone */}
              <div className="zone-card__gallery">
                {zone.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="zone-card__thumb"
                    onClick={e => { e.stopPropagation(); setGalleryActive(idx * 10 + i); }}
                  />
                ))}
              </div>
              <button className="zone-card__details">
                {activeZone === idx ? "Hide Details ▲" : "Details ➜"}
              </button>
              <div className={`zone-card__expand${activeZone === idx ? " zone-card__expand--open" : ""}`}>
                {activeZone === idx && (
                  <div>
                    <div className="zone-card__section">
                      <b>Purpose:</b> <span>{zone.details.purpose}</span>
                    </div>
                    <div className="zone-card__section">
                      <b>Key Features:</b>
                      <ul>
                        {zone.details.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                    <div className="zone-card__section">
                      <b>Ideal Tenants:</b> <span>{zone.details.tenants}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="zone-success">
        <h2 className="zone-section-title">Zone Success Stories</h2>
        <div className="zone-success__grid">
          {STORIES.map((story, idx) => (
            <div className="zone-success__card" key={idx}>
              <img src={story.logo} alt={story.name + " Logo"} className="zone-success__logo" />
              <h4>{story.name}</h4>
              <blockquote>“{story.story}”</blockquote>
              <div className="zone-success__meta">
                <span>{story.founder}</span> | <span>{story.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS TABLE */}
      <section className="zone-benefits">
        <h2 className="zone-section-title">Zone Benefits & Facilities Comparison</h2>
        <div className="zone-benefits__table-wrap">
          <table className="zone-benefits__table">
            <thead>
              <tr>
                <th>Zone</th>
                <th>Power Access</th>
                <th>Connectivity</th>
                <th>Residency Help</th>
                <th>Incentives</th>
                <th>Collaboration</th>
              </tr>
            </thead>
            <tbody>
              {BENEFITS.map((b, idx) => (
                <tr key={idx} style={{ background: getZoneColor(b.zone) + "11" }}>
                  <td style={{ color: getZoneColor(b.zone) }}>{b.zone}</td>
                  <td>{b.power ? "✅" : "❌"}</td>
                  <td>{b.conn ? "✅" : "❌"}</td>
                  <td>{b.res ? "✅" : "❌"}</td>
                  <td>
                    {typeof b.inc === "boolean"
                      ? b.inc
                        ? "✅"
                        : "❌"
                      : b.inc}
                  </td>
                  <td>{b.collab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="zone-gallery">
        <h2 className="zone-section-title">Virtual Park Gallery</h2>
        <div className="zone-gallery__grid">
          {GALLERY_IMAGES.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="zone-gallery__img"
              onClick={() => setGalleryActive(100 + i)}
            />
          ))}
        </div>
        <p className="zone-gallery__note">Click any image to enlarge.</p>
      </section>

      {/* Lightbox for gallery/zone images */}
      {galleryActive !== null && (
        <div className="zone-lightbox" onClick={() => setGalleryActive(null)}>
          <img
            src={
              galleryActive < 100
                ? ZONES[Math.floor(galleryActive / 10)].images[galleryActive % 10]
                : GALLERY_IMAGES[galleryActive - 100]
            }
            alt=""
            className="zone-lightbox__img"
          />
          <button className="zone-lightbox__close" onClick={() => setGalleryActive(null)}>✕</button>
        </div>
      )}

      {/* CTA */}
      <section className="zone-cta zone-full-bleed">
        <h2 className="zone-cta__headline">Choose Your Zone, Grow Your Vision</h2>
        <div className="zone-cta__actions">
          <button className="zone-btn zone-btn--primary">🏢 Apply for a Unit in a Zone</button>
          <button className="zone-btn zone-btn--secondary">📥 Download Zone Application Guide</button>
          <button className="zone-btn zone-btn--accent">📞 Book a Consultation with Zone Admin</button>
        </div>
      </section>
    </div>
  );
};

export default Zones;
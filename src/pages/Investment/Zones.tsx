import React, { useState } from "react";
import "./Zones.css";

// --- Data for Zones ---
const ZONES = [
  {
    name: "BPO Zone",
    icon: "🎧",
    color: "#0C7C92",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
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
    icon: "🧪",
    color: "#6EC9C4",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
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
    icon: "👨‍💻",
    color: "#16284F",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
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
    icon: "⚒️",
    color: "#0C7C92",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
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
    icon: "📘",
    color: "#6EC9C4",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
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
    icon: "🔌",
    color: "#16284F",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
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

// --- Zone Color Map with Index Signature for Robustness ---
const ZONE_COLORS: Record<string, string> = {
  BPO: "#0C7C92",
  "R&D": "#6EC9C4",
  Software: "#16284F",
  Mining: "#0C7C92",
  Training: "#6EC9C4"
};

// Helper function for safe color lookup
const getZoneColor = (zone: string) =>
  ZONE_COLORS[zone] || "#0C7C92";

const Zones: React.FC = () => {
  const [activeZone, setActiveZone] = useState<number | null>(null);

  return (
    <div className="zone-root">
      {/* HERO */}
      <section className="zone-hero zone-full-bleed">
        <img
          src="https://www.alamy.com/ethiopian-ict-park-main-entrance-addis-ababa-ethiopia-africa-image372481294.html"
          alt="Ethiopian IT Park Hero"
          className="zone-hero__img"
        />
        <div className="zone-hero__overlay">
          <h1 className="zone-hero__title" style={{ paddingTop: "4.5rem" }}>
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
                <span>{zone.icon}</span>
              </div>
              <img src={zone.image} alt={zone.name + " image"} className="zone-card__img" />
              <h3>{zone.name}</h3>
              <p>{zone.summary}</p>
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
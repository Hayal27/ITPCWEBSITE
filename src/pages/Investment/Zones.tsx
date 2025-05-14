import React, { JSX, useState } from "react";
import "./Zones.css";
import {
  IconFlask,
  IconCpu,
  IconBook,
  IconDeviceDesktopAnalytics,
  IconSearch,
  IconDownload,
  IconBuildingSkyscraper,
  IconPhone,
  IconHome
} from "@tabler/icons-react";

// --- Type for all possible zone names ---
type ZoneName =
  | "ICT Business Zone"
  | "Commercial Zone"
  | "Manufacturing Zone"
  | "Knowlege Zone"
  | "Residentail Zone"
  | "Skill & Traing Zone";

// --- Icon mapping for each zone (type-safe) ---
const ICON_MAP: Record<ZoneName, JSX.Element> = {
  "ICT Business Zone": <IconDeviceDesktopAnalytics size={32} color="#fff" stroke={2.2} />,
  "Commercial Zone": <IconBuildingSkyscraper size={32} color="#fff" stroke={2.2} />,
  "Manufacturing Zone": <IconCpu size={32} color="#fff" stroke={2.2} />,
  "Knowlege Zone": <IconBook size={32} color="#fff" stroke={2.2} />,
  "Residentail Zone": <IconHome size={32} color="#fff" stroke={2.2} />,
  "Skill & Traing Zone": <IconFlask size={32} color="#fff" stroke={2.2} />
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
    name: "ICT Business Zone",
    color: "#0C7C92",
    images: [
      "https://res.cloudinary.com/yesuf/image/upload/v1747136300/bpo1_kxricq.jpg",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135446/reaseach_ew642q.png",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135443/bpo2_kmphwy.png"
    ],
    summary: "Modern office spaces, robust IT infrastructure, and global connectivity for ICT and business operations.",
    details: {
      purpose: "To host ICT companies, business process outsourcing, and digital service providers.",
      features: [
        "High-speed fiber internet",
        "Secure data centers",
        "Business support services",
        "Conference and meeting facilities",
        "24/7 power backup"
      ],
      tenants: "ICT firms, BPOs, digital agencies, consulting companies."
    }
  },
  {
    name: "Commercial Zone",
    color: "#6EC9C4",
    images: [
      "https://res.cloudinary.com/yesuf/image/upload/v1747135441/mk_wd3mtf.png",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135437/bpo_ckg1ys.png"
    ],
    summary: "Retail, banking, and business centers supporting commercial activities and services.",
    details: {
      purpose: "To provide a vibrant environment for retail, banking, and commercial enterprises.",
      features: [
        "Retail outlets and showrooms",
        "Banking and financial services",
        "Business lounges",
        "Food courts and cafes"
      ],
      tenants: "Retailers, banks, service providers, commercial offices."
    }
  },
  {
    name: "Manufacturing Zone",
    color: "#16284F",
    images: [
      "https://res.cloudinary.com/yesuf/image/upload/v1747135437/bpo_ckg1ys.png",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png"
    ],
    summary: "State-of-the-art facilities for electronics, hardware, and light manufacturing industries.",
    details: {
      purpose: "To support electronics assembly, hardware production, and light manufacturing.",
      features: [
        "Modern manufacturing units",
        "Logistics and warehousing",
        "Quality control labs",
        "Prototyping and testing facilities"
      ],
      tenants: "Electronics manufacturers, hardware startups, assembly plants."
    }
  },
  {
    name: "Knowlege Zone",
    color: "#0C7C92",
    images: [
      "https://res.cloudinary.com/yesuf/image/upload/v1747135430/swdevelop_tc9anx.png",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135429/raxio_vgz5ev.png"
    ],
    summary: "Academic, research, and innovation hubs for knowledge creation and collaboration.",
    details: {
      purpose: "To foster research, innovation, and academic-industry partnerships.",
      features: [
        "Research labs and libraries",
        "Innovation hubs",
        "Collaboration spaces",
        "Seminar and workshop venues"
      ],
      tenants: "Universities, R&D centers, think tanks, innovation hubs."
    }
  },
  {
    name: "Residentail Zone",
    color: "#6EC9C4",
    images: [
      "https://res.cloudinary.com/yesuf/image/upload/v1747136300/bpo1_kxricq.jpg",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135446/reaseach_ew642q.png"
    ],
    summary: "Comfortable and secure living spaces for professionals and their families.",
    details: {
      purpose: "To provide residential accommodation for park employees and their families.",
      features: [
        "Modern apartments",
        "Recreational facilities",
        "Green spaces and parks",
        "24/7 security"
      ],
      tenants: "IT park staff, professionals, families."
    }
  },
  {
    name: "Skill & Traing Zone",
    color: "#16284F",
    images: [
      "https://res.cloudinary.com/yesuf/image/upload/v1747135443/bpo2_kmphwy.png",
      "https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png"
    ],
    summary: "Training centers, academies, and labs for upskilling and workforce development.",
    details: {
      purpose: "To host training institutions and skill development programs for the digital economy.",
      features: [
        "Training centers and classrooms",
        "Hands-on labs",
        "E-learning platforms",
        "Internship and placement support"
      ],
      tenants: "Training academies, bootcamps, workforce development agencies."
    }
  }
]

// --- Zone Color Map ---
const ZONE_COLORS: Record<string, string> = {
  "ICT Business Zone": "#0C7C92",
  "Commercial Zone": "#6EC9C4",
  "Manufacturing Zone": "#16284F",
  "Knowlege Zone": "#0C7C92",
  "Residentail Zone": "#6EC9C4",
  "Skill & Traing Zone": "#16284F"
};
const getZoneColor = (zone: string) => ZONE_COLORS[zone] || "#0C7C92";

// --- Gallery Images ---
const GALLERY_IMAGES = [
  "https://res.cloudinary.com/yesuf/image/upload/v1747136300/bpo1_kxricq.jpg",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135446/reaseach_ew642q.png",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135443/bpo2_kmphwy.png",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135441/mk_wd3mtf.png",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135437/bpo_ckg1ys.png",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135430/swdevelop_tc9anx.png",
  "https://res.cloudinary.com/yesuf/image/upload/v1747135429/raxio_vgz5ev.png"
];

// --- Interactive Map Data ---
const MAP_ZONES: {
  name: ZoneName;
  left: string;
  top: string;
  color: string;
  icon: JSX.Element;
}[] = [
  { name: "ICT Business Zone", left: "15%", top: "35%", color: "#0C7C92", icon: <IconDeviceDesktopAnalytics size={22} color="#fff" stroke={2} /> },
  { name: "Commercial Zone", left: "40%", top: "20%", color: "#6EC9C4", icon: <IconBuildingSkyscraper size={22} color="#fff" stroke={2} /> },
  { name: "Manufacturing Zone", left: "60%", top: "38%", color: "#16284F", icon: <IconCpu size={22} color="#fff" stroke={2} /> },
  { name: "Knowlege Zone", left: "25%", top: "70%", color: "#0C7C92", icon: <IconBook size={22} color="#fff" stroke={2} /> },
  { name: "Residentail Zone", left: "75%", top: "65%", color: "#6EC9C4", icon: <IconHome size={22} color="#fff" stroke={2} /> },
  { name: "Skill & Traing Zone", left: "55%", top: "60%", color: "#16284F", icon: <IconFlask size={22} color="#fff" stroke={2} /> }
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
          src="https://res.cloudinary.com/yesuf/image/upload/v1747135446/reaseach_ew642q.png"
          alt="Ethiopian IT Park Hero"
          className="zone-hero__img"
        />
        <div className="zone-hero__overlay">
          <h1 className="zone-hero__title">
            Explore Our Sector-Specific Zones
          </h1>
          <p className="zone-hero__subtitle">
            Ethiopian IT Park features specialized zones for different tech and innovation sectors, with the right environment, infrastructure, and support.
          </p>
          <div className="zone-hero__cta">
            <button className="zone-btn zone-btn--primary">
              <IconSearch size={20} />
              Browse Available Zones
            </button>
            <button className="zone-btn zone-btn--secondary">
              <IconDownload size={20} />
              Download Zone Guide
            </button>
            <button className="zone-btn zone-btn--accent">
              <IconBuildingSkyscraper size={20} />
              Apply for a Space
            </button>
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
          <button className="zone-btn zone-btn--primary">
            <IconBuildingSkyscraper size={20} />
            Apply for a Unit in a Zone
          </button>
          <button className="zone-btn zone-btn--secondary">
            <IconDownload size={20} />
            Download Zone Application Guide
          </button>
          <button className="zone-btn zone-btn--accent">
            <IconPhone size={20} />
            Book a Consultation with Zone Admin
          </button>
        </div>
      </section>
    </div>
  );
};

export default Zones;
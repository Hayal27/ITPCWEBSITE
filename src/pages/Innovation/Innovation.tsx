import React, { useState } from "react";
import "./Innovation.css";

const programs = [
  {
    title: "Startup Accelerator",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "A 12-week intensive for early-stage startups. Access mentorship, funding, and global exposure to accelerate your business in Ethiopia's vibrant tech ecosystem.",
    link: "#",
    icon: "🚀",
  },
  {
    title: "Corporate Innovation Lab",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    desc: "Custom innovation sprints for enterprises. Foster intrapreneurship, solve business challenges, and launch new ventures with support from Ethiopia's IT Park.",
    link: "#",
    icon: "🏢",
  },
  {
    title: "Innovation Bootcamp",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "A 5-day hands-on bootcamp for teams and individuals to master design thinking, prototyping, and go-to-market strategies, inspired by Ethiopia's innovation leaders.",
    link: "#",
    icon: "💡",
  },
  {
    title: "Digital Skills Academy",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    desc: "Upskill with coding, AI, and digital business courses, tailored for Ethiopia’s youth and professionals.",
    link: "#",
    icon: "🧑‍💻",
  },
  {
    title: "Women in Tech Initiative",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    desc: "Empowering women entrepreneurs and leaders through mentorship, funding, and networking events.",
    link: "#",
    icon: "👩‍💼",
  },
  {
    title: "Green Innovation Challenge",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    desc: "Accelerate sustainable startups focused on climate, agriculture, and clean energy in Ethiopia.",
    link: "#",
    icon: "🌱",
  },
];

const features = [
  {
    icon: "🌍",
    title: "African Tech Hub",
    desc: "Located in the heart of Addis Ababa, Ethiopian IT Park is a gateway to Africa’s booming digital economy.",
  },
  {
    icon: "🤝",
    title: "Collaborative Community",
    desc: "Connect with startups, corporates, investors, and mentors in a thriving, inclusive ecosystem.",
  },
  {
    icon: "💼",
    title: "Business Support",
    desc: "From legal advice to funding access, get all the support you need to scale your innovation.",
  },
  {
    icon: "🎓",
    title: "Workshops & Events",
    desc: "Regular hackathons, seminars, and networking events to keep you inspired and connected.",
  },
];

const testimonials = [
  {
    name: "Lensa Mekonnen",
    role: "Founder, AddisTech",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The IT Park’s accelerator program gave us the mentorship and exposure we needed to launch our product across Africa.",
  },
  {
    name: "Samuel Getachew",
    role: "CEO, EthioCloud",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The innovation lab helped our team rethink our business model and connect with key partners in the region.",
  },
  {
    name: "Hanna Tadesse",
    role: "CTO, Blue Nile AI",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The bootcamp was a game-changer. We learned design thinking and built a prototype in just one week!",
  },
  {
    name: "Abel Fikru",
    role: "Lead Developer, GreenTech",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The Green Innovation Challenge connected us with investors and mentors passionate about sustainability.",
  },
];

const partners = [
  { name: "Ethio Telecom", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ethio_Telecom_logo.png" },
  { name: "Ministry of Innovation", logo: "https://itparkethiopia.gov.et/wp-content/uploads/2022/09/Ministry-of-Innovation-and-Technology-Logo.png" },
  { name: "UNDP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/UNDP_logo.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "African Union", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/African_Union_logo.svg" },
];

const stats = [
  { label: "Startups Accelerated", value: "200+" },
  { label: "Jobs Created", value: "2,500+" },
  { label: "Funds Raised", value: "$50M+" },
  { label: "Events Hosted", value: "120+" },
];

const InnovationAcceleration: React.FC = () => {
  // For hover effect on testimonials
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="itpc-hero d-flex align-items-center" style={{ minHeight: 420 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 mb-2 section-title">
                Innovation & Acceleration Programs
              </h1>
              <p className="lead mb-4 section-description">
                Empowering Ethiopia’s next generation of innovators and entrepreneurs. Join IT Park’s dynamic programs—designed for startups, enterprises, and visionaries ready to make an impact in Africa’s digital future.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#programs" className="btn btn-primary btn-lg fw-bold shadow">
                  Explore Programs
                </a>
                <a href="#apply" className="btn btn-outline-secondary btn-lg fw-bold shadow">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-5 incubation-section">
        <div className="container">
          <h2 className="section-subtitle text-center">Our Programs</h2>
          <div className="row">
            {programs.map((prog) => (
              <div className="col-md-6 col-lg-4" key={prog.title}>
                <div className="program-card h-100">
                  <div className="program-icon" aria-label="program">{prog.icon}</div>
                  <h3>{prog.title}</h3>
                  <img
                    src={prog.img}
                    className="img-fluid rounded mb-3"
                    alt={prog.title}
                    style={{ maxHeight: 120, objectFit: "cover", width: "100%" }}
                  />
                  <p>{prog.desc}</p>
                  <a href={prog.link} className="btn btn-outline-primary btn-sm">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: "var(--neutral)" }}>
        <div className="container">
          <h2 className="section-subtitle text-center mb-4">Why Ethiopian IT Park?</h2>
          <div className="row text-center">
            {features.map((f) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={f.title}>
                <div style={{
                  background: "var(--gradient)",
                  borderRadius: 16,
                  padding: "32px 18px",
                  color: "#fff",
                  boxShadow: "0 4px 24px 0 rgba(12,124,146,0.08)",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: "1rem", opacity: 0.95 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-subtitle text-center mb-4">Success Stories</h2>
          <div className="success-stories-grid">
            {testimonials.map((t, idx) => (
              <div
                className={`success-story-card modern-hover-card${hovered === idx ? " hovered" : ""}`}
                key={t.name}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                tabIndex={0}
                onFocus={() => setHovered(idx)}
                onBlur={() => setHovered(null)}
              >
                <div className="story-default-view">
                  <div className="story-image-wrapper">
                    <img src={t.img} alt={t.name} />
                  </div>
                  <div className="story-title-row">
                    <div className="story-title">{t.name}</div>
                    <div className="story-arrow below-title">▼</div>
                  </div>
                </div>
                <div className="story-hover-modal">
                  <h4>{t.name}</h4>
                  <div className="story-hover-desc">{t.quote}</div>
                  <div className="story-hover-stats">
                    <span className="stat-item">
                      <span className="stat-number">{t.role}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5" style={{ background: "var(--neutral)" }}>
        <div className="container">
          <h2 className="section-subtitle text-center mb-4">Our Partners</h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            {partners.map((p) => (
              <div key={p.name} style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0c7c9220",
                padding: "12px 24px",
                minWidth: 120,
                minHeight: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img src={p.logo} alt={p.name} style={{ maxHeight: 38, maxWidth: 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="apply" className="py-5" style={{ background: "var(--gradient)", color: "#fff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Accelerate?</h2>
          <p className="lead mb-4">
            Apply now or contact our team to discover how Ethiopian IT Park can help you achieve breakthrough success.
          </p>
          <a href="/contact" className="btn btn-light btn-lg text-primary fw-bold shadow">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default InnovationAcceleration;
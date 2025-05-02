import React, { useState, useEffect, useRef } from "react";
import "./Investments.css";

// --- Mock Data ---
const WHY_INVEST = [
  {
    icon: "🌍",
    title: "Location & Connectivity",
    desc: "Central Addis Ababa location with access to global markets, air cargo, and data routes."
  },
  {
    icon: "📈",
    title: "Expanding Tech Ecosystem",
    desc: "Ethiopia’s digital economy is booming, powered by policy reforms and youth innovation."
  },
  {
    icon: "🛡",
    title: "Government Support",
    desc: "Favorable tax policies, investment incentives, and sectoral liberalization."
  },
  {
    icon: "🧠",
    title: "Talent Pool",
    desc: "Over 300,000 ICT graduates and young innovators entering the market annually."
  },
  {
    icon: "🏛",
    title: "Regulatory Stability",
    desc: "Tech-focused reforms under the Digital Ethiopia 2025 strategy."
  }
];

const OPPORTUNITIES = [
  {
    icon: "🏙",
    title: "Smart Infrastructure",
    desc: "Invest in data centers, telecom towers, and cloud infrastructure."
  },
  {
    icon: "🚀",
    title: "Startup Acceleration",
    desc: "Fund or partner with early-stage startups through incubation programs."
  },
  {
    icon: "🧬",
    title: "Innovation Hubs",
    desc: "Partner in R&D labs, maker spaces, and coding academies."
  },
  {
    icon: "💼",
    title: "Tech Services & BPO",
    desc: "Invest in Business Process Outsourcing and IT-enabled services."
  },
  {
    icon: "🌐",
    title: "Platform-Based Ventures",
    desc: "Back digital marketplaces, FinTech, HealthTech, and EdTech startups."
  },
  {
    icon: "🏫",
    title: "Knowledge & Skills Hubs",
    desc: "Support digital universities, training centers, and certification hubs."
  }
];

const SERVICES = [
  {
    icon: "💸",
    title: "Tax Holiday & Incentives",
    desc: "Up to 10 years exemption for qualified investments."
  },
  {
    icon: "🏢",
    title: "Office & Tech Space",
    desc: "Flexible space for startups, scale-ups, and enterprises."
  },
  {
    icon: "🖥",
    title: "Data Hosting & Cloud Labs",
    desc: "On-site facilities, international hosting partnerships."
  },
  {
    icon: "🏡",
    title: "Investor Residency",
    desc: "Fast-tracked visa and residency processing for investors."
  },
  {
    icon: "📞",
    title: "One-Stop Investor Desk",
    desc: "Concierge support through legal, licensing, and logistics."
  },
  {
    icon: "🧩",
    title: "Public-Private Partnership",
    desc: "Ready templates and advisory services for PPP."
  }
];

const SUCCESS_STORIES = [
  {
    company: "TechAfrica",
    logo: "https://dummyimage.com/60x60/0C7C92/fff&text=TA",
    quote: "Launching in Ethiopia was seamless with IT Park’s support and investor network.",
    investor: "BlueLake Ventures",
    impact: "Created 200+ jobs, scaled to 3 African markets."
  },
  {
    company: "CloudLink",
    logo: "https://dummyimage.com/60x60/6EC9C4/fff&text=CL",
    quote: "Our BPO center grew 5x in 2 years, thanks to the Park’s infrastructure.",
    investor: "Africa Angels",
    impact: "Now serving Fortune 500 clients from Addis Ababa."
  },
  {
    company: "DiasporaTech",
    logo: "https://dummyimage.com/60x60/16284F/fff&text=DT",
    quote: "Returning home to build was easy with the Park’s incentives and global partners.",
    investor: "Diaspora Fund",
    impact: "Brought $2M in FDI, trained 100+ engineers."
  }
];

const POLICY_DOCS = [
  { title: "Investment Code & Licensing", link: "#", desc: "Procedures and requirements for investors." },
  { title: "Foreign Ownership & Repatriation", link: "#", desc: "Rules for foreign companies and profit transfers." },
  { title: "IP & Patent Laws", link: "#", desc: "Protect your innovations and IP in Ethiopia." },
  { title: "Data Hosting & Privacy", link: "#", desc: "Compliance for digital and cloud services." },
  { title: "Startup Registration Guide", link: "#", desc: "How to set up your tech business at IT Park." }
];

const TOOLS = [
  { title: "ICT Business Plan Template", link: "#" },
  { title: "Sample Term Sheet", link: "#" },
  { title: "Pitch Deck for Ethiopian Startups", link: "#" },
  { title: "MoU / NDA Templates", link: "#" },
  { title: "Investment Roadmap PDF", link: "#" },
  { title: "PPP & Grant Templates", link: "#" }
];

const FAQS = [
  {
    q: "What is the minimum investment threshold for incentives?",
    a: "Typically $100,000 for foreign investors, but varies by sector and program."
  },
  {
    q: "Can foreign companies own 100% of a tech business?",
    a: "Yes, 100% foreign ownership is permitted in ICT and related sectors."
  },
  {
    q: "What legal structure is recommended for BPO investors?",
    a: "A PLC or LLC is most common; the Park’s desk can advise on setup."
  },
  {
    q: "Are profits repatriable for foreign tech investors?",
    a: "Yes, profits and capital can be fully repatriated under Ethiopian law."
  },
  {
    q: "What sectors are eligible for ICT park tenancy?",
    a: "ICT, BPO, FinTech, EdTech, HealthTech, and related digital services."
  }
];

const PRESS_LOGOS = [
  { src: "https://dummyimage.com/80x40/0C7C92/fff&text=TechCrunch", alt: "TechCrunch" },
  { src: "https://dummyimage.com/80x40/6EC9C4/fff&text=World+Bank", alt: "World Bank" },
  { src: "https://dummyimage.com/80x40/16284F/fff&text=African+Union", alt: "African Union" },
  { src: "https://dummyimage.com/80x40/f4f4f4/0C7C92&text=UNDP", alt: "UNDP" }
];

// --- Animated Counter Hook ---
function useCountUp(end: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    function step() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(step);
      } else {
        setCount(end);
        cancelAnimationFrame(ref.current);
      }
    }
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration]);
  return count;
}

const Investments: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [calc, setCalc] = useState({ amount: "", years: "3", sector: "Tech Services & BPO" });
  const [calcResult, setCalcResult] = useState<{roi: number, tax: number} | null>(null);

  // Animated stats
  const jobs = useCountUp(12000);
  const investment = useCountUp(120000000);

  // Investment Calculator logic
  function handleCalc(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(calc.amount.replace(/,/g, "")) || 0;
    const yrs = parseInt(calc.years);
    let roi = 0.18, tax = 0.22;
    if (calc.sector === "Smart Infrastructure") { roi = 0.22; tax = 0.18; }
    if (calc.sector === "Startup Acceleration") { roi = 0.25; tax = 0.13; }
    if (calc.sector === "Innovation Hubs") { roi = 0.15; tax = 0.15; }
    if (calc.sector === "Platform-Based Ventures") { roi = 0.28; tax = 0.12; }
    if (calc.sector === "Knowledge & Skills Hubs") { roi = 0.13; tax = 0.10; }
    setCalcResult({
      roi: Math.round(amt * Math.pow(1 + roi, yrs)),
      tax: Math.round(amt * tax * yrs * 0.7) // simulate tax savings
    });
  }

  return (
    <div className="inv-root">

      {/* HERO */}
      <section className="inv-hero">
        <div className="inv-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
            alt="Ethiopian IT Park Skyline"
            className="inv-hero__img"
          />
        </div>
        <div className="inv-hero__content">
          <h1 className="inv-hero__headline">
            Invest in the Digital Future of Africa
          </h1>
          <p className="inv-hero__subheadline">
            Ethiopian IT Park is your gateway to East Africa’s fastest-growing tech hub, with unmatched potential and state-of-the-art infrastructure.
          </p>
          <div className="inv-hero__cta">
            <button className="inv-btn inv-btn--primary">🔍 Explore Investment Areas</button>
            <button className="inv-btn inv-btn--secondary">📥 Download Investor Kit</button>
            <button className="inv-btn inv-btn--accent">📅 Book a Discovery Meeting</button>
          </div>
        </div>
      </section>

      {/* PRESS LOGOS */}
      <section className="inv-press">
        <span className="inv-press__label">Featured In:</span>
        {PRESS_LOGOS.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="inv-press__logo" />
        ))}
      </section>

      {/* ANIMATED IMPACT COUNTER */}
      <section className="inv-impact">
        <div className="inv-impact__counter">
          <span className="inv-impact__number">${investment.toLocaleString()}+</span>
          <span className="inv-impact__label">Invested</span>
        </div>
        <div className="inv-impact__counter">
          <span className="inv-impact__number">{jobs.toLocaleString()}+</span>
          <span className="inv-impact__label">Jobs Created</span>
        </div>
        <div className="inv-impact__counter">
          <span className="inv-impact__number">35%</span>
          <span className="inv-impact__label">Female Founders</span>
        </div>
        <div className="inv-impact__counter">
          <span className="inv-impact__number">12</span>
          <span className="inv-impact__label">Cities Reached</span>
        </div>
      </section>

      {/* INVESTMENT CALCULATOR */}
      <section className="inv-calc">
        <h2 className="inv-section-title">Estimate Your Investment Impact</h2>
        <form className="inv-calc__form" onSubmit={handleCalc}>
          <input
            className="inv-calc__input"
            type="text"
            placeholder="Investment Amount (USD)"
            value={calc.amount}
            onChange={e => setCalc(v => ({ ...v, amount: e.target.value.replace(/[^0-9,]/g, "") }))}
            required
          />
          <select className="inv-calc__input" value={calc.sector} onChange={e => setCalc(v => ({ ...v, sector: e.target.value }))}>
            {OPPORTUNITIES.map(o => <option key={o.title}>{o.title}</option>)}
          </select>
          <select className="inv-calc__input" value={calc.years} onChange={e => setCalc(v => ({ ...v, years: e.target.value }))}>
            <option>3</option><option>5</option><option>7</option><option>10</option>
          </select>
          <button className="inv-btn inv-btn--primary" type="submit">Calculate</button>
        </form>
        {calcResult && (
          <div className="inv-calc__result">
            <div>
              <span className="inv-calc__label">Projected Value:</span>
              <span className="inv-calc__value">${calcResult.roi.toLocaleString()}</span>
            </div>
            <div>
              <span className="inv-calc__label">Estimated Tax Savings:</span>
              <span className="inv-calc__value">${calcResult.tax.toLocaleString()}</span>
            </div>
          </div>
        )}
      </section>

      {/* WHY INVEST */}
      <section className="inv-why">
        <h2 className="inv-section-title">Why Invest at Ethiopian IT Park?</h2>
        <div className="inv-why__grid">
          {WHY_INVEST.map((item, idx) => (
            <div className="inv-why__card" key={idx}>
              <span className="inv-why__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="inv-opps">
        <h2 className="inv-section-title">Investment Opportunities</h2>
        <div className="inv-opps__grid">
          {OPPORTUNITIES.map((op, idx) => (
            <div className="inv-opps__card" key={idx}>
              <span className="inv-opps__icon">{op.icon}</span>
              <div>
                <h3>{op.title}</h3>
                <p>{op.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES & FACILITIES */}
      <section className="inv-services">
        <h2 className="inv-section-title">Investor Services & Facilities</h2>
        <div className="inv-services__grid">
          {SERVICES.map((s, idx) => (
            <div className="inv-services__card" key={idx}>
              <span className="inv-services__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="inv-success">
        <h2 className="inv-section-title">Proven Success Stories</h2>
        <div className="inv-success__grid">
          {SUCCESS_STORIES.map((story, idx) => (
            <div className="inv-success__card" key={idx}>
              <img src={story.logo} alt={story.company + " logo"} className="inv-success__logo" />
              <blockquote>“{story.quote}”</blockquote>
              <div className="inv-success__meta">
                <span><b>{story.company}</b></span>
                <span>{story.investor}</span>
              </div>
              <div className="inv-success__impact">{story.impact}</div>
            </div>
          ))}
        </div>
      </section>

      {/* POLICY & LEGAL */}
      <section className="inv-policy">
        <h2 className="inv-section-title">Policy & Legal Framework</h2>
        <div className="inv-policy__grid">
          {POLICY_DOCS.map((doc, idx) => (
            <a href={doc.link} className="inv-policy__card" key={idx} target="_blank" rel="noopener noreferrer">
              <h3>{doc.title}</h3>
              <p>{doc.desc}</p>
              <span className="inv-policy__download">📄</span>
            </a>
          ))}
        </div>
      </section>

      {/* TOOLS & TEMPLATES */}
      <section className="inv-tools">
        <h2 className="inv-section-title">Business Tools & Templates</h2>
        <div className="inv-tools__grid">
          {TOOLS.map((tool, idx) => (
            <a href={tool.link} className="inv-tools__card" key={idx} target="_blank" rel="noopener noreferrer">
              <span className="inv-tools__icon">🗂️</span>
              <span>{tool.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="inv-faq">
        <h2 className="inv-section-title">Investor FAQs</h2>
        <div className="inv-faq__list">
          {FAQS.map((faq, idx) => (
            <div className={`inv-faq__item${faqOpen === idx ? " inv-faq__item--open" : ""}`} key={idx}>
              <button className="inv-faq__q" onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                {faq.q}
                <span className="inv-faq__arrow">{faqOpen === idx ? "▲" : "▼"}</span>
              </button>
              {faqOpen === idx && <div className="inv-faq__a">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="inv-cta">
        <h2 className="inv-cta__headline">Ready to be part of Africa’s next digital revolution?</h2>
        <div className="inv-cta__actions">
          <button className="inv-btn inv-btn--primary">✅ Download the Investor Kit</button>
          <button className="inv-btn inv-btn--secondary">📞 Schedule a Call</button>
          <button className="inv-btn inv-btn--accent">📍 Plan a Site Visit</button>
          <button className="inv-btn inv-btn--outline">🧭 Join Our Investor Roadshow</button>
        </div>
      </section>

      {/* STICKY QUICK ACTIONS BAR (mobile/tablet) */}
      <nav className="inv-quickbar">
        <button className="inv-quickbar__btn" title="Download Kit">📥</button>
        <button className="inv-quickbar__btn" title="Book Call">📞</button>
        <button className="inv-quickbar__btn" title="Site Visit">📍</button>
        <button className="inv-quickbar__btn" title="FAQ">❓</button>
      </nav>
    </div>
  );
};

export default Investments;
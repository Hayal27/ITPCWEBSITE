import React, { useEffect } from "react";
import "./StepsToInvest.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaGlobeAfrica,
  FaChartLine,
  FaShieldAlt,
  FaHandsHelping,
  FaMoneyBillWave,
  FaUserTie,
  FaFileAlt,
  FaFileSignature,
  FaGavel,
  FaMapMarkedAlt,
  FaRegLightbulb,
} from "react-icons/fa";

// Data arrays scoped to this page only – prevents any coupling with other modules
const WHY_INVEST_ITEMS = [
  {
    icon: <FaGlobeAfrica />,
    title: "Strategic Location",
    desc: "Located in the heart of Africa, connecting you to global markets.",
  },
  {
    icon: <FaChartLine />,
    title: "Rapidly Growing Market",
    desc: "Capitalize on Ethiopia’s tech-centric economic growth.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Policy Protection",
    desc: "Strong government commitment and investor-friendly regulations.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Investor Support Office",
    desc: "Dedicated one-stop support throughout your journey.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Tax Incentives",
    desc: "Enjoy competitive tax holidays and duty-free import benefits.",
  },
  {
    icon: <FaUserTie />,
    title: "Skilled Tech Talent",
    desc: "Tap into a fast-growing pool of highly-skilled professionals.",
  },
];

const INVEST_STEPS = [
  {
    title: "Submit Expression of Interest",
    desc:
      "Begin your journey with a short online form outlining your business scope and interest.",
    doc: "/docs/expression-of-interest.pdf",
  },
  {
    title: "Initial Consultation",
    desc:
      "Our investment experts will connect with you to understand your goals and explain tailored opportunities.",
    doc: "/docs/initial-consultation.pdf",
  },
  {
    title: "Proposal Submission",
    desc:
      "Submit a detailed proposal. Templates and support documents are available for download.",
    doc: "/docs/proposal-template.pdf",
  },
  {
    title: "Site Allocation & Licensing",
    desc:
      "Choose your preferred zone (BPO, Software Dev, AI, etc.) and receive guidance on securing legal licensing.",
    doc: "/docs/site-allocation-guide.pdf",
  },
  {
    title: "Legal Setup & Registration",
    desc:
      "Company registration, MoU signing, and onboarding with our regulatory support desk.",
    doc: "/docs/legal-setup-checklist.pdf",
  },
  {
    title: "Operational Kick-off",
    desc:
      "Begin setting up infrastructure, recruiting local talent, and accessing park resources.",
    doc: "/docs/operational-kickoff.pdf",
  },
];

const TOOLKIT_RESOURCES = [
  { icon: <FaFileAlt />, label: "Business Templates", link: "/docs/business-templates.zip" },
  { icon: <FaFileSignature />, label: "Registration Forms", link: "/docs/registration-forms.zip" },
  { icon: <FaGavel />, label: "Legal Guidelines", link: "/docs/legal-guidelines.pdf" },
  { icon: <FaMapMarkedAlt />, label: "Zone Maps (PDF)", link: "/docs/zone-maps.pdf" },
  { icon: <FaRegLightbulb />, label: "Tax & Policy Summary", link: "/docs/tax-policy-summary.pdf" },
];

const SUPPORT_STAFF = [
  {
    img: "/assets/steps-to-invest/head-investment.jpg",
    name: "Abebe Tesfaye",
    role: "Head of Investment",
    booking: "/book/abebe",
  },
  {
    img: "/assets/steps-to-invest/zone-manager.jpg",
    name: "Liya Mekonnen",
    role: "Zonal Manager – Software",
    booking: "/book/liya",
  },
  {
    img: "/assets/steps-to-invest/zone-manager2.jpg",
    name: "Samuel Desta",
    role: "Zonal Manager – AI & Data",
    booking: "/book/samuel",
  },
];

const SUCCESS_STORIES = [
  {
    img: "/assets/steps-to-invest/story1.jpg",
    quote:
      "Setting up at Ethiopian IT Park was seamless. The support team is world-class.",
    author: "– Jane Doe, CEO, TechGlobal",
  },
  {
    img: "/assets/steps-to-invest/story2.jpg",
    quote:
      "Our expansion into Africa couldn’t have happened without the Park’s unparalleled infrastructure.",
    author: "– John Smith, CTO, FinNova",
  },
];

const StepsToInvest: React.FC = () => {
  // Placeholder for future enhancements like AOS init
  useEffect(() => {
    // Example: import("aos").then(AOS => AOS.init({ once: true }));
  }, []);

  return (
    <div className="sti-page-bg">
      {/* Hero Section */}
      <section className="sti-hero d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="sti-hero-title">
            Invest in Tomorrow, Today – Start Your Journey at Ethiopian IT Park
          </h1>
          <p className="sti-hero-subtitle">
            Simple steps. Strategic support. Sustainable success.
          </p>
          <div className="sti-hero-cta">
            <a href="#sti-stepper" className="sti-btn sti-btn-primary">
              Get Started
            </a>
            <a href="#sti-support" className="sti-btn sti-btn-secondary">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="sti-why-invest container">
        <h2 className="sti-section-title">Why Invest at Ethiopian IT Park?</h2>
        <div className="row">
          {WHY_INVEST_ITEMS.map((item, idx) => (
            <div key={idx} className="col-md-4 sti-why-card" data-aos="fade-up">
              <span className="sti-why-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Stepper */}
      <section id="sti-stepper" className="sti-stepper container">
        <h2 className="sti-section-title">6-Step Investment Roadmap</h2>
        <div className="sti-stepper-timeline">
          {INVEST_STEPS.map((step, idx) => (
            <div key={idx} className="sti-stepper-step" data-aos="fade-up">
              <span className="sti-stepper-step-icon">{idx + 1}</span>
              <div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
                <a href={step.doc} className="sti-stepper-doc-link" target="_blank" rel="noreferrer">
                  Download Doc
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources & Docs */}
      <section className="sti-resources container">
        <h2 className="sti-section-title">Investor Toolkit Download</h2>
        <div className="sti-resource-list row">
          {TOOLKIT_RESOURCES.map((res, idx) => (
            <div key={idx} className="col-md-3 sti-resource-card" data-aos="zoom-in">
              <span className="sti-resource-icon">{res.icon}</span>
              <p>{res.label}</p>
              <a href={res.link} className="sti-download-link" target="_blank" rel="noreferrer">
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Support Office */}
      <section id="sti-support" className="sti-support-office container">
        <h2 className="sti-section-title">Talk to Us — Invest Support Office</h2>
        <div className="row">
          {SUPPORT_STAFF.map((staff, idx) => (
            <div key={idx} className="col-md-4 sti-support-card" data-aos="fade-up">
              <img src={staff.img} alt={staff.name} className="sti-support-img" />
              <h5>{staff.name}</h5>
              <p>{staff.role}</p>
              <a href={staff.booking} className="sti-btn sti-btn-outline">
                Book a Meeting
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="sti-success-stories container">
        <h2 className="sti-section-title">Success Stories & Testimonials</h2>
        <div className="row">
          {SUCCESS_STORIES.map((story, idx) => (
            <div key={idx} className="col-md-6 sti-story-card" data-aos="fade-up">
              <img src={story.img} alt="Investor Story" className="sti-story-img" />
              <blockquote>“{story.quote}”</blockquote>
              <cite>{story.author}</cite>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sti-sticky-cta">
        <a href="/docs/investment-pack.zip" className="sti-btn sti-btn-primary" download>
          Download Investment Pack
        </a>
        <a href="#sti-support" className="sti-btn sti-btn-secondary">
          Schedule a Call
        </a>
        <a href="/zones" className="sti-btn sti-btn-accent">
          Explore Available Zones
        </a>
      </div>
    </div>
  );
};

export default StepsToInvest;
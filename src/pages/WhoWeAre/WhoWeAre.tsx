import React, { useEffect } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGlobe,
  FaBuilding,
  FaChartBar,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaRocket
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './WhoWeAre.css';

const whoFeatures = [
  {
    icon: <FaGlobe className="who-feature-icon" />,
    title: 'National-Level Initiative',
    desc: `Backed by Ethiopia's digital transformation agenda`
  },
  {
    icon: <FaBuilding className="who-feature-icon" />,
    title: 'Full-Scale Infrastructure',
    desc: `Cloud, co-working, incubation, and enterprise zones`
  },
  {
    icon: <FaChartBar className="who-feature-icon" />,
    title: 'Startup & SME Support',
    desc: `Incubation, mentoring, and market access for local innovators`
  },
  {
    icon: <FaGlobe className="who-feature-icon" />,
    title: 'Gateway to Africa',
    desc: `Strategic hub for East Africa's growing tech market`
  },
  {
    icon: <FaHandshake className="who-feature-icon" />,
    title: 'Investment Linkages',
    desc: `Connecting global investors with high-potential African tech ventures`
  }
];

// Reusable section component for alternating layout
const WhoSection = ({
  image,
  alt,
  children,
  reverse = false,
}: {
  image: string;
  alt: string;
  children: React.ReactNode;
  reverse?: boolean;
}) => (
  <div className={`who-image-block ${reverse ? 'who-image-right' : 'who-image-left'}`}>
    <div className="who-image-container">
      <img src={image} alt={alt} />
      <div className="who-image-overlay">
        <div className="who-social-links">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
        </div>
      </div>
    </div>
    <motion.div
      className="who-text-container"
      initial={{ opacity: 0, x: reverse ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  </div>
);

const WhoWeAre: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('who-visible');
            entry.target.classList.remove('who-hidden');
          } else {
            entry.target.classList.remove('who-visible');
            entry.target.classList.add('who-hidden');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements that need animation
    const elements = document.querySelectorAll('.who-image-block, .who-voice, .who-cta');
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="who-park">
      <div className="who-wrapper">
        <motion.header
          className="who-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="who-header-row">
            <FaRocket className="who-main-title-icon" />
            <h2>We Are Ethiopian IT Park</h2>
          </div>
          <motion.p className="who-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
            <strong>We Are</strong> the beating heart of Ethiopia's digital revolution — a world-class technology hub empowering innovation, entrepreneurship, and economic growth.
          </motion.p>

          {/* Who We Are (image left, text right) */}
          <WhoSection image="https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png" alt="Innovation Lab">
            <h3><FaUsers style={{ color: 'var(--who-secondary)', marginRight: 8 }} /> Who We Are</h3>
            <p className="who-general">
              We are a <strong>government-supported, future-driven ICT hub</strong> located in Addis Ababa, designed to be the <strong>digital backbone</strong> of Ethiopia's transformation. At Ethiopian IT Park, we nurture the next generation of <strong>tech leaders, startups, and investors</strong> who are shaping Africa's digital future.
            </p>
          </WhoSection>

          {/* What We Stand For (image right, text left) */}
          <WhoSection image="/images/home/stand-for.jpg" alt="Community Event" reverse={true}>
            <h3><FaLightbulb style={{ color: 'var(--who-primary)', marginRight: 8 }} /> What We Stand For</h3>
            <ul className="who-values">
              <li><strong>Innovation</strong> – We foster creative solutions that solve real-world problems.</li>
              <li><strong>Inclusion</strong> – We believe technology should empower all Ethiopians, everywhere.</li>
              <li><strong>Collaboration</strong> – We bridge government, academia, industry, and investors.</li>
              <li><strong>Impact</strong> – We aim to create jobs, attract investment, and scale digital capabilities.</li>
            </ul>
          </WhoSection>

          {/* What Makes Us Unique (image left, text right) */}
          <WhoSection image="/images/home/makes-unique.jpg" alt="Training Session" reverse={false}>
            <h3><FaHandshake style={{ color: 'var(--who-accent)', marginRight: 8 }} /> What Makes Us Unique?</h3>
            <div className="who-features-table grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {whoFeatures.map((f, i) => (
                <div
                key={i}
                className="who-feature-row bg-white rounded-md shadow-sm p-2 border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
                >
                <span className="who-feature-title font-semibold text-[color:var(--who-primary)] text-base mb-1">{f.title}</span>
                <span className="who-feature-desc text-gray-600">{f.desc}</span>
                </div>
            ))}
            </div>
          </WhoSection>

          {/* Our Role (image right, text left) */}
          <WhoSection image="/images/home/our-role.jpg" alt="Our Role" reverse={true}>
            <h3><FaRocket style={{ color: 'var(--who-primary)', marginRight: 8 }} /> Our Role in Digital Ecosystem</h3>
            <ul className="who-role-list">
              <li>Startups are born</li>
              <li>Innovations thrive</li>
              <li>Global partnerships begin</li>
              <li>Jobs are created</li>
              <li>Ideas become products</li>
            </ul>
          </WhoSection>

          {/* Voice of the Nation's Innovators */}
          <div className="who-voice">
            <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              "We are here to lead Ethiopia's future with innovation, knowledge, and collaboration."
            </motion.blockquote>
          </div>

          {/* Call to Action */}
          <div className="who-cta">
            <motion.a href="#" className="who-cta-btn who-primary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>Join the Movement</motion.a>
            <motion.a href="#" className="who-cta-btn who-secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }}>Explore Innovation</motion.a>
            <motion.a href="#" className="who-cta-btn who-accent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>Partner With Us</motion.a>
          </div>
        </motion.header>
      </div>
    </section>
  );
};

export default WhoWeAre;
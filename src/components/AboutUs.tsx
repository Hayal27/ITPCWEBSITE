import React, { useEffect, useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaCheckCircle,
  FaGlobeAfrica,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaRocket
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../public/assets/css/AboutUs.css';

const features = [
  {
    icon: <FaGlobeAfrica className="feature-icon" />, 
    title: 'National-Level Initiative',
    desc: `Backed by Ethiopia's digital transformation agenda`
  },
  {
    icon: <FaBuilding className="feature-icon" />, 
    title: 'Full-Scale Infrastructure',
    desc: `Cloud, co-working, incubation, and enterprise zones`
  },
  {
    icon: <FaChartLine className="feature-icon" />, 
    title: 'Startup & SME Support',
    desc: `Incubation, mentoring, and market access for local innovators`
  },
  {
    icon: <FaGlobeAfrica className="feature-icon" />, 
    title: 'Gateway to Africa',
    desc: `Strategic hub for East Africa's growing tech market`
  },
  {
    icon: <FaHandshake className="feature-icon" />, 
    title: 'Investment Linkages',
    desc: `Connecting global investors with high-potential African tech ventures`
  }
];

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-park">
      <div className="about-wrapper">
        <motion.header 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-header-row">
            <FaRocket className="main-title-icon" />
            <h2>We Are Ethiopian IT Park</h2>
          </div>
          <motion.p className="intro inspiring-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
            <strong>We Are</strong> the beating heart of Ethiopia's digital revolution — a world-class technology hub empowering innovation, entrepreneurship, and economic growth.
          </motion.p>

          {/* Who We Are */}
          <div className="image-text-block scroll-animate image-left">
            <div className="image-container">
              <img src="../../public/assets/images/portfolio-img-1.jpg" alt="Innovation Lab" />
              <div className="image-overlay">
                <div className="social-links">
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaFacebook /></a>
                </div>
              </div>
            </div>
            <motion.div className="text-container fancy-text bordered-text" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <h3><FaUsers style={{ color: 'var(--color-secondary)', marginRight: 8 }} /> Who We Are</h3>
              <p className="about-general">
                We are a <strong>government-supported, future-driven ICT hub</strong> located in Addis Ababa, designed to be the <strong>digital backbone</strong> of Ethiopia's transformation. At Ethiopian IT Park, we nurture the next generation of <strong>tech leaders, startups, and investors</strong> who are shaping Africa's digital future.
              </p>
            </motion.div>
          </div>

          {/* What We Stand For */}
          <div className="image-text-block scroll-animate image-right">
            <motion.div className="text-container fancy-text bordered-text" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              <h3><FaLightbulb style={{ color: 'var(--color-primary)', marginRight: 8 }} /> What We Stand For</h3>
              <ul className="about-values">
                <li><strong>Innovation</strong> – We foster creative solutions that solve real-world problems.</li>
                <li><strong>Inclusion</strong> – We believe technology should empower all Ethiopians, everywhere.</li>
                <li><strong>Collaboration</strong> – We bridge government, academia, industry, and investors.</li>
                <li><strong>Impact</strong> – We aim to create jobs, attract investment, and scale digital capabilities.</li>
              </ul>
            </motion.div>
            <div className="image-container">
              <img src="../../public/assets/images/portfolio-img-2.jpg" alt="Community Event" />
              <div className="image-overlay">
                <div className="social-links">
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaFacebook /></a>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Unique */}
          <div className="image-text-block scroll-animate image-left">
            <div className="image-container">
              <img src="../../public/assets/images/portfolio-img-3.jpg" alt="Training Session" />
              <div className="image-overlay">
                <div className="social-links">
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaFacebook /></a>
                </div>
              </div>
            </div>
            <motion.div className="text-container fancy-text bordered-text" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
              <h3><FaHandshake style={{ color: 'var(--color-accent)', marginRight: 8 }} /> What Makes Us Unique?</h3>
              <div className="features-table">
                {features.map((f, i) => (
                  <div className="feature-row" key={i}>
                    <span className="feature-title">{f.title}</span>
                    <span className="feature-desc">{f.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Our Role */}
          <div className="about-role scroll-animate">
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <FaRocket style={{ color: 'var(--color-primary)', marginRight: 8 }} /> Our Role in Ethiopia's Digital Ecosystem
            </motion.h3>
            <motion.ul className="about-role-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
              <li>Startups are born</li>
              <li>Innovations thrive</li>
              <li>Global partnerships begin</li>
              <li>Jobs are created</li>
              <li>Ideas become products</li>
            </motion.ul>
          </div>

          {/* Voice of the Nation's Innovators */}
          <div className="about-voice scroll-animate">
            <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              "We are here to lead Ethiopia's future with innovation, knowledge, and collaboration."
            </motion.blockquote>
          </div>

          {/* Call to Action */}
          <div className="about-cta scroll-animate">
            <motion.a href="#" className="cta-btn primary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>Join the Movement</motion.a>
            <motion.a href="#" className="cta-btn secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }}>Explore Innovation</motion.a>
            <motion.a href="#" className="cta-btn accent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>Partner With Us</motion.a>
          </div>
        </motion.header>
      </div>
    </section>
  );
};

export default AboutUs;

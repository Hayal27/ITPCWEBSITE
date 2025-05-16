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
    title: 'Pan-African Vision',
    desc: `Empowering Ethiopia as a digital leader in Africa`
  },
  {
    icon: <FaBuilding className="who-feature-icon" />,
    title: 'Smart Infrastructure',
    desc: `Modern campuses, labs, and digital workspaces`
  },
  {
    icon: <FaChartBar className="who-feature-icon" />,
    title: 'Growth for All',
    desc: `Supporting startups, SMEs, and global partnerships`
  },
  {
    icon: <FaHandshake className="who-feature-icon" />,
    title: 'Collaboration',
    desc: `Bridging government, academia, and industry`
  },
  {
    icon: <FaLightbulb className="who-feature-icon" />,
    title: 'Innovation Culture',
    desc: `Fostering creativity and entrepreneurship`
  }
];

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
            <h2>Who We Are</h2>
          </div>
          <motion.p className="who-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
            <strong>We Are</strong> Ethiopia’s digital pioneers—building a thriving ecosystem for innovation, entrepreneurship, and global impact.
          </motion.p>

          {/* Our Identity */}
          <WhoSection image="https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png" alt="Our Identity">
            <h3><FaUsers style={{ color: 'var(--color-secondary)', marginRight: 8 }} /> Our Identity</h3>
            <p className="who-general">
              A <strong>nationally-backed, future-focused tech hub</strong> in Addis Ababa, we are the <strong>engine of digital transformation</strong>—empowering startups, innovators, and investors to shape Africa’s tomorrow.
            </p>
          </WhoSection>

          {/* Our Values */}
          <WhoSection image="/images/home/stand-for.jpg" alt="Our Values" reverse={true}>
            <h3><FaLightbulb style={{ color: 'var(--color-primary)', marginRight: 8 }} /> Our Values</h3>
            <ul className="who-values">
              <li><strong>Innovation</strong> – Driving creative solutions for real challenges.</li>
              <li><strong>Inclusion</strong> – Technology for every Ethiopian, everywhere.</li>
              <li><strong>Collaboration</strong> – Connecting government, academia, and industry.</li>
              <li><strong>Impact</strong> – Creating jobs, attracting investment, and scaling digital skills.</li>
            </ul>
          </WhoSection>

          {/* What Sets Us Apart */}
          <WhoSection image="/images/home/makes-unique.jpg" alt="What Sets Us Apart">
            <h3><FaHandshake style={{ color: 'var(--color-accent)', marginRight: 8 }} /> What Sets Us Apart</h3>
            <div className="who-features-table">
              {whoFeatures.map((f, i) => (
                <div className="who-feature-row" key={i}>
                  <span className="who-feature-title">{f.title}</span>
                  <span className="who-feature-desc">{f.desc}</span>
                </div>
              ))}
            </div>
          </WhoSection>

          {/* Our Role */}
          <WhoSection image="/images/home/our-role.jpg" alt="Our Role" reverse={true}>
            <h3><FaRocket style={{ color: 'var(--color-primary)', marginRight: 8 }} /> Our Role</h3>
            <ul className="who-role-list">
              <li>Startups launch</li>
              <li>Innovation flourishes</li>
              <li>Partnerships grow</li>
              <li>Jobs are created</li>
              <li>Ideas become reality</li>
            </ul>
          </WhoSection>

          {/* Voice */}
          <div className="who-voice">
            <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              "We are the spark for Ethiopia’s digital future—where vision meets action."
            </motion.blockquote>
          </div>

          {/* CTA */}
          <div className="who-cta">
            <motion.a href="#" className="who-cta-btn who-primary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>Join Us</motion.a>
            <motion.a href="#" className="who-cta-btn who-secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }}>See Our Impact</motion.a>
            <motion.a href="#" className="who-cta-btn who-accent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>Partner Up</motion.a>
          </div>
        </motion.header>
      </div>
    </section>
  );
};

export default WhoWeAre;
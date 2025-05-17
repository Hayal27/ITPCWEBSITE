import React, { useEffect, useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGlobeAfrica,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaBullseye,
  FaEye,
  FaStar,
  FaHeart
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './AboutUss.css';

const missionVisionValues = [
  {
    icon: <FaBullseye className="mission-icon" />,
    title: 'Our Mission',
    content: 'To establish Ethiopia as a leading technology and innovation hub in Africa by fostering digital transformation, entrepreneurship, and sustainable economic growth through world-class infrastructure and support systems.'
  },
  {
    icon: <FaEye className="vision-icon" />,
    title: 'Our Vision',
    content: 'To become Africas premier technology park, driving digital innovation and creating opportunities for the next generation of tech leaders while positioning Ethiopia as a global technology destination.'
  },
  {
    icon: <FaStar className="values-icon" />,
    title: 'Our Values',
    content: [
      'Innovation & Excellence',
      'Integrity & Transparency',
      'Collaboration & Partnership',
      'Sustainability & Impact',
      'Diversity & Inclusion'
    ]
  }
];

const features = [
  {
    icon: <FaGlobeAfrica className="feature-icon" />,
    title: 'National-Level Initiative',
    desc: 'Backed by Ethiopias digital transformation agenda'
  },
  {
    icon: <FaBuilding className="feature-icon" />,
    title: 'Full-Scale Infrastructure',
    desc: 'Cloud, co-working, incubation, and enterprise zones'
  },
  {
    icon: <FaChartLine className="feature-icon" />,
    title: 'Startup & SME Support',
    desc: 'Incubation, mentoring, and market access for local innovators'
  },
  {
    icon: <FaGlobeAfrica className="feature-icon" />,
    title: 'Gateway to Africa',
    desc: 'Strategic hub for East Africas growing tech market'
  },
  {
    icon: <FaHandshake className="feature-icon" />,
    title: 'Investment Linkages',
    desc: 'Connecting global investors with high-potential African tech ventures'
  }
];

const AboutSection = ({
  image,
  alt,
  children,
  reverse = false,
}: {
  image: string;
  alt: string;
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`image-text-block ${reverse ? 'image-right' : 'image-left'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="image-container">
        <motion.img
          src={image}
          alt={alt}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="image-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="social-links">
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="text-container"
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section className="about-park">
      <div className="about-wrapper">
        <motion.header
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about-header-row"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="main-title-icon" />
            <h2>Welcome to Ethiopian IT Park</h2>
          </motion.div>

          <motion.p
            className="intro inspiring-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Empowering Ethiopias Digital Future through Innovation, Technology, and Collaboration
          </motion.p>

          {/* Mission, Vision, Values Cards */}
          <div className="mission-vision-values">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={item.title}
                className="mvv-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="mvv-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                {Array.isArray(item.content) ? (
                  <ul className="values-list">
                    {item.content.map((value, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaHeart className="value-icon" /> {value}
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* History Section */}
          <AboutSection
            image="https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png"
            alt="IT Park History"
          >
            <h3>
              <FaUsers className="section-icon" /> Our History
            </h3>
            <div className="history-content">
              <p>
                Ethiopian IT Park was established as a cornerstone of Ethiopias digital transformation journey. Since our inception, weve been dedicated to creating a thriving ecosystem for technology innovation and entrepreneurship in Ethiopia.
              </p>
              <div className="timeline">
                <motion.div
                  className="timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="year">2020</span>
                  <p>Foundation and Infrastructure Development</p>
                </motion.div>
                <motion.div
                  className="timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="year">2021</span>
                  <p>Launch of Incubation Programs</p>
                </motion.div>
                <motion.div
                  className="timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="year">2022</span>
                  <p>International Partnerships Established</p>
                </motion.div>
                <motion.div
                  className="timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="year">2023</span>
                  <p>Expansion and Growth</p>
                </motion.div>
              </div>
            </div>
          </AboutSection>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="#"
              className="cta-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.a>
            <motion.a
              href="#"
              className="cta-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.a>
            <motion.a
              href="#"
              className="cta-btn accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.header>
      </div>
    </section>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGlobeAfrica,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaBullseye,
  FaEye,
  FaStar,
  FaHeart
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './AboutUss.css';

const missionVisionValues = [
  {
    icon: <FaBullseye className="about-mission-icon" />,
    title: 'Our Mission',
    content: 'To establish Ethiopia as a leading technology and innovation hub in Africa by fostering digital transformation, entrepreneurship, and sustainable economic growth through world-class infrastructure and support systems.'
  },
  {
    icon: <FaEye className="about-vision-icon" />,
    title: 'Our Vision',
    content: 'To become Africas premier technology park, driving digital innovation and creating opportunities for the next generation of tech leaders while positioning Ethiopia as a global technology destination.'
  },
  {
    icon: <FaStar className="about-values-icon" />,
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
    icon: <FaGlobeAfrica className="about-feature-icon" />,
    title: 'National-Level Initiative',
    desc: 'Backed by Ethiopias digital transformation agenda'
  },
  {
    icon: <FaBuilding className="about-feature-icon" />,
    title: 'Full-Scale Infrastructure',
    desc: 'Cloud, co-working, incubation, and enterprise zones'
  },
  {
    icon: <FaChartLine className="about-feature-icon" />,
    title: 'Startup & SME Support',
    desc: 'Incubation, mentoring, and market access for local innovators'
  },
  {
    icon: <FaGlobeAfrica className="about-feature-icon" />,
    title: 'Gateway to Africa',
    desc: 'Strategic hub for East Africas growing tech market'
  },
  {
    icon: <FaHandshake className="about-feature-icon" />,
    title: 'Investment Linkages',
    desc: 'Connecting global investors with high-potential African tech ventures'
  }
];

const AboutSection = ({
  images,
  alt,
  children,
  reverse = false,
}: {
  images: string[];
  alt: string;
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className={`about-image-text-block ${reverse ? 'about-image-right' : 'about-image-left'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="about-image-container">
        <div 
          className="about-image-slider"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${alt} ${index + 1}`}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        <motion.div
          className="about-image-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="about-social-links">
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
        <div className="about-slider-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`about-slider-dot ${currentImage === index ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        <div className="about-slider-arrow about-slider-prev" onClick={prevImage}>
          ←
        </div>
        <div className="about-slider-arrow about-slider-next" onClick={nextImage}>
          →
        </div>
      </div>
      <motion.div
        className="about-text-container"
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
    <section className="about-it-park">
      <div className="about-it-park-wrapper">
        <motion.header
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about-it-park-header-row"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="about-main-title-icon" />
            <h2>Welcome to Ethiopian IT Park</h2>
          </motion.div>

          {/* History Section */}
          <AboutSection
            images={[
              "https://res.cloudinary.com/yesuf/image/upload/v1747135433/Incubation_euahej.png",
              "https://res.cloudinary.com/yesuf/image/upload/v1747135446/reaseach_ew642q.png",
              "https://res.cloudinary.com/yesuf/image/upload/v1747135443/bpo2_kmphwy.png"
            ]}
            alt="IT Park History"
          >
            <div className="about-history-title">
              <FaUsers className="about-section-icon" />
              <h3>Our History</h3>
            </div>
            <div className="about-history-content">
              <p>
                Ethiopian IT Park was established as a cornerstone of Ethiopias digital transformation journey. Since our inception, weve been dedicated to creating a thriving ecosystem for technology innovation and entrepreneurship in Ethiopia.
              </p>
              <div className="about-timeline">
                <motion.div
                  className="about-timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="about-timeline-year">2020</span>
                  <p>Foundation and Infrastructure Development</p>
                </motion.div>
                <motion.div
                  className="about-timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="about-timeline-year">2021</span>
                  <p>Launch of Incubation Programs</p>
                </motion.div>
                <motion.div
                  className="about-timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="about-timeline-year">2022</span>
                  <p>International Partnerships Established</p>
                </motion.div>
                <motion.div
                  className="about-timeline-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="about-timeline-year">2023</span>
                  <p>Expansion and Growth</p>
                </motion.div>
              </div>
            </div>
          </AboutSection>
          

          {/* Mission, Vision, Values Cards */}
          <div className="about-mission-vision-values">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={item.title}
                className="about-mission-vision-values-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="about-mission-vision-values-header">
                  {item.icon}
                  <h3>{item.title}</h3>
                </div>
                {Array.isArray(item.content) ? (
                  <ul className="about-values-list">
                    {item.content.map((value, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaHeart className="about-value-icon" /> {value}
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>          

          <motion.p
            className="about-it-park-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Africa’s Innovation Pulse
          </motion.p>

          {/* Features Grid */}
          <div className="about-features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="about-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="about-feature-header">
                  <div className="about-feature-icon-wrapper">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="about-cta-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="#"
              className="about-cta-btn about-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.a>
            <motion.a
              href="#"
              className="about-cta-btn about-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.a>
            <motion.a
              href="#"
              className="about-cta-btn about-accent"
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
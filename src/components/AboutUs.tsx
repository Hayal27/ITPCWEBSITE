import React, { useEffect, useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../public/assets/css/AboutUs.css';

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
          <h2>We Are</h2>
          <p className="intro">
            Ethiopia's premier technology Hub – empowering innovators, entrepreneurs, and the community to shape Africa's digital future.
          </p>

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
            <div className="text-container">
              <h3>Innovation at Scale</h3>
              <p className="about-general">
                Ethiopian IT Park stands at the crossroads of innovation and industry, providing
                a dedicated ecosystem where ideas are nurtured from conception to market-ready
                solutions. With modern facilities tailored for R&D, prototyping, and large-scale
                deployments, the Park bridges the gap between academia, startups, and established
                enterprises.
              </p>
            </div>
          </div>

          <div className="image-text-block scroll-animate image-right">
            <div className="text-container">
              <h3>Collaborative Ecosystem</h3>
              <p className="about-general">
                At its heart lies a commitment to collaboration: co-working spaces buzzing with
                diverse talents, regular meetups that spark cross-disciplinary partnerships, and
                mentoring programs that connect seasoned professionals with budding technologists.
                This synergy fuels novel applications in AI, IoT, renewable energy, and beyond.
              </p>
            </div>
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
            <div className="text-container">
              <h3>Talent Development</h3>
              <p className="about-general">
                Beyond infrastructure, Ethiopian IT Park invests in talent development through
                workshops, certification programs, and direct industry placements, ensuring
                graduates and innovators alike are equipped to drive both national and continental
                digital transformation. Join us in building the future of technology in Africa.
              </p>
            </div>
          </div>
        </motion.header>
      </div>
    </section>
  );
};

export default AboutUs;

import React, { useEffect, useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGlobeAfrica,
  FaBuilding,
  FaHistory,
  FaEye,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaPaperPlane,
  FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Mission-Vision.css';
// Import the logo image properly
import logoImage from '/images/logo.png';

const keyValues = [
  {
    icon: <FaGlobeAfrica className="feature-icon" />,
    title: 'African Leadership',
    desc: `Positioning Ethiopia as the premier IT hub in Africa`
  },
  {
    icon: <FaBuilding className="feature-icon" />,
    title: 'World-Class Environment',
    desc: `Providing state-of-the-art infrastructure and business facilities`
  },
  {
    icon: <FaLightbulb className="feature-icon" />,
    title: 'Innovation Focus',
    desc: `Fostering technological innovation and digital transformation`
  },
  {
    icon: <FaRocket className="feature-icon" />,
    title: 'Growth Catalyst',
    desc: `Driving the development of Ethiopia's ICT sector`
  }
];

// Contact Form Modal Component
const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      // Success case
      setFormStatus({ submitting: false, submitted: true, error: null });
      
      // Reset form after success
      setTimeout(() => {
        if (formStatus.submitted && !formStatus.error) {
          onClose();
          setFormData({ name: '', email: '', phone: '', message: '' });
          setFormStatus({ submitting: false, submitted: false, error: null });
        }
      }, 2000);
      
      // Error case example (uncomment to test)
      // setFormStatus({ submitting: false, submitted: false, error: "Network error. Please try again." });
    }, 1500);
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="contact-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3><FaEnvelope /> Contact Ethiopian IT Park</h3>
              <button className="close-button" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-body">
              {formStatus.submitted ? (
                <div className="success-message">
                  <FaPaperPlane className="success-icon" />
                  <h4>Thank you for contacting us!</h4>
                  <p>We have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  
                  {formStatus.error && (
                    <div className="error-message">
                      {formStatus.error}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Reusable section component for alternating layout
const AboutSection = ({
  image,
  alt,
  children,
  reverse = false,
}) => (
  <div className={`image-text-block ${reverse ? 'image-right' : 'image-left'}`}>
    <div className="image-container1">
      <img src={image} alt={alt} />
      <div className="image-overlay">
        <div className="social-links">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
        </div>
      </div>
    </div>
    <motion.div
      className="text-container"
      initial={{ opacity: 0, x: reverse ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  </div>
);

const MissionVision = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements that need animation
    const elements = document.querySelectorAll('.image-text-block, .about-voice, .about-cta');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
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
            <h2>About Ethiopian IT Park</h2>
          </div>
          <motion.p className="intro inspiring-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
            <strong>Established</strong> to drive Ethiopia's digital future and position the country as a global leader in technological innovation and digital transformation.
          </motion.p>

          {/* Our History */}
          <AboutSection image={logoImage} alt="IT Park History">
            <h3><FaHistory style={{ color: 'var(--color-secondary)', marginRight: 8 }} /> Our History</h3>
            <p className="about-general">
              The Ethiopian IT Park was established through <strong>regulation No. 177/2010</strong> and re-established in 2023 under the authority of the <strong>Ministry of Innovation and Technology (MInT)</strong>. Governed by an independent Board of Directors, we are dedicated to fostering the growth of the ICT sector in Ethiopia.
            </p>
          </AboutSection>

          {/* Our Vision */}
          <AboutSection image={logoImage} alt="Our Vision" reverse={true}>
            <h3><FaEye style={{ color: 'var(--color-primary)', marginRight: 8 }} /> Our Vision</h3>
            <p className="about-general">
              To establish Ethiopia as the <strong>premier IT hub in Africa</strong>, positioning the country as a <strong>global leader</strong> in technological innovation and digital transformation.
            </p>
          </AboutSection>

          {/* Our Mission */}
          <AboutSection image={logoImage} alt="Our Mission" reverse={false}>
            <h3><FaBullseye style={{ color: 'var(--color-accent)', marginRight: 8 }} /> Our Mission</h3>
            <p className="about-general">
              To provide the impetus for the development of the ICT sector in Ethiopia. We achieve this by offering a <strong>world-class business environment</strong>, conducive policies, <strong>state-of-the-art infrastructure</strong>, and a compelling value proposition. Through strategic initiatives, we aim to position Ethiopia as the <strong>preferred IT hub of Africa</strong>.
            </p>
          </AboutSection>

          {/* Key Values */}
          <AboutSection image={logoImage} alt="Our Values" reverse={true}>
            <h3><FaLightbulb style={{ color: 'var(--color-primary)', marginRight: 8 }} /> Our Key Values</h3>
            <div className="features-table">
              {keyValues.map((value, i) => (
                <div className="feature-row" key={i}>
                  <span className="feature-title">{value.title}</span>
                  <span className="feature-desc">{value.desc}</span>
                </div>
              ))}
            </div>
          </AboutSection>

          {/* Inspirational Quote */}
          <div className="about-voice">
            <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
              "Driving Ethiopia's digital transformation and establishing our nation as Africa's premier technology hub."
            </motion.blockquote>
          </div>

          {/* Call to Action */}
          <div className="about-cta">
            <motion.a href="/resources/digital/news" className="cta-btn primary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>Learn More</motion.a>
            <motion.a href="/services" className="cta-btn secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }}>Our Services</motion.a>
            <motion.button 
              className="cta-btn accent" 
              onClick={() => setContactModalOpen(true)}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.header>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </section>
  );
};

export default MissionVision;
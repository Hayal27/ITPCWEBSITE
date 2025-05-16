
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaAngleUp
} from 'react-icons/fa';
import logo from '/images/logo.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="dk-footer">
      <div className="sample footer-wrapper">
        {/* Info Column */}
        <div className="footer-col footer-info">
          <a href="/" className="footer-logo">
            <img src={logo} alt="Ethiopian IT Park Logo" />
          </a>
          <p className="footer-text">
            Ethiopian IT Park is the premier tech hub in Addis Ababa—fostering
            innovation, collaboration, and Ethiopia’s digital transformation.
          </p>
          <div className="social-links">
            {[
              { Icon: FaFacebookF, color: '#3b5998' },
              { Icon: FaTwitter, color: '#1da1f2' },
              { Icon: FaLinkedinIn, color: '#0077b5' },
              { Icon: FaInstagram, color: '#e4405f' },
            ].map(({ Icon, color }, idx) => (
              <a
                key={idx}
                href="#"
                className="social-link"
                style={{ '--icon-color': color } as any}
              >
                <Icon className="social-icon" />
              </a>
            ))}
          </div>
          <div className="award">
            <img
              src="/images/logo.png"
              alt="Award"
              className="award-icon"
            />
            <span className="award-text">
              Top African Tech Hub
            </span>
          </div>
        </div>

        {/* Contact & Map Column */}
        <div className="footer-col footer-contact">
          <div className="contact-list">



          <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h5 className="contact-title">+251 11 123 4567</h5>
                <p className="contact-sub">Contact Our Office</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h5 className="contact-title">Ethiopian IT Park</h5>
                <p className="contact-sub">Addis Ababa, Bole Road</p>
              </div>
            </div>

          </div>
          <div className="map-container">
            <h5 className="map-title">Our Location</h5>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps?q=XR8R%2BC5H%20Addis%20Ababa&output=embed"
                title="Ethiopian IT Park (ICT Park) Location"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Links & Subscribe Column */}
        <div className="footer-col footer-actions">
          <div className="action-block">
            <div className="animated-line" />
            <h5 className="action-title">Useful Links</h5>
            <ul className="action-list">
              {['About Us', 'Programs', 'Events', 'Partners'].map((txt) => (
                <li key={txt}>
                  <a href="#">{txt}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="action-block">
            <div className="animated-line reverse" />
            <h5 className="action-title">Subscribe</h5>
            <p className="action-text">
              Get the latest news and updates from Ethiopian IT Park.
            </p>
            <form
              className="subscribe-form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleChange}
                required
              />
              <button type="submit" aria-label="Send">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} Ethiopian IT Park. All rights reserved.
        </small>
        <ul className="bottom-links">
          {['Home', 'Terms', 'Privacy Policy', 'Contact'].map((txt) => (
            <li key={txt}>
              <a href="#">{txt}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Back to Top */}
      <button
        id="back-to-top"
        className={`back-to-top ${showTop ? 'show' : ''}`}
        title="Back to Top"
        onClick={scrollToTop}
      >
        <FaAngleUp />
      </button>
    </footer>
  );
};

export default Footer;

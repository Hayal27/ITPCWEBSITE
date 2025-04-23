import React from 'react';

const Footer: React.FC = () => (
  <footer className="main-footer">
    {/* Let's Work Together */}
    <div className="footer-work-together">
      <div className="container">
        <div className="work-together-content text-center">
          <div className="section-title"><h2>Let's Work Together</h2></div>
          <div className="work-together-btn">
            <a href="/contact"><i className="fa-solid fa-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="footer-main">
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="col-lg-7">
            <div className="about-footer">
              <div className="footer-logo">
                <img src="/assets/images/footer-logo.svg" alt="Footer Logo" />
              </div>
              <div className="footer-social-list">
                <ul><li><a href="#"><i className="fa-brands fa-instagram" /> instagram</a></li></ul>
              </div>
              <div className="footer-links">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/service">Services</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <p>Our collaborative approach ensures that we understand your unique vision and deliver tailored solutions that drive results.</p>
            </div>
          </div>
          {/* Right */}
          <div className="col-lg-5">
            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for exclusive content and updates.</p>
              <form id="newsletterForm" onSubmit={e => e.preventDefault()}>
                <div className="form-group d-flex">
                  <input type="email" name="email" className="form-control" placeholder="Enter Email" required />
                  <button type="submit" className="btn-default">subscribe</button>
                </div>
              </form>
              <p>We're excited to partner with you on your journey.</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-copyright mt-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ul className="footer-privacy-policy">
                <li><a href="#">Presentation (PDF)</a></li>
                <li><a href="/faqs">FAQ's</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="col-lg-5 text-lg-end">
              <p>© 2024 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
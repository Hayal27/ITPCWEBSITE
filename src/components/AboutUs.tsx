import React from 'react';

const AboutUs: React.FC = () => (
  <section className="about-us">
    <div className="container">
      <div className="row">
        {/* Left: Images + badge + progress */}
        <div className="col-lg-6">
          <div className="about-images position-relative">
            <figure className="about-img-1 image-anime reveal">
              <img src="/assets/images/about-img-1.jpg" alt="About 1" />
            </figure>
            <figure className="about-img-2 image-anime reveal">
              <img src="/assets/images/about-img-2.jpg" alt="About 2" />
            </figure>
            <div className="about-exprience-box wow fadeInUp">
              <div className="icon-box">
                <img src="/assets/images/icon-about-exprience.svg" alt="Badge" />
              </div>
              <div className="about-exprience-content">
                <h3>experience advisor</h3>
              </div>
            </div>
            <div className="satisfied-customer-box">
              <div className="satisfied-progress-circle">
                <div className="circle" data-value="0.9">
                  <div className="progress_value">
                    <span className="pro_data">90</span><span>%</span>
                  </div>
                </div>
                <h3>Satisfied Customer</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title">
              <h3 className="wow fadeInUp">about us</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Igniting your digital presence
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Born from the desire to push creative boundaries, we've been delivering innovative solutions since 2010. Our team of experts brings together a wealth of experience in branding, design, and marketing.
              </p>
            </div>
            <div className="about-cta-box wow fadeInUp" data-wow-delay="0.6s">
              <div className="icon-box">
                <img src="/assets/images/icon-about-cta.svg" alt="CTA" />
              </div>
              <figure className="about-cta-image">
                <img src="/assets/images/about-cta-image.jpg" alt="Call Now" />
              </figure>
              <div className="about-cta-content">
                <p>Whether you have questions about our services? Call Now</p>
              </div>
            </div>
            <ul className="about-content-body wow fadeInUp" data-wow-delay="0.8s">
              <li>Tips and Tricks</li>
              <li>Know About farm</li>
              <li>Your Startup</li>
              <li>Mistakes To Avoid</li>
            </ul>
            <div className="about-content-btn wow fadeInUp" data-wow-delay="1s">
              <a href="/about" className="btn-default">let's start</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
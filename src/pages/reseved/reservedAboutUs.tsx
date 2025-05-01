import React from 'react';

const AboutAreaThree: React.FC = () => (
  <section className="about-area-three">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-9">
          <div className="about-img-wrap-three">
            <img src="website/img/images/h2_about_img01.jpg" alt="" data-aos="fade-down-right" data-aos-delay="0" />
            <div className="experience-wrap" data-aos="fade-up" data-aos-delay="300">
              <h2 className="title">5+ <span>Years</span></h2>
              <p>Of Experience in Enterprise Software.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content-three">
            <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
              <span className="sub-title">Get To know US</span>
              <h2 className="title tg-element-title">Beyond software: Partnering for your success.</h2>
            </div>
            <p className="info-one">At Abronal Technologies, We build custom solutions tailored to your specific challenges, not generic fixes.  Our expert developers craft solutions from scratch, ensuring a local touch.  Continuous updates keep your technology future-proof, while our dedication to exceptional service guarantees a smooth transition.  Beyond going paperless, we empower you to unlock actionable insights from your digitized data.</p>
            <div className="about-list-two">
              <ul className="list-wrap">
                <li><i className="fas fa-arrow-right"></i>Exceptional customer service at every step.</li>
                <li><i className="fas fa-arrow-right"></i>Customizable solutions tailored to your workflow.</li>
                <li><i className="fas fa-arrow-right"></i>Scalable systems that grow with your business.</li>
                <li><i className="fas fa-arrow-right"></i>Transforming data into actionable insights.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-shape-wrap-two">
      <img src="website/img/images/h2_about_shape01.png" alt="" />
      <img src="website/img/images/h2_about_shape02.png" alt="" />
      <img src="website/img/images/h2_about_shape03.png" alt="" data-aos="fade-left" data-aos-delay="500" />
    </div>
  </section>
);

export default AboutAreaThree;
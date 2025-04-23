import React from 'react';

const services = [
  {
    icon: '/assets/images/icon-services-1.svg',
    title: 'optimization',
    desc: 'Our services include SEO Optimization to enhance organic search visibility.',
  },
  {
    icon: '/assets/images/icon-services-2.svg',
    title: 'pay-per click',
    desc: 'Pay-Per-Click (PPC) Advertising for targeted lead generation.',
  },
  {
    icon: '/assets/images/icon-services-3.svg',
    title: 'social media',
    desc: "Comprehensive social media strategy and management for brand engagement.",
  },
];

const OurServices: React.FC = () => (
  <section className="our-services">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp">our services</h3>
            <h2 className="wow fadeInUp" data-wow-delay="0.25s">
              The digital solution you need
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
            <a href="/service" className="btn-default">view all services</a>
          </div>
        </div>
      </div>
      <div className="row">
        {services.map((s, i) => (
          <div className="col-lg-4 col-md-6" key={i}>
            <div className="service-item wow fadeInUp" data-wow-delay={`${i * 0.25}s`}>
              <div className="icon-box">
                <img src={s.icon} alt={s.title} />
              </div>
              <div className="service-body">
                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="service-btn">
                  <a href="/service-single" className="readmore-btn">read more</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices;
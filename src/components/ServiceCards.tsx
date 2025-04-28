
import React from 'react';
import {
  FaTree,
  FaBuilding,
  FaServer,
  FaHandsHelping,
} from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
}

const services: Service[] = [
  {
    icon: <FaTree size={48} color="#16284F" />,
    title: 'Leased Land',
    desc: 'Ethiopian IT Park offers prime leased land for tech enterprises to build their facilities with robust utilities and infrastructure.',
    link: '/leased-land',
  },
  {
    icon: <FaBuilding size={48} color="#16284F" />,
    title: 'Office Rent',
    desc: 'Flexible office spaces available for rent within the park, fully serviced and scalable to business needs.',
    link: '/office-rent',
  },
  {
    icon: <FaServer size={48} color="#16284F" />,
    title: 'IT Infrastructure',
    desc: 'State-of-the-art IT infrastructure including high-speed connectivity, data centers, and cloud resources.',
    link: '/it-infrastructure',
  },
  {
    icon: <FaHandsHelping size={48} color="#16284F" />,
    title: 'Consulting & Outsourcing',
    desc: 'Expert consulting services and outsourcing support to accelerate your growth and streamline operations.',
    link: '/consulting-outsourcing',
  },
];

const ServiceCards: React.FC = () => (
  <section className="our-services py-5">
    <div className="container">
      <div className="row section-row align-items-center mb-4">
        <div className="col-lg-6">
          <div className="section-title">
            <h3 className="wow fadeInUp text-secondary" style={{ color: '#0C7C92' }}>Our Services</h3>
            <h2 className= "wow fadeInUp text-dark" data-wow-delay="0.25s" style={{ color: '#0C7C92' }}>
              What We Offer As Ethipian IT Park
            </h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="section-btn wow fadeInUp" data-wow-delay="0.5s" style={{ color: '#0C7C92' }}>
            <a href="/services" className="btn-default text-white">View All Services</a>
          </div>
        </div>
      </div>
      <div className="row">
        {services.map((s, i) => (
          <div className="col-lg-3 col-md-6 mb-4" key={i}>
            <div
              className="service-item wow fadeInUp h-100"
              data-wow-delay={`${i * 0.25}s`}
            >
              <div className="icon-box mb-3">
                {s.icon}
              </div>
              <div className="service-body">
                <div className="service-content">
                  <h3
                    className="service-title"
                    style={{ color: '#0C7C92' }}
                  >
                    {s.title}
                  </h3>
                  <p className="service-desc text-muted">{s.desc}</p>
                </div>
                <div className="service-btn mt-2">
                  <a
                    href={s.link}
                    className="readmore-btn"
                    style={{ color: '#0C7C92' }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceCards;

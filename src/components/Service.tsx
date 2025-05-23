import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloud, FaBuilding, FaUsers, FaGraduationCap, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import '../styles/Service.css';

interface Service {
  title: string;
  description: string;
  details: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    title: 'Cloud Services',
    description: 'Secure, scalable, and locally hosted cloud infrastructure for digital transformation.',
    details: [
      'Scalable cloud hosting & storage solutions',
      'Platform as a Service (PaaS) environments',
      'Infrastructure as a Service (IaaS) options',
      'Cloud security & compliance services',
    ],
    Icon: FaCloud,
    color: '#0C7C92',
    gradient: 'linear-gradient(135deg, #0C7C92 0%, #6EC9C4 100%)',
  },
  {
    title: 'Smart Infrastructure',
    description: 'Modern office spaces and facilities designed for innovation and collaboration.',
    details: [
      'Flexible smart office rentals',
      'High-speed internet & power backup',
      'Meeting rooms & event spaces',
      'Co-working zones & innovation hubs',
    ],
    Icon: FaBuilding,
    color: '#6EC9C4',
    gradient: 'linear-gradient(135deg, #6EC9C4 0%, #0C7C92 100%)',
  },
  {
    title: 'Incubation & Acceleration',
    description: 'Comprehensive support for startups and innovative businesses.',
    details: [
      'Startup incubation programs',
      'Mentorship & expert coaching',
      'Business model development',
      'Access to co-working spaces',
    ],
    Icon: FaUsers,
    color: '#16284F',
    gradient: 'linear-gradient(135deg, #16284F 0%, #0C7C92 100%)',
  },
  {
    title: 'Capacity Building',
    description: 'Advanced training and skill development programs.',
    details: [
      'Digital skills training programs',
      'Software development bootcamps',
      'Entrepreneurship workshops',
      'Specialized ICT certifications',
    ],
    Icon: FaGraduationCap,
    color: '#0C7C92',
    gradient: 'linear-gradient(135deg, #0C7C92 0%, #6EC9C4 100%)',
  },
  {
    title: 'Innovation Services',
    description: 'Cutting-edge technology and innovation support.',
    details: [
      'Access to innovation labs',
      'AI & IoT sandbox environments',
      'Product testing & prototyping',
      'R&D partnership programs',
    ],
    Icon: FaLightbulb,
    color: '#6EC9C4',
    gradient: 'linear-gradient(135deg, #6EC9C4 0%, #0C7C92 100%)',
  },
  {
    title: 'Business Development',
    description: 'Comprehensive support for business growth and success.',
    details: [
      'Market research and advisory',
      'Networking & B2B events',
      'Investment facilitation',
      'Policy & regulatory guidance',
    ],
    Icon: FaChartLine,
    color: '#16284F',
    gradient: 'linear-gradient(135deg, #16284F 0%, #0C7C92 100%)',
  },
];

const Service: React.FC = () => {
  return (
    <section className="service-preview">
      <div className="service-preview-header">
        <motion.h2 
          className="service-preview-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="service-preview-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering innovation and digital transformation in Ethiopia
        </motion.p>
      </div>
      
      <div className="service-preview-grid grid
                    gap-10
                    sm:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    3xl:grid-cols-4
                    4xl:grid-cols-5
                    5xl:grid-cols-6">
        {services.map((service, index) => {
          const Icon = service.Icon;
          return (
            <motion.div
              key={service.title}
              className="service-preview-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-preview-icon-container" style={{ background: service.gradient }}>
                <Icon className="service-preview-icon" />
              </div>
              
              <div className="service-preview-content">
                <h3 className="service-preview-card-title">
                  <Link to="/services">{service.title}</Link>
                </h3>
                <p className="service-preview-description">{service.description}</p>
                
                <ul className="service-preview-features">
                  {service.details.map((detail) => (
                    <li key={detail} className="service-preview-feature">
                      <span className="feature-check">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/services" className="service-preview-link">
                  Learn More
                  <MdArrowForward className="arrow-icon" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        className="service-preview-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/services" className="service-preview-cta-button">
          Explore All Services
          <MdArrowForward className="arrow-icon" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Service;
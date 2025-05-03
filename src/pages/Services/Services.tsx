import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaLightbulb, FaRocket, FaHandshake, FaGraduationCap, FaTools, FaHeadset } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import './Services.css';

// Service categories data
const serviceCategories = [
  {
    id: 1,
    title: 'Infrastructure Services',
    icon: FaBuilding,
    description: 'State-of-the-art facilities and infrastructure for tech businesses',
    services: [
      'Smart, sustainable office spaces',
      'Modular workspaces for BPOs & Dev Hubs',
      'High-speed fiber internet',
      '24/7 power backup',
      'Tier III data centers'
    ]
  },
  {
    id: 2,
    title: 'Innovation & Research',
    icon: FaLightbulb,
    description: 'Cutting-edge research and development support',
    services: [
      'R&D Labs with advanced equipment',
      'AI & ML collaboration platforms',
      'Academia-industry bridges',
      'Innovation funding programs'
    ]
  },
  {
    id: 3,
    title: 'Incubation & Acceleration',
    icon: FaRocket,
    description: 'Comprehensive support for startups and innovators',
    services: [
      'Business incubation programs',
      'Mentorship & coaching',
      'Pitch days & demo days',
      'Early-stage startup support'
    ]
  },
  {
    id: 4,
    title: 'Investment Facilitation',
    icon: FaHandshake,
    description: 'End-to-end support for investors and businesses',
    services: [
      'Investor onboarding',
      'Business setup assistance',
      'Policy guidance & legal help',
      'Site allocation & licensing'
    ]
  },
  {
    id: 5,
    title: 'Talent & Training',
    icon: FaGraduationCap,
    description: 'Capacity building and talent development',
    services: [
      'Tech bootcamps & certifications',
      'Talent matchmaking platform',
      'Internships & youth upskilling',
      'Industry-academia programs'
    ]
  },
  {
    id: 6,
    title: 'Business Support',
    icon: FaTools,
    description: 'Essential tools and resources for business growth',
    services: [
      'Document templates & kits',
      'Cloud & software solutions',
      'Startup registration support',
      'e-Gov & finance tools'
    ]
  }
];

// Zonal services data
const zonalServices = [
  {
    id: 1,
    title: 'BPO Zone',
    description: 'Shared infrastructure and support for business process outsourcing',
    features: ['Call center facilities', 'Shared workspaces', 'Training rooms', 'Support services']
  },
  {
    id: 2,
    title: 'Software Zone',
    description: 'Development labs and tools for software companies',
    features: ['DevOps tools', 'Testing grounds', 'Collaboration spaces', 'Tech support']
  },
  {
    id: 3,
    title: 'Innovation Zone',
    description: 'Research and innovation facilities',
    features: ['Research grants', 'University partnerships', 'Prototyping labs', 'Mentorship']
  },
  {
    id: 4,
    title: 'Emerging Tech Zone',
    description: 'Facilities for cutting-edge technologies',
    features: ['Blockchain labs', 'Fintech support', 'AI/ML facilities', 'IoT labs']
  }
];

// Target audience data
const targetAudience = [
  {
    id: 1,
    title: 'Startups',
    description: 'Incubation, co-working, and funding support',
    icon: FaRocket
  },
  {
    id: 2,
    title: 'Corporates',
    description: 'Office leasing, talent access, and innovation labs',
    icon: FaBuilding
  },
  {
    id: 3,
    title: 'Investors',
    description: 'Licensing, consultation, and tax benefits',
    icon: FaHandshake
  },
  {
    id: 4,
    title: 'Academia',
    description: 'Lab access, collaboration, and publishing support',
    icon: FaGraduationCap
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [stats, setStats] = useState({
    zones: 0,
    companies: 0,
    services: 0,
    partners: 0,
    youth: 0
  });

  useEffect(() => {
    // Animate stats
    const interval = setInterval(() => {
      setStats(prev => ({
        zones: Math.min(prev.zones + 1, 5),
        companies: Math.min(prev.companies + 5, 60),
        services: Math.min(prev.services + 1, 15),
        partners: Math.min(prev.partners + 1, 12),
        youth: Math.min(prev.youth + 50, 1000)
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="itpc-services-page">
      {/* Hero Section */}
      <section className="itpc-services-hero">
        <div className="itpc-services-container">
          <motion.div 
            className="itpc-services-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="itpc-services-hero-title">World-Class Services for Africa's Digital Future</h1>
            <p className="itpc-services-hero-text">From startups to tech giants — we power your journey with the infrastructure, talent, and tools you need to thrive.</p>
            <div className="itpc-services-hero-cta">
              <button className="itpc-services-btn-primary">Explore Services</button>
              <button className="itpc-services-btn-secondary">Get Started Today</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="itpc-services-categories">
        <div className="itpc-services-container">
          <div className="itpc-services-section-header">
            <h2 className="itpc-services-section-title">Our Service Categories</h2>
            <p className="itpc-services-section-text">Comprehensive solutions for every stage of your tech journey</p>
          </div>
          <div className="itpc-services-categories-grid">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  className="itpc-services-category-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="itpc-services-category-icon">
                    <Icon />
                  </div>
                  <h3 className="itpc-services-category-title">{category.title}</h3>
                  <p className="itpc-services-category-text">{category.description}</p>
                  <ul className="itpc-services-category-list">
                    {category.services.map((service, i) => (
                      <li key={i} className="itpc-services-category-item">{service}</li>
                    ))}
                  </ul>
                  <button className="itpc-services-btn-link">
                    Learn More <BsArrowRight />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zonal Services */}
      <section className="itpc-services-zones">
        <div className="itpc-services-container">
          <div className="itpc-services-section-header">
            <h2 className="itpc-services-section-title">Our Service Zones</h2>
            <p className="itpc-services-section-text">Specialized areas designed for different tech sectors</p>
          </div>
          <div className="itpc-services-zones-tabs">
            {zonalServices.map((zone, index) => (
              <button
                key={zone.id}
                className={`itpc-services-tab-btn ${activeTab === index ? 'itpc-services-tab-active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {zone.title}
              </button>
            ))}
          </div>
          <div className="itpc-services-zone-content">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="itpc-services-zone-title">{zonalServices[activeTab].title}</h3>
              <p className="itpc-services-zone-text">{zonalServices[activeTab].description}</p>
              <ul className="itpc-services-zone-list">
                {zonalServices[activeTab].features.map((feature, index) => (
                  <li key={index} className="itpc-services-zone-item">{feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="itpc-services-audience">
        <div className="itpc-services-container">
          <div className="itpc-services-section-header">
            <h2 className="itpc-services-section-title">Who We Serve</h2>
            <p className="itpc-services-section-text">Tailored solutions for different sectors</p>
          </div>
          <div className="itpc-services-audience-grid">
            {targetAudience.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.id}
                  className="itpc-services-audience-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="itpc-services-audience-icon">
                    <Icon />
                  </div>
                  <h3 className="itpc-services-audience-title">{audience.title}</h3>
                  <p className="itpc-services-audience-text">{audience.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="itpc-services-stats">
        <div className="itpc-services-container">
          <div className="itpc-services-stats-grid">
            <motion.div
              className="itpc-services-stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="itpc-services-stat-number">{stats.zones}</h3>
              <p className="itpc-services-stat-text">Service Zones</p>
            </motion.div>
            <motion.div
              className="itpc-services-stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="itpc-services-stat-number">{stats.companies}+</h3>
              <p className="itpc-services-stat-text">Companies</p>
            </motion.div>
            <motion.div
              className="itpc-services-stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="itpc-services-stat-number">{stats.services}+</h3>
              <p className="itpc-services-stat-text">Services</p>
            </motion.div>
            <motion.div
              className="itpc-services-stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="itpc-services-stat-number">{stats.partners}+</h3>
              <p className="itpc-services-stat-text">Partners</p>
            </motion.div>
            <motion.div
              className="itpc-services-stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="itpc-services-stat-number">{stats.youth}+</h3>
              <p className="itpc-services-stat-text">Youth Trained</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadables */}
      <section className="itpc-services-downloads">
        <div className="itpc-services-container">
          <div className="itpc-services-section-header">
            <h2 className="itpc-services-section-title">Resources & Downloads</h2>
            <p className="itpc-services-section-text">Essential documents and guides for your journey</p>
          </div>
          <div className="itpc-services-download-grid">
            <motion.div
              className="itpc-services-download-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="itpc-services-download-icon" />
              <h3 className="itpc-services-download-title">Service Catalog</h3>
              <p className="itpc-services-download-text">Comprehensive guide to our services</p>
              <button className="itpc-services-btn-download">Download PDF</button>
            </motion.div>
            <motion.div
              className="itpc-services-download-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="itpc-services-download-icon" />
              <h3 className="itpc-services-download-title">Startup Kit</h3>
              <p className="itpc-services-download-text">Essential resources for startups</p>
              <button className="itpc-services-btn-download">Download ZIP</button>
            </motion.div>
            <motion.div
              className="itpc-services-download-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="itpc-services-download-icon" />
              <h3 className="itpc-services-download-title">Investment Guide</h3>
              <p className="itpc-services-download-text">Guide for investors and partners</p>
              <button className="itpc-services-btn-download">Download PDF</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="itpc-services-support">
        <div className="itpc-services-container">
          <div className="itpc-services-cta-content">
            <h2 className="itpc-services-cta-title">Need Help Choosing the Right Service?</h2>
            <p className="itpc-services-cta-text">Our service advisors are here to help you make the best choice for your needs.</p>
            <div className="itpc-services-cta-buttons">
              <button className="itpc-services-btn-primary">
                <FaHeadset className="itpc-services-cta-icon" /> Book Consultation
              </button>
              <button className="itpc-services-btn-secondary">Contact Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 
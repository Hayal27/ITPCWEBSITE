import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaLock, FaTools, FaNetworkWired, FaChartBar, FaRobot, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import './Services.css';

const itServices = [
  {
    icon: <FaLaptopCode className="text-primary text-4xl" />,
    title: 'Custom Software Development',
    description: [
      'Web, mobile, and desktop app development',
      'Full-cycle: idea, design, build, deploy',
      'Modern, scalable, and secure solutions',
    ],
  },
  {
    icon: <FaCloud className="text-primary text-4xl" />,
    title: 'Cloud Solutions',
    description: [
      'Cloud migration & infrastructure setup',
      'Azure, AWS, Google Cloud expertise',
      'Managed, scalable, and cost-effective services',
    ],
  },
  {
    icon: <FaLock className="text-primary text-4xl" />,
    title: 'Cybersecurity Services',
    description: [
      'Security audits & risk assessments',
      'Endpoint protection & firewalls',
      'Data protection & compliance',
    ],
  },
  {
    icon: <FaTools className="text-primary text-4xl" />,
    title: 'IT Support & Maintenance',
    description: [
      '24/7 technical support',
      'System updates & troubleshooting',
      'Performance monitoring & managed IT',
    ],
  },
  {
    icon: <FaNetworkWired className="text-primary text-4xl" />,
    title: 'Network Infrastructure',
    description: [
      'Network design & implementation',
      'Wireless, cabling, VPN, firewall setup',
      'Reliable & secure connectivity',
    ],
  },
  {
    icon: <FaUserTie className="text-primary text-4xl" />,
    title: 'IT Consulting',
    description: [
      'Digital transformation strategy',
      'IT infrastructure assessment & planning',
      'Technology selection & guidance',
    ],
  },
  {
    icon: <FaChartBar className="text-primary text-4xl" />,
    title: 'Data Analytics & Business Intelligence',
    description: [
      'Custom dashboards & reporting',
      'Data warehouse setup & management',
      'Predictive analytics & insights',
    ],
  },
  {
    icon: <FaRobot className="text-primary text-4xl" />,
    title: 'AI & Automation',
    description: [
      'Process automation & chatbots',
      'Machine learning model integration',
      'AI for enterprise applications',
    ],
  },
];

const Services: React.FC = () => (
  <div className="itpc-services-page">
    {/* Hero Section */}
    <section className="itpc-services-hero">
      <div className="itpc-services-hero-content">
        <motion.div 
          className="itpc-services-hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="itpc-services-hero-title">IT Services</h1>
          <p className="itpc-services-hero-subtitle">
            At <span className="font-bold" style={{ color: '#16284F' }}>Ethiopian IT Park</span>, we provide innovative and reliable IT solutions to help organizations stay ahead in the digital era. From system development to cloud computing, our expert team delivers tailored services designed to meet your unique business needs.
          </p>
        </motion.div>
      </div>
    </section>

    {/* IT Services Grid */}
    <section className="itpc-services-categories">
      <div className="itpc-services-container">
        <div className="itpc-services-section-header">
          <h2 className="itpc-services-section-title">Our IT Service Offerings</h2>
          <p className="itpc-services-section-text">Comprehensive, modern solutions for every stage of your digital journey</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {itServices.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-row items-start p-6"
              style={{
                width: '100%',
                maxWidth: 420,
                minWidth: 300,
                margin: '0 auto',
                flex: '1 1 340px',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="flex-shrink-0 mr-5 mt-1">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-accent mb-2">{service.title}</h3>
                <ul className="text-gray-700 list-disc pl-5 space-y-1 text-base font-normal">
                  {service.description.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
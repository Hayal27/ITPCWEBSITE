import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaRocket, FaLightbulb, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import '../styles/IncubationCard.css';

const programs = [
  {
    title: "Startup Support",
    icon: <FaRocket />,
    description: "Office spaces, mentorship, and pitch events to accelerate your growth.",
    link: "/incubation/startups"
  },
  {
    title: "Capacity Building",
    icon: <FaGraduationCap />,
    description: "Workshops, bootcamps, and training programs to upskill your team.",
    link: "/incubation/training"
  },
  {
    title: "Innovation Labs",
    icon: <FaLaptopCode />,
    description: "Access to labs, funding, and corporate collaborations for innovation.",
    link: "/incubation/innovation-programs"
  }
];

const successStories = [
  {
    image: '/assets/images/ie-network-solutions.png',
    stats: [
      { number: '250+', label: 'Completed Projects' },
      { number: '200+', label: 'Clients Served' },
      { number: '500M+ ETB', label: 'Annual Revenue' },
    ],
    title: 'IE Network Solutions',
    description: [
      'A leading tech company delivering impactful solutions.',
      'Award-winning digital transformation partner.',
    ],
    link: '/incubation/startups/success',
  },
  {
    image: '/assets/images/success-story-1.png',
    stats: [
      { number: '2', label: 'Years' },
      { number: '50+', label: 'Jobs Created' },
    ],
    title: 'Tech Innovators',
    description: [
      'From idea to market leader in just 2 years.',
      'Created 50+ jobs and fostered innovation.',
    ],
    link: '/incubation/startups/success',
  },
  {
    image: '/assets/images/success-story-2.png',
    stats: [
      { number: '3', label: 'Products' },
      { number: '100+', label: 'Clients' },
    ],
    title: 'Digital Solutions',
    description: [
      'Revolutionizing the industry with innovative technology.',
      'Trusted by 100+ clients.',
    ],
    link: '/incubation/startups/success',
  },
];

const IncubationCard: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.itpc-incubation-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`itpc-incubation-section ${isVisible ? 'visible' : ''}`}>
      <Container>
        {/* Header Section */}
        <Row className="mb-5 text-center">
          <Col lg={12}>
            <h2 className="itpc-section-title">Incubation & Innovation</h2>
            <p className="itpc-section-description">
              Empowering startups and entrepreneurs to build the future of technology in Ethiopia.
            </p>
          </Col>
        </Row>

        {/* Programs Overview Header */}
        <div className="itpc-section-header">
          <div className="itpc-header-image">
            <img src="/assets/images/program.png" alt="Programs Overview" className="itpc-header-img" />
          </div>
          <div className="itpc-header-content">
            <div className="itpc-badge-container">
              <div className="itpc-badge-line">
                <span className="itpc-badge-circle">
                  <FaRocket className="itpc-badge-icon itpc-rotating" />
                </span>
                <span className="itpc-badge-number">01</span>
              </div>
            </div>
            <div className="itpc-header-text">
              <h3 className="itpc-header-title">Programs Overview</h3>
              <div className="itpc-header-description">
                <p>
                  Our incubation programs provide a comprehensive platform for startups 
                  and entrepreneurs to transform ideas into impactful solutions.
                </p>
                <div className="itpc-header-note">
                  <FaRocket className="itpc-note-icon" /> 
                  <span>Empowering new ideas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <Row className="g-4 mt-4">
          {programs.map((program, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="itpc-program-card">
                <div className="itpc-program-icon">
                  {program.icon}
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <a href={program.link} className="itpc-program-link">
                  Learn More <FaArrowRight className="itpc-arrow-icon" />
                </a>
              </div>
            </Col>
          ))}
        </Row>

        {/* Success Stories Header */}
        <div className="itpc-section-header itpc-reverse">
          <div className="itpc-header-image">
            <img src="/assets/images/story.png" alt="Success Stories" className="itpc-header-img" />
          </div>
          <div className="itpc-header-content">
            <div className="itpc-badge-container">
              <div className="itpc-badge-line">
                <span className="itpc-badge-circle itpc-badge-alt">
                  <FaLightbulb className="itpc-badge-icon itpc-rotating" />
                </span>
                <span className="itpc-badge-number">02</span>
              </div>
            </div>
            <div className="itpc-header-text">
              <h3 className="itpc-header-title">Success Stories</h3>
              <div className="itpc-header-description">
                <p>
                  Explore the journeys of startups that have thrived through our 
                  support—demonstrating how innovation, resilience, and collaboration 
                  can create real impact.
                </p>
                <div className="itpc-header-note">
                  <FaLightbulb className="itpc-note-icon" />
                  <span>Inspiring journeys</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="itpc-stories-grid">
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`itpc-story-card ${hovered === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="itpc-story-default">
                <div className="itpc-story-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="itpc-story-title-container">
                  <h4 className="itpc-story-title">{story.title}</h4>
                  <FaArrowRight className="itpc-story-arrow" />
                </div>
              </div>
              <div className="itpc-story-modal">
                <h4 className="itpc-modal-title">{story.title}</h4>
                <div className="itpc-modal-content">
                  {story.description.map((desc, i) => (
                    <p key={i} className="itpc-story-desc">{desc}</p>
                  ))}
                  <div className="itpc-story-stats">
                    {story.stats.map((stat, idx) => (
                      <div key={idx} className="itpc-stat-item">
                        <span className="itpc-stat-number">{stat.number}</span>
                        <span className="itpc-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={story.link} className="itpc-story-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IncubationCard;
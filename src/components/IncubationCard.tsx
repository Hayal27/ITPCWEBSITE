import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaRocket, FaLightbulb } from 'react-icons/fa';
import '../styles/IncubationCard.css';

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

  return (
    <section className="incubation-section section-padding bg-light">
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={12}>
            <h2 className="section-title">Incubation & Innovation</h2>
            <p className="section-description">
              Empowering startups and entrepreneurs to build the future of technology in Ethiopia.
            </p>
          </Col>
        </Row>

        {/* Programs Overview Card Header */}
        <div className="section-header-flex modern-header">
          <div className="modern-header-image">
            <img src="/assets/images/program.png" alt="Programs Overview" />
          </div>
          <div className="section-header-right modern-header-info">
            <div className="modern-badge-outer">
              <span className="modern-badge-circle rotating-badge">
                <FaRocket className="modern-badge-icon" />
              </span>
              <span className="modern-badge-number centered-badge-number">01</span>
            </div>
            <div>
              <div className="modern-header-title">Programs Overview</div>
              <div className="modern-header-desc">
                <p>
                  Our incubation programs provide a comprehensive platform for startups and entrepreneurs to transform ideas into impactful solutions. Through tailored mentorship, access to innovation labs, and a collaborative ecosystem, we empower founders to accelerate growth, build sustainable businesses, and drive technology.
                </p>
                <div className="modern-header-note">
                  <FaRocket className="note-icon" /> Empowering new ideas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Overview */}
        <Row className="g-4">
          <Col lg={4}>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Startup Support</h3>
              <p>Office spaces, mentorship, and pitch events to accelerate your growth.</p>
              <Button variant="outline-primary" href="/incubation/startups">Learn More</Button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Capacity Building</h3>
              <p>Workshops, bootcamps, and training programs to upskill your team.</p>
              <Button variant="outline-primary" href="/incubation/training">Learn More</Button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="program-card">
              <div className="program-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation Labs</h3>
              <p>Access to labs, funding, and corporate collaborations for innovation.</p>
              <Button variant="outline-primary" href="/incubation/innovation-programs">Learn More</Button>
            </div>
          </Col>
        </Row>

        {/* Success Stories Card Header */}
        <div className="section-header-flex modern-header">
          <div className="modern-header-image">
            <img src="/assets/images/story.png" alt="Success Stories" />
          </div>
          <div className="section-header-right modern-header-info">
            <div className="modern-badge-outer">
              <span className="modern-badge-circle badge-alt rotating-badge">
                <FaLightbulb className="modern-badge-icon" />
              </span>
              <span className="modern-badge-number centered-badge-number">02</span>
            </div>
            <div>
              <div className="modern-header-title">Success Stories</div>
              <div className="modern-header-desc">
                <p>
                  Explore the journeys of startups that have thrived through our support—demonstrating how innovation, resilience, and collaboration can create real impact. These stories highlight the transformation of ideas into successful ventures, the creation of jobs, and the advancement of Ethiopia’s digital economy.
                </p>
                <div className="modern-header-note">
                  <FaLightbulb className="note-icon" /> Inspiring journeys
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="success-stories-grid">
              {successStories.map((story, index) => (
                <div
                  className={`success-story-card modern-hover-card${hovered === index ? ' hovered' : ''}`}
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="story-default-view">
                    <div className="story-image-wrapper">
                      <img src={story.image} alt={story.title} />
                    </div>
                    <div className="story-title-row">
                      <span className="story-title">{story.title}</span>
                    </div>
                    <FaArrowRight className="story-arrow below-title" />
                  </div>
                  <div className="story-hover-modal">
                    <h4>{story.title}</h4>
                    <FaArrowRight className="story-arrow modal-arrow" />
                    <div>
                      {Array.isArray(story.description)
                        ? story.description.map((desc, i) => (
                            <p className="story-hover-desc" key={i}>{desc}</p>
                          ))
                        : <p className="story-hover-desc">{story.description}</p>
                      }
                    </div>
                    <div className="story-hover-stats">
                      {story.stats.map((stat, idx) => (
                        <div className="stat-item" key={idx}>
                          <span className="stat-number">{stat.number}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    {story.link && (
                      <Button variant="link" href={story.link} className="btn-link">
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IncubationCard;
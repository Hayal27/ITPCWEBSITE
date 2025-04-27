import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Incubation.css';

interface SuccessStory {
  image: string;
  stats: {
    number: string;
    label: string;
  }[];
  title: string;
  description?: string;
  link?: string;
}

const successStories: SuccessStory[] = [
  {
    image: '/assets/images/innovations/ie-network-solutions.jpg',
    stats: [
      { number: '250+', label: 'Completed Projects' },
      { number: '200+', label: 'Clients Served' },
      { number: '500M+ ETB', label: 'Annual Revenue' },
    ],
    title: 'IE Network Solutions',
    description: 'Leading enterprise solutions provider transforming Ethiopian businesses through innovative technology',
    link: '/success-stories/ie-network',
  },
  {
    image: '/assets/images/innovations/Dawit-Birhanu.jpg',
    stats: [
      { number: '2', label: 'Years' },
      { number: '50+', label: 'Jobs Created' },
      { number: '10M+', label: 'Investment Secured' },
    ],
    title: 'WEBSPRIX IT SOLUTION PLC',
    description: 'From idea to market leader in years, a fiber internet service provider thriving to create powerful connection. Register here and be connected to the world. in Ethiopia',
    link: '/success-stories/tech-innovators',
  },
  {
    image: '/assets/images/success-story-1.png',
    stats: [
      { number: '3', label: 'Products' },
      { number: '100+', label: 'Clients' },
      { number: '30+', label: 'Team Members' },
    ],
    title: 'Digital Solutions',
    description: 'Building next-generation software solutions for the Ethiopian market',
    link: '/success-stories/digital-solutions',
  },
];

const Incubation: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => setCurrentStory((prev) => (prev + 1) % successStories.length);
  const prevStory = () => setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);

  return (
    <div className="incubation-page">
      {/* Hero Section */}
      <section className="incubation-hero animated-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-overlay"></div>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title animate-fade-in">Incubation & Innovation</h1>
              <p className="hero-subtitle animate-fade-in-delay">
                Empowering Tech Entrepreneurship and Innovation in Ethiopia
              </p>
              <div className="hero-cta animate-fade-in-delay2">
                <Button variant="primary" size="lg" className="me-3 btn-ripple">Apply Now</Button>
                <Button variant="outline-light" size="lg" className="btn-glow">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="section-title">Our Programs</h2>
              <p className="section-description">
                Discover our comprehensive incubation and innovation programs designed to support your entrepreneurial journey
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {/* Program Cards */}
            <Col lg={4}>
              <div className="program-card interactive-card">
                <div className="program-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Startups & Early-Stage Support</h3>
                <ul className="program-features">
                  <li><i className="fas fa-check"></i> Dedicated Office Spaces</li>
                  <li><i className="fas fa-check"></i> Startup Mentorship</li>
                  <li><i className="fas fa-check"></i> Pitch Events & Demo Days</li>
                  <li><i className="fas fa-check"></i> Business Services</li>
                </ul>
                <a href="/incubation/startups" className="btn btn-outline-primary btn-fancy">
                  Explore Startups
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="program-card interactive-card">
                <div className="program-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Capacity Building & Training</h3>
                <ul className="program-features">
                  <li><i className="fas fa-check"></i> Entrepreneurship Bootcamps</li>
                  <li><i className="fas fa-check"></i> Digital Skills Development</li>
                  <li><i className="fas fa-check"></i> Design Thinking Workshops</li>
                  <li><i className="fas fa-check"></i> Partner-Led Programs</li>
                </ul>
                <a href="/incubation/training" className="btn btn-outline-primary btn-fancy">
                  View Training
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="program-card interactive-card">
                <div className="program-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation & Acceleration</h3>
                <ul className="program-features">
                  <li><i className="fas fa-check"></i> Product Development Labs</li>
                  <li><i className="fas fa-check"></i> Market Access Support</li>
                  <li><i className="fas fa-check"></i> Seed Funding Opportunities</li>
                  <li><i className="fas fa-check"></i> Corporate Collaborations</li>
                </ul>
                <a href="/incubation/innovation-programs" className="btn btn-outline-primary btn-fancy">
                  Discover Programs
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="section-title">Success Stories</h2>
              <p className="section-description">
                Meet the innovative startups that have grown through our programs
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            <Col lg={10}>
              <div className="success-story-carousel">
                <button className="carousel-arrow left" onClick={prevStory} aria-label="Previous Story">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="success-story-card">
                  <div className="story-image">
                    <img src={successStories[currentStory].image} alt={successStories[currentStory].title} />
                    <div className="story-overlay">
                      <div className="story-stats">
                        {successStories[currentStory].stats.map((stat, idx) => (
                          <div className="stat-item" key={idx}>
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="story-content">
                    <h3>{successStories[currentStory].title}</h3>
                    <p>{successStories[currentStory].description}</p>
                    {successStories[currentStory].link && (
                      <a href={successStories[currentStory].link} className="btn btn-primary">
                        Read Full Story
                      </a>
                    )}
                  </div>
                </div>
                <button className="carousel-arrow right" onClick={nextStory} aria-label="Next Story">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="carousel-indicators">
                {successStories.map((_, idx) => (
                  <button
                    key={idx}
                    className={`indicator-dot${idx === currentStory ? ' active' : ''}`}
                    onClick={() => setCurrentStory(idx)}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <Container>
          <Row className="mb-2">
            <Col lg={12} className="text-center">
              <h2 className="section-title">Our Ecosystem Partners</h2>
              <p className="section-description">
                We work hand-in-hand with universities, tech communities, and development partners
              </p>
            </Col>
          </Row>
          <Row className="g-2 justify-content-center animated-partners-row">
            <Col lg={3} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/IE.png" alt="IE IT Solutions" />
              </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/ws.png" alt="WebSprix" />
              </div>
            </Col>
            <Col lg={3} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/raxio.png" alt="Raxio" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Apply Section */}
      <section className="apply-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="section-title">Ready to Start Your Journey?</h2>
              <div className="apply-steps timeline-steps">
                <div className="apply-step timeline-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Check Eligibility</h4>
                    <p>Startups must be in the ideation, MVP, or early traction stage</p>
                  </div>
                </div>
                <div className="apply-step timeline-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Prepare Documents</h4>
                    <p>Business model canvas, pitch deck, team profile</p>
                  </div>
                </div>
                <div className="apply-step timeline-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Apply online or visit our incubation office</p>
                  </div>
                </div>
                <div className="timeline-progress-bar"></div>
              </div>
              <a href="/incubation/apply" className="btn btn-primary btn-ripple">Apply Now</a>
            </Col>
            <Col lg={6}>
              <div className="apply-image">
                <img src="/assets/images/innovations/apply-now.jpg" alt="Apply Now" />
                <div className="startup-contact-info">
                  <h4>Contact Us</h4>
                  <p><i className="fas fa-envelope"></i> incubation@ethiopianitpark.et</p>
                  <p><i className="fas fa-phone"></i> +251 11 123 4567</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Incubation;
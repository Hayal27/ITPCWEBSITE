import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Incubation.css';

const Incubation: React.FC = () => {
  return (
    <div className="incubation-page">
      {/* Hero Section */}
      <section className="incubation-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title">Incubation & Innovation</h1>
              <p className="hero-subtitle">
                Empowering startups and innovators to transform ideas into successful businesses
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programs Overview */}
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
            <Col lg={4}>
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Startup Incubation</h3>
                <p>Comprehensive support for early-stage startups including mentorship, resources, and funding opportunities.</p>
                <a href="/incubation/startups" className="btn btn-outline-primary">Learn More</a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Training Programs</h3>
                <p>Specialized training sessions and workshops to enhance your entrepreneurial and technical skills.</p>
                <a href="/incubation/training" className="btn btn-outline-primary">Learn More</a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation Programs</h3>
                <p>Acceleration programs and innovation challenges to help scale your business and ideas.</p>
                <a href="/incubation/innovation-programs" className="btn btn-outline-primary">Learn More</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Success Stories */}
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
          <Row className="g-4">
            <Col lg={6}>
              <div className="success-story-card">
                <div className="story-image">
                  <img src="/assets/images/success-story-1.jpg" alt="Success Story" />
                </div>
                <div className="story-content">
                  <h3>Tech Innovators</h3>
                  <p>From idea to market leader in just 2 years</p>
                  <a href="/incubation/startups/success" className="btn btn-link">Read More</a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="success-story-card">
                <div className="story-image">
                  <img src="/assets/images/success-story-2.jpg" alt="Success Story" />
                </div>
                <div className="story-content">
                  <h3>Digital Solutions</h3>
                  <p>Revolutionizing the industry with innovative technology</p>
                  <a href="/incubation/startups/success" className="btn btn-link">Read More</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How to Apply */}
      <section className="apply-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="section-title">Ready to Start Your Journey?</h2>
              <p className="section-description">
                Join our incubation program and get access to resources, mentorship, and funding opportunities to grow your startup.
              </p>
              <a href="/incubation/how-to-apply" className="btn btn-primary">Apply Now</a>
            </Col>
            <Col lg={6}>
              <div className="apply-image">
                <img src="/assets/images/apply-now.jpg" alt="Apply Now" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Incubation; 
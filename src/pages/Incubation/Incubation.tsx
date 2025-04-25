import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Incubation.css';

const Incubation: React.FC = () => {
  return (
    <div className="incubation-page">
      {/* Hero Section */}
      <section className="incubation-hero">
        <div className="hero-overlay"></div>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title">Incubation & Innovation</h1>
              <p className="hero-subtitle">
                Empowering Tech Entrepreneurship and Innovation in Ethiopia
              </p>
              <div className="hero-cta">
                <Button variant="primary" size="lg" className="me-3">Apply Now</Button>
                <Button variant="outline-light" size="lg">Learn More</Button>
              </div>
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
                <h3>Startups & Early-Stage Support</h3>
                <ul className="program-features">
                  <li><i className="fas fa-check"></i> Dedicated Office Spaces</li>
                  <li><i className="fas fa-check"></i> Startup Mentorship</li>
                  <li><i className="fas fa-check"></i> Pitch Events & Demo Days</li>
                  <li><i className="fas fa-check"></i> Business Services</li>
                </ul>
                <a href="/incubation/startups" className="btn btn-outline-primary">Explore Startups</a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="program-card">
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
                <a href="/incubation/training" className="btn btn-outline-primary">View Training</a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="program-card">
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
                <a href="/incubation/innovation-programs" className="btn btn-outline-primary">Discover Programs</a>
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
                  <div className="story-overlay">
                    <div className="story-stats">
                      <div className="stat-item">
                        <span className="stat-number">2</span>
                        <span className="stat-label">Years</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Jobs Created</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="story-content">
                  <h3>Tech Innovators</h3>
                  <p>From idea to market leader in just 2 years</p>
                  <a href="/incubation/startups/success" className="btn btn-link">Read Success Story</a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="success-story-card">
                <div className="story-image">
                  <img src="/assets/images/success-story-2.jpg" alt="Success Story" />
                  <div className="story-overlay">
                    <div className="story-stats">
                      <div className="stat-item">
                        <span className="stat-number">3</span>
                        <span className="stat-label">Products</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">Clients</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="story-content">
                  <h3>Digital Solutions</h3>
                  <p>Revolutionizing the industry with innovative technology</p>
                  <a href="/incubation/startups/success" className="btn btn-link">Read Success Story</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="section-title">Our Ecosystem Partners</h2>
              <p className="section-description">
                We work hand-in-hand with universities, tech communities, and development partners
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            <Col lg={2} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/mint.png" alt="Ministry of Innovation and Technology" />
              </div>
            </Col>
            <Col lg={2} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/undp.png" alt="UNDP Ethiopia" />
              </div>
            </Col>
            <Col lg={2} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/iceaddis.png" alt="IceAddis" />
              </div>
            </Col>
            <Col lg={2} md={4} sm={6}>
              <div className="partner-logo">
                <img src="/assets/images/partners/shebavalley.png" alt="Sheba Valley Network" />
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
              <div className="apply-steps">
                <div className="apply-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Check Eligibility</h4>
                    <p>Startups must be in the ideation, MVP, or early traction stage</p>
                  </div>
                </div>
                <div className="apply-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Prepare Documents</h4>
                    <p>Business model canvas, pitch deck, team profile</p>
                  </div>
                </div>
                <div className="apply-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Apply online or visit our incubation office</p>
                  </div>
                </div>
              </div>
              <a href="/incubation/how-to-apply" className="btn btn-primary">Apply Now</a>
            </Col>
            <Col lg={6}>
              <div className="apply-image">
                <img src="/assets/images/apply-now.jpg" alt="Apply Now" />
                <div className="contact-info">
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
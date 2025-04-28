
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Added import
import '../Incubation/Incubation.css';

import Service from '../../components/Service';
import ServiceCards from '../../components/ServiceCards';

const Services: React.FC = () => {
  return (
    <div className="Service-page">
      {/* Animated Hero Section */}
      <section className="Service-hero animated-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="hero-overlay" />
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title animate-fade-in">Ethiopian IT Park Services</h1>
              <p className="hero-subtitle animate-fade-in-delay">
                Empowering Tech Investors, Entrepreneurship and Innovation in Africa
              </p>
              <div className="hero-cta animate-fade-in-delay2">
                {/* Invest Now button navigates to /investment */}
                <Button
                  as={Link}
                  to="/investment"
                  variant="primary"
                  size="lg"
                  className="me-3 btn-ripple"
                >
                  Invest Now
                </Button>
                <Button variant="outline-light" size="lg" className="btn-glow">
                  See More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Cards Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center" style={{ color: '#0C7C92' }}>
                Ethiopian IT Park Services
              </h2>
            </Col>
          </Row>
          <ServiceCards />
        </Container>
      </section>

      {/* Single Service Details Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center" style={{ color: '#0C7C92' }}>
                Service Details
              </h2>
            </Col>
          </Row>
          <Service />
        </Container>
      </section>

      {/* ... Steps to invest ... */}
    </div>
  );
};

export default Services;

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeaturedInnovations.css';

interface Innovation {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  impact: {
    number: string;
    label: string;
  }[];
  technologies: string[];
  team: {
    name: string;
    role: string;
    image: string;
  }[];
  status: 'completed' | 'ongoing' | 'upcoming';
}

const FeaturedInnovations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedInnovation, setSelectedInnovation] = useState<Innovation | null>(null);

  const innovations: Innovation[] = [
    {
      id: 1,
      title: "Digital Health Connect",
      category: "Healthcare",
      image: "/assets/images/innovations/health-connect.jpg",
      description: "A revolutionary telemedicine platform connecting rural communities with healthcare professionals across Ethiopia. Features include real-time consultations, medical record management, and AI-powered diagnostics.",
      impact: [
        { number: "100K+", label: "Patients Served" },
        { number: "300+", label: "Healthcare Providers" },
        { number: "45%", label: "Cost Reduction" }
      ],
      technologies: ["React Native", "TensorFlow", "AWS", "Blockchain"],
      team: [
        { name: "Dr. Abebe Bekele", role: "Lead Innovator", image: "/assets/images/hero-client-image.jpg" },
        { name: "Sara Mohammed", role: "Tech Lead", image: "/assets/images/hero-client-image.jpg" }
      ],
      status: "completed"
    },
    {
      id: 2,
      title: "AgroTech Solutions",
      category: "Agriculture",
      image: "/assets/images/innovations/agro-tech.jpg",
      description: "Smart farming platform utilizing IoT sensors and AI to optimize crop yields and resource management for Ethiopian farmers. Includes weather prediction, soil analysis, and market price tracking.",
      impact: [
        { number: "5000+", label: "Farmers Onboarded" },
        { number: "35%", label: "Yield Increase" },
        { number: "2M+", label: "Data Points" }
      ],
      technologies: ["IoT", "Python", "Machine Learning", "Mobile App"],
      team: [
        { name: "Kidus Alemayehu", role: "Project Lead", image: "/assets/images/hero-client-image.jpg" },
        { name: "Tigist Haile", role: "Data Scientist", image: "/assets/images/hero-client-image.jpg" }
      ],
      status: "ongoing"
    },
    // Add more innovations as needed
  ];

  return (
    <div className="fi-page">
      {/* Hero Section */}
      <section className="fi-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="fi-hero-title">
                Featured Innovations
                <span className="fi-hero-subtitle">Transforming Ethiopia Through Technology</span>
              </h1>
              <div className="fi-hero-stats">
                <div className="fi-stat">
                  <span className="fi-stat-number">50+</span>
                  <span className="fi-stat-label">Active Projects</span>
                </div>
                <div className="fi-stat">
                  <span className="fi-stat-number">$10M+</span>
                  <span className="fi-stat-label">Investment Secured</span>
                </div>
                <div className="fi-stat">
                  <span className="fi-stat-number">100+</span>
                  <span className="fi-stat-label">Tech Jobs Created</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Innovation Filter */}
      <section className="fi-filter">
        <Container>
          <div className="fi-filter-buttons">
            <button 
              className={`fi-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`fi-filter-btn ${activeFilter === 'healthcare' ? 'active' : ''}`}
              onClick={() => setActiveFilter('healthcare')}
            >
              Healthcare
            </button>
            <button 
              className={`fi-filter-btn ${activeFilter === 'agriculture' ? 'active' : ''}`}
              onClick={() => setActiveFilter('agriculture')}
            >
              Agriculture
            </button>
            <button 
              className={`fi-filter-btn ${activeFilter === 'fintech' ? 'active' : ''}`}
              onClick={() => setActiveFilter('fintech')}
            >
              FinTech
            </button>
          </div>
        </Container>
      </section>

      {/* Innovations Grid */}
      <section className="fi-grid">
        <Container>
          <Row className="g-4">
            {innovations
              .filter(innovation => activeFilter === 'all' || innovation.category.toLowerCase() === activeFilter)
              .map(innovation => (
                <Col lg={4} md={6} key={innovation.id}>
                  <div className="fi-card" onClick={() => setSelectedInnovation(innovation)}>
                    <div className="fi-card-image">
                      <img src={innovation.image} alt={innovation.title} />
                      <div className="fi-card-category">{innovation.category}</div>
                    </div>
                    <div className="fi-card-content">
                      <h3>{innovation.title}</h3>
                      <p>{innovation.description}</p>
                      <div className="fi-card-technologies">
                        {innovation.technologies.map((tech, index) => (
                          <span key={index} className="fi-tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="fi-card-status">
                        <span className={`fi-status-badge ${innovation.status}`}>
                          {innovation.status.charAt(0).toUpperCase() + innovation.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Innovation Modal */}
      {selectedInnovation && (
        <div className="fi-modal" onClick={() => setSelectedInnovation(null)}>
          <div className="fi-modal-content" onClick={e => e.stopPropagation()}>
            <button className="fi-modal-close" onClick={() => setSelectedInnovation(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="fi-modal-header">
              <h2>{selectedInnovation.title}</h2>
              <span className="fi-modal-category">{selectedInnovation.category}</span>
            </div>
            <div className="fi-modal-body">
              <div className="fi-modal-image">
                <img src={selectedInnovation.image} alt={selectedInnovation.title} />
              </div>
              <div className="fi-modal-impact">
                {selectedInnovation.impact.map((item, index) => (
                  <div key={index} className="fi-impact-item">
                    <span className="fi-impact-number">{item.number}</span>
                    <span className="fi-impact-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="fi-modal-description">{selectedInnovation.description}</p>
              <div className="fi-modal-team">
                <h3>Innovation Team</h3>
                <div className="fi-team-grid">
                  {selectedInnovation.team.map((member, index) => (
                    <div key={index} className="fi-team-member">
                      <img src={member.image} alt={member.name} />
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="fi-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Have an Innovative Idea?</h2>
              <p>Join our incubation program and transform your vision into reality</p>
              <button className="fi-cta-button">
                Apply Now <i className="fas fa-arrow-right"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FeaturedInnovations;
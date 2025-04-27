import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HowToApply.css';

interface EligibilityCriteria {
  icon: string;
  text: string;
}

interface ApplicationStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const HowToApply: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('individual');

  const eligibilityCriteria: EligibilityCriteria[] = [
    { icon: "🏛️", text: "Ethiopian Citizens or Ethiopian-born Foreigners with residence permit" },
    { icon: "💡", text: "ICT Entrepreneurs with innovative (novel) idea" },
    { icon: "🚀", text: "Young ICT Companies (Less than 2 Years of establishment)" },
    { icon: "✨", text: "Novel or distinctive ICT product/service concept" }
  ];

  const applicationSteps: ApplicationStep[] = [
    {
      number: 1,
      title: "Check Eligibility",
      description: "Verify that you meet all the basic requirements for the program",
      icon: "fas fa-check-circle"
    },
    {
      number: 2,
      title: "Prepare Documentation",
      description: "Gather all necessary documents including business plan and financial projections",
      icon: "fas fa-file-alt"
    },
    {
      number: 3,
      title: "Submit Application",
      description: "Complete the online application form with your innovative ICT concept",
      icon: "fas fa-paper-plane"
    },
    {
      number: 4,
      title: "Interview Process",
      description: "Selected candidates will be invited for a detailed interview",
      icon: "fas fa-users"
    }
  ];

  return (
    <div className="how-to-apply-page">
      {/* Hero Section */}
      <section className="htap-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="htap-hero-title">
                Join Our IT Park Incubation Program
                <span className="htap-hero-subtitle">Transform Your Innovation into Reality</span>
              </h1>
              <div className="htap-hero-stats">
                <div className="htap-stat">
                  <span className="htap-stat-number">200+</span>
                  <span className="htap-stat-label">Startups Supported</span>
                </div>
                <div className="htap-stat">
                  <span className="htap-stat-number">95%</span>
                  <span className="htap-stat-label">Success Rate</span>
                </div>
                <div className="htap-stat">
                  <span className="htap-stat-number">$2M+</span>
                  <span className="htap-stat-label">Funding Secured</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Eligibility Section */}
      <section className="htap-eligibility">
        <Container>
          <h2 className="htap-section-title">Eligibility Criteria</h2>
          <div className="htap-criteria-grid">
            {eligibilityCriteria.map((criteria, index) => (
              <div className="htap-criteria-card" key={index}>
                <span className="htap-criteria-icon">{criteria.icon}</span>
                <p>{criteria.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Process */}
      <section className="htap-process">
        <Container>
          <h2 className="htap-section-title">Application Process</h2>
          <div className="htap-steps-container">
            {applicationSteps.map((step, index) => (
              <div className="htap-step-card" key={index}>
                <div className="htap-step-number">{step.number}</div>
                <div className="htap-step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3 className="htap-step-title">{step.title}</h3>
                <p className="htap-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Types */}
      <section className="htap-types">
        <Container>
          <h2 className="htap-section-title">Choose Your Application Type</h2>
          <div className="htap-tabs">
            <button 
              className={`htap-tab ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => setActiveTab('individual')}
            >
              Individual Entrepreneur
            </button>
            <button 
              className={`htap-tab ${activeTab === 'group' ? 'active' : ''}`}
              onClick={() => setActiveTab('group')}
            >
              Group of Entrepreneurs
            </button>
            <button 
              className={`htap-tab ${activeTab === 'company' ? 'active' : ''}`}
              onClick={() => setActiveTab('company')}
            >
              Young ICT Company
            </button>
          </div>
          <div className="htap-tab-content">
            {/* Content changes based on activeTab */}
            <div className="htap-requirements-list">
              {activeTab === 'individual' && (
                <>
                  <h3>Individual Entrepreneur Requirements</h3>
                  <ul>
                    <li>Valid identification & residence documents</li>
                    <li>Innovative ICT concept or prototype</li>
                    <li>Basic business plan</li>
                    <li>Financial capability for nominal rent</li>
                  </ul>
                </>
              )}
              {/* Add similar blocks for other tabs */}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="htap-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Ready to Transform Your Innovation?</h2>
              <p>Join Ethiopia's premier IT Park Incubation Program today</p>
              <button className="htap-apply-btn">
                Start Application
                <i className="fas fa-arrow-right"></i>
              </button>
              <div className="htap-contact-info">
                <p>Need help? Contact our support team:</p>
                <div className="htap-contact-details">
                  <span><i className="fas fa-phone"></i> +251 911 611 789</span>
                  <span><i className="fas fa-envelope"></i> gchalchisa@yahoo.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HowToApply;
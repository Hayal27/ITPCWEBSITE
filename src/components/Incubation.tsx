import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../pages/Incubation/Incubation.css'; // Assuming you have a CSS file for styling

const successStories = [
  {
    image: '/assets/images/ie-network-solutions.png',
    stats: [
      { number: '250+', label: 'Completed Projects' },
      { number: '200+', label: 'Clients Served' },
      { number: '500M+ ETB', label: 'Annual Revenue' },
    ],
    title: 'IE Network Solutions',
  },
  {
    image: '/assets/images/success-story-1.png',
    stats: [
      { number: '2', label: 'Years' },
      { number: '50+', label: 'Jobs Created' },
    ],
    title: 'Tech Innovators',
    description: 'From idea to market leader in just 2 years',
    link: '/incubation/startups/success',
  },
  {
    image: '/assets/images/success-story-2.png',
    stats: [
      { number: '3', label: 'Products' },
      { number: '100+', label: 'Clients' },
    ],
    title: 'Digital Solutions',
    description: 'Revolutionizing the industry with innovative technology',
    link: '/incubation/startups/success',
  },
];

const Incubation: React.FC = () => {
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

        {/* Success Stories Marquee */}
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <h3 className="section-subtitle">Success Stories</h3>
          </Col>
          <Col lg={12}>
            <div className="success-stories-marquee">
              <div className="marquee-content">
                {successStories.map((story, index) => (
                  <div className="success-story-card" key={index}>
                    <img src={story.image} alt={story.title} />
                    <div className="story-content">
                      <h4>{story.title}</h4>
                      <div className="story-stats">
                        {story.stats.map((stat, idx) => (
                          <div className="stat-item" key={idx}>
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                      {story.description && <p>{story.description}</p>}
                      {story.link && (
                        <Button variant="link" href={story.link} className="btn-link">
                          Read More
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Incubation;
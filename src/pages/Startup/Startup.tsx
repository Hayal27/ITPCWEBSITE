import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import { FaSearch, FaBuilding, FaUsers, FaGlobe, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import './Startup.css';

const startupList = [
  {
    id: 1,
    name: 'IE Network Solutions',
    logo: '/assets/images/ie-network-solutions.png',
    founded: 2011,
    industry: 'IT Services',
    employees: 250,
    website: 'https://ienetworksolutions.com',
    summary: 'A leading tech company delivering impactful solutions and award-winning digital transformation.',
    highlights: [
      '250+ completed projects',
      '200+ clients served',
      '500M+ ETB annual revenue',
    ],
    tags: ['IT', 'Enterprise', 'Digital Transformation'],
    testimonial: {
      quote: "IT Park's support was crucial for our growth and innovation journey.",
      author: 'Samuel T., CEO',
    },
  },
  {
    id: 2,
    name: 'Tech Innovators',
    logo: '/assets/images/success-story-1.png',
    founded: 2022,
    industry: 'Software',
    employees: 50,
    website: 'https://techinnovators.com',
    summary: 'From idea to market leader in just 2 years. Created 50+ jobs and fostered innovation.',
    highlights: [
      '2 years in operation',
      '50+ jobs created',
      'Rapid market growth',
    ],
    tags: ['Startup', 'Innovation', 'Growth'],
    testimonial: {
      quote: "The mentorship and resources at IT Park helped us scale rapidly.",
      author: 'Liya M., Founder',
    },
  },
  {
    id: 3,
    name: 'Digital Solutions',
    logo: '/assets/images/success-story-2.png',
    founded: 2020,
    industry: 'Digital Products',
    employees: 100,
    website: 'https://digitalsolutions.com',
    summary: 'Revolutionizing the industry with innovative technology. Trusted by 100+ clients.',
    highlights: [
      '3 flagship products',
      '100+ clients',
      'Industry leader',
    ],
    tags: ['Digital', 'Products', 'Clients'],
    testimonial: {
      quote: "Being part of IT Park's ecosystem opened doors to new partnerships.",
      author: 'Abel G., CTO',
    },
  },
  // Add more startups as needed
];

const uniqueIndustries = [
  ...new Set(startupList.map((startup) => startup.industry)),
];

const totalEmployees = startupList.reduce((sum, s) => sum + s.employees, 0);

const StartupPage = () => {
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('All');
  const [confetti, setConfetti] = useState(false);

  // Filter startups by search and industry
  const filteredStartups = startupList.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(search.toLowerCase()) ||
      startup.summary.toLowerCase().includes(search.toLowerCase()) ||
      startup.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesIndustry = industry === 'All' || startup.industry === industry;
    return matchesSearch && matchesIndustry;
  });

  // Featured startup (first in the list for demo)
  const featuredStartup = startupList[0];

  // Confetti burst handler
  const handleApplyClick = (e: React.MouseEvent) => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 1200);
  };

  return (
    <section className="startup-section section-padding bg-light">
      {/* Hero Section */}
      <div className="startup-hero py-5 text-center">
        <Container>
          <h1 className="display-5 fw-bold mb-3">Empowering Innovation at IT Park</h1>
          <p className="lead mb-4">
            Explore our vibrant ecosystem of startups, driving digital transformation and economic growth in Ethiopia.
          </p>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              variant="primary"
              href="/incubation/apply"
              className="startup-apply-btn"
              onClick={handleApplyClick}
            >
              Apply as a Startup
            </Button>
            {confetti && (
              <>
                <span className="confetti c1"></span>
                <span className="confetti c2"></span>
                <span className="confetti c3"></span>
                <span className="confetti c4"></span>
                <span className="confetti c5"></span>
              </>
            )}
          </div>
        </Container>
      </div>

      {/* Statistics */}
      <Container className="my-4">
        <Row className="justify-content-center text-center">
          <Col xs={6} md={3}>
            <div className="stat-box">
              <h2 className="stat-number">{startupList.length}+</h2>
              <div className="stat-label">Startups</div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="stat-box">
              <h2 className="stat-number">{totalEmployees}+</h2>
              <div className="stat-label">Jobs Created</div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mt-3 mt-md-0">
            <div className="stat-box">
              <h2 className="stat-number">{uniqueIndustries.length}</h2>
              <div className="stat-label">Industries</div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Featured Startup */}
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="featured-startup-card mb-4">
              <Row className="g-0 align-items-center">
                <Col md={4} className="text-center p-3">
                  <img src={featuredStartup.logo} alt={featuredStartup.name} className="featured-logo" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title className="startup-title">
                      {featuredStartup.name}{' '}
                      <Badge bg="success" className="ms-2">Featured</Badge>
                    </Card.Title>
                    <Card.Text className="startup-summary">{featuredStartup.summary}</Card.Text>
                    <Button
                      variant="outline-primary"
                      href={featuredStartup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Search and Filter */}
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={12}>
            <h2 className="section-title">Our Startups</h2>
            <p className="section-description">
              Discover the most promising startups in our incubation program, driving innovation and growth in Ethiopia.
            </p>
          </Col>
        </Row>

        <Row className="mb-4 align-items-center">
          <Col md={6} className="mb-2 mb-md-0">
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search startups by name, tag, or summary..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="All">All Industries</option>
              {uniqueIndustries.map((ind, idx) => (
                <option key={idx} value={ind}>
                  {ind}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3} className="text-end d-none d-md-block">
            <Button
              variant="primary"
              href="/incubation/apply"
              className="startup-apply-btn"
              onClick={handleApplyClick}
            >
              Apply as a Startup
            </Button>
            {/* Confetti for desktop button */}
            {confetti && (
              <>
                <span className="confetti c1"></span>
                <span className="confetti c2"></span>
                <span className="confetti c3"></span>
                <span className="confetti c4"></span>
                <span className="confetti c5"></span>
              </>
            )}
          </Col>
        </Row>

        {/* Startup Cards */}
        <Row className="g-4">
          {filteredStartups.length === 0 ? (
            <Col>
              <div className="no-results">
                <FaBuilding size={36} color="#ccc" />
                <p>No startups found matching your criteria.</p>
              </div>
            </Col>
          ) : (
            filteredStartups.map((startup) => (
              <Col key={startup.id} lg={4} md={6}>
                <Card className="startup-card h-100">
                  <div className="startup-logo-wrapper">
                    <img
                      src={startup.logo}
                      alt={startup.name}
                      className="startup-logo"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="startup-title">{startup.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted startup-industry">
                      <FaGlobe className="me-1" /> {startup.industry}
                    </Card.Subtitle>
                    <Card.Text className="startup-summary">{startup.summary}</Card.Text>
                    <ul className="startup-highlights">
                      {startup.highlights.map((hl, idx) => (
                        <li key={idx}>
                          <FaArrowRight className="highlight-icon" /> {hl}
                        </li>
                      ))}
                    </ul>
                    <div className="startup-meta">
                      <span>
                        <FaUsers className="me-1" /> {startup.employees} Employees
                      </span>
                      <span>
                        <FaBuilding className="me-1" /> Founded {startup.founded}
                      </span>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <div className="startup-tags mb-2">
                      {startup.tags.map((tag, idx) => (
                        <span className="startup-tag" key={idx}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline-primary"
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-100 mt-2"
                    >
                      Visit Website
                    </Button>
                    {/* Testimonial */}
                    {startup.testimonial && (
                      <div className="startup-testimonial mt-3">
                        <FaQuoteLeft className="me-2 text-secondary" />
                        <span className="fst-italic">{startup.testimonial.quote}</span>
                        <div className="testimonial-author mt-1 text-muted small">
                          — {startup.testimonial.author}
                        </div>
                      </div>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>

      {/* Call to Action for Investors/Mentors */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <div className="cta-box p-4 rounded-4 shadow-sm bg-white">
              <h3 className="mb-3" style={{ color: 'var(--primary)' }}>
                Are you an investor or mentor?
              </h3>
              <p className="mb-4">
                Join our mission to empower the next generation of Ethiopian innovators. Connect with startups, share your expertise, and help shape the future.
              </p>
              <Button
                variant="outline-primary"
                size="lg"
                href="/contact"
                className="fw-bold"
              >
                Get Involved
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StartupPage;
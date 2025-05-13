import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Pagination, Nav } from 'react-bootstrap';
import { FaSearch, FaBuilding, FaUsers, FaGlobe, FaArrowRight, FaLink, FaListUl } from 'react-icons/fa';
import './StartupDirectory.css';

// Example dynamic data (replace with API or context as needed)
const startupDirectory = [
  {
    id: 1,
    name: 'IE Network Solutions',
    logo: '/src/assets/images/innovations/ie-network-solutions.jpg',
    founded: 2011,
    industry: 'IT Services',
    employees: 250,
    website: 'https://ienetworksolutions.com',
    summary: 'A leading tech company delivering impactful solutions and award-winning digital transformation.',
    tags: ['IT', 'Enterprise', 'Digital Transformation'],
    location: 'Addis Ababa',
  },
  {
    id: 2,
    name: 'WEBSPRIX IT SOLUTION PLC',
    logo: '/src/assets/images/innovations/Dawit-Birhanu.jpg',
    founded: 2022,
    industry: 'Software',
    employees: 50,
    website: 'https://techinnovators.com',
    summary: 'From idea to market leader in just 2 years. Created 50+ jobs and fostered innovation.',
    tags: ['Startup', 'Innovation', 'Growth'],
    location: 'Addis Ababa',
  },
  {
    id: 3,
    name: 'Digital Solutions',
    logo: '/src/assets/images/success-story-1.png',
    founded: 2020,
    industry: 'Digital Products',
    employees: 100,
    website: 'https://digitalsolutions.com',
    summary: 'Revolutionizing the industry with innovative technology. Trusted by 100+ clients.',
    tags: ['Digital', 'Products', 'Clients'],
    location: 'Hawassa',
  },
  // ...more startups
];

// For directory navigation (A-Z)
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const uniqueIndustries = [
  ...new Set(startupDirectory.map((startup) => startup.industry)),
];
const uniqueLocations = [
  ...new Set(startupDirectory.map((startup) => startup.location)),
];

const PAGE_SIZE = 9;

const StartupDirectory: React.FC = () => {
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('All');
  const [location, setLocation] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Directory filtering
  let filtered = startupDirectory.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(search.toLowerCase()) ||
      startup.summary.toLowerCase().includes(search.toLowerCase()) ||
      startup.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesIndustry = industry === 'All' || startup.industry === industry;
    const matchesLocation = location === 'All' || startup.location === location;
    const matchesLetter = selectedLetter
      ? startup.name[0].toUpperCase() === selectedLetter
      : true;
    return matchesSearch && matchesIndustry && matchesLocation && matchesLetter;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, industry, location, selectedLetter]);

  return (
    <section className="startup-directory-section section-padding bg-light">
      {/* Hero */}
      <div className="directory-hero py-5 text-center">
        <Container>
          <h1 className="display-5 fw-bold mb-3 brand-gradient-text">Startup Directory</h1>
          <p className="lead mb-4">
            Browse our comprehensive directory of innovative startups at IT Park. Filter by industry, location, or name to discover the next big thing in Ethiopian tech.
          </p>
          <div className="directory-quick-stats d-flex justify-content-center gap-4 mb-3">
            <div className="stat-box">
              <h2 className="stat-number">{startupDirectory.length}+</h2>
              <div className="stat-label">Startups</div>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">{uniqueIndustries.length}</h2>
              <div className="stat-label">Industries</div>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">{uniqueLocations.length}</h2>
              <div className="stat-label">Locations</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Filters */}
      <Container>
        <Row className="mb-4 align-items-center">
          <Col md={5} className="mb-2 mb-md-0">
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
          <Col md={2}>
            <Form.Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="All">All Locations</option>
              {uniqueLocations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={2} className="text-end d-none d-md-block">
            <Button
              variant="primary"
              href="/incubation/apply"
              className="startup-apply-btn"
            >
              <FaListUl className="me-2" />
              List Your Startup
            </Button>
          </Col>
        </Row>

        {/* Directory A-Z Navigation */}
        <Row className="mb-4">
          <Col>
            <Nav className="justify-content-center directory-az-nav flex-wrap">
              {alphabet.map((letter) => (
                <Nav.Item key={letter}>
                  <Nav.Link
                    className={selectedLetter === letter ? 'active' : ''}
                    onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                  >
                    {letter}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item>
                <Nav.Link
                  className={!selectedLetter ? 'active' : ''}
                  onClick={() => setSelectedLetter(null)}
                >
                  All
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        {/* Directory Cards */}
        <Row className="g-4">
          {paginated.length === 0 ? (
            <Col>
              <div className="no-results">
                <FaBuilding size={36} color="#ccc" />
                <p>No startups found matching your criteria.</p>
              </div>
            </Col>
          ) : (
            paginated.map((startup) => (
              <Col key={startup.id} lg={4} md={6}>
                <Card className="directory-card h-100">
                  <div className="directory-logo-wrapper">
                    <img
                      src={startup.logo}
                      alt={startup.name}
                      className="directory-logo"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="directory-title">{startup.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted directory-industry">
                      <FaGlobe className="me-1" /> {startup.industry}
                    </Card.Subtitle>
                    <Card.Text className="directory-summary">{startup.summary}</Card.Text>
                    <div className="directory-meta mb-2">
                      <Badge bg="info" className="me-2">{startup.location}</Badge>
                      <Badge bg="secondary" className="me-2">{startup.founded}</Badge>
                      <Badge bg="light" text="dark">
                        <FaUsers className="me-1" />{startup.employees}
                      </Badge>
                    </div>
                    <div className="directory-tags mb-2">
                      {startup.tags.map((tag, idx) => (
                        <span className="directory-tag" key={idx}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Button
                      variant="outline-primary"
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-100"
                    >
                      <FaLink className="me-1" /> Visit Website
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>

        {/* Pagination */}
        {totalPages > 1 && (
          <Row className="mt-4">
            <Col>
              <Pagination className="justify-content-center">
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} />
                {[...Array(totalPages)].map((_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={currentPage === idx + 1}
                    onClick={() => setCurrentPage(idx + 1)}
                  >
                    {idx + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
              </Pagination>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default StartupDirectory;
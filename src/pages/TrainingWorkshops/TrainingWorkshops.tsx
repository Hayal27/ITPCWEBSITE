import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaChalkboardTeacher, FaLink } from 'react-icons/fa';
import './TrainingWorkshops.css';

// Example dynamic data (replace with API or context as needed)
const trainingList = [
  {
    id: 1,
    title: 'Full Stack Web Development Bootcamp',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    date: '2024-07-15',
    duration: '6 Weeks',
    location: 'IT Park, Addis Ababa',
    type: 'Bootcamp',
    instructor: 'Abebe Kebede',
    capacity: 40,
    summary: 'Intensive hands-on bootcamp covering React, Node.js, and cloud deployment.',
    tags: ['Web', 'Full Stack', 'Bootcamp'],
    link: '/training/webdev-bootcamp',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Workshop',
    image: '/assets/images/innovations/Innovation Lab.jpeg',
    date: '2024-08-10',
    duration: '2 Days',
    location: 'IT Park, Addis Ababa',
    type: 'Workshop',
    instructor: 'Sara Alemu',
    capacity: 30,
    summary: 'Explore practical AI/ML concepts and build your first intelligent app.',
    tags: ['AI', 'Machine Learning', 'Workshop'],
    link: '/training/ai-workshop',
  },
  {
    id: 3,
    title: 'Entrepreneurship for Startups',
    image: '/assets/images/innovations/incubation.jpg',
    date: '2024-09-01',
    duration: '1 Week',
    location: 'Virtual',
    type: 'Seminar',
    instructor: 'John Tesfaye',
    capacity: 100,
    summary: 'Learn how to launch, fund, and scale your startup from industry leaders.',
    tags: ['Entrepreneurship', 'Startup', 'Seminar'],
    link: '/training/entrepreneurship',
  },
  // ...more trainings
];

const uniqueTypes = [
  ...new Set(trainingList.map((t) => t.type)),
];
const uniqueLocations = [
  ...new Set(trainingList.map((t) => t.location)),
];

const TrainingWorkshops: React.FC = () => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const [location, setLocation] = useState('All');

  // Filter trainings by search, type, and location
  const filteredTrainings = trainingList.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.summary.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesType = type === 'All' || t.type === type;
    const matchesLocation = location === 'All' || t.location === location;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <section className="training-section section-padding bg-light">
      {/* Hero */}
      <div className="training-hero py-5 text-center">
        <Container>
          <h1 className="display-5 fw-bold mb-3 brand-gradient-text">Training & Workshops</h1>
          <p className="lead mb-4">
            Upskill, innovate, and connect with the best minds in tech. Explore our upcoming trainings, bootcamps, and workshops at IT Park.
          </p>
          <div className="training-quick-stats d-flex justify-content-center gap-4 mb-3">
            <div className="stat-box">
              <h2 className="stat-number">{trainingList.length}+</h2>
              <div className="stat-label">Events</div>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">{uniqueTypes.length}</h2>
              <div className="stat-label">Types</div>
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
                placeholder="Search by title, tag, or summary..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="All">All Types</option>
              {uniqueTypes.map((t, idx) => (
                <option key={idx} value={t}>
                  {t}
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
              href="/training/apply"
              className="training-apply-btn"
            >
              <FaChalkboardTeacher className="me-2" />
              Host a Training
            </Button>
          </Col>
        </Row>

        {/* Trainings Grid */}
        <Row className="g-4">
          {filteredTrainings.length === 0 ? (
            <Col>
              <div className="no-results">
                <FaCalendarAlt size={36} color="#ccc" />
                <p>No trainings or workshops found matching your criteria.</p>
              </div>
            </Col>
          ) : (
            filteredTrainings.map((t) => (
              <Col key={t.id} lg={4} md={6}>
                <Card className="training-card h-100">
                  <div className="training-image-wrapper">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="training-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="training-title">{t.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted training-type">
                      <Badge bg="info" className="me-2">{t.type}</Badge>
                      <Badge bg="secondary">{t.duration}</Badge>
                    </Card.Subtitle>
                    <Card.Text className="training-summary">{t.summary}</Card.Text>
                    <div className="training-meta mb-2">
                      <span>
                        <FaCalendarAlt className="me-1" /> {new Date(t.date).toLocaleDateString()}
                      </span>
                      <span className="mx-2">
                        <FaMapMarkerAlt className="me-1" /> {t.location}
                      </span>
                      <span>
                        <FaUsers className="me-1" /> {t.capacity} Seats
                      </span>
                    </div>
                    <div className="training-instructor mb-2">
                      <FaChalkboardTeacher className="me-1" /> {t.instructor}
                    </div>
                    <div className="training-tags mb-2">
                      {t.tags.map((tag, idx) => (
                        <span className="training-tag" key={idx}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Button
                      variant="outline-primary"
                      href={t.link}
                      className="w-100"
                    >
                      <FaLink className="me-1" /> Learn More
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TrainingWorkshops;
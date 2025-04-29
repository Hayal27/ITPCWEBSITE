import React, { useState, useEffect, JSX } from 'react';
import { Container, Row, Col, Card, Button, Form, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './NewsEvents.css';

// Type Definitions
interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
  readTime: string;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
  featured: boolean;
  registrationLink: string;
  capacity: string;
}

type FilterType = 'all' | 'Infrastructure' | 'Innovation' | 'Startup Ecosystem' | 
  'Strategic Partnerships' | 'Events & Summits' | 'Awards & Recognition' | 
  'Government Initiatives' | 'Community Engagement';

type YearType = 'all' | '2024' | '2023' | '2022';

type TabType = 'news' | 'events';

// Sample Data
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Ethiopian IT Park Expansion 2025",
    date: "2024-04-15",
    category: "Infrastructure",
    image: "/images/news/expansion.jpg",
    description: "Ethiopian IT Park announces major expansion plans to accommodate growing tech ecosystem and international partnerships.",
    featured: true,
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "New Innovation Hub Launch",
    date: "2024-04-10",
    category: "Innovation",
    image: "/images/news/innovation-hub.jpg",
    description: "State-of-the-art innovation hub opens its doors to startups and tech entrepreneurs.",
    featured: false,
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Tech Partnership with Global Leaders",
    date: "2024-04-05",
    category: "Strategic Partnerships",
    image: "/images/news/partnership.jpg",
    description: "Ethiopian IT Park signs strategic partnership with leading global tech companies.",
    featured: true,
    readTime: "4 min read"
  }
];

const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "2024-06-15",
    time: "09:00 AM",
    venue: "Ethiopian IT Park Conference Center",
    image: "/images/events/summit.jpg",
    description: "Join us for the annual Tech Innovation Summit featuring global tech leaders and local innovators.",
    featured: true,
    registrationLink: "#",
    capacity: "200 seats"
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    date: "2024-05-20",
    time: "02:00 PM",
    venue: "IT Park Auditorium",
    image: "/images/events/pitch.jpg",
    description: "Annual startup pitch competition with exciting prizes and investment opportunities.",
    featured: false,
    registrationLink: "#",
    capacity: "150 seats"
  },
  {
    id: 3,
    title: "Women in Tech Conference",
    date: "2024-05-10",
    time: "10:00 AM",
    venue: "Digital Innovation Center",
    image: "/images/events/women-tech.jpg",
    description: "Empowering women in technology through networking and knowledge sharing.",
    featured: true,
    registrationLink: "#",
    capacity: "100 seats"
  }
];

const categories: FilterType[] = [
  "all",
  "Infrastructure",
  "Innovation",
  "Startup Ecosystem",
  "Strategic Partnerships",
  "Events & Summits",
  "Awards & Recognition",
  "Government Initiatives",
  "Community Engagement"
];

const years: YearType[] = ["all", "2024", "2023", "2022"];

// Hero background images with correct paths
const heroBackgrounds = [
  '/assets/images/hero/news-events-hero.png',
  '/assets/images/hero/news-events-hero1.png',
  '/assets/images/hero/news-events-hero2.jpg',
  '/assets/images/hero/news-events-hero3.jpeg'
];

const NewsEvents: React.FC = () => {
  // State Management
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<FilterType>('all');
  const [selectedYear, setSelectedYear] = useState<YearType>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<(NewsItem | EventItem)[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background Image Rotation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroBackgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Filter Data Effect
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = activeTab === 'news' ? newsData : eventsData;
      let filtered = [...data];

      if (searchQuery) {
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => 
          'category' in item && item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      if (selectedYear !== 'all') {
        filtered = filtered.filter(item => 
          item.date.startsWith(selectedYear)
        );
      }

      setFilteredData(filtered);
      setIsLoading(false);
    }, 500);
  }, [activeTab, searchQuery, selectedCategory, selectedYear]);

  // Helper Functions
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Event Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(e.target.value as FilterType);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedYear(e.target.value as YearType);
  };

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  // Render Functions
  const renderNewsCard = (item: NewsItem): JSX.Element => (
    <Card className="news-card">
      <Card.Img variant="top" src={item.image} alt={item.title} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="news-badge">{item.category}</span>
          <small className="text-muted">{formatDate(item.date)}</small>
        </div>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <div className="mt-auto">
          <small className="text-muted d-block mb-2">{item.readTime}</small>
          <Button variant="outline-primary" className="news-read-more-btn">
            Read More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  const renderEventCard = (item: EventItem): JSX.Element => (
    <Card className="event-card">
      <Card.Img variant="top" src={item.image} alt={item.title} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="news-badge">Upcoming</span>
          <small className="text-muted">{formatDate(item.date)}</small>
        </div>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <small className="d-block mb-2">
            <i className="bi bi-clock"></i> {item.time}
          </small>
          <small className="d-block mb-2">
            <i className="bi bi-geo-alt"></i> {item.venue}
          </small>
          <small className="d-block">
            <i className="bi bi-people"></i> {item.capacity}
          </small>
        </Card.Text>
        <div className="mt-auto">
          <Button 
            variant="primary" 
            className="event-register-btn"
            href={item.registrationLink}
          >
            Register Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div className="news-events-page">
      {/* Hero Section */}
      <section 
        className="news-hero-section"
        style={{
          '--current-image': `url('${heroBackgrounds[currentImageIndex]}')`
        } as React.CSSProperties}
      >
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="motion-div"
              >
                <h1 className="display-4 fw-bold mb-4">
                  News & Events
                </h1>
                <p className="lead mb-4">
                  Explore the latest stories, innovations, and milestones shaping 
                  the future of technology at Ethiopian IT Park.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="news-intro-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <p>
                Ethiopian IT Park stands at the heart of Ethiopia's technology revolution. Through strategic initiatives, 
                groundbreaking events, and pioneering collaborations, we foster a thriving ecosystem for startups, 
                entrepreneurs, innovators, and global partners.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filters Section */}
      <section className="news-filters-section">
        <Container>
          <Row className="g-3">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Search news and events..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="news-search-input"
              />
            </Col>
            <Col md={3}>
              <Form.Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="news-category-select"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select
                value={selectedYear}
                onChange={handleYearChange}
                className="news-year-select"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={2}>
              <div className="d-flex gap-2">
                <Button
                  variant={activeTab === 'news' ? 'primary' : 'outline-primary'}
                  onClick={() => handleTabChange('news')}
                  className="news-tab-button"
                >
                  News
                </Button>
                <Button
                  variant={activeTab === 'events' ? 'primary' : 'outline-primary'}
                  onClick={() => handleTabChange('events')}
                  className="events-tab-button"
                >
                  Events
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <section className="news-content-section">
        <Container>
          {isLoading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-5">
              <h3>No {activeTab} found matching your criteria</h3>
              <p className="text-muted">Try adjusting your search or filters</p>
            </div>
          ) : (
            <Row className="g-4">
              {filteredData.map((item) => (
                <Col key={item.id} lg={4} md={6}>
                  {activeTab === 'news' 
                    ? renderNewsCard(item as NewsItem)
                    : renderEventCard(item as EventItem)
                  }
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
};

export default NewsEvents;
import React, { useState, useEffect, JSX } from 'react';
import { Container, Row, Col, Card, Button, Form, Spinner } from 'react-bootstrap';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
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
  tags?: string[];
  comments?: number;
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
  tags?: string[];
  comments?: number;
}

interface HeroSlide {
  image: string;
  title: string;
  description: string;
}

type FilterType =
  | 'all'
  | 'Infrastructure'
  | 'Innovation'
  | 'Startup Ecosystem'
  | 'Strategic Partnerships'
  | 'Events & Summits'
  | 'Awards & Recognition'
  | 'Government Initiatives'
  | 'Community Engagement';

type YearType = 'all' | '2024' | '2023' | '2022';
type TabType = 'news' | 'events';

// Hero Slides Data
const heroSlides: HeroSlide[] = [
  {
    image: '/assets/images/hero/news-events-hero3.jpeg',
    title: 'Global Tech Partnerships',
    description: 'Connect with industry leaders and explore collaboration opportunities in our world-class facilities.',
  },
  {
    image: '/assets/images/hero/news-events-hero.png',
    title: 'Latest Updates & Announcements',
    description: 'Stay informed about the latest developments, innovations, and opportunities at Ethiopian IT Park.',
  },
  {
    image: '/assets/images/hero/news-events-hero2.jpg',
    title: 'Innovation & Technology Hub',
    description: "Experience the pulse of Ethiopia's growing tech ecosystem and be part of our success stories.",
  },
  {
    image: '/assets/images/hero/it-park-building.jpg',
    title: 'State-of-the-Art Facilities',
    description: 'Our modern infrastructure and purpose-built spaces provide the perfect environment for technology companies to thrive.',
  },
  {
    image: '/assets/images/hero/news-events-hero1.png',
    title: 'Upcoming Events & Programs',
    description: 'Discover our upcoming tech events, workshops, and networking opportunities designed to foster innovation.',
  },
];

// Sample Data (now with tags and comments)
const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Ethiopian IT Park Expansion 2025',
    date: '2024-04-15',
    category: 'Infrastructure',
    image: '/images/news/expansion.jpg',
    description: 'Ethiopian IT Park announces major expansion plans to accommodate growing tech ecosystem and international partnerships.',
    featured: true,
    readTime: '5 min read',
    tags: ['featured', 'trending'],
    comments: 12,
  },
  {
    id: 2,
    title: 'New Innovation Hub Launch',
    date: '2024-04-10',
    category: 'Innovation',
    image: '/images/news/innovation-hub.jpg',
    description: 'State-of-the-art innovation hub opens its doors to startups and tech entrepreneurs.',
    featured: false,
    readTime: '3 min read',
    tags: ['innovation'],
    comments: 5,
  },
  {
    id: 3,
    title: 'Tech Partnership with Global Leaders',
    date: '2024-04-05',
    category: 'Strategic Partnerships',
    image: '/images/news/partnership.jpg',
    description: 'Ethiopian IT Park signs strategic partnership with leading global tech companies.',
    featured: true,
    readTime: '4 min read',
    tags: ['partnership', 'sponsored'],
    comments: 8,
  },
];

const eventsData: EventItem[] = [
  {
    id: 1,
    title: 'Tech Innovation Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM',
    venue: 'Ethiopian IT Park Conference Center',
    image: '/images/events/summit.jpg',
    description: 'Join us for the annual Tech Innovation Summit featuring global tech leaders and local innovators.',
    featured: true,
    registrationLink: '#',
    capacity: '200 seats',
    tags: ['featured'],
    comments: 23,
  },
  {
    id: 2,
    title: 'Startup Pitch Competition',
    date: '2024-05-20',
    time: '02:00 PM',
    venue: 'IT Park Auditorium',
    image: '/images/events/pitch.jpg',
    description: 'Annual startup pitch competition with exciting prizes and investment opportunities.',
    featured: false,
    registrationLink: '#',
    capacity: '150 seats',
    tags: ['trending'],
    comments: 9,
  },
  {
    id: 3,
    title: 'Women in Tech Conference',
    date: '2024-05-10',
    time: '10:00 AM',
    venue: 'Digital Innovation Center',
    image: '/images/events/women-tech.jpg',
    description: 'Empowering women in technology through networking and knowledge sharing.',
    featured: true,
    registrationLink: '#',
    capacity: '100 seats',
    tags: ['community'],
    comments: 15,
  },
];

const categories: FilterType[] = [
  'all',
  'Infrastructure',
  'Innovation',
  'Startup Ecosystem',
  'Strategic Partnerships',
  'Events & Summits',
  'Awards & Recognition',
  'Government Initiatives',
  'Community Engagement',
];

const years: YearType[] = ['all', '2024', '2023', '2022'];

const NewsEvents: React.FC = () => {
  // State Management
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<FilterType>('all');
  const [selectedYear, setSelectedYear] = useState<YearType>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<(NewsItem | EventItem)[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const latestNews = [...newsData].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  const latestEvents = [...eventsData].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  // Animation Controls
  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  // Hero Navigation Functions
  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Background Image Rotation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  // Filter Data Effect
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = activeTab === 'news' ? newsData : eventsData;
      let filtered = [...data];

      if (searchQuery) {
        filtered = filtered.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(
          (item) => 'category' in item && item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      if (selectedYear !== 'all') {
        filtered = filtered.filter((item) => item.date.startsWith(selectedYear));
      }

      setFilteredData(filtered);
      setIsLoading(false);
    }, 500);
  }, [activeTab, searchQuery, selectedCategory, selectedYear]);

  // Helper Functions
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
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

  // Render tags as badges
const renderTags = (tags?: string[]) =>
  tags && tags.length > 0 ? (
    <div className="mb-1">
      {tags.map((tag) => (
        <span key={tag} className={`news-events-tag ${tag.toLowerCase()}`}>
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </span>
      ))}
    </div>
  ) : null;

  // Render News Card with tags, comments, and realistic meta
const renderNewsCard = (item: NewsItem): JSX.Element => (
  <Card className="news-events-card">
    <Card.Img variant="top" src={item.image} alt={item.title} className="news-events-card-image" />
    <Card.Body className="news-events-card-body">
      <div className="news-events-card-meta mb-1">
        <span className="news-events-badge">{item.category}</span>
        <span className="news-events-card-date">
          <i className="bi bi-calendar3"></i> {formatDate(item.date)}
        </span>
        <span className="news-events-card-readtime">
          <i className="bi bi-clock"></i> {item.readTime}
        </span>
      </div>
      {renderTags(item.tags)}
      <Card.Title className="news-events-card-title">{item.title}</Card.Title>
      <Card.Text className="news-events-card-text">{item.description}</Card.Text>
      <div className="d-flex justify-content-between align-items-center mt-auto">
        <Button variant="outline-primary" className="news-events-read-more-btn">
          View Details
        </Button>
        <span className="text-muted" title="Comments">
          <i className="bi bi-chat-dots"></i> {item.comments ?? 0}
        </span>
      </div>
    </Card.Body>
  </Card>
);

// Render Event Card with tags, comments, and realistic meta
const renderEventCard = (item: EventItem): JSX.Element => (
  <Card className="news-events-card">
    <Card.Img variant="top" src={item.image} alt={item.title} className="news-events-card-image" />
    <Card.Body className="news-events-card-body">
      <div className="news-events-card-meta mb-1">
        <span className="news-events-badge">Upcoming</span>
        <span className="news-events-card-date">
          <i className="bi bi-calendar3"></i> {formatDate(item.date)}
        </span>
        <span className="news-events-card-readtime">
          <i className="bi bi-people"></i> {item.capacity}
        </span>
      </div>
      {renderTags(item.tags)}
      <Card.Title className="news-events-card-title">{item.title}</Card.Title>
      <Card.Text className="news-events-card-text">
        <span>
          <i className="bi bi-clock"></i> {item.time}
        </span>
        <br />
        <span>
          <i className="bi bi-geo-alt"></i> {item.venue}
        </span>
      </Card.Text>
      <div className="d-flex justify-content-between align-items-center mt-auto">
        <Button variant="primary" className="news-events-register-btn" href={item.registrationLink}>
          Register
        </Button>
        <span className="text-muted" title="Comments">
          <i className="bi bi-chat-dots"></i> {item.comments ?? 0}
        </span>
      </div>
    </Card.Body>
  </Card>
);

   // Sidebar card with tags and comments
const renderSidebarCard = (
  item: NewsItem | EventItem,
  type: 'news' | 'event'
) => (
  <Card className="news-events-sidebar-card" key={item.id}>
    <div className="news-events-sidebar-img-wrap">
      <img
        src={item.image}
        alt={item.title}
        className="news-events-sidebar-img"
      />
    </div>
    <div className="news-events-sidebar-body">
      <div className="news-events-sidebar-meta">
        <span className="news-events-sidebar-badge">
          {type === 'news' ? (item as NewsItem).category : 'Upcoming'}
        </span>
        <span className="news-events-sidebar-date">
          {formatDate(item.date)}
        </span>
        <span className="text-muted" title="Comments" style={{marginLeft: 4}}>
          <i className="bi bi-chat-dots"></i> {(item as any).comments ?? 0}
        </span>
      </div>
      {renderTags(item.tags)}
      <div className="news-events-sidebar-title" title={item.title}>
        {item.title.length > 48 ? item.title.slice(0, 48) + '…' : item.title}
      </div>
    </div>
  </Card>
);

  return (
    <div className="news-events-page">
      {/* Enhanced Hero Section */}
      <section className="news-events-hero-section">
        <div className="news-events-hero-slider">
          <div className="news-events-hero-fixed-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="news-events-hero-slide"
                style={{
                  backgroundImage: `url('${heroSlides[currentImageIndex].image}')`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
              >
                <div className="news-events-hero-overlay"></div>
              </motion.div>
            </AnimatePresence>

            <Container className="news-events-hero-content">
              <Row className="align-items-center min-vh-50">
                <Col lg={8}>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="news-events-hero-text"
                  >
                    <h1 className="news-events-hero-title">
                      {heroSlides[currentImageIndex].title}
                    </h1>
                    <p className="news-events-hero-description">
                      {heroSlides[currentImageIndex].description}
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </Container>

            <div className="news-events-hero-controls">
              <span className="news-events-hero-counter">
                {currentImageIndex + 1}/{heroSlides.length}
              </span>
              <span className="news-events-hero-arrows">
                <BsChevronLeft
                  className="news-events-hero-arrow"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  tabIndex={0}
                  role="button"
                />
                <BsChevronRight
                  className="news-events-hero-arrow"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  tabIndex={0}
                  role="button"
                />
              </span>
            </div>

            <div className="news-events-hero-indicators">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`news-events-hero-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Main Layout: Professional, Standard (Sidebar sticky, not independently scrolling) */}
       <section className="news-events-main-layout">
        <Container fluid>
          <Row className="g-0 flex-lg-row flex-column">
            {/* Main Content */}
            <Col
              lg={9}
              md={8}
              xs={12}
              className="news-events-main-content"
              style={{
                background: 'var(--news-neutral)',
                padding: '0 2rem 0 0',
              }}
            >
              {/* Introduction Section */}
              <section className="news-events-intro-section">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={11} className="text-center">
                      <p className="news-events-intro-text">
                        Ethiopian IT Park stands at the heart of Ethiopia's technology revolution. Through strategic initiatives,
                        groundbreaking events, and pioneering collaborations, we foster a thriving ecosystem for startups,
                        entrepreneurs, innovators, and global partners.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* Filters Section */}
              <section className="news-events-filters-section">
                <Container>
                  <Row className="g-3">
                    <Col md={4}>
                      <Form.Control
                        type="text"
                        placeholder="Search news and events..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="news-events-search-input"
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="news-events-category-select"
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
                        className="news-events-year-select"
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
                          className="news-events-tab-button"
                        >
                          News
                        </Button>
                        <Button
                          variant={activeTab === 'events' ? 'primary' : 'outline-primary'}
                          onClick={() => handleTabChange('events')}
                          className="news-events-tab-button"
                        >
                          Events
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* Main Content Section */}
              <section className="news-events-content-section">
                <Container>
                  {isLoading ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" variant="primary" className="news-events-spinner" />
                    </div>
                  ) : filteredData.length === 0 ? (
                    <div className="text-center py-5">
                      <h3 className="news-events-no-results">No {activeTab} found matching your criteria</h3>
                      <p className="text-muted">Try adjusting your search or filters</p>
                    </div>
                  ) : (
                    <Row className="g-4">
                      {filteredData.map((item) => (
                        <Col key={item.id} lg={4} md={6}>
                          {activeTab === 'news'
                            ? renderNewsCard(item as NewsItem)
                            : renderEventCard(item as EventItem)}
                        </Col>
                      ))}
                    </Row>
                  )}
                </Container>
              </section>
            </Col>
            {/* Sidebar - sticky, scrolls with page */}
            <Col
              lg={3}
              md={4}
              xs={12}
              className="news-events-sidebar-col"
              style={{
                background: 'transparent',
                zIndex: 11,
                padding: '0 0 0 1.5rem',
                borderLeft: '1px solid #e6e6e6',
              }}
            >
              <aside className="news-events-sidebar">
                <div className="news-events-sidebar-header">
                  <span className="news-events-sidebar-title-main">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{marginRight: 6, verticalAlign: 'middle'}}><rect width="18" height="18" rx="4" fill="#0C7C92"/><path d="M7 12.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Latest News
                  </span>
                </div>
                <div className="news-events-sidebar-list">
                  {latestNews.map((item) => renderSidebarCard(item, 'news'))}
                </div>
                <div className="news-events-sidebar-header mt-4">
                  <span className="news-events-sidebar-title-main">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" style={{marginRight: 6, verticalAlign: 'middle'}}><rect width="18" height="18" rx="4" fill="#6EC9C4"/><path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Upcoming Events
                  </span>
                </div>
                <div className="news-events-sidebar-list">
                  {latestEvents.map((item) => renderSidebarCard(item, 'event'))}
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewsEvents;
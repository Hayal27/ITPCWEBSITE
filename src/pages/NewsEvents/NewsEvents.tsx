import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Form,
  Spinner
} from 'react-bootstrap';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './NewsEvents.css';

// --- Types ---
export interface NewsItem {
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
export interface EventItem {
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

// --- Data ---
const heroSlides: HeroSlide[] = [
  { image: '/src/assets/images/hero/news-events-hero3.jpeg', title: 'Global Tech Partnerships', description: 'Connect with industry leaders and explore collaboration opportunities in our world-class facilities.' },
  { image: '/src/assets/images/hero/news-events-hero.png', title: 'Latest Updates & Announcements', description: 'Stay informed about the latest developments, innovations, and opportunities at Ethiopian IT Park.' },
  { image: '/src/assets/images/hero/news-events-hero2.jpg', title: 'Innovation & Technology Hub', description: "Experience the pulse of Ethiopia's growing tech ecosystem and be part of our success stories." },
  { image: '/src/assets/images/hero/it-park-building.jpg', title: 'State-of-the-Art Facilities', description: 'Our modern infrastructure and purpose-built spaces provide the perfect environment for technology companies to thrive.' },
  { image: '/src/assets/images/hero/news-events-hero1.png', title: 'Upcoming Events & Programs', description: 'Discover our upcoming tech events, workshops, and networking opportunities designed to foster innovation.' },
];
export const newsData: NewsItem[] = [
  { id: 1, title: 'Ethiopian IT Park Expansion 2025', date: '2024-04-15', category: 'Infrastructure', image: '/images/news/expansion.jpg', description: 'Ethiopian IT Park announces major expansion plans to accommodate growing tech ecosystem and international partnerships.', featured: true, readTime: '5 min read', tags: ['featured', 'trending'], comments: 12 },
  { id: 2, title: 'New Innovation Hub Launch', date: '2024-04-10', category: 'Innovation', image: '/images/news/innovation-hub.jpg', description: 'State-of-the-art innovation hub opens its doors to startups and tech entrepreneurs.', featured: false, readTime: '3 min read', tags: ['innovation'], comments: 5 },
  { id: 3, title: 'Tech Partnership with Global Leaders', date: '2024-04-05', category: 'Strategic Partnerships', image: '/images/news/partnership.jpg', description: 'Ethiopian IT Park signs strategic partnership with leading global tech companies.', featured: true, readTime: '4 min read', tags: ['partnership', 'sponsored'], comments: 8 },
];
export const eventsData: EventItem[] = [
  { id: 1, title: 'Tech Innovation Summit 2024', date: '2024-06-15', time: '09:00 AM', venue: 'Ethiopian IT Park Conference Center', image: '/images/events/summit.jpg', description: 'Join us for the annual Tech Innovation Summit featuring global tech leaders and local innovators.', featured: true, registrationLink: '#', capacity: '200 seats', tags: ['featured'], comments: 23 },
  { id: 2, title: 'Startup Pitch Competition', date: '2024-05-20', time: '02:00 PM', venue: 'IT Park Auditorium', image: '/images/events/pitch.jpg', description: 'Annual startup pitch competition with exciting prizes and investment opportunities.', featured: false, registrationLink: '#', capacity: '150 seats', tags: ['trending'], comments: 9 },
  { id: 3, title: 'Women in Tech Conference', date: '2024-05-10', time: '10:00 AM', venue: 'Digital Innovation Center', image: '/images/events/women-tech.jpg', description: 'Empowering women in technology through networking and knowledge sharing.', featured: true, registrationLink: '#', capacity: '100 seats', tags: ['community'], comments: 15 },
];
const categories: FilterType[] = [
  'all','Infrastructure','Innovation','Startup Ecosystem',
  'Strategic Partnerships','Events & Summits',
  'Awards & Recognition','Government Initiatives','Community Engagement'
];
const years: YearType[] = ['all', '2024', '2023', '2022'];

// --- Comments Section with Email ---
interface Comment {
  id: number;
  name: string;
  email: string;
  text: string;
  date: string;
}
const CommentsSection: React.FC<{ itemId: number }> = ({ itemId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setComments([
      { id: 1, name: 'Abebe', email: 'abebe@email.com', text: 'Great event!', date: '2024-05-10' },
      { id: 2, name: 'Sara', email: 'sara@email.com', text: 'Looking forward to it.', date: '2024-05-11' },
    ]);
  }, [itemId]);

  const handleAdd = () => {
    if (!name.trim() || !email.trim() || !input.trim()) {
      setError('Name, email, and comment are required.');
      return;
    }
    // Simple email validation
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setComments([
      ...comments,
      { id: Date.now(), name, email, text: input, date: new Date().toISOString().slice(0, 10) },
    ]);
    setInput('');
    setEmail('');
    setName('');
    setError('');
  };

  return (
    <div className="mt-8 bg-white rounded-xl p-5 shadow-inner border border-gray-100">
      <h3 className="font-semibold text-lg text-[#16284F] mb-3 flex items-center gap-2">
        <FaRegCommentDots className="text-[#0C7C92]" /> Comments
      </h3>
      <div className="space-y-4 max-h-60 overflow-y-auto">
        {comments.map((c) => (
          <div key={c.id} className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0C7C92] to-[#6EC9C4] flex items-center justify-center text-white font-bold">
              {c.name[0]}
            </div>
            <div>
              <div className="font-medium text-[#0C7C92]">
                {c.name} <span className="text-xs text-gray-400">({c.email})</span>
              </div>
              <div className="text-gray-700">{c.text}</div>
              <div className="text-xs text-gray-400">{c.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <div className="flex gap-2">
          <input
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7C92]"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7C92]"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="flex gap-2">
          <textarea
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C7C92] resize-none"
            placeholder="Add a comment..."
            value={input}
            onChange={e => setInput(e.target.value)}
            rows={3}
            style={{ minHeight: 48, maxHeight: 120 }}
          />
          <button
            className="bg-[#0C7C92] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#16284F] transition"
            onClick={handleAdd}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Modern LinkedIn-style Sidebar ---
const LinkedInSidebar: React.FC<{
  latestNews: NewsItem[];
  latestEvents: EventItem[];
  onShowDetail: (item: NewsItem | EventItem) => void;
}> = ({ latestNews, latestEvents, onShowDetail }) => (
  <aside className="news-events-sidebar linkedin-sidebar bg-white rounded-xl shadow-lg p-0 overflow-hidden border border-gray-100">
    <div className="sidebar-section">
      <div className="sidebar-header flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-[#f3f6f8]">
        <svg width="24" height="24" fill="#6EC9C4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" /></svg>
        <span className="font-semibold text-[#6EC9C4] text-base">Latest News</span>
      </div>
      <ul className="sidebar-list px-0 py-2">
        {latestNews.map(item => (
          <li
            key={item.id}
            className="sidebar-list-item flex gap-3 px-4 py-3 hover:bg-[#eef3f8] cursor-pointer transition"
            onClick={() => onShowDetail(item)}
          >
            <img src={item.image} alt={item.title} className="sidebar-thumb rounded-md object-cover" style={{ width: 56, height: 56 }} />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[#16284F] text-sm line-clamp-2">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">{item.category} &middot; {new Date(item.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <FaRegCommentDots /> {item.comments ?? 0}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="sidebar-section mt-2">
      <div className="sidebar-header flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-[#f3f6f8]">
        <svg width="24" height="24" fill="#6EC9C4" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" /></svg>
        <span className="font-semibold text-[#6EC9C4] text-base">Upcoming Events</span>
      </div>
      <ul className="sidebar-list px-0 py-2">
        {latestEvents.map(item => (
          <li
            key={item.id}
            className="sidebar-list-item flex gap-3 px-4 py-3 hover:bg-[#eef3f8] cursor-pointer transition"
            onClick={() => onShowDetail(item)}
          >
            <img src={item.image} alt={item.title} className="sidebar-thumb rounded-md object-cover" style={{ width: 56, height: 56 }} />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[#16284F] text-sm line-clamp-2">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">{item.venue} &middot; {new Date(item.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <FaRegCommentDots /> {item.comments ?? 0}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <style>{`
      .linkedin-sidebar {
        font-family: 'Segoe UI', 'Arial', sans-serif;
      }
      .sidebar-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .sidebar-list-item {
        border-bottom: 1px solid #f3f6f8;
        transition: background 0.2s;
      }
      .sidebar-list-item:last-child {
        border-bottom: none;
      }
      .sidebar-thumb {
        background: #e1e9ee;
        object-fit: cover;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  </aside>
);

// --- Main Page ---
const NewsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<FilterType>('all');
  const [selectedYear, setSelectedYear] = useState<YearType>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<(NewsItem|EventItem)[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [detailItem, setDetailItem] = useState<NewsItem|EventItem|null>(null);

  // --- Add for routing ---
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ type?: string; id?: string }>();

  const latestNews = [...newsData].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4);
  const latestEvents = [...eventsData].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4);

  // --- Hero Controls ---
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset:number, velocity:number) => Math.abs(offset)*velocity;
  const handleDragEnd = (_:any, {offset,velocity}:PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) nextSlide();
    else if (swipe > swipeConfidenceThreshold) prevSlide();
  };
  const nextSlide = () => setCurrentImageIndex(i=> i===heroSlides.length-1?0:i+1);
  const prevSlide = () => setCurrentImageIndex(i=> i===0?heroSlides.length-1:i-1);

  useEffect(()=>{
    const iv = setInterval(()=> nextSlide(),5000);
    return ()=> clearInterval(iv);
  },[]);

  // --- Filtering ---
  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
      const data = activeTab==='news'? newsData : eventsData;
      let out = [...data];
      if (searchQuery) {
        out = out.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (selectedCategory!=='all') {
        out = out.filter(item =>
          'category' in item && item.category.toLowerCase()===selectedCategory.toLowerCase()
        );
      }
      if (selectedYear!=='all') {
        out = out.filter(item=> item.date.startsWith(selectedYear));
      }
      setFilteredData(out);
      setIsLoading(false);
    },400);
  },[activeTab,searchQuery,selectedCategory,selectedYear]);

  // --- Routing: Show detail if URL matches ---
  useEffect(() => {
    const { type, id } = params;
    if (type === 'news' && id) {
      const found = newsData.find(n => n.id === Number(id));
      setDetailItem(found || null);
      setActiveTab('news');
    } else if (type === 'events' && id) {
      const found = eventsData.find(e => e.id === Number(id));
      setDetailItem(found || null);
      setActiveTab('events');
    } else {
      setDetailItem(null);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  // --- Helpers ---
  const formatDate = (dateString:string) => {
    const opts:Intl.DateTimeFormatOptions = {year:'numeric',month:'long',day:'numeric'};
    return new Date(dateString).toLocaleDateString('en-US',opts);
  };
  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>)=> setSearchQuery(e.target.value);
  const handleCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>)=> setSelectedCategory(e.target.value as FilterType);
  const handleYearChange = (e:React.ChangeEvent<HTMLSelectElement>)=> setSelectedYear(e.target.value as YearType);
  const handleTabChange = (tab:TabType)=> {
    setActiveTab(tab);
    setDetailItem(null);
    navigate(`/news-events/${tab}`);
  };
  const handleShowDetail = (item:NewsItem|EventItem) => {
    setDetailItem(item);
    if ('category' in item) {
      navigate(`/resources/digital/news/news/${item.id}`);
    } else {
      navigate(`/resources/digital/news/events/${item.id}`);
    }
  };
  const handleCloseDetail = ()=> {
    setDetailItem(null);
    navigate(`/resources/digital/news/${activeTab}`);
  };

  const renderTags = (tags?:string[]) =>
    tags && tags.length>0 ? (
      <div className="mb-1">
        {tags.map(tag=>(
          <span key={tag} className={`news-events-tag ${tag.toLowerCase()}`}>
            {tag.charAt(0).toUpperCase()+tag.slice(1)}
          </span>
        ))}
      </div>
    ): null;

  // --- Cards ---
  const renderNewsCard = (item:NewsItem) => (
    <Card className="news-events-card" onClick={()=>handleShowDetail(item)}>
      <Card.Img variant="top" src={item.image} className="news-events-card-image"/>
      <Card.Body className="news-events-card-body">
        <div className="news-events-card-meta mb-1">
          <span className="news-events-badge">{item.category}</span>
          <span className="news-events-card-date"><i className="bi bi-calendar3"></i>{formatDate(item.date)}</span>
          <span className="news-events-card-readtime"><i className="bi bi-clock"></i>{item.readTime}</span>
        </div>
        {renderTags(item.tags)}
        <Card.Title className="news-events-card-title">{item.title}</Card.Title>
        <Card.Text className="news-events-card-text">{item.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button variant="outline-primary" className="news-events-read-more-btn" onClick={e=>{e.stopPropagation();handleShowDetail(item);}}>
            View Details
          </Button>
          <span className="text-muted"><i className="bi bi-chat-dots"></i>{item.comments ?? 0}</span>
        </div>
      </Card.Body>
    </Card>
  );

  const renderEventCard = (item:EventItem) => (
    <Card className="news-events-card" onClick={()=>handleShowDetail(item)}>
      <Card.Img variant="top" src={item.image} className="news-events-card-image"/>
      <Card.Body className="news-events-card-body">
        <div className="news-events-card-meta mb-1">
          <span className="news-events-badge">Upcoming</span>
          <span className="news-events-card-date"><i className="bi bi-calendar3"></i>{formatDate(item.date)}</span>
          <span className="news-events-card-readtime"><i className="bi bi-people"></i>{item.capacity}</span>
        </div>
        {renderTags(item.tags)}
        <Card.Title className="news-events-card-title">{item.title}</Card.Title>
        <Card.Text className="news-events-card-text">
          <span><i className="bi bi-clock"></i>{item.time}</span><br/>
          <span><i className="bi bi-geo-alt"></i>{item.venue}</span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button variant="primary" className="news-events-register-btn" href={item.registrationLink} onClick={e=>e.stopPropagation()}>
            Register
          </Button>
          <span className="text-muted"><i className="bi bi-chat-dots"></i>{item.comments ?? 0}</span>
        </div>
      </Card.Body>
    </Card>
  );

  // --- Main or Detail ---
  const renderMainContent = () => {
    if (detailItem) {
      return (
        <section className="news-events-detail-section">
          <div className="news-events-detail-image-bg">
            <img src={detailItem.image} alt={detailItem.title} className="news-events-detail-img"/>
          </div>
          <div className="news-events-detail-card">
            <div className="news-events-detail-meta">
              <span className="news-events-badge">{'category' in detailItem? detailItem.category : 'Upcoming'}</span>
              <span><i className="bi bi-calendar3"></i>{formatDate(detailItem.date)}</span>
              {'readTime' in detailItem && <span><i className="bi bi-clock"></i>{detailItem.readTime}</span>}
              {'capacity' in detailItem && <span><i className="bi bi-people"></i>{detailItem.capacity}</span>}
              <span className="news-events-detail-comments"><i className="bi bi-chat-dots"></i>{detailItem.comments ?? 0}</span>
            </div>
            {renderTags(detailItem.tags)}
            <h2 className="news-events-detail-title">{detailItem.title}</h2>
            <div className="news-events-detail-desc">{detailItem.description}</div>
            <Button variant="outline-secondary" className="news-events-detail-back-btn" onClick={handleCloseDetail}>
              <i className="bi bi-arrow-left"></i> Back to {activeTab==='news'?'News':'Events'}
            </Button>
            {/* --- Modern Comments Section --- */}
            <CommentsSection itemId={detailItem.id} />
          </div>
        </section>
      );
    }

    return (
      <section className="news-events-content-section">
        <Container>
          {isLoading
            ? <div className="text-center py-5"><Spinner animation="border" variant="primary"/></div>
            : filteredData.length===0
              ? <div className="text-center py-5"><h3>No {activeTab} found matching your criteria</h3></div>
              : <Row className="g-4">
                  {filteredData.map(item=>(
                    <Col key={item.id} lg={4} md={6}>
                      {activeTab==='news'? renderNewsCard(item as NewsItem) : renderEventCard(item as EventItem)}
                    </Col>
                  ))}
                </Row>
          }
        </Container>
      </section>
    );
  };

  // --- Render ---
  return (
    <div className="news-events-page">
      {/* Hero */}
      <section className="news-events-hero-section">
        <div className="news-events-hero-slider">
          <div className="news-events-hero-fixed-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity:0, scale:1.08 }}
                animate={{ opacity:1, scale:1 }}
                exit={{ opacity:0, scale:1.02 }}
                transition={{ duration:1.1, ease:"easeInOut" }}
                className="news-events-hero-slide"
                style={{ backgroundImage: `url('${heroSlides[currentImageIndex].image}')` }}
                drag="x"
                dragConstraints={{ left:0, right:0 }}
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
                    initial={{ opacity:0, y:30 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.8, delay:0.3 }}
                    className="news-events-hero-text"
                  >
                    <h1 className="news-events-hero-title">{heroSlides[currentImageIndex].title}</h1>
                    <p className="news-events-hero-description">{heroSlides[currentImageIndex].description}</p>
                  </motion.div>
                </Col>
              </Row>
            </Container>
            <div className="news-events-hero-controls">
              <span className="news-events-hero-counter">{currentImageIndex+1}/{heroSlides.length}</span>
              <span className="news-events-hero-arrows">
                <BsChevronLeft className="news-events-hero-arrow" onClick={prevSlide}/>
                <BsChevronRight className="news-events-hero-arrow" onClick={nextSlide}/>
              </span>
            </div>
            <div className="news-events-hero-indicators">
              {heroSlides.map((_,idx)=>(
                <button key={idx}
                  className={`news-events-hero-indicator ${idx===currentImageIndex?'active':''}`}
                  onClick={()=>setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="news-events-main-layout">
        <Container fluid>
          <Row className="g-0 flex-lg-row flex-column">
            {/* Main Content */}
            <Col lg={9} md={8} xs={12} className="news-events-main-content">
              {/* Intro */}
              <section className="news-events-intro-section">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={11} className="text-center">
                      <p className="news-events-intro-text">
                        Ethiopian IT Park stands at the heart of Ethiopia's technology revolution...
                      </p>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* Filters & Tabs */}
              <section className="news-events-filters-section">
                <Container>
                  <Row className="mb-3 justify-content-center">
                    <Col xs="auto">
                      <ButtonGroup className="news-events-tab-group">
                        <Button variant={activeTab==='news'?'primary':'outline-secondary'} onClick={()=>handleTabChange('news')}>News</Button>
                        <Button variant={activeTab==='events'?'primary':'outline-secondary'} onClick={()=>handleTabChange('events')}>Events</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                  <Row className="g-3 align-items-center">
                    <Col md={4}><Form.Control type="text" placeholder="Search news and events..." value={searchQuery} onChange={handleSearchChange} className="news-events-search-input"/></Col>
                    <Col md={3}><Form.Select value={selectedCategory} onChange={handleCategoryChange} className="news-events-category-select">{categories.map(c=><option key={c} value={c}>{c}</option>)}</Form.Select></Col>
                    <Col md={3}><Form.Select value={selectedYear} onChange={handleYearChange} className="news-events-year-select">{years.map(y=><option key={y} value={y}>{y}</option>)}</Form.Select></Col>
                  </Row>
                </Container>
              </section>

              {/* Content */}
              {renderMainContent()}
            </Col>

            {/* Sidebar */}
            <Col lg={3} md={4} xs={12} className="news-events-sidebar-col">
              <LinkedInSidebar
                latestNews={latestNews}
                latestEvents={latestEvents}
                onShowDetail={handleShowDetail}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewsEvents;
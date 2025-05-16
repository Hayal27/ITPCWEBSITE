import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DigitalGallery.css';
import LiveChatWidget from '../../components/LiveChatWidget';

interface DigitalItem {
  id: number;
  type: 'image' | 'video' | '3d' | 'interactive';
  category: string;
  src: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  poster?: string;
  interactiveUrl?: string;
}

const DigitalGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<DigitalItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sample digital items - replace with actual data
  const digitalItems: DigitalItem[] = [
    {
      id: 1,
      type: '3d',
      category: 'architecture',
      src: '/digital/3d/architecture1.glb',
      title: 'IT Park Main Building',
      description: '3D model of the main building showcasing modern architecture',
      date: '2024-01-15',
      tags: ['3D', 'Architecture', 'Building']
    },
    {
      id: 2,
      type: 'interactive',
      category: 'innovation',
      src: '/digital/interactive/innovation1.jpg',
      title: 'Innovation Hub Tour',
      description: 'Interactive 360° tour of the innovation hub',
      date: '2024-02-20',
      tags: ['Interactive', 'Tour', 'Innovation'],
      interactiveUrl: 'https://example.com/tour'
    },
    {
      id: 3,
      type: 'video',
      category: 'events',
      src: '/digital/videos/event1.mp4',
      title: 'Digital Transformation Summit',
      description: 'Highlights from the annual digital transformation summit',
      date: '2024-03-10',
      tags: ['Event', 'Summit', 'Digital'],
      poster: '/digital/videos/event1-poster.jpg'
    }
  ];

  const categories: string[] = ['all', 'architecture', 'innovation', 'events', 'technology'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = digitalItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="itpc-digital-gallery">
      <div className="itpc-digital-gallery__header">
        <h1 className="itpc-digital-gallery__title">Digital Gallery</h1>
        <p className="itpc-digital-gallery__description">
          Explore the digital showcase of Ethiopian IT Park's innovation and technology
        </p>
      </div>

      <Container>
        <div className="itpc-digital-gallery__controls">
          <div className="itpc-digital-gallery__search">
            <input
              type="text"
              placeholder="Search digital content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="itpc-digital-gallery__search-input"
            />
          </div>
          
          <div className="itpc-digital-gallery__filters">
            {categories.map(category => (
              <button
                key={category}
                className={`itpc-digital-gallery__filter-btn ${
                  activeFilter === category ? 'itpc-digital-gallery__filter-btn--active' : ''
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="itpc-digital-gallery__loading">
            <div className="itpc-digital-gallery__spinner"></div>
          </div>
        ) : (
          <Row className="itpc-digital-gallery__grid">
            {filteredItems.map(item => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="itpc-digital-gallery__item">
                <div 
                  className="itpc-digital-gallery__card"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="itpc-digital-gallery__media">
                    {item.type === 'image' && (
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="itpc-digital-gallery__media-content"
                      />
                    )}
                    {item.type === 'video' && (
                      <video 
                        src={item.src} 
                        poster={item.poster}
                        className="itpc-digital-gallery__media-content"
                      />
                    )}
                    {item.type === '3d' && (
                      <div className="itpc-digital-gallery__media-content itpc-digital-gallery__media-content--3d">
                        3D Preview
                      </div>
                    )}
                    {item.type === 'interactive' && (
                      <div className="itpc-digital-gallery__media-content itpc-digital-gallery__media-content--interactive">
                        Interactive
                      </div>
                    )}
                  </div>
                  <div className="itpc-digital-gallery__card-content">
                    <h3 className="itpc-digital-gallery__card-title">{item.title}</h3>
                    <p className="itpc-digital-gallery__card-description">{item.description}</p>
                    <div className="itpc-digital-gallery__tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="itpc-digital-gallery__tag">{tag}</span>
                      ))}
                    </div>
                    <p className="itpc-digital-gallery__date">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {selectedItem && (
        <div 
          className="itpc-digital-gallery__modal"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="itpc-digital-gallery__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="itpc-digital-gallery__modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <div className="itpc-digital-gallery__modal-media">
              {selectedItem.type === 'image' && (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title}
                  className="itpc-digital-gallery__modal-media-content" 
                />
              )}
              {selectedItem.type === 'video' && (
                <video 
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="itpc-digital-gallery__modal-media-content"
                />
              )}
              {selectedItem.type === '3d' && (
                <div className="itpc-digital-gallery__modal-media-content itpc-digital-gallery__modal-media-content--3d">
                  3D Viewer
                </div>
              )}
              {selectedItem.type === 'interactive' && (
                <iframe 
                  src={selectedItem.interactiveUrl}
                  title={selectedItem.title}
                  className="itpc-digital-gallery__modal-media-content itpc-digital-gallery__modal-media-content--interactive"
                />
              )}
            </div>
            <div className="itpc-digital-gallery__modal-info">
              <h3 className="itpc-digital-gallery__modal-title">{selectedItem.title}</h3>
              <p className="itpc-digital-gallery__modal-description">{selectedItem.description}</p>
              <div className="itpc-digital-gallery__modal-tags">
                {selectedItem.tags.map(tag => (
                  <span key={tag} className="itpc-digital-gallery__modal-tag">{tag}</span>
                ))}
              </div>
              <p className="itpc-digital-gallery__modal-date">
                {new Date(selectedItem.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
       <LiveChatWidget
        bgMode="auto"
        infoText="Need help? Chat with us!"
        avatarUrl="/images/hero-client-image.jpg"
        chatLink="/contact"
      />
    </div>
  );
};

export default DigitalGallery;
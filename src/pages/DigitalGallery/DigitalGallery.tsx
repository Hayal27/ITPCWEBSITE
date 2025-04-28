import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DigitalGallery.css';

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
    },
    // Add more items as needed
  ];

  const categories: string[] = ['all', 'architecture', 'innovation', 'events', 'technology'];
  const types: string[] = ['all', 'image', 'video', '3d', 'interactive'];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems: DigitalItem[] = digitalItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleFilterClick = (category: string): void => {
    setActiveFilter(category);
  };

  const handleItemClick = (item: DigitalItem): void => {
    setSelectedItem(item);
  };

  const handleCloseModal = (): void => {
    setSelectedItem(null);
  };

  const handleModalClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="digital-gallery-container">
      <div className="digital-gallery-header">
        <h1>Digital Gallery</h1>
        <p>Explore the digital showcase of Ethiopian IT Park's innovation and technology</p>
      </div>

      <Container>
        <div className="digital-gallery-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search digital content..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => handleFilterClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <Row className="digital-gallery-grid">
            {filteredItems.map(item => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="digital-item">
                <div 
                  className="digital-card"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="digital-card-media">
                    {item.type === 'image' && <img src={item.src} alt={item.title} />}
                    {item.type === 'video' && <video src={item.src} poster={item.poster} />}
                    {item.type === '3d' && <div className="3d-preview">3D Preview</div>}
                    {item.type === 'interactive' && <div className="interactive-preview">Interactive</div>}
                  </div>
                  <div className="digital-card-content">
                    <h3>{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <div className="tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <p className="date">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {selectedItem && (
        <div className="digital-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <button className="close-modal" onClick={handleCloseModal}>×</button>
            <div className="modal-media">
              {selectedItem.type === 'image' && <img src={selectedItem.src} alt={selectedItem.title} />}
              {selectedItem.type === 'video' && <video src={selectedItem.src} controls autoPlay />}
              {selectedItem.type === '3d' && <div className="3d-viewer">3D Viewer</div>}
              {selectedItem.type === 'interactive' && (
                <iframe 
                  src={selectedItem.interactiveUrl} 
                  title={selectedItem.title}
                  className="interactive-frame"
                />
              )}
            </div>
            <div className="modal-info">
              <h3>{selectedItem.title}</h3>
              <p className="description">{selectedItem.description}</p>
              <div className="tags">
                {selectedItem.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <p className="date">{new Date(selectedItem.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalGallery; 
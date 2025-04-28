import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MediaGallery.css';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  category: string;
  src: string;
  title: string;
  date: string;
  poster?: string;
}

const MediaGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Sample gallery items - replace with actual data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      category: 'events',
      src: '/images/gallery/event1.jpg',
      title: 'IT Park Opening Ceremony',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      category: 'facilities',
      src: '/images/gallery/facility1.jpg',
      title: 'Modern Workspace',
      date: '2024-02-20'
    },
    {
      id: 3,
      type: 'video',
      category: 'events',
      src: '/videos/gallery/event2.mp4',
      title: 'Tech Conference 2024',
      date: '2024-03-10',
      poster: '/images/gallery/event2-poster.jpg'
    },
    // Add more items as needed
  ];

  const categories: string[] = ['all', 'events', 'facilities', 'startups', 'workshops'];

  const filteredItems: GalleryItem[] = galleryItems.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const handleFilterClick = (category: string): void => {
    setActiveFilter(category);
  };

  const handleImageClick = (item: GalleryItem): void => {
    setSelectedImage(item);
  };

  const handleCloseModal = (): void => {
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <div className="itpc-media-gallery-container">
      <div className="itpc-media-gallery-header">
        <h1>Media Gallery</h1>
        <p>Explore the vibrant ecosystem of Ethiopian IT Park through our visual journey</p>
      </div>

      <Container>
        <div className="itpc-gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`itpc-filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <Row className="itpc-gallery-grid">
          {filteredItems.map(item => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="itpc-gallery-item">
              <div 
                className="itpc-gallery-card"
                onClick={() => handleImageClick(item)}
              >
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.title} />
                ) : (
                  <video src={item.src} poster={item.poster} />
                )}
                <div className="itpc-gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedImage && (
        <div className="itpc-image-modal" onClick={handleCloseModal}>
          <div className="itpc-modal-content" onClick={handleModalClick}>
            <button className="itpc-close-modal" onClick={handleCloseModal}>×</button>
            {selectedImage.type === 'image' ? (
              <img src={selectedImage.src} alt={selectedImage.title} />
            ) : (
              <video src={selectedImage.src} controls autoPlay />
            )}
            <div className="itpc-modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{new Date(selectedImage.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
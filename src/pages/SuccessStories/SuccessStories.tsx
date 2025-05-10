import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SuccessStories.css';

interface SuccessMetric {
  number: string;
  label: string;
}

interface Milestone {
  year: string;
  achievement: string;
}

interface SuccessStory {
  id: number;
  companyName: string;
  category: string;
  logo: string;
  heroImage: string;
  tagline: string;
  description: string;
  metrics: SuccessMetric[];
  milestones: Milestone[];
  founders: {
    name: string;
    role: string;
    image: string;
    quote: string;
  }[];
  technologies: string[];
  awards: string[];
  videoUrl?: string;
}

const SuccessStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const stories: SuccessStory[] = [
    {
      id: 1,
      companyName: "IE Network Solutions",
      category: "Enterprise Solutions",
      logo: "/src/assets/images/innovations/ie-network-logo.png",
      heroImage: "/src/assets/images/success-stories/ie-network-hero.jpg",
      tagline: "Leading Digital Transformation in Ethiopia",
      description: "From a small startup to Ethiopia's premier enterprise solutions provider, IE Network Solutions has transformed the digital landscape of over 200 organizations.",
      metrics: [
        { number: "250+", label: "Projects Delivered" },
        { number: "200+", label: "Enterprise Clients" },
        { number: "500M+ ETB", label: "Annual Revenue" },
        { number: "150+", label: "Tech Jobs Created" }
      ],
      milestones: [
        { year: "2018", achievement: "Founded at Ethiopia ICT Park" },
        { year: "2019", achievement: "First Enterprise Client" },
        { year: "2020", achievement: "Microsoft Gold Partnership" },
        { year: "2022", achievement: "Expanded to East Africa" }
      ],
      founders: [
        {
          name: "Meried Bekele",
          role: "CEO & Founder",
          image: "/src/assets/images/success-stories/kaleb.jpg",
          quote: "The ICT Park's incubation program provided us the foundation to build a world-class technology company in Ethiopia."
        }
      ],
      technologies: ["Cloud Computing", "Enterprise Software", "Cybersecurity", "Data Analytics"],
      awards: ["ICT Excellence Award 2022", "Best Enterprise Solution 2021"],
      videoUrl: "https://youtube.com/success-story-ie-network"
    },
    // Add more success stories...
  ];

  return (
    <div className="ss-page">
      {/* Hero Section */}
      <section className="ss-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="ss-hero-title">
                Success Stories
                <span className="ss-hero-subtitle">Inspiring Innovation in Ethiopia</span>
              </h1>
              <div className="ss-hero-stats">
                <div className="ss-stat">
                  <span className="ss-stat-number">50+</span>
                  <span className="ss-stat-label">Success Stories</span>
                </div>
                <div className="ss-stat">
                  <span className="ss-stat-number">$25M+</span>
                  <span className="ss-stat-label">Revenue Generated</span>
                </div>
                <div className="ss-stat">
                  <span className="ss-stat-number">1000+</span>
                  <span className="ss-stat-label">Jobs Created</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="ss-filter">
        <Container>
          <div className="ss-filter-buttons">
            <button 
              className={`ss-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Stories
            </button>
            <button 
              className={`ss-filter-btn ${selectedCategory === 'enterprise' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('enterprise')}
            >
              Enterprise
            </button>
            <button 
              className={`ss-filter-btn ${selectedCategory === 'fintech' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('fintech')}
            >
              FinTech
            </button>
            <button 
              className={`ss-filter-btn ${selectedCategory === 'healthtech' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('healthtech')}
            >
              HealthTech
            </button>
          </div>
        </Container>
      </section>

      {/* Stories Grid */}
      <section className="ss-grid">
        <Container>
          <Row className="g-4">
            {stories
              .filter(story => selectedCategory === 'all' || story.category.toLowerCase().includes(selectedCategory))
              .map(story => (
                <Col lg={4} md={6} key={story.id}>
                  <div className="ss-card" onClick={() => setSelectedStory(story)}>
                    <div className="ss-card-logo">
                      <img src={story.logo} alt={story.companyName} />
                    </div>
                    <div className="ss-card-content">
                      <div className="ss-card-category">{story.category}</div>
                      <h3>{story.companyName}</h3>
                      <p>{story.tagline}</p>
                      <div className="ss-card-metrics">
                        {story.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="ss-metric">
                            <span className="ss-metric-number">{metric.number}</span>
                            <span className="ss-metric-label">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ss-card-footer">
                      <button className="ss-read-more">
                        Read Full Story <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <div className="ss-modal" onClick={() => setSelectedStory(null)}>
          <div className="ss-modal-content" onClick={e => e.stopPropagation()}>
            <button className="ss-modal-close" onClick={() => setSelectedStory(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="ss-modal-hero">
              <img src={selectedStory.heroImage} alt={selectedStory.companyName} />
              <div className="ss-modal-hero-content">
                <img src={selectedStory.logo} alt={selectedStory.companyName} className="ss-modal-logo" />
                <h2>{selectedStory.companyName}</h2>
                <p>{selectedStory.tagline}</p>
              </div>
            </div>

            <div className="ss-modal-body">
              <div className="ss-modal-metrics">
                {selectedStory.metrics.map((metric, index) => (
                  <div key={index} className="ss-modal-metric">
                    <span className="ss-metric-number">{metric.number}</span>
                    <span className="ss-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="ss-modal-section">
                <h3>The Journey</h3>
                <p>{selectedStory.description}</p>
              </div>

              <div className="ss-modal-section">
                <h3>Key Milestones</h3>
                <div className="ss-timeline">
                  {selectedStory.milestones.map((milestone, index) => (
                    <div key={index} className="ss-timeline-item">
                      <div className="ss-timeline-year">{milestone.year}</div>
                      <div className="ss-timeline-content">{milestone.achievement}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ss-modal-section">
                <h3>Founder's Story</h3>
                <div className="ss-founders">
                  {selectedStory.founders.map((founder, index) => (
                    <div key={index} className="ss-founder">
                      <img src={founder.image} alt={founder.name} />
                      <h4>{founder.name}</h4>
                      <p className="ss-founder-role">{founder.role}</p>
                      <blockquote className="ss-founder-quote">
                        "{founder.quote}"
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              {selectedStory.videoUrl && (
                <div className="ss-modal-section">
                  <h3>Watch Their Story</h3>
                  <div className="ss-video-container">
                    <iframe 
                      src={selectedStory.videoUrl} 
                      title={`${selectedStory.companyName} Story`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="ss-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2>Write Your Success Story</h2>
              <p>Join our incubation program and become the next success story</p>
              <button className="ss-cta-button">
                Start Your Journey <i className="fas fa-arrow-right"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SuccessStories;
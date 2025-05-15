import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaRocket, FaLightbulb, FaGraduationCap, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import '../styles/IncubationCard.css';

const programs = [
  {
    title: "Startup Support",
    icon: <FaRocket />,
    description: "Office spaces, mentorship, and pitch events to accelerate your growth journey.",
    link: "/incubation/startups"
  },
  {
    title: "Capacity Building",
    icon: <FaGraduationCap />,
    description: "Intensive workshops, bootcamps, and training programs to upskill your team.",
    link: "/incubation/training"
  },
  {
    title: "Innovation Labs",
    icon: <FaLaptopCode />,
    description: "Access to state-of-the-art labs, funding, and corporate collaborations.",
    link: "/incubation/innovation-programs"
  }
];

const successStories = [
  {
    image: '/src/assets/images/ie-network-solutions.jpeg',
    stats: [
      { number: '250+', label: 'Completed Projects' },
      { number: '200+', label: 'Clients Served' },
      { number: '500M+ ETB', label: 'Annual Revenue' },
    ],
    title: 'IE Network Solutions',
    description: [
      'A leading tech company delivering impactful solutions.',
      'Award-winning digital transformation partner.',
    ],
    link: '/incubation/startups/success',
  },
  {
    image: 'https://res.cloudinary.com/yesuf/image/upload/v1747295344/kagool_ev8nkh.jpg',
    stats: [
      { number: 'Global', label: 'Presence' },
      { number: '20+ Years', label: 'Experience' },
    ],
    title: 'Kagool PLC',
    description: [
      'A leading global data & analytics consultancy, delivering digital transformation for enterprises.',
      'Located at 2nd Floor, BPO Building, Information Technology Park, Addis Ababa, Ethiopia.',
      'Discover more on their website: kagool.com/about-us',
    ],
    link: 'https://www.kagool.com/about-us',
  },
  {
    image: 'https://res.cloudinary.com/yesuf/image/upload/v1747295683/unin_duld3y.jpg',
    stats: [
      { number: '170+', label: 'Member States' },
      { number: '1966', label: 'Established' },
    ],
    title: 'UNIDO Ethiopia',
    description: [
      'The United Nations Industrial Development Organization (UNIDO) drives inclusive and sustainable industrial development.',
      'Active in Ethiopia’s IT Park, supporting innovation and industrial growth.',
      'Learn more: unido.org/about-us/who-we-are',
    ],
    link: 'https://www.unido.org/about-us/who-we-are',
  },
];

const IncubationCard: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.itpc-incubation-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`itpc-incubation-section ${isVisible ? 'visible' : ''}`}>
      <Container>
        {/* Header Section */}
        <Row className="mb-5 text-center">
          <Col lg={12}>
            <h2 className="itpc-section-title">Incubation & Innovation</h2>
            <p className="itpc-section-description">
              Empowering startups and entrepreneurs to build the future of technology in Ethiopia.
              Join our ecosystem of innovation and growth.
            </p>
          </Col>
        </Row>

        {/* Programs Overview Header */}
        <div className="itpc-section-header">
          <div className="itpc-header-image">
            <img 
              src="/src/assets/images/program.png" 
              alt="Programs Overview" 
              className="itpc-header-img"
            />
          </div>
          <div className="itpc-header-content">
            <div className="itpc-badge-container">
              <div className="itpc-badge-line">
                <span className="itpc-badge-circle">
                  <FaRocket className="itpc-badge-icon itpc-rotating" />
                </span>
                <span className="itpc-badge-number">01</span>
              </div>
            </div>
            <div className="itpc-header-text">
              <h3 className="itpc-header-title">Programs Overview</h3>
              <div className="itpc-header-description">
                <p>
                  Our comprehensive incubation programs provide the perfect platform 
                  for startups and entrepreneurs to transform innovative ideas into 
                  impactful solutions. Through expert mentorship, state-of-the-art 
                  facilities, and a collaborative ecosystem, we empower founders to 
                  accelerate growth and build sustainable businesses.
                </p>
                <div className="itpc-header-note">
                  <FaChartLine className="itpc-note-icon" />
                  <span>Accelerating Growth & Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <Row className="g-4 itpc-programs-grid">
          {programs.map((program, index) => (
            <Col lg={4} md={6} key={index}>
              <div 
                className="itpc-program-card"
                style={{"--animation-order": index} as React.CSSProperties}
              >
                <div className="itpc-program-icon">
                  {program.icon}
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <a href={program.link} className="itpc-program-link">
                  Learn More <FaArrowRight className="itpc-arrow-icon" />
                </a>
              </div>
            </Col>
          ))}
        </Row>

        {/* Success Stories Header */}
        <div className="itpc-section-header itpc-reverse">
          <div className="itpc-header-image">
            <img 
              src="/src/assets/images/story.png" 
              alt="Success Stories" 
              className="itpc-header-img"
            />
          </div>
          <div className="itpc-header-content">
            <div className="itpc-badge-container">
              <div className="itpc-badge-line">
                <span className="itpc-badge-circle itpc-badge-alt">
                  <FaLightbulb className="itpc-badge-icon itpc-rotating" />
                </span>
                <span className="itpc-badge-number">02</span>
              </div>
            </div>
            <div className="itpc-header-text">
              <h3 className="itpc-header-title">Success Stories</h3>
              <div className="itpc-header-description">
                <p>
                  Discover how startups have transformed their innovative ideas into 
                  successful ventures through our support. These success stories 
                  showcase the power of determination, expert guidance, and the right 
                  ecosystem in creating impactful businesses.
                </p>
                <div className="itpc-header-note">
                  <FaLightbulb className="itpc-note-icon" />
                  <span>Inspiring Innovation Journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="itpc-stories-grid">
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`itpc-story-card ${hovered === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="itpc-story-default">
                <div className="itpc-story-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="itpc-story-title-container">
                  <h4 className="itpc-story-title">{story.title}</h4>
                  <FaArrowRight className="itpc-story-arrow" />
                </div>
              </div>
              <div className="itpc-story-modal">
                <h4 className="itpc-modal-title">{story.title}</h4>
                <div className="itpc-modal-content">
                  {story.description.map((desc, i) => (
                    <p key={i} className="itpc-story-desc">{desc}</p>
                  ))}
                  <div className="itpc-story-stats">
                    {story.stats.map((stat, idx) => (
                      <div key={idx} className="itpc-stat-item">
                        <span className="itpc-stat-number">{stat.number}</span>
                        <span className="itpc-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={story.link} className="itpc-story-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IncubationCard;
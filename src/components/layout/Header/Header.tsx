import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`site-topbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="site-topbar-inner">
          <div className="topbar-left">
            <div className="topbar-info">
              <i className="fas fa-star"></i>
              <span>Empowering Ethiopia’s Digital Future — Driving Africa’s Innovation Pulse</span>
            </div>
          </div>
          <div className="topbar-right">
            <ul className="topbar-menu">            
              <li>
                <a href="/visit">
                  <i className="fas fa-building"></i> Visit IT Park
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="/visit/about">About Us</a>
                    <ul className="sub-sub-menu">
                      <li><a href="/visit/about/who-we-are">Who We Are</a></li>
                      <li><a href="/visit/about/mission-vision">Mission & Vision</a></li>
                      <li><a href="/visit/about/leadership">Leadership & Governance</a></li>
                      <li><a href="/visit/about/map">Park Map / Virtual Tour</a></li>
                      <li><a href="/visit/about/partners">Partners & Sponsors</a></li>
                    </ul>
                  </li>
                  <li><a href="/visit/leadership">Leadership & Team</a></li>
                  <li><a href="/visit/partners">Partners & Investors</a></li>
                </ul>
              </li>
              <li>
                <a href="/career">
                  <i className="fas fa-briefcase"></i> Career
                </a>
                <ul className="sub-menu">
                  <li><a href="/career/jobs">Jobs</a></li>
                </ul>
              </li>  
              <li>
                <a href="/trends">
                  <i className="fas fa-chart-line"></i> Trends
                </a>
                <ul className="sub-menu">
                  <li><a href="/trends/success-stories">Success Stories</a></li>
                </ul>
              </li>
            </ul>
            <div className="language-selector">
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="language-dropdown"
              >
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="site-header-inner">
          <div className="header-content">
            {/* Logo */}
            <div className="header-brand">
              <a href="/" className="logo-container">
                <div className="logo-wrapper">
                  <img 
                    src="/assets/images/Asset 22@30x.png" 
                    alt="Ethiopian IT Park Logo" 
                    className="logo-image"
                  />
                  <div className="logo-glow"></div>
                </div>
              </a>
            </div>

            {/* Navigation */}
            <nav className="navigator">
              <ul className="menu">
                <li><a href="/">Home</a></li>
                <li>
                  <a href="/investment">Investment</a>
                  <ul className="sub-menu">
                    <li><a href="/investment/infrastructure">Infrastructure</a></li>
                    <li><a href="/investment/zones">Zones</a></li>
                    <li><a href="/investment/business-templates">Business Templates</a></li>
                    <li><a href="/investment/steps-to-invest">Steps to Invest</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/it-cloud">IT Cloud</a>
                  <ul className="sub-menu">
                    <li><a href="/it-cloud/web-hosting">Web Hosting Service</a></li>
                    <li><a href="/it-cloud/services">Services</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/incubation">Incubation & Innovation</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/incubation/startups">Startups</a>
                      <ul className="sub-sub-menu">
                        <li><a href="/incubation/startups/directory">Startup Directory</a></li>
                        <li><a href="/incubation/startups/featured">Featured Innovations</a></li>
                        <li><a href="/incubation/startups/success">Success Stories</a></li>
                      </ul>
                    </li>
                    <li><a href="/incubation/training">Training</a></li>
                    <li><a href="/incubation/innovation-programs">Innovation & Acceleration Programs</a></li>
                    <li><a href="/incubation/how-to-apply">How to Apply</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/resources">Resources</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/resources/digital">Digital Gallery</a>
                      <ul className="sub-sub-menu">
                        <li><a href="/resources/digital/gallery">Media Gallery</a></li>
                        <li><a href="/resources/digital/news">News & Events</a></li>
                      </ul>
                    </li>
                    <li><a href="/resources/meeting-room">Smart Meeting Room</a></li>
                    <li><a href="/resources/templates">Business Templates</a></li>
                    <li><a href="/resources/faqs">FAQs</a></li>
                    <li><a href="/resources/policy">Policy & Guidelines</a></li>
                    <li><a href="/resources/tools">Business Tools & Docs</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/services">Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/services/spaces">Office Spaces & Facilities</a>
                      <ul className="sub-sub-menu">
                        <li><a href="/services/spaces/office">Office Spaces</a></li>
                        <li><a href="/services/spaces/coworking">Co-working Spaces</a></li>
                        <li><a href="/services/spaces/innovation">Innovation Spaces</a></li>
                      </ul>
                    </li>
                    <li><a href="/services/tech-infrastructure">Tech Infrastructure</a></li>
                    <li><a href="/services/it-support">IT & Network Support</a></li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Extras */}
            <div className="extras">
              <div className="header-info-text">
                <div className="icons-info">
                  <div className="icons">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info">
                    Have any questions?<br />
                    <a href="tel:+251944666633">+251-944-666-633</a>
                  </div>
                </div>
              </div>

              <div className="search-container" ref={searchBoxRef}>
                <div className="search-trigger" onClick={handleSearchClick}>
                  <i className="fas fa-search"></i>
                </div>
                <div className={`search-box ${isSearchActive ? 'active' : ''}`}>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              <a href="#" className="off-canvas-toggle">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
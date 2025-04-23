import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
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
              <span>Empowering Ethiopia's Digital Future Through Innovation and Technology</span>
            </div>
          </div>
          <div className="topbar-right">
            <ul className="topbar-menu">
              <li><a href="/careers"><i className="fas fa-briefcase"></i> Careers</a></li>
              <li><a href="/tenders"><i className="fas fa-file-contract"></i> Tenders</a></li>
              <li><a href="/news"><i className="fas fa-newspaper"></i> News & Updates</a></li>
              <li><a href="/contact"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
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
                <li>
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li><a href="#">Homepage 01 Default</a></li>
                    <li><a href="#">Homepage 02</a></li>
                    <li><a href="#">Homepage 03</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Company</a>
                  <ul className="sub-menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Mission & Vision</a></li>
                    <li><a href="#">Leadership Team</a></li>
                    <li><a href="#">Why Choose Us</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">IT Solutions</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">IT Services</a>
                      <ul className="sub-sub-menu">
                        <li><a href="#">Managed IT</a></li>
                        <li><a href="#">IT Support</a></li>
                        <li><a href="#">IT Consultancy</a></li>
                        <li><a href="#">Cloud Computing</a></li>
                        <li><a href="#">Cyber Security</a></li>
                        <li><a href="#">Custom Software</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Industries</a>
                      <ul className="sub-sub-menu">
                        <li><a href="#">Banking</a></li>
                        <li><a href="#">Capital Markets</a></li>
                        <li><a href="#">Enterprise Technology</a></li>
                        <li><a href="#">Manufacturing</a></li>
                        <li><a href="#">Healthcare</a></li>
                        <li><a href="#">Higher Education</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">IT Blog</a></li>
                <li><a href="#">Contact</a></li>
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
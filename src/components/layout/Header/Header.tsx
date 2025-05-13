import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

type MenuItem = {
  label: string;
  href: string;
  subMenu?: MenuItem[];
};

const mobileMenuData: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'IT Services',
    href: '/services',
    subMenu: [
      { label: 'IT & Network Support', href: '/services/network' },
      { label: 'Software & Consulting', href: '/services/software-consulting' },
      { label: 'Cloud Infrastructure', href: '/it-cloud/cloud-infrastructure' },
      { label: 'Web Hosting', href: '/it-cloud/web-hosting' },
      { label: 'Tech Support Request', href: '/it-cloud/tech-support-request' },
    ],
  },
  {
    label: 'Investment',
    href: '/investment',
    subMenu: [
      { label: 'Infrastructure', href: '/investment/infrastructure' },
      { label: 'Zones', href: '/investment/zones' },
      { label: 'Business Templates', href: '/investment/business-templates' },
      { label: 'Steps to Invest', href: '/investment/steps-to-invest' },
    ],
  },
  {
    label: 'Innovation & Workspace',
    href: '/incubation',
    subMenu: [
      {
        label: 'Startups',
        href: '/incubation/startups',
        subMenu: [
          { label: 'Directory', href: '/incubation/startups/directory' },
          { label: 'Featured Startups', href: '/incubation/startups/featured' },
          { label: 'Success Stories', href: '/incubation/startups/success' },
        ],
      },
      {
        label: 'Programs & Labs',
        href: '/incubation/programs',
        subMenu: [
          { label: 'Training & Workshops', href: '/incubation/training' },
          { label: 'Innovation Labs', href: '/incubation/innovation-programs' },
        ],
      },
      {
        label: 'Workspaces',
        href: '/services/spaces',
        subMenu: [
          { label: 'Office Rent', href: '/services/spaces/office-Rent' },
          { label: 'Leased Land', href: '/services/spaces/leased-Land' },
          { label: 'Co-working Spaces', href: '/services/spaces/coworking' },
          { label: 'Innovation Zones', href: '/services/spaces/innovation' },
        ],
      },
      { label: 'Startup Templates', href: '/resources/templates' },
      { label: 'How to Apply', href: '/incubation/how-to-apply' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    subMenu: [
      { label: 'Media & Gallery', href: '/resources/digital' },
      { label: 'News & Events', href: '/resources/digital/news' },
      { label: 'Smart Meeting Room', href: '/resources/meeting-room' },
      { label: 'Business Tools & Templates', href: '/resources/tools' },
      { label: 'Policy & Guidelines', href: '/resources/policy' },
      { label: 'FAQs', href: '/resources/faqs' },
    ],
  },
];

const Header: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenus, setMobileSubMenus] = useState<{ [key: string]: boolean }>({});
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  const toggleMobileSubMenu = (key: string) => {
    setMobileSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMobileMenu = (items: MenuItem[], parentKey = '') =>
    <ul className="mobile-menu-list">
      {items.map((item, idx) => {
        const key = `${parentKey}${item.label}-${idx}`;
        const hasSub = !!item.subMenu;
        return (
          <li key={key}>
            <a
              href={item.href}
              onClick={hasSub ? (e) => { e.preventDefault(); toggleMobileSubMenu(key); } : undefined}
              className={hasSub ? 'has-mobile-sub' : ''}
            >
              {item.label}
              {hasSub && (
                <span className={`mobile-arrow ${mobileSubMenus[key] ? 'open' : ''}`}>▶</span>
              )}
            </a>
            {hasSub && mobileSubMenus[key] && renderMobileMenu(item.subMenu!, key)}
          </li>
        );
      })}
    </ul>;

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
                <a href="/about">
                  <i className="fas fa-building"></i> About IT Park
                </a>
                <ul className="sub-menu">
                  <li><a href="/about/who-we-are">Who We Are</a></li>
                  <li><a href="/about/mission-vision">Mission & Vision</a></li>
                  <li><a href="/about/leadership">Leadership & Team</a></li>
                  <li><a href="/about/partners">Partners & Investors</a></li>
                  <li><a href="/about/board">Board of Directors</a></li>
                  <li><a href="/about/map">Park Map & Virtual Tour</a></li>
                </ul>
              </li>
              <li>
                <a href="/career"><i className="fas fa-briefcase"></i> Career</a>
                <ul className="sub-menu">
                  <li><a href="/career/jobs">Jobs</a></li>
                </ul>
              </li>
              <li>
                <a href="/trends"><i className="fas fa-chart-line"></i> Trends</a>
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
                    src="/src/assets/images/Asset 22@30x.png"
                    alt="Ethiopian IT Park Logo"
                    className="logo-image"
                  />
                  <div className="logo-glow"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="navigator">
              <ul className="menu">
                <li><a href="/">Home</a></li>
                <li>
                  <a href="/services">IT Services</a>
                  <ul className="sub-menu">
                    <li><a href="/services/network">IT & Network Support</a></li>
                    <li><a href="/services/software-consulting">Software & Consulting</a></li>
                    <li><a href="/it-cloud/cloud-infrastructure">Cloud Infrastructure</a></li>
                    <li><a href="/it-cloud/web-hosting">Web Hosting</a></li>
                    <li><a href="/it-cloud/tech-support-request">Tech Support Request</a></li>
                  </ul>
                </li>
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
                  <a href="/incubation">Workspace & Innovation</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/services/spaces">Workspaces</a>
                      <ul className="sub-sub-menu">
                        <li><a href="/services/spaces/office-Rent">Office Rent</a></li>
                        <li><a href="/services/spaces/leased-Land">Leased Land</a></li>
                        <li><a href="/services/spaces/coworking">Co-working Spaces</a></li>
                        <li><a href="/services/spaces/innovation">Innovation Zones</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/incubation/startups">Startups</a>
                      <ul className="sub-sub-menu">
                        <li><a href="/incubation/startups/directory">Directory</a></li>
                        <li><a href="/incubation/startups/featured">Featured Startups</a></li>
                        <li><a href="/incubation/startups/success">Success Stories</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/incubation/programs">Programs & Labs</a>
                      <ul className="sub-sub-menu">
                        <li><a href="/incubation/training">Training & Workshops</a></li>
                        <li><a href="/incubation/innovation-programs">Innovation Labs</a></li>
                      </ul>
                    </li>
                    <li><a href="/resources/templates">Startup Templates</a></li>
                    <li><a href="/incubation/how-to-apply">How to Apply</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/resources">Resources</a>
                  <ul className="sub-menu">
                    <li><a href="/resources/digital">Media & Gallery</a></li>
                    <li><a href="/resources/digital/news">News & Events</a></li>
                    <li><a href="/resources/meeting-room">Smart Meeting Room</a></li>
                    <li><a href="/resources/tools">Business Tools & Templates</a></li>
                    <li><a href="/resources/policy">Policy & Guidelines</a></li>
                    <li><a href="/resources/faqs">FAQs</a></li>
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
                  <button
                    className="search-close-btn"
                    style={{
                      display: isSearchActive ? 'block' : 'none',
                      background: 'none',
                      border: 'none',
                      fontSize: '1.5rem',
                      color: 'var(--accent)',
                      marginLeft: '8px',
                      cursor: 'pointer'
                    }}
                    aria-label="Close search"
                    onClick={() => setIsSearchActive(false)}
                    tabIndex={isSearchActive ? 0 : -1}
                  >×</button>
                </div>
              </div>
              <button
                className={`off-canvas-toggle${mobileMenuOpen ? ' open' : ''}`}
                aria-label="Open menu"
                onClick={toggleMobileMenu}
              >
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay${mobileMenuOpen ? ' open' : ''}`} onClick={toggleMobileMenu} />
      <nav className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="/" className="mobile-logo">
            <img src="/src/assets/images/Asset 22@30x.png" alt="Logo" />
          </a>
          <button className="mobile-menu-close" aria-label="Close menu" onClick={toggleMobileMenu}>
            ×
          </button>
        </div>
        <div className="mobile-menu-content">
          {renderMobileMenu(mobileMenuData)}
          <div className="mobile-language-selector">
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
      </nav>
    </>
  );
};

export default Header;
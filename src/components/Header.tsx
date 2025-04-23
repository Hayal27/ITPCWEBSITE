import React from 'react';

const Header: React.FC = () => (
  <header className="main-header">
    <div className="header-sticky">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img src="/assets/images/logo.png" alt="ITPC LOGO" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav me-auto" id="menu">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Main</a></li>
                  <li><a className="dropdown-item" href="/index-image">Image</a></li>
                  <li><a className="dropdown-item" href="/index-video">Video</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/service">Services</a></li>
              {/* other menu items */}
            </ul>
            <a href="/contact" className="btn btn-primary">Get a Quote</a>
          </div>
        </div>
      </nav>
      <div className="responsive-menu" />
    </div>
  </header>
);

export default Header;
import React from 'react';

const Header: React.FC = () => (
  <header id="sticky-header" className="transparent-header header-style-two">
    <div className="container custom-container">
      <div className="menu-area">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="logo">
                  <a href="index.htm"><img src="website/img/logo/logo.png" alt="Logo" /></a>
                </div>
                <div className="navbar-wrap main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li><a href="index.htm">Home</a></li>
                    <li><a href="about-abronal-technologies.html">About Us</a></li>
                    <li className="menu-item-has-children"><a href="#">Products</a>
                      <ul className="sub-menu">
                        <li><a href="hospital-management-system.html">Healthcare ERP</a></li>
                        <li><a href="college-management-system.html">College ERP</a></li>
                        <li><a href="sales-and-inventory-management-system.html">Sales & Inventory</a></li>
                        <li><a href="human-resource-and-payroll-management-system.html">HR & Payroll</a></li>
                        <li><a href="manufacturing-management-system.html">Manufacturing</a></li>
                        <li><a href="asset-management-system.html">Fixed Asset</a></li>
                        <li><a href="customer-relation-management-system.html">CRM</a></li>
                        <li><a href="accounting-management-system.html">Accounting</a></li>
                      </ul>
                    </li>
                    <li><a href="abronal-services.html">Services</a></li>
                    <li><a href="abronal-news.html">News</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
                <div className="header-action">
                  <ul className="list-wrap">
                    <li className="header-contact-two">
                      <div className="icon"><i className="flaticon-phone-call"></i></div>
                      <div className="content">
                        <span>Phone Number</span>
                        <a href="tel:+251911395871">+251911395871</a>
                      </div>
                    </li>
                    <li className="header-search"><a href="#"><i className="flaticon-search"></i></a></li>
                    <li className="offcanvas-menu">
                      <a href="#" className="menu-tigger">
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
              <nav className="menu-box">
                <div className="close-btn"><i className="fas fa-times"></i></div>
                <div className="nav-logo">
                  <a href="index.html"><img src="website/img/logo/logo.png" alt="Logo" /></a>
                </div>
                <div className="mobile-search">
                  <form action="#">
                    <input type="text" placeholder="Search here..." />
                    <button><i className="flaticon-search"></i></button>
                  </form>
                </div>
                <div className="menu-outer">
                  {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                </div>
                <div className="social-links">
                  <ul className="clearfix list-wrap">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-backdrop" />
            {/* End Mobile Menu */}
          </div>
        </div>
      </div>
    </div>

    {/* header-search */}
    <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="search-close">
        <span><i className="fas fa-times"></i></span>
      </div>
      <div className="search-wrap text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title">... Search Here ...</h2>
              <div className="search-form">
                <form action="#">
                  <input type="text" name="search" placeholder="Type keywords here" />
                  <button className="search-btn"><i className="fas fa-search"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* header-search-end */}

    {/* offCanvas-menu */}
    <div className="extra-info">
      <div className="close-icon menu-close">
        <button><i className="far fa-window-close"></i></button>
      </div>
      <div className="logo-side mb-30">
        <a href="index.html"><img src="website/img/logo/logo.png" alt="Logo" /></a>
      </div>
      <div className="side-info mb-30">
        <div className="contact-list mb-30">
          <h4>Office Address</h4>
          <p>Dasset Building, Bole, Addis Ababa <br /> Admas Mall, Hawassa</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Phone Number</h4>
          <p>+251 911 395 871</p>
          <p>+251 913 324 373</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Email Address</h4>
          <p>info@abronal.com</p>
          <p>support@abronal.com</p>
        </div>
      </div>
      <div className="social-icon-right mt-30">
        <a href="https://www.facebook.com/abronaltech"><i className="fab fa-facebook-f"></i></a>
        <a href="https://lnkd.in/ejueJ7Bf"><i className="fab fa-linkedin"></i></a>
        <a href="https://t.me/abronaltech"><i className="fab fa-telegram"></i></a>
        <a href="https://www.youtube.com/@abronaltechnologies8137"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
    <div className="offcanvas-overly" />
    {/* offCanvas-menu-end */}
  </header>
);

export default Header;
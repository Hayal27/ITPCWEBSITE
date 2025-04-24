import React from 'react';

const Hero: React.FC = () => (
  <section className="hero hero-video">
    <div className="hero-bg-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/video-poster.jpg"
        className="hero-video-element"
      >
        <source src="/assets/videos/diggy-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
    <div className="hero-content">
      <h1 className="wow fadeInUp brand-heading">Ethiopian IT Park</h1>
      <p className="wow fadeInUp brand-subheading" data-wow-delay="0.25s">
        Empowering Ethiopia's digital future through innovation, technology, and entrepreneurship
      </p>
      <div className="hero-contact wow fadeInUp" data-wow-delay="0.5s">
        <div className="contact-avatar">
          <img src="/assets/images/hero-client-image.jpg" alt="Manager" />
        </div>
        <div className="contact-messenger">
          <a href="/contact" className="messenger-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
              <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="white"/>
              <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
            </svg>
          </a>
        </div>
        <div className="contact-info">
          <p>Need help? We're here for you</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
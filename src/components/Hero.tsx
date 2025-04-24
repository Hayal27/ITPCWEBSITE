import React from 'react';

const Hero: React.FC = () => (
  <section className="hero hero-video">
    <div className="hero-bg-video">
      <video autoPlay muted loop playsInline>
        <source src="/assets/videos/diggy-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="container">
      <div className="hero-content text-center">
        <p className="wow fadeInUp" data-wow-delay="0.25s">
        </p>
        <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
          <img src="/assets/images/hero-agency-image.svg" alt="" />
          <div className="hero-client-box">
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
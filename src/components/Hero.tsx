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
      >
        <source src="/assets/videos/diggy-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="container">
      <div className="hero-content text-center">
        <h1 className="wow fadeInUp brand-heading">Ethiopian IT Park</h1>
        <p className="wow fadeInUp brand-subheading" data-wow-delay="0.25s">
          Empowering Ethiopia's digital future through innovation, technology, and entrepreneurship
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
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
        <h1 className="wow fadeInUp">Unlock your online potential and get a success</h1>
        <p className="wow fadeInUp" data-wow-delay="0.25s">
          We are a collective of visionary designers, storytellers, and strategists…
        </p>
        <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
          <img src="/assets/images/hero-agency-image.svg" alt="" />
          <div className="hero-client-box">
            <img src="/assets/images/hero-client-image.svg" alt="" />
            <p>ask a question to manager</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
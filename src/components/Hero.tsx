import React, { useState, useEffect, useRef } from 'react';
import '../styles/HeroVideoSection.css'; 
const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoaded = () => setIsLoading(false);
      const handleEnded = () => setIsPlaying(false);
      video.addEventListener('loadeddata', handleLoaded);
      video.addEventListener('ended', handleEnded);
      return () => {
        video.removeEventListener('loadeddata', handleLoaded);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="hero-video-section-root">
      <div className="hero-video-section-bg">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/src/assets/images/video-poster.jpg"
          className="hero-video-section-video"
        >
          <source src="/src/assets/videos/diggy-video.mp4" type="video/mp4" />
          <source src="/src/assets/videos/diggy-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-section-overlay"></div>
        {isLoading && (
          <div className="hero-video-section-loading">
            <div className="hero-video-section-spinner"></div>
          </div>
        )}
        <div className="hero-video-section-controls">
          <button 
            onClick={togglePlay}
            className="hero-video-section-control-btn"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
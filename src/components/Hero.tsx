import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsLoading(false));
      video.addEventListener('ended', () => setIsPlaying(false));
    }
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsLoading(false));
        video.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
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
    <section className="hero hero-video">
      <div className="hero-bg-video">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/video-poster.jpg"
          className="hero-video-element"
        >
          <source src="/assets/videos/diggy-video.mp4" type="video/mp4" />
          <source src="/assets/videos/diggy-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
        {isLoading && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
          </div>
        )}
        <div className="video-controls">
          <button 
            onClick={togglePlay}
            className="video-control-btn"
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
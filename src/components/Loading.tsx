import React, { useEffect, useState } from 'react';
import '../styles/Loading.css';

const Loading: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for window load event (all resources loaded)
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 600); // Optional: add fade-out delay
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className={`loading-overlay${isVisible ? '' : ' hidden'}`}>
      <div className="loading-content">
        <img src="/assets/images/Asset 21@30x.png" alt="Loading..." className="loading-logo" />
      </div>
    </div>
  );
};

export default Loading;
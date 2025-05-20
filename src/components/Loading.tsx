import React, { useEffect } from 'react';
import '../styles/Loading.css';

const Loading: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'animated-cursor';
    cursor.style.position = 'fixed';
    cursor.style.width = '32px';
    cursor.style.height = '32px';
    cursor.style.border = '2.5px solid #0C7C92';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '10000';
    cursor.style.transition = 'transform 0.13s cubic-bezier(.4,0,.2,1), opacity 0.3s';
    cursor.style.background = 'rgba(255,255,255,0.15)';
    cursor.style.boxShadow = '0 2px 12px 0 #0C7C9240';
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px) scale(1.08)`;
    };
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      cursor.remove();
    };
  }, []);

  return (
    <div
      aria-busy="true"
      aria-live="polite"
      role="status"
      className="loading-overlay"
    >
      <div className="loading-content">
        <div className="loading-logo-wrapper">
          <img
            src="/images/Asset 21@30x.png"
            alt="Loading..."
            className="loading-logo"
            draggable={false}
          />
          <div className="loading-dots" aria-label="Loading">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
            <span className="dot dot5" />
          </div>
        </div>
        <div className="loading-brand-text">
          Africa’s Innovation Pulse...
        </div>
      </div>
    </div>
  );
};

export default Loading;
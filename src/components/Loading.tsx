import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 700);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Animated cursor (only during loading)
  useEffect(() => {
    if (!isVisible) return;
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
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center transition-opacity duration-700 bg-gradient-to-br from-[#16284F] to-[#0C7C92] ${
        isVisible ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="relative w-36 h-36 flex items-center justify-center bg-white/20 rounded-full shadow-xl">
        {/* Animated spinning ring */}
        <span
          className="absolute inset-0 rounded-full border-4 border-white/30 border-t-[#0C7C92] border-b-[#6EC9C4] animate-spin"
          style={{ animationDuration: '1.6s' }}
        />
        {/* Logo with rotate and pulse */}
        <img
          src="/src/assets/images/Asset 21@30x.png"
          alt="Loading..."
          className="w-24 h-24 object-contain z-10 select-none pointer-events-none"
          style={{
            animation: 'spin 1.2s linear infinite, pulse 2s ease-in-out infinite',
          }}
        />
        {/* Custom keyframes for pulse */}
        <style>
          {`
            @keyframes pulse {
              0% { opacity: 1; filter: brightness(1);}
              50% { opacity: 0.85; filter: brightness(1.08);}
              100% { opacity: 1; filter: brightness(1);}
            }
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Loading;
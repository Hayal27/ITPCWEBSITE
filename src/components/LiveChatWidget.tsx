import React, { useEffect, useState, useCallback } from 'react';
import '../styles/LiveChatWidget.css';

interface LiveChatWidgetProps {
  bgMode?: 'auto' | 'light' | 'dark';
  infoText?: string;
  avatarUrl?: string;
  chatLink?: string;
}

const defaultAvatar = '/assets/images/hero-client-image.jpg';

const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  bgMode = 'auto',
  infoText = "Hi! How can we help you?",
  avatarUrl = defaultAvatar,
  chatLink = '/contact',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show/hide based on scroll direction and position
    setIsVisible(
      currentScrollY <= lastScrollY || 
      currentScrollY < 100 ||
      currentScrollY + windowHeight >= documentHeight - 100
    );
    setLastScrollY(currentScrollY);

    // Background detection
    if (bgMode === 'auto') {
      const chatWidget = document.querySelector('.live-chat-widget');
      if (chatWidget) {
        const rect = chatWidget.getBoundingClientRect();
        const elements = document.elementsFromPoint(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );

        const backgroundElement = elements.find(element => {
          if (element === chatWidget) return false;
          const style = window.getComputedStyle(element);
          const bgColor = style.backgroundColor;
          return bgColor && bgColor !== 'transparent' && !bgColor.includes('rgba(0, 0, 0, 0)');
        });

        if (backgroundElement) {
          const style = window.getComputedStyle(backgroundElement);
          const bgColor = style.backgroundColor;
          const rgb = bgColor.match(/\d+/g);

          if (rgb && rgb.length >= 3) {
            const [r, g, b] = rgb.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsDarkBackground(luminance < 0.5);
          }
        }
      }
    } else {
      setIsDarkBackground(bgMode === 'dark');
    }
  }, [bgMode, lastScrollY]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const chatOptions = [
    {
      name: 'Messenger',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path 
            d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2z"
            fill="currentColor"
          />
        </svg>
      ),
      link: chatLink,
    }
  ];

  return (
    <div
      className={`live-chat-widget ${isDarkBackground ? 'light-mode' : 'dark-mode'} ${
        isVisible ? 'visible' : 'hidden'
      }`}
      aria-label="Live chat and contact"
    >
      <div className="chat-container">
        <div className="chat-avatar">
          <img src={avatarUrl} alt="Support" />
          <span className="status-indicator" />
        </div>
        <div className="chat-content">
          <p className="chat-text">{infoText}</p>
          <div className="chat-actions">
            {chatOptions.map((opt) => (
              <a
                key={opt.name}
                href={opt.link}
                className="chat-action"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat via ${opt.name}`}
              >
                {opt.icon}
                <span>Start Chat</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatWidget;
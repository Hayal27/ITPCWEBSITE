import React, { useEffect, useState } from 'react';
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
  infoText = "Please contact us",
  avatarUrl = defaultAvatar,
  chatLink = '/contact',
}) => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const detectBackground = () => {
      let element = document.querySelector('.hero-section') as HTMLElement | null;
      if (!element) {
        element = document.querySelector('.main-content') || document.body;
      }

      if (!element) return;

      const style = window.getComputedStyle(element);
      let bgColor = style.backgroundColor;

      if (bgColor.includes('transparent') || bgColor.includes('rgba(0, 0, 0, 0)')) {
        const bodyStyle = window.getComputedStyle(document.body);
        bgColor = bodyStyle.backgroundColor;
      }

      const rgb = bgColor.match(/\d+/g);

      if (rgb && rgb.length >= 3) {
        const [r, g, b] = rgb.map(Number);
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        setIsDarkBackground(luminance < 128); // if luminance is low => background is dark
      } else {
        setIsDarkBackground(false);
      }
    };

    if (bgMode === 'auto') {
      detectBackground();
      window.addEventListener('scroll', detectBackground);
      window.addEventListener('resize', detectBackground);
    } else {
      setIsDarkBackground(bgMode === 'dark');
    }

    return () => {
      window.removeEventListener('scroll', detectBackground);
      window.removeEventListener('resize', detectBackground);
    };
  }, [bgMode]);

  const chatOptions = [
    {
      name: 'Messenger',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#0084FF" />
          <path d="M7 14l3.5-4L13 12l3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 14l3.5-4L13 12l3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      link: chatLink,
    },
  ];

  return (
    <div
      className={`live-chat-widget ${isDarkBackground ? 'light-text' : 'dark-text'}`}
      aria-label="Live chat and contact"
    >
      <div className="chat-avatar">
        <img src={avatarUrl} alt="Support" />
      </div>
      <div className="chat-info">
        <p>{infoText}</p>
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChatWidget;

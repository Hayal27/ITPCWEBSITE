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
  infoText = "Need help? We're here for you",
  avatarUrl = defaultAvatar,
  chatLink = '/contact',
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (bgMode === 'auto') {
      const el = document.querySelector('.main-content') || document.body;
      const bg = window.getComputedStyle(el).backgroundColor;
      const rgb = bg.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const [r, g, b] = rgb.map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        setIsDark(luminance < 140);
      } else {
        setIsDark(false);
      }
    } else {
      setIsDark(bgMode === 'dark');
    }
  }, [bgMode]);

  const chatOptions = [
    {
      name: 'Messenger',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#0084FF"/>
          <path d="M7 14l3.5-4L13 12l3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14l3.5-4L13 12l3.5-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: chatLink,
    },
  ];

  return (
    <div
      className={`live-chat-widget ${isDark ? 'dark' : 'light'}`}
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
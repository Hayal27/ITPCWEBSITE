import React, { useEffect, useState, useCallback, useRef } from 'react';
import '../styles/LiveChatWidget.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickQuestion {
  id: string;
  text: string;
}

interface LiveChatWidgetProps {
  bgMode?: 'auto' | 'light' | 'dark';
  infoText?: string;
  avatarUrl?: string;
  chatLink?: string;
  botName?: string;
}

const defaultAvatar = '/images/hero-client-image.jpg';

// Knowledge base for the Ethiopian IT Park chatbot
const knowledgeBase = {
  greeting: "Hello! I'm the Ethiopian IT Park virtual assistant. I can provide information about our facilities, services, and more. How can I help you today?",
  
  introduction: "I'm the Ethiopian IT Park virtual assistant. I'm here to provide information about our world-class IT Park located near Bole International Airport in Addis Ababa, Ethiopia.",
  
  services: "The Ethiopian IT Park offers a comprehensive range of services including:\n\n• Modern office spaces and serviced land\n• Cloud services (PaaS, SaaS, security solutions)\n• Telecommunications & surveillance systems\n• IT consulting services\n• Data center & connectivity solutions\n• Shared workspaces for startups and tech companies",
  
  infrastructure: "Our IT Park features state-of-the-art infrastructure including:\n\n• High-speed internet connectivity\n• Reliable power supply\n• Secure data centers\n• Modern office spaces starting from 30m²\n• Five strategic zones: Business, Assembly & Warehouse, Commercial, Administrative, and Knowledge Park",
  
  companies: "The Ethiopian IT Park hosts over 20 companies, including:\n\n• Safaricom: A leading telecommunications company\n• Wingu.Africa: Operating Ethiopia's first carrier-neutral Tier III data center\n• Redfox Solutions Group: Providing modular data center and cloud services\n• Raxio Group: Developing a Tier III colocation facility",
  
  location: "The Ethiopian IT Park is strategically located on the outskirts of Addis Ababa, near Bole International Airport. It spans 200 hectares and is designed to be a premier technology hub in Africa.",
  
  vision: "Our vision is to position Ethiopia as a leading digital hub in Africa by providing a conducive environment for ICT companies, fostering innovation, attracting foreign investment, and enhancing the country's technological infrastructure.",
  
  events: "The Ethiopian IT Park regularly hosts events to foster technological advancement, such as the Stride Ethiopia Tech Expo. We also welcome international delegations to explore investment and collaboration opportunities.",
  
  contact: "For more information or assistance, please contact our support team:\n\nEmail: support@ethiopianitpark.gov.et\nPhone: +251 11 667 8900\nAddress: Ethiopian IT Park, Bole Sub-City, Addis Ababa, Ethiopia",
  
  fallback: "I don't have specific information about that topic. For detailed assistance, please contact our support team:\n\nEmail: support@ethiopianitpark.gov.et\nPhone: +251 11 667 8900"
};

// Common questions that users might ask
const commonQuestions: QuickQuestion[] = [
  { id: 'q1', text: 'What is Ethiopian IT Park?' },
  { id: 'q2', text: 'What services do you offer?' },
  { id: 'q3', text: 'Tell me about your infrastructure' },
  { id: 'q4', text: 'Which companies are in the IT Park?' },
  { id: 'q5', text: 'Where is the IT Park located?' },
  { id: 'q6', text: 'How can I contact support?' }
];

const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  bgMode = 'auto',
  infoText = "Welcome to Ethiopian IT Park virtual assistant!",
  avatarUrl = defaultAvatar,
  chatLink = '/contact',
  botName = 'Ethiopian IT Park Assistant',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Initialize chat with greeting when opened
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      // Add initial greeting
      const greetingMessage: Message = {
        id: generateUniqueId(),
        text: knowledgeBase.greeting,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages([greetingMessage]);
      
      // Add follow-up message with common questions after a delay
      setTimeout(() => {
        const suggestionsMessage: Message = {
          id: generateUniqueId(),
          text: "Here are some common questions you might have, or feel free to type your own question:",
          sender: 'bot',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, suggestionsMessage]);
      }, 1000);
    }
  }, [isChatOpen, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Handle chat messages scroll to toggle quick questions visibility
    if (chatMessagesRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatMessagesRef.current;
      const isScrolledToBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShowQuickQuestions(isScrolledToBottom);
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

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const getResponseFromKnowledgeBase = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for keywords in the user's input and return appropriate responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('greetings')) {
      return knowledgeBase.greeting;
    }
    else if (input.includes('who are you') || input.includes('what are you') || input.includes('your name') || input.includes('about you')) {
      return knowledgeBase.introduction;
    }
    else if (input.includes('service') || input.includes('offer') || input.includes('provide')) {
      return knowledgeBase.services;
    }
    else if (input.includes('infrastructure') || input.includes('facilities') || input.includes('amenities')) {
      return knowledgeBase.infrastructure;
    }
    else if (input.includes('companies') || input.includes('businesses') || input.includes('organizations') || input.includes('firms')) {
      return knowledgeBase.companies;
    }
    else if (input.includes('location') || input.includes('where') || input.includes('address') || input.includes('situated')) {
      return knowledgeBase.location;
    }
    else if (input.includes('vision') || input.includes('mission') || input.includes('goal') || input.includes('aim') || input.includes('objective')) {
      return knowledgeBase.vision;
    }
    else if (input.includes('event') || input.includes('expo') || input.includes('conference') || input.includes('meeting')) {
      return knowledgeBase.events;
    }
    else if (input.includes('contact') || input.includes('support') || input.includes('help') || input.includes('reach') || input.includes('email') || input.includes('phone')) {
      return knowledgeBase.contact;
    }
    else if (input.includes('tell me about ethiopian it park') || input.includes('about ethiopian it park') || input.includes('tell me about it park')) {
      return `The Ethiopian IT Park, also known as the Ethio ICT Park, is a flagship initiative by the Ethiopian government aimed at transforming the nation into a leading digital hub in Africa. Established in 2010 and restructured under the Ministry of Innovation and Technology (MInT) in 2023, the park spans 200 hectares on the outskirts of Addis Ababa, near Bole International Airport.`;
    }
    else {
      return knowledgeBase.fallback;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: generateUniqueId(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    // Simulate a delay for a more natural conversation flow
    setTimeout(() => {
      const response = getResponseFromKnowledgeBase(userMessage.text);
      
      // Add bot response
      const botMessage: Message = {
        id: generateUniqueId(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickQuestionClick = (question: string) => {
    // Set the question as input text
    setInputText(question);
    
    // Automatically send the message
    const userMessage: Message = {
      id: generateUniqueId(),
      text: question,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate a delay for a more natural conversation flow
    setTimeout(() => {
      const response = getResponseFromKnowledgeBase(question);
      
      // Add bot response
      const botMessage: Message = {
        id: generateUniqueId(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      // Focus input when chat opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const toggleQuickQuestions = () => {
    setShowQuickQuestions(!showQuickQuestions);
  };

  return (
    <div
      className={`live-chat-widget ${isDarkBackground ? 'light-mode' : 'dark-mode'} ${
        isVisible ? 'visible' : 'hidden'
      } ${isChatOpen ? 'expanded' : ''}`}
      aria-label="Live chat and contact"
    >
      {isChatOpen ? (
        <div className="chat-expanded">
          <div className="chat-header">
            <div className="chat-avatar-small">
              <img src={avatarUrl} alt={botName} />
              <span className="status-indicator" />
            </div>
            <div className="chat-header-info">
              <h3>{botName}</h3>
              <span className="online-status">Online</span>
            </div>
            <button 
              className="close-chat-btn" 
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="chat-messages" ref={chatMessagesRef}>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <img src={avatarUrl} alt={botName} />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{formatTime(message.timestamp)}</div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message bot-message">
                <div className="message-avatar">
                  <img src={avatarUrl} alt={botName} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick questions section - always visible */}
          <div className={`quick-questions-container ${showQuickQuestions ? 'visible' : 'collapsed'}`}>
            <div className="quick-questions-header" onClick={toggleQuickQuestions}>
              <span>Common Questions</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={`toggle-icon ${showQuickQuestions ? 'expanded' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            {showQuickQuestions && (
              <div className="quick-questions">
                {commonQuestions.map((question) => (
                  <button
                    key={question.id}
                    className="quick-question-btn"
                    onClick={() => handleQuickQuestionClick(question.text)}
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="chat-input-container">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleInputKeyPress}
              disabled={isLoading}
            />
            <button 
              className="send-button" 
              onClick={handleSendMessage}
              disabled={isLoading || !inputText.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="chat-container" onClick={toggleChat}>
          <div className="chat-avatar">
            <img src={avatarUrl} alt="Support" />
            <span className="status-indicator" />
          </div>
          <div className="chat-content">
            <p className="chat-text">{infoText}</p>
            <div className="chat-actions">
              <button className="chat-action" aria-label="Start chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2z"
                    fill="currentColor"
                  />
                </svg>
                <span>Start Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChatWidget;
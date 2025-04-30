import React, { useState, useEffect, useCallback } from 'react';
import { 
  FiSearch, 
  FiChevronDown, 
  FiCheck, 
  FiX, 
  FiArrowUp,
  FiMessageCircle,
  FiMail,
  FiPhone,
  FiHelpCircle,
  FiBookOpen,
  FiDollarSign,
  FiUsers,
  FiHome,
  FiClock,
  FiTarget
} from 'react-icons/fi';
import './FAQsPage.css';

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface FAQItem {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
}

const FAQsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const [helpfulFeedback, setHelpfulFeedback] = useState<{ [key: string]: boolean }>({});
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const categories: FAQCategory[] = [
    {
      id: 'all',
      title: 'All FAQs',
      icon: <FiHelpCircle />,
      description: 'View all frequently asked questions'
    },
    {
      id: 'about',
      title: 'About IT Park',
      icon: <FiHome />,
      description: 'General information about Ethiopian IT Park'
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: <FiBookOpen />,
      description: 'Services and facilities we offer'
    },
    {
      id: 'investment',
      title: 'Investment',
      icon: <FiDollarSign />,
      description: 'Investment opportunities and processes'
    },
    {
      id: 'community',
      title: 'Community',
      icon: <FiUsers />,
      description: 'Community and networking'
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 'faq1',
      categoryId: 'about',
      question: 'What is Ethiopian IT Park?',
      answer: 'Ethiopian IT Park is a state-of-the-art technology hub designed to foster innovation and digital transformation in Ethiopia. Our facility provides world-class infrastructure, support services, and a collaborative environment for tech companies, startups, and entrepreneurs.'
    },
    {
      id: 'faq2',
      categoryId: 'services',
      question: 'What services does IT Park offer to businesses?',
      answer: 'We offer a comprehensive range of services including: modern office spaces, high-speed internet connectivity, 24/7 power backup, incubation programs, business development support, meeting and conference facilities, and networking opportunities with industry leaders.'
    },
    {
      id: 'faq3',
      categoryId: 'investment',
      question: 'How can I invest in Ethiopian IT Park?',
      answer: 'Investment opportunities at Ethiopian IT Park are open to both local and international investors. The process involves: 1) Submitting an investment proposal, 2) Due diligence review, 3) Approval process, 4) Space allocation and setup. Contact our investment team for detailed information and guidance.'
    }
  ];

  const handleScroll = useCallback(() => {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollProgress(scrolled);
    setShowBackToTop(winScroll > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleFAQ = (faqId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const handleFeedback = (faqId: string, isHelpful: boolean) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [faqId]: isHelpful
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.categoryId === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderFeedbackButtons = (faqId: string) => (
    <div className="faqPageFeedback">
      <span className="faqPageFeedbackText">Was this helpful?</span>
      <div className="faqPageFeedbackButtons">
        <button
          className={`faqPageFeedbackButton ${
            helpfulFeedback[faqId] === true ? 'active' : ''
          }`}
          onClick={() => handleFeedback(faqId, true)}
        >
          <span className="faqPageBrandIcon faqPageBrandIconYes">
            <FiCheck />
          </span>
          Yes
        </button>
        <button
          className={`faqPageFeedbackButton ${
            helpfulFeedback[faqId] === false ? 'active' : ''
          }`}
          onClick={() => handleFeedback(faqId, false)}
        >
          <span className="faqPageBrandIcon faqPageBrandIconNo">
            <FiX />
          </span>
          No
        </button>
      </div>
      {helpfulFeedback[faqId] !== undefined && (
        <span className="faqPageFeedbackMessage">
          {helpfulFeedback[faqId]
            ? "Thank you for your feedback!"
            : "We'll work on making this answer more helpful."}
        </span>
      )}
    </div>
  );

  return (
    <div className="faqPageWrapper">
      <div className="faqPageScrollProgress">
        <div 
          className="faqPageScrollProgressBar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <section className="faqPageHero">
        <div className="faqPageHeroOverlay" />
        <div className="faqPageHeroContent">
          <h1 className="faqPageHeroTitle">How can we help you?</h1>
          <p className="faqPageHeroSubtitle">
            Find answers to frequently asked questions about Ethiopian IT Park
          </p>
          <div className="faqPageSearchWrapper">
            <div className="faqPageSearchBar">
              <FiSearch className="faqPageSearchIcon" />
              <input
                type="text"
                className="faqPageSearchInput"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faqPageCategories">
        <div className="faqPageCategoryList">
          {categories.map(category => (
            <button
              key={category.id}
              className={`faqPageCategoryButton ${
                activeCategory === category.id ? 'faqPageCategoryButtonActive' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>
      </section>

      <section className="faqPageAccordion">
        <div className="faqPageAccordionContainer">
          {filteredFAQs.map(faq => (
            <div key={faq.id} className="faqPageAccordionItem">
              <button
                className={`faqPageAccordionHeader ${
                  expandedItems[faq.id] ? 'faqPageAccordionHeaderActive' : ''
                }`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="faqPageAccordionQuestion">{faq.question}</span>
                <FiChevronDown
                  className={`faqPageAccordionIcon ${
                    expandedItems[faq.id] ? 'faqPageAccordionIconRotate' : ''
                  }`}
                />
              </button>
              {expandedItems[faq.id] && (
                <div className="faqPageAccordionContent">
                  <p className="faqPageAccordionAnswer">{faq.answer}</p>
                  {renderFeedbackButtons(faq.id)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

        <section className="faqPageSmartCard">
        <div className="faqPageSmartCardContainer">
            <div className="faqPageSmartCardLeft">
            <div className="faqPageSmartCardProfile">
                <img 
                src="/images/support-team.jpg" 
                alt="Support Team Member"
                className="faqPageSmartCardImage"
                />
                <div className="faqPageSmartCardInfo">
                <h3>Expert Support Team</h3>
                <p>Available 24/7 to assist you</p>
                <div className="faqPageSmartCardStats">
                    <div className="faqPageSmartCardStat">
                    <span>98%</span>
                    <p>Resolution Rate</p>
                    </div>
                    <div className="faqPageSmartCardStat">
                    <span>2hr</span>
                    <p>Response Time</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="faqPageSmartCardRight">
            <div className="faqPageSmartCardFeatures">
                <h3>Why Choose Our Support?</h3>
                <div className="faqPageSmartCardFeaturesList">
                <div className="faqPageSmartCardFeature">
                    <div className="faqPageSmartCardFeatureIcon">
                    <FiCheck />
                    </div>
                    <div className="faqPageSmartCardFeatureText">
                    <h4>Expert Knowledge</h4>
                    <p>Trained professionals with deep technical expertise</p>
                    </div>
                </div>
                <div className="faqPageSmartCardFeature">
                    <div className="faqPageSmartCardFeatureIcon">
                    <FiClock />
                    </div>
                    <div className="faqPageSmartCardFeatureText">
                    <h4>24/7 Availability</h4>
                    <p>Round-the-clock support whenever you need it</p>
                    </div>
                </div>
                <div className="faqPageSmartCardFeature">
                    <div className="faqPageSmartCardFeatureIcon">
                    <FiTarget />
                    </div>
                    <div className="faqPageSmartCardFeatureText">
                    <h4>Solution-Focused</h4>
                    <p>Quick and effective problem resolution</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      <section className="faqPageHelp">
        <h2 className="faqPageHelpTitle">Still Need Help?</h2>
        <p className="faqPageHelpDesc">
          Can't find what you're looking for? Choose one of these options to get additional help.
        </p>
        <div className="faqPageHelpOptions">
          <a href="/contact" className="faqPageHelpOption">
            <FiMessageCircle className="faqPageHelpIcon" />
            <h3>Live Chat</h3>
            <p>Chat with our support team</p>
          </a>
          <a href="/support" className="faqPageHelpOption">
            <FiMail className="faqPageHelpIcon" />
            <h3>Send Email</h3>
            <p>Get email support</p>
          </a>
          <a href="/contact" className="faqPageHelpOption">
            <FiPhone className="faqPageHelpIcon" />
            <h3>Phone Support</h3>
            <p>Call our help center</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
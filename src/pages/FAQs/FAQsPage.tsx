import { useState, useEffect, JSX } from 'react';
import './FAQsPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch,
  FiHelpCircle,
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiChevronDown,
  FiThumbsUp,
  FiThumbsDown,
  FiArrowUp,
  FiDollarSign,
  FiLayers,
  FiSettings,
  FiUsers
} from 'react-icons/fi';

// Interfaces
interface FAQCategory {
  faqCategoryId: string;
  faqCategoryName: string;
  faqCategoryIcon: JSX.Element;
  faqCategoryDescription: string;
}

interface FAQ {
  faqId: string;
  faqQuestion: string;
  faqAnswer: string;
  faqCategory: string;
  faqHelpfulCount?: number;
  faqVideoUrl?: string;
}

const FAQsPage = () => {
  const [faqActiveCategory, setFaqActiveCategory] = useState('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [faqExpandedId, setFaqExpandedId] = useState<string | null>(null);
  const [faqHelpfulFeedback, setFaqHelpfulFeedback] = useState<{[key: string]: boolean}>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll progress and back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FAQ Categories
  const faqCategories: FAQCategory[] = [
    {
      faqCategoryId: 'about',
      faqCategoryName: 'About IT Park',
      faqCategoryIcon: <FiHelpCircle className="faqCategoryIcon" />,
      faqCategoryDescription: 'General information about Ethiopian IT Park'
    },
    {
      faqCategoryId: 'services',
      faqCategoryName: 'Our Services',
      faqCategoryIcon: <FiLayers className="faqCategoryIcon" />,
      faqCategoryDescription: 'Information about our services and facilities'
    },
    {
      faqCategoryId: 'incubation',
      faqCategoryName: 'Incubation',
      faqCategoryIcon: <FiUsers className="faqCategoryIcon" />,
      faqCategoryDescription: 'Startup incubation program details'
    },
    {
      faqCategoryId: 'investment',
      faqCategoryName: 'Investment',
      faqCategoryIcon: <FiDollarSign className="faqCategoryIcon" />,
      faqCategoryDescription: 'Investment opportunities and procedures'
    },
    {
      faqCategoryId: 'facilities',
      faqCategoryName: 'Facilities',
      faqCategoryIcon: <FiSettings className="faqCategoryIcon" />,
      faqCategoryDescription: 'Our facilities and infrastructure'
    }
  ];

  // FAQ Data
  const faqs: FAQ[] = [
    {
      faqId: 'about-1',
      faqQuestion: 'What is Ethiopian IT Park?',
      faqAnswer: 'Ethiopian IT Park is a state-of-the-art technology hub designed to foster innovation and support the growth of technology companies in Ethiopia. Located in Addis Ababa, it provides world-class infrastructure, incubation services, and a collaborative environment for tech businesses.',
      faqCategory: 'about',
      faqHelpfulCount: 245
    },
    {
      faqId: 'services-1',
      faqQuestion: 'What services does IT Park offer?',
      faqAnswer: 'We offer a comprehensive range of services including office space, high-speed internet, 24/7 power backup, meeting rooms, event spaces, technical support, business mentorship, and networking opportunities.',
      faqCategory: 'services',
      faqHelpfulCount: 189
    },
    // Add more FAQs...
  ];

  const handleFaqToggle = (faqId: string) => {
    setFaqExpandedId(faqExpandedId === faqId ? null : faqId);
  };

  const handleFaqFeedback = (faqId: string, isHelpful: boolean) => {
    setFaqHelpfulFeedback(prev => ({
      ...prev,
      [faqId]: isHelpful
    }));
  };

  const filteredFaqs = faqs.filter(faq => 
    (faqActiveCategory === 'all' || faq.faqCategory === faqActiveCategory) &&
    (faqSearchQuery === '' || 
     faq.faqQuestion.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
     faq.faqAnswer.toLowerCase().includes(faqSearchQuery.toLowerCase()))
  );

  return (
    <div className="faqPageWrapper">
      {/* Scroll Progress Indicator */}
      <div className="faqPageScrollProgress">
        <div 
          className="faqPageScrollProgressBar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="faqPageHero">
        <div className="faqPageHeroOverlay" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="faqPageHeroContent"
        >
          <h1 className="faqPageHeroTitle">
            Got Questions? We've Got Answers
          </h1>
          <p className="faqPageHeroSubtitle">
            Find answers to common questions about Ethiopian IT Park's services, facilities, and programs
          </p>
          <div className="faqPageSearchWrapper">
            <div className="faqPageSearchBar">
              <FiSearch className="faqPageSearchIcon" />
              <input 
                type="text"
                placeholder="Search FAQs..."
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                className="faqPageSearchInput"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="faqPageCategories">
        <div className="faqPageCategoryList">
          <button 
            className={`faqPageCategoryButton ${
              faqActiveCategory === 'all' ? 'faqPageCategoryButtonActive' : ''
            }`}
            onClick={() => setFaqActiveCategory('all')}
          >
            All FAQs
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.faqCategoryId}
              className={`faqPageCategoryButton ${
                faqActiveCategory === category.faqCategoryId ? 'faqPageCategoryButtonActive' : ''
              }`}
              onClick={() => setFaqActiveCategory(category.faqCategoryId)}
            >
              {category.faqCategoryIcon}
              {category.faqCategoryName}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faqPageAccordion">
        <div className="faqPageAccordionContainer">
          {filteredFaqs.map((faq) => (
            <motion.div
              key={faq.faqId}
              className="faqPageAccordionItem"
              initial={false}
            >
              <button
                className={`faqPageAccordionHeader ${
                  faqExpandedId === faq.faqId ? 'faqPageAccordionHeaderActive' : ''
                }`}
                onClick={() => handleFaqToggle(faq.faqId)}
              >
                <span className="faqPageAccordionQuestion">
                  {faq.faqQuestion}
                </span>
                <FiChevronDown 
                  className={`faqPageAccordionIcon ${
                    faqExpandedId === faq.faqId ? 'faqPageAccordionIconRotate' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {faqExpandedId === faq.faqId && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faqPageAccordionContent"
                  >
                    <p className="faqPageAccordionAnswer">{faq.faqAnswer}</p>
                    {faq.faqVideoUrl && (
                      <div className="faqPageVideoContainer">
                        <iframe 
                          src={faq.faqVideoUrl}
                          title="FAQ Video"
                          className="faqPageVideo"
                          allowFullScreen
                        />
                      </div>
                    )}
                    <div className="faqPageFeedback">
                      <p className="faqPageFeedbackQuestion">Was this helpful?</p>
                      <div className="faqPageFeedbackButtons">
                        <button 
                          className={`faqPageFeedbackButton ${
                            faqHelpfulFeedback[faq.faqId] === true ? 'faqPageFeedbackButtonActive' : ''
                          }`}
                          onClick={() => handleFaqFeedback(faq.faqId, true)}
                        >
                          <FiThumbsUp />
                          Yes
                        </button>
                        <button 
                          className={`faqPageFeedbackButton ${
                            faqHelpfulFeedback[faq.faqId] === false ? 'faqPageFeedbackButtonActive' : ''
                          }`}
                          onClick={() => handleFaqFeedback(faq.faqId, false)}
                        >
                          <FiThumbsDown />
                          No
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="faqPageHelp">
        <h2 className="faqPageHelpTitle">Still Need Help?</h2>
        <p className="faqPageHelpDesc">
          Can't find what you're looking for? Our support team is here to help!
        </p>
        <div className="faqPageHelpOptions">
          <a href="/contact" className="faqPageHelpOption">
            <FiPhone className="faqPageHelpIcon" />
            <span>Contact Support</span>
          </a>
          <a href="/submit-request" className="faqPageHelpOption">
            <FiMail className="faqPageHelpIcon" />
            <span>Submit a Request</span>
          </a>
          <button className="faqPageHelpOption">
            <FiMessageCircle className="faqPageHelpIcon" />
            <span>Start Live Chat</span>
          </button>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        className={`faqPageBackToTop ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
};

export default FAQsPage;
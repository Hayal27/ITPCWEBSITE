import { JSX, useState } from 'react';
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
  FiThumbsDown} from 'react-icons/fi';

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

  // FAQ Categories
  const faqCategories: FAQCategory[] = [
    {
      faqCategoryId: 'about',
      faqCategoryName: 'About the Park',
      faqCategoryIcon: <FiHelpCircle />,
      faqCategoryDescription: 'General information about Ethiopian IT Park'
    },
    {
      faqCategoryId: 'incubation',
      faqCategoryName: 'Incubation & Startups',
      faqCategoryIcon: <FiMessageCircle />,
      faqCategoryDescription: 'Information about our startup programs'
    },
    // Add more categories...
  ];

  // FAQ Data
  const faqs: FAQ[] = [
    {
      faqId: 'faq-1',
      faqQuestion: 'What is Ethiopian IT Park?',
      faqAnswer: 'Ethiopian IT Park is a government-backed technology park located in Addis Ababa, designed to host, incubate, and scale tech-enabled businesses and startups in Ethiopia.',
      faqCategory: 'about',
      faqHelpfulCount: 245
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
            Find answers to the most common questions about Ethiopian IT Park, business incubation, investment support, and more.
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
              <span className="faqPageCategoryIcon">{category.faqCategoryIcon}</span>
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
                className={`faqPageAccordionHeader ${faqExpandedId === faq.faqId ? 'faqPageAccordionHeaderActive' : ''}`}
                onClick={() => handleFaqToggle(faq.faqId)}
              >
                <span className="faqPageAccordionQuestion">{faq.faqQuestion}</span>
                <FiChevronDown className={`faqPageAccordionIcon ${faqExpandedId === faq.faqId ? 'faqPageAccordionIconRotate' : ''}`} />
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
                          className={`faqPageFeedbackButton ${faqHelpfulFeedback[faq.faqId] === true ? 'faqPageFeedbackButtonActive' : ''}`}
                          onClick={() => handleFaqFeedback(faq.faqId, true)}
                        >
                          <FiThumbsUp />
                          Yes
                        </button>
                        <button 
                          className={`faqPageFeedbackButton ${faqHelpfulFeedback[faq.faqId] === false ? 'faqPageFeedbackButtonActive' : ''}`}
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
          Can't find what you're looking for? We're here to help!
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
    </div>
  );
};

export default FAQsPage;
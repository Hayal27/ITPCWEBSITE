import { JSX, useState } from 'react';
import './BusinessTemplates.css';
import { motion } from 'framer-motion';
import { 
  FiLayout,
  FiFileText,
  FiDollarSign,
  FiShield,
  FiTrello,
  FiSearch,
  FiClock,
  FiAward,
  FiTarget,
  FiCheck,
  FiDownload,
  FiEdit
} from 'react-icons/fi';

interface BusinessTemplateCategory {
  businessTemplateId: string;
  businessTemplateName: string;
  businessTemplateIcon: JSX.Element;
  businessTemplateDescription: string;
}

const BusinessTemplates = () => {
  const [businessTemplateActiveCategory, setBusinessTemplateActiveCategory] = useState('all');
  const [businessTemplateSearchQuery, setBusinessTemplateSearchQuery] = useState('');

  const businessTemplateCategories: BusinessTemplateCategory[] = [
    {
      businessTemplateId: 'pitch-decks',
      businessTemplateName: 'Pitch Decks',
      businessTemplateIcon: <FiLayout className="businessTemplatesIconSvg" />,
      businessTemplateDescription: 'VC-ready PowerPoint/Google Slides templates'
    },
    {
      businessTemplateId: 'business-plans',
      businessTemplateName: 'Business Plans',
      businessTemplateIcon: <FiFileText className="businessTemplatesIconSvg" />,
      businessTemplateDescription: 'Word and PDF business planning templates'
    },
    {
      businessTemplateId: 'financial-models',
      businessTemplateName: 'Financial Models',
      businessTemplateIcon: <FiDollarSign className="businessTemplatesIconSvg" />,
      businessTemplateDescription: 'Excel-based cash flow, income statement, projections'
    },
    {
      businessTemplateId: 'legal-docs',
      businessTemplateName: 'Legal Documents',
      businessTemplateIcon: <FiShield className="businessTemplatesIconSvg" />,
      businessTemplateDescription: 'NDAs, founder agreements, MoUs'
    },
    {
      businessTemplateId: 'marketing-kits',
      businessTemplateName: 'Marketing Kits',
      businessTemplateIcon: <FiTrello className="businessTemplatesIconSvg" />,
      businessTemplateDescription: 'Social media post templates, brand kits'
    }
  ];

  const businessTemplateBenefits = [
    {
      icon: <FiClock className="businessTemplatesIconSvg" />,
      title: 'Save Time',
      desc: 'Start with proven structures'
    },
    {
      icon: <FiAward className="businessTemplatesIconSvg" />,
      title: 'Professional',
      desc: 'Industry-standard formats'
    },
    {
      icon: <FiTarget className="businessTemplatesIconSvg" />,
      title: 'Investor Ready',
      desc: 'Meet expectations'
    },
    {
      icon: <FiCheck className="businessTemplatesIconSvg" />,
      title: 'Compliance',
      desc: 'Follow best practices'
    }
  ];

  const businessTemplateSteps = [
    {
      step: 1,
      icon: <FiLayout className="businessTemplatesIconSvg" />,
      title: 'Choose Template',
      desc: 'Browse our collection and select the perfect template'
    },
    {
      step: 2,
      icon: <FiDownload className="businessTemplatesIconSvg" />,
      title: 'Download',
      desc: 'Get your template in your preferred format'
    },
    {
      step: 3,
      icon: <FiEdit className="businessTemplatesIconSvg" />,
      title: 'Customize',
      desc: 'Edit the template to match your needs and brand'
    }
  ];

  return (
    <div className="businessTemplatesWrapper">
      {/* Hero Section */}
      <section className="businessTemplatesHero">
        <div className="businessTemplatesHeroOverlay" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="businessTemplatesHeroContent"
        >
          <h1 className="businessTemplatesHeroTitle">
            Ready-to-Use Business Templates for Tomorrow's Innovators
          </h1>
          <p className="businessTemplatesHeroSubtitle">
            Professionally designed, customizable, and free resources for your startup journey at Ethiopian IT Park.
          </p>
          <div className="businessTemplatesHeroButtons">
            <button className="businessTemplatesPrimaryButton">
              <FiLayout className="businessTemplatesButtonIcon" />
              Browse Templates
            </button>
            <button className="businessTemplatesSecondaryButton">
              <FiDownload className="businessTemplatesButtonIcon" />
              Download Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="businessTemplatesBenefits">
        <h2 className="businessTemplatesSectionTitle">Why Business Templates Matter</h2>
        <div className="businessTemplatesBenefitsGrid">
          {businessTemplateBenefits.map((benefit) => (
            <motion.div 
              key={benefit.title}
              whileHover={{ scale: 1.03 }}
              className="businessTemplatesBenefitCard"
            >
              <div className="businessTemplatesBenefitIcon">
                {benefit.icon}
              </div>
              <h3 className="businessTemplatesBenefitTitle">{benefit.title}</h3>
              <p className="businessTemplatesBenefitDesc">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="businessTemplatesCategories">
        <div className="businessTemplatesSearchWrapper">
          <div className="businessTemplatesSearchBar">
            <FiSearch className="businessTemplatesSearchIcon" />
            <input 
              type="text"
              placeholder="Search templates..."
              value={businessTemplateSearchQuery}
              onChange={(e) => setBusinessTemplateSearchQuery(e.target.value)}
              className="businessTemplatesSearchInput"
            />
          </div>
        </div>

        <div className="businessTemplatesCategoryList">
          <button 
            className={`businessTemplatesCategoryButton ${
              businessTemplateActiveCategory === 'all' ? 'businessTemplatesCategoryButtonActive' : ''
            }`}
            onClick={() => setBusinessTemplateActiveCategory('all')}
          >
            All Templates
          </button>
          {businessTemplateCategories.map((category) => (
            <button
              key={category.businessTemplateId}
              className={`businessTemplatesCategoryButton ${
                businessTemplateActiveCategory === category.businessTemplateId ? 'businessTemplatesCategoryButtonActive' : ''
              }`}
              onClick={() => setBusinessTemplateActiveCategory(category.businessTemplateId)}
            >
              <div className="businessTemplatesCategoryIcon">
                {category.businessTemplateIcon}
              </div>
              {category.businessTemplateName}
            </button>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="businessTemplatesHowItWorks">
        <h2 className="businessTemplatesSectionTitle">How It Works</h2>
        <div className="businessTemplatesStepsGrid">
          {businessTemplateSteps.map((step) => (
            <motion.div 
              key={step.step}
              whileHover={{ y: -5 }}
              className="businessTemplatesStepCard"
            >
              <div className="businessTemplatesStepNumber">
                <span>{step.step}</span>
              </div>
              <div className="businessTemplatesStepIcon">
                {step.icon}
              </div>
              <h3 className="businessTemplatesStepTitle">{step.title}</h3>
              <p className="businessTemplatesStepDesc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="businessTemplatesCTA">
        <h2 className="businessTemplatesCTATitle">
          Start Building Your Success Story
        </h2>
        <p className="businessTemplatesCTADesc">
          Access professional templates designed for Ethiopian entrepreneurs and startups
        </p>
        <div className="businessTemplatesCTAButtons">
          <button className="businessTemplatesPrimaryButton">
            <FiLayout className="businessTemplatesButtonIcon" />
            Browse All Templates
          </button>
          <button className="businessTemplatesSecondaryButton">
            <FiEdit className="businessTemplatesButtonIcon" />
            Become a Contributor
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessTemplates;
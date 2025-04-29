import { useState, useEffect } from 'react';
import './BusinessTemplates.css';
import { motion } from 'framer-motion';
import { FiDownload, FiSearch, FiFilter } from 'react-icons/fi';

interface BusinessTemplateCategory {
  businessTemplateId: string;
  businessTemplateName: string;
  businessTemplateIcon: string;
  businessTemplateDescription: string;
}

interface BusinessTemplateItem {
  businessTemplateId: string;
  businessTemplateTitle: string;
  businessTemplateCategory: string;
  businessTemplateThumbnail: string;
  businessTemplateDescription: string;
  businessTemplateTags: string[];
  businessTemplateDownloadCount: number;
  businessTemplateFileTypes: string[];
}

const BusinessTemplates = () => {
  const [businessTemplateActiveCategory, setBusinessTemplateActiveCategory] = useState('all');
  const [businessTemplateSearchQuery, setBusinessTemplateSearchQuery] = useState('');
  
  // Categories Data with specific naming
  const businessTemplateCategories: BusinessTemplateCategory[] = [
    {
      businessTemplateId: 'pitch-decks',
      businessTemplateName: 'Pitch Decks',
      businessTemplateIcon: '🎯',
      businessTemplateDescription: 'VC-ready PowerPoint/Google Slides templates'
    },
    {
      businessTemplateId: 'business-plans',
      businessTemplateName: 'Business Plans',
      businessTemplateIcon: '📊',
      businessTemplateDescription: 'Word and PDF business planning templates'
    },
    {
      businessTemplateId: 'financial-models',
      businessTemplateName: 'Financial Models',
      businessTemplateIcon: '💰',
      businessTemplateDescription: 'Excel-based cash flow, income statement, projections'
    },
    {
      businessTemplateId: 'legal-docs',
      businessTemplateName: 'Legal Documents',
      businessTemplateIcon: '⚖️',
      businessTemplateDescription: 'NDAs, founder agreements, MoUs'
    },
    {
      businessTemplateId: 'marketing-kits',
      businessTemplateName: 'Marketing Kits',
      businessTemplateIcon: '🎨',
      businessTemplateDescription: 'Social media post templates, brand kits'
    }
  ];

  return (
    <div className="businessTemplatesContainer">
      {/* Hero Section */}
      <section className="businessTemplatesHero">
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
          <div className="businessTemplatesHeroCTA">
            <button className="businessTemplatesPrimaryBtn">Browse Templates</button>
            <button className="businessTemplatesSecondaryBtn">Download Now</button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="businessTemplatesBenefits">
        <h2 className="businessTemplatesSectionTitle">Why Business Templates Matter</h2>
        <div className="businessTemplatesBenefitsGrid">
          {[
            { icon: '⚡', title: 'Save Time', desc: 'Start with proven structures' },
            { icon: '💼', title: 'Professional', desc: 'Industry-standard formats' },
            { icon: '🎯', title: 'Investor Ready', desc: 'Meet expectations' },
            { icon: '✅', title: 'Compliance', desc: 'Follow best practices' }
          ].map((benefit) => (
            <motion.div 
              key={benefit.title}
              whileHover={{ scale: 1.05 }}
              className="businessTemplatesBenefitCard"
            >
              <span className="businessTemplatesBenefitIcon">{benefit.icon}</span>
              <h3 className="businessTemplatesBenefitTitle">{benefit.title}</h3>
              <p className="businessTemplatesBenefitDesc">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="businessTemplatesCategories">
        <div className="businessTemplatesSearchContainer">
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

        <div className="businessTemplatesCategoryTabs">
          <button 
            className={`businessTemplatesCategoryTab ${businessTemplateActiveCategory === 'all' ? 'businessTemplatesActiveTab' : ''}`}
            onClick={() => setBusinessTemplateActiveCategory('all')}
          >
            All Templates
          </button>
          {businessTemplateCategories.map((category) => (
            <button
              key={category.businessTemplateId}
              className={`businessTemplatesCategoryTab ${businessTemplateActiveCategory === category.businessTemplateId ? 'businessTemplatesActiveTab' : ''}`}
              onClick={() => setBusinessTemplateActiveCategory(category.businessTemplateId)}
            >
              <span>{category.businessTemplateIcon}</span>
              {category.businessTemplateName}
            </button>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="businessTemplatesHowItWorks">
        <h2 className="businessTemplatesSectionTitle">How It Works</h2>
        <div className="businessTemplatesStepsContainer">
          {[
            { step: 1, title: 'Choose Template', desc: 'Browse our collection and select the perfect template' },
            { step: 2, title: 'Preview & Download', desc: 'Review the template and download in your preferred format' },
            { step: 3, title: 'Customize & Use', desc: 'Edit the template to match your needs and brand' }
          ].map((step) => (
            <motion.div 
              key={step.step}
              whileHover={{ y: -5 }}
              className="businessTemplatesStep"
            >
              <div className="businessTemplatesStepNumber">{step.step}</div>
              <h3 className="businessTemplatesStepTitle">{step.title}</h3>
              <p className="businessTemplatesStepDesc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="businessTemplatesCTA">
        <h2 className="businessTemplatesCTATitle">
          Start Building Your Success Story
        </h2>
        <p className="businessTemplatesCTADesc">
          Access professional templates designed for Ethiopian entrepreneurs and startups
        </p>
        <div className="businessTemplatesCTAButtons">
          <button className="businessTemplatesPrimaryBtn">
            Browse All Templates
          </button>
          <button className="businessTemplatesSecondaryBtn">
            Become a Contributor
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessTemplates;
import { JSX, useState } from 'react';
import './BusinessTemplate.css';
import { motion } from 'framer-motion';
import { 
  FiShield,
  FiTrendingUp,
  FiDownload,
  FiSearch,
  FiTarget,
  FiLayout,
  FiEdit,
  FiUsers,
  FiGlobe,
  FiBarChart2,
  FiDatabase} from 'react-icons/fi';

// Interfaces
interface InvestmentBusinessTemplateCategory {
  investmentTemplateId: string;
  investmentTemplateName: string;
  investmentTemplateIcon: JSX.Element;
  investmentTemplateDescription: string;
  investmentTemplateSubCategories: InvestmentBusinessTemplateSubCategory[];
}

interface InvestmentBusinessTemplateSubCategory {
  id: string;
  name: string;
  description: string;
  formats: string[];
  downloadCount?: number;
  industryType?: string[];
}

const InvestmentBusinessTemplate = () => {
  const [investmentTemplateActiveCategory, setInvestmentTemplateActiveCategory] = useState('all');
  const [investmentTemplateSearchQuery, setInvestmentTemplateSearchQuery] = useState('');

  // Investment-focused Categories
  const investmentTemplateCategories: InvestmentBusinessTemplateCategory[] = [
    {
      investmentTemplateId: 'startup-investment',
      investmentTemplateName: 'Startup Investment',
      investmentTemplateIcon: <FiBarChart2 className="investmentTemplatesIconSvg" />,
      investmentTemplateDescription: 'Complete startup investment documentation package for Ethiopian startups',
      investmentTemplateSubCategories: [
        {
          id: 'seed-funding',
          name: 'Seed Funding Package',
          description: 'Ethiopian market-focused early-stage funding templates',
          formats: ['PPT', 'PDF', 'DOC'],
          downloadCount: 2150,
          industryType: ['Tech', 'Manufacturing', 'Service']
        },
        {
          id: 'series-a',
          name: 'Series A Package',
          description: 'Comprehensive Series A funding documentation',
          formats: ['PPT', 'PDF', 'XLS'],
          downloadCount: 1890,
          industryType: ['All Industries']
        },
        {
          id: 'angel-investment',
          name: 'Angel Investment Package',
          description: 'Local angel investor presentation templates',
          formats: ['PPT', 'PDF'],
          downloadCount: 1650,
          industryType: ['Startups', 'Innovation']
        }
      ]
    },
    {
      investmentTemplateId: 'financial-models',
      investmentTemplateName: 'Investment Models',
      investmentTemplateIcon: <FiTrendingUp className="investmentTemplatesIconSvg" />,
      investmentTemplateDescription: 'Professional investment analysis and financial modeling templates',
      investmentTemplateSubCategories: [
        {
          id: 'valuation-models',
          name: 'Valuation Models',
          description: 'Ethiopian market-specific company valuation templates',
          formats: ['XLS'],
          downloadCount: 1750,
          industryType: ['All Industries']
        },
        {
          id: 'financial-projections',
          name: 'Financial Projections',
          description: '5-year projection models with local market factors',
          formats: ['XLS'],
          downloadCount: 1600,
          industryType: ['All Industries']
        },
        {
          id: 'roi-analysis',
          name: 'ROI Analysis',
          description: 'Investment return analysis templates',
          formats: ['XLS'],
          downloadCount: 1450,
          industryType: ['All Industries']
        }
      ]
    },
    {
      investmentTemplateId: 'due-diligence',
      investmentTemplateName: 'Due Diligence',
      investmentTemplateIcon: <FiDatabase className="investmentTemplatesIconSvg" />,
      investmentTemplateDescription: 'Comprehensive due diligence templates and checklists',
      investmentTemplateSubCategories: [
        {
          id: 'financial-dd',
          name: 'Financial Due Diligence',
          description: 'Financial assessment templates',
          formats: ['DOC', 'XLS'],
          downloadCount: 1200,
          industryType: ['All Industries']
        },
        {
          id: 'legal-dd',
          name: 'Legal Due Diligence',
          description: 'Legal compliance checklists',
          formats: ['DOC', 'PDF'],
          downloadCount: 980,
          industryType: ['All Industries']
        },
        {
          id: 'market-dd',
          name: 'Market Due Diligence',
          description: 'Market analysis frameworks',
          formats: ['DOC', 'PPT'],
          downloadCount: 850,
          industryType: ['All Industries']
        }
      ]
    },
    {
      investmentTemplateId: 'legal-documents',
      investmentTemplateName: 'Legal Documents',
      investmentTemplateIcon: <FiShield className="investmentTemplatesIconSvg" />,
      investmentTemplateDescription: 'Ethiopian investment law compliant legal templates',
      investmentTemplateSubCategories: [
        {
          id: 'investment-agreements',
          name: 'Investment Agreements',
          description: 'Standard investment contract templates',
          formats: ['DOC', 'PDF'],
          downloadCount: 2200,
          industryType: ['All Industries']
        },
        {
          id: 'shareholder-agreements',
          name: 'Shareholder Agreements',
          description: 'Equity structure and rights templates',
          formats: ['DOC', 'PDF'],
          downloadCount: 1900,
          industryType: ['All Industries']
        },
        {
          id: 'term-sheets',
          name: 'Term Sheets',
          description: 'Investment terms and conditions',
          formats: ['DOC', 'PDF'],
          downloadCount: 1700,
          industryType: ['All Industries']
        }
      ]
    },
    {
      investmentTemplateId: 'pitch-materials',
      investmentTemplateName: 'Pitch Materials',
      investmentTemplateIcon: <FiLayout className="investmentTemplatesIconSvg" />,
      investmentTemplateDescription: 'Professional investment pitch templates and guides',
      investmentTemplateSubCategories: [
        {
          id: 'pitch-decks',
          name: 'Pitch Decks',
          description: 'Industry-specific pitch presentation templates',
          formats: ['PPT', 'PDF'],
          downloadCount: 3100,
          industryType: ['All Industries']
        },
        {
          id: 'executive-summary',
          name: 'Executive Summary',
          description: 'Professional business summary templates',
          formats: ['DOC', 'PDF'],
          downloadCount: 2800,
          industryType: ['All Industries']
        },
        {
          id: 'investment-proposal',
          name: 'Investment Proposals',
          description: 'Detailed investment opportunity templates',
          formats: ['DOC', 'PDF'],
          downloadCount: 2500,
          industryType: ['All Industries']
        }
      ]
    }
  ];

  // Investment Benefits
  const investmentTemplateBenefits = [
    {
      icon: <FiTarget />,
      title: 'Investment Ready',
      desc: 'Professional templates aligned with investor expectations'
    },
    {
      icon: <FiShield />,
      title: 'Legally Compliant',
      desc: 'Adherent to Ethiopian investment laws'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Market Validated',
      desc: 'Tested with successful Ethiopian startups'
    },
    {
      icon: <FiGlobe />,
      title: 'Local Context',
      desc: 'Tailored for Ethiopian market conditions'
    }
  ];

  // Process Steps
  const investmentTemplateSteps = [
    {
      step: 1,
      icon: <FiSearch />,
      title: 'Select Template',
      desc: 'Choose from our investment-ready templates'
    },
    {
      step: 2,
      icon: <FiDownload />,
      title: 'Download',
      desc: 'Get instant access to your templates'
    },
    {
      step: 3,
      icon: <FiEdit />,
      title: 'Customize',
      desc: 'Tailor to your investment needs'
    }
  ];

  return (
    <div className="investmentTemplatesWrapper">
      {/* Hero Section */}
      <section className="investmentTemplatesHero">
        <div className="investmentTemplatesHeroOverlay" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="investmentTemplatesHeroContent"
        >
          <h1 className="investmentTemplatesHeroTitle">
            Professional Investment Templates for Ethiopian Businesses
          </h1>
          <p className="investmentTemplatesHeroSubtitle">
            Access comprehensive, legally-compliant investment documentation templates designed for the Ethiopian market
          </p>
          <div className="investmentTemplatesHeroButtons">
            <button className="investmentTemplatesPrimaryButton">
              <FiDownload className="investmentTemplatesButtonIcon" />
              Browse Investment Templates
            </button>
            <button className="investmentTemplatesSecondaryButton">
              <FiEdit className="investmentTemplatesButtonIcon" />
              Request Custom Template
            </button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="investmentTemplatesBenefits">
        <h2 className="investmentTemplatesSectionTitle">Why Choose Our Investment Templates</h2>
        <div className="investmentTemplatesBenefitsGrid">
          {investmentTemplateBenefits.map((benefit) => (
            <motion.div 
              key={benefit.title}
              whileHover={{ scale: 1.03 }}
              className="investmentTemplatesBenefitCard"
            >
              <div className="investmentTemplatesBenefitIcon">
                {benefit.icon}
              </div>
              <h3 className="investmentTemplatesBenefitTitle">{benefit.title}</h3>
              <p className="investmentTemplatesBenefitDesc">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="investmentTemplatesCategories">
        <div className="investmentTemplatesSearchWrapper">
          <div className="investmentTemplatesSearchBar">
            <FiSearch className="investmentTemplatesSearchIcon" />
            <input 
              type="text"
              placeholder="Search investment templates..."
              value={investmentTemplateSearchQuery}
              onChange={(e) => setInvestmentTemplateSearchQuery(e.target.value)}
              className="investmentTemplatesSearchInput"
            />
          </div>
        </div>

        <div className="investmentTemplatesCategoryList">
          <button 
            className={`investmentTemplatesCategoryButton ${
              investmentTemplateActiveCategory === 'all' ? 'investmentTemplatesCategoryButtonActive' : ''
            }`}
            onClick={() => setInvestmentTemplateActiveCategory('all')}
          >
            All Templates
          </button>
          {investmentTemplateCategories.map((category) => (
            <button
              key={category.investmentTemplateId}
              className={`investmentTemplatesCategoryButton ${
                investmentTemplateActiveCategory === category.investmentTemplateId ? 'investmentTemplatesCategoryButtonActive' : ''
              }`}
              onClick={() => setInvestmentTemplateActiveCategory(category.investmentTemplateId)}
            >
              <div className="investmentTemplatesCategoryIcon">
                {category.investmentTemplateIcon}
              </div>
              {category.investmentTemplateName}
            </button>
          ))}
        </div>

        {/* Template Cards Grid */}
        <div className="investmentTemplatesGrid">
          {investmentTemplateCategories.map((category) => (
            investmentTemplateActiveCategory === 'all' || 
            investmentTemplateActiveCategory === category.investmentTemplateId ? (
              <div key={category.investmentTemplateId} className="investmentTemplatesCategory">
                <div className="investmentTemplatesCategoryHeader">
                  <div className="investmentTemplatesCategoryIcon">
                    {category.investmentTemplateIcon}
                  </div>
                  <h3 className="investmentTemplatesCategoryTitle">
                    {category.investmentTemplateName}
                  </h3>
                  <p className="investmentTemplatesCategoryDesc">
                    {category.investmentTemplateDescription}
                  </p>
                </div>
                <div className="investmentTemplatesSubCategoryGrid">
                  {category.investmentTemplateSubCategories.map((subCategory) => (
                    <motion.div
                      key={subCategory.id}
                      whileHover={{ y: -5 }}
                      className="investmentTemplatesSubCategoryCard"
                    >
                      <h4 className="investmentTemplatesSubCategoryTitle">
                        {subCategory.name}
                      </h4>
                      <p className="investmentTemplatesSubCategoryDesc">
                        {subCategory.description}
                      </p>
                      <div className="investmentTemplatesFormatTags">
                        {subCategory.formats.map((format) => (
                          <span key={format} className="investmentTemplatesFormatTag">
                            {format}
                          </span>
                        ))}
                      </div>
                      {subCategory.industryType && (
                        <div className="investmentTemplatesIndustryTags">
                          {subCategory.industryType.map((industry) => (
                            <span key={industry} className="investmentTemplatesIndustryTag">
                              {industry}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="investmentTemplatesDownloadInfo">
                        <span className="investmentTemplatesDownloadCount">
                          {subCategory.downloadCount?.toLocaleString()} downloads
                        </span>
                        <button className="investmentTemplatesDownloadButton">
                          <FiDownload className="investmentTemplatesButtonIcon" />
                          Download
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : null
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="investmentTemplatesHowItWorks">
        <h2 className="investmentTemplatesSectionTitle">How It Works</h2>
        <div className="investmentTemplatesStepsGrid">
          {investmentTemplateSteps.map((step) => (
            <motion.div 
              key={step.step}
              whileHover={{ y: -5 }}
              className="investmentTemplatesStepCard"
            >
              <div className="investmentTemplatesStepNumber">
                {step.step}
              </div>
              <div className="investmentTemplatesStepIcon">
                {step.icon}
              </div>
              <h3 className="investmentTemplatesStepTitle">{step.title}</h3>
              <p className="investmentTemplatesStepDesc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="investmentTemplatesCTA">
        <h2 className="investmentTemplatesCTATitle">
          Start Your Investment Journey Today
        </h2>
        <p className="investmentTemplatesCTADesc">
          Access our complete collection of Ethiopian market-focused investment templates
        </p>
        <div className="investmentTemplatesCTAButtons">
          <button className="investmentTemplatesPrimaryButton">
            <FiDownload className="investmentTemplatesButtonIcon" />
            Browse All Templates
          </button>
          <button className="investmentTemplatesSecondaryButton">
            <FiUsers className="investmentTemplatesButtonIcon" />
            Request Custom Template
          </button>
        </div>
      </section>
    </div>
  );
};

export default InvestmentBusinessTemplate;
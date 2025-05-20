import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBuilding, FaHome, FaGlobe, FaIndustry, FaCalendarAlt, FaServer, FaCloud, FaNetworkWired } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdBusiness, MdSchool } from 'react-icons/md';

import './partners.css'; // Import the custom CSS

// Real data about Ethiopian IT Park partners and investors
const partnersData = [
  {
    id: "PRT-ITPC-001",
    companyName: "ZERGAW Cloud",
    contactName: "Partnership Team",
    contactEmail: "contact@zergawcloud.com",
    partnershipType: "Strategic",
    country: "Ethiopia",
    zone: "IT Park, Addis Ababa",
    industryType: "Cloud Services",
    agreementStartDate: "2022-01-01T00:00:00Z",
    agreementEndDate: null,
    status: "Active",
    servicesProvided: [
      "Cloud Infrastructure",
      "IPZ Cloud Services",
      "Local Cloud Solutions"
    ],
    logo: "/images/partners/zergaw.png",
    description: "Partners with ITPC to provide cloud services through initiatives like IPZ Cloud, aiming to reduce reliance on foreign cloud services and promote local solutions."
  },
  {
    id: "PRT-ITPC-002",
    companyName: "Ministry of Innovation and Technology",
    contactName: "MinT Office",
    contactEmail: "info@mint.gov.et",
    partnershipType: "Government",
    country: "Ethiopia",
    zone: "Addis Ababa",
    industryType: "Government",
    agreementStartDate: "2020-01-01T00:00:00Z",
    agreementEndDate: null,
    status: "Active",
    servicesProvided: [
      "Policy Development",
      "Strategic Oversight",
      "Digital Transformation"
    ],
    logo: "/images/partners/mint.jpg",
    description: "Oversees the IT Park's operations, aligning its objectives with national digital strategies."
  },
  {
    id: "PRT-ITPC-003",
    companyName: "Korea International Cooperation Agency",
    contactName: "KOICA Ethiopia Office",
    contactEmail: "ethiopia@koica.go.kr",
    partnershipType: "International",
    country: "South Korea",
    zone: "International Partners",
    industryType: "Development Cooperation",
    agreementStartDate: "2021-06-15T00:00:00Z",
    agreementEndDate: "2026-06-15T00:00:00Z",
    status: "Active",
    servicesProvided: [
      "ICT-based Business Creation",
      "SME Development",
      "Technical Training"
    ],
    logo: "/images/partners/koica.jpg",
    description: "Supports ICT-based business creation and SME development projects within Ethiopia, contributing to job creation and technological advancement."
  },
  {
    id: "PRT-ITPC-004",
    companyName: "Orange Digital Center",
    contactName: "ODC Ethiopia",
    contactEmail: "contact@orangedigitalcenter.et",
    partnershipType: "Strategic",
    country: "Ethiopia",
    zone: "IT Park, Addis Ababa",
    industryType: "Digital Skills & Innovation",
    agreementStartDate: "2022-03-01T00:00:00Z",
    agreementEndDate: null,
    status: "Active",
    servicesProvided: [
      "Digital Skills Training",
      "Startup Acceleration",
      "Innovation Hub"
    ],
    logo: "/images/partners/orange.jpg",
    description: "Provides training, startup acceleration, and investment opportunities, aiming to enhance digital skills and entrepreneurship among Ethiopian youth."
  }
];

const investorsData = [
  {
    id: "INV-ITPC-001",
    companyName: "Raxio Ethiopia",
    propertyName: "Tier III Data Center",
    industryType: "Data Infrastructure",
    availabilityStatus: "Operational",
    zone: "IT Park, Addis Ababa",
    country: "Ethiopia",
    description: "Operates a Tier III data center within the park, providing critical infrastructure for digital services.",
    contactName: "Raxio Ethiopia Office",
    contactPhone: "+251-911-123-456",
    investmentType: "Data Center",
    establishedDate: "2021-05-01",
    image: "/images/investors/raxio.jpg"
  },
  {
    id: "INV-ITPC-002",
    companyName: "Wingu.Africa",
    propertyName: "Tier III Data Center",
    industryType: "Data Infrastructure",
    availabilityStatus: "Operational",
    zone: "IT Park, Addis Ababa",
    country: "Ethiopia",
    description: "A Tier III certified data center operator, enhancing the park's data hosting capabilities.",
    contactName: "Wingu.Africa Ethiopia",
    contactPhone: "+251-911-234-567",
    investmentType: "Data Center",
    establishedDate: "2022-02-15",
    image: "/images/investors/wingu.jpg"
  },
  {
    id: "INV-ITPC-003",
    companyName: "Ethio Cloud",
    propertyName: "Cloud Services Hub",
    industryType: "Cloud Computing",
    availabilityStatus: "Operational",
    zone: "IT Park, Addis Ababa",
    country: "Ethiopia",
    description: "A joint venture between Ethiopian IT Park and ZERGAW Cloud, offering localized cloud services tailored for Ethiopian and African markets.",
    contactName: "Ethio Cloud Support",
    contactPhone: "+251-911-345-678",
    investmentType: "Cloud Services",
    establishedDate: "2022-07-01",
    image: "/images/investors/ethio-cloud.jpg"
  },
  {
    id: "INV-ITPC-004",
    companyName: "eTech S.C.",
    propertyName: "Innovation Center",
    industryType: "Technology",
    availabilityStatus: "Operational",
    zone: "IT Park, Addis Ababa",
    country: "Ethiopia",
    description: "An Ethiopian technology company inviting investments to foster a borderless ICT experts ecosystem, focusing on innovation and sustainable growth.",
    contactName: "eTech Office",
    contactPhone: "+251-911-456-789",
    investmentType: "Technology Innovation",
    establishedDate: "2021-09-01",
    website: "etechsc.com",
    image: "/images/investors/etech-sc.jpg"
  },
  {
    id: "INV-ITPC-005",
    companyName: "MK Group & Neuronet",
    propertyName: "Smart Card Technology Center",
    industryType: "Smart Card Technology",
    availabilityStatus: "Operational",
    zone: "IT Park, Addis Ababa",
    country: "Ethiopia/Vietnam",
    description: "Collaborated to develop core technology for smart cards within the IT Park, showcasing international partnerships.",
    contactName: "MK-Neuronet Office",
    contactPhone: "+251-911-567-890",
    investmentType: "Smart Card Technology",
    establishedDate: "2022-04-01",
    image: "/images/investors/mk.jpg"
  },
  {
    id: "INV-ITPC-006",
    companyName: "Addis Ababa Angels Network",
    propertyName: "Investment Office",
    industryType: "Venture Capital",
    availabilityStatus: "Active",
    zone: "Financial District",
    country: "Ethiopia",
    description: "Invests in early-stage tech startups, supporting the growth of innovative businesses within the IT Park.",
    contactName: "Investment Team",
    contactPhone: "+251-911-678-901",
    investmentType: "Venture Capital",
    establishedDate: "2020-11-01",
    image: "/images/investors/addis-angels.jpg"
  }
];

const PartnersInvestors: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'partners' | 'investors'>('partners');
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [selectedInvestor, setSelectedInvestor] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  // Format date function
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Ongoing';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Get appropriate icon for industry type
  const getIndustryIcon = (industryType: string) => {
    switch (industryType.toLowerCase()) {
      case 'data infrastructure':
        return <FaServer className="mt-1 mr-2 text-teal-500 industry-icon" />;
      case 'cloud computing':
      case 'cloud services':
        return <FaCloud className="mt-1 mr-2 text-teal-500 industry-icon" />;
      case 'smart card technology':
        return <FaNetworkWired className="mt-1 mr-2 text-teal-500 industry-icon" />;
      case 'venture capital':
        return <MdBusiness className="mt-1 mr-2 text-teal-500 industry-icon" />;
      case 'development cooperation':
        return <MdSchool className="mt-1 mr-2 text-teal-500 industry-icon" />;
      default:
        return <FaIndustry className="mt-1 mr-2 text-teal-500 industry-icon" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 hero-pattern">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#16284F] to-[#0C7C92] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/itpark-aerial-view.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Partners & Investors</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Join our growing ecosystem of innovation and collaboration at the Ethiopian IT Park
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-lg font-medium rounded-l-lg tab-button ${
                activeTab === 'partners'
                  ? 'bg-[#16284F] text-white active'
                  : 'bg-white text-[#16284F] hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('partners')}
            >
              <FaHandshake className="inline mr-2" />
              Partners
              <span className="count-badge bg-[#0C7C92] bg-opacity-20 text-[#16284F] ml-2">{partnersData.length}</span>
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-lg font-medium rounded-r-lg tab-button ${
                activeTab === 'investors'
                  ? 'bg-[#16284F] text-white active'
                  : 'bg-white text-[#16284F] hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('investors')}
            >
              <FaBuilding className="inline mr-2" />
              Investors
              <span className="count-badge bg-[#0C7C92] bg-opacity-20 text-[#16284F] ml-2">{investorsData.length}</span>
            </button>
          </div>
        </div>

        {/* Partners Section */}
        {activeTab === 'partners' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#16284F] mb-4">Our Strategic Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the innovative organizations that are helping shape the future of technology in Ethiopia through the IT Park.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersData.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={itemVariants}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 partner-card ${
                    selectedPartner === partner.id ? 'ring-2 ring-[#0C7C92]' : ''
                  }`}
                  onClick={() => setSelectedPartner(selectedPartner === partner.id ? null : partner.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="logo-container bg-gradient-to-br from-[#16284F] to-[#0C7C92] bg-opacity-10">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.companyName} logo`} 
                          className="w-16 h-16 object-contain rounded-full bg-white p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://via.placeholder.com/150?text=" + encodeURIComponent(partner.companyName.charAt(0));
                          }}
                        />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium status-badge ${
                        partner.status === 'Active' ? 'bg-[#0C7C92] bg-opacity-20 text-[#16284F]' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {partner.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#16284F] mb-2">{partner.companyName}</h3>
                    <p className="text-[#0C7C92] font-medium mb-4">{partner.partnershipType} Partnership</p>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start">
                        {getIndustryIcon(partner.industryType)}
                        <span>{partner.industryType}</span>
                      </div>
                      <div className="flex items-start">
                        <MdLocationOn className="mt-1 mr-2 text-[#0C7C92] industry-icon" />
                        <span>{partner.zone}, {partner.country}</span>
                      </div>
                    </div>

                    {selectedPartner === partner.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 card-content expanded-content"
                      >
                        <div className="space-y-3 text-gray-600">
                          <div className="flex items-start">
                            <MdEmail className="mt-1 mr-2 text-[#0C7C92] industry-icon" />
                            <span>{partner.contactEmail}</span>
                          </div>
                          <div className="flex items-start">
                            <FaCalendarAlt className="mt-1 mr-2 text-[#0C7C92] industry-icon" />
                            <div>
                              <div>Start: {formatDate(partner.agreementStartDate)}</div>
                              <div>End: {formatDate(partner.agreementEndDate)}</div>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-[#16284F] mb-1">Services:</p>
                            <ul className="list-disc list-inside pl-2">
                              {partner.servicesProvided.map((service, index) => (
                                <li key={index} className="service-item">{service}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-700">{partner.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="bg-gradient-to-r from-[#16284F] to-[#0C7C92] bg-opacity-10 px-6 py-3">
                    <button 
                      className="bg-color text-[#0C7C92] font-medium hover:text-[#16284F] transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPartner(selectedPartner === partner.id ? null : partner.id);
                      }}
                    >
                      {selectedPartner === partner.id ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-[#16284F] mb-6">Interested in becoming a partner?</h3>
              <button className="bg-gradient-to-r from-[#16284F] to-[#0C7C92] text-white font-medium py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105 cta-button">
                Apply for Partnership
              </button>
            </div>
          </motion.div>
        )}

        {/* Investors Section */}
        {activeTab === 'investors' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#16284F] mb-4">Key Investors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the innovative companies and organizations investing in Ethiopia's digital future through the IT Park.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investorsData.map((investor) => (
                <motion.div
                  key={investor.id}
                  variants={itemVariants}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 investor-card ${
                    selectedInvestor === investor.id ? 'ring-2 ring-[#0C7C92]' : ''
                  }`}
                  onClick={() => setSelectedInvestor(selectedInvestor === investor.id ? null : investor.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={investor.image} 
                      alt={investor.companyName} 
                      className="w-full h-full object-cover investor-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/300x200?text=" + encodeURIComponent(investor.companyName);
                      }}
                    />
                    <div className="absolute top-0 right-0 m-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium status-badge ${
                        investor.availabilityStatus === 'Operational' 
                          ? 'bg-[#0C7C92] bg-opacity-20 text-[#16284F]' 
                          : investor.availabilityStatus === 'Coming Soon'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                      }`}>
                        {investor.availabilityStatus}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#16284F] mb-1">{investor.companyName}</h3>
                    <p className="text-[#0C7C92] font-medium mb-4">{investor.propertyName}</p>
                    
                    <p className="text-gray-700 mb-4">{investor.description}</p>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start">
                        <MdLocationOn className="mt-1 mr-2 text-[#0C7C92] industry-icon" />
                        <span>{investor.zone}, {investor.country}</span>
                      </div>
                      <div className="flex items-start">
                        {getIndustryIcon(investor.industryType)}
                        <span>{investor.industryType}</span>
                      </div>
                    </div>

                    {selectedInvestor === investor.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 card-content expanded-content"
                      >
                        <div className="space-y-3 text-gray-600">
                          <div>
                            <p className="font-medium text-[#16284F]">Investment Type:</p>
                            <p>{investor.investmentType}</p>
                          </div>
                          <div>
                            <p className="font-medium text-[#16284F]">Contact:</p>
                            <p>{investor.contactName}</p>
                            <p>{investor.contactPhone}</p>
                          </div>
                          <div>
                            <p className="font-medium text-[#16284F]">Established:</p>
                            <p>{formatDate(investor.establishedDate)}</p>
                          </div>
                          {investor.website && (
                            <div>
                              <p className="font-medium text-[#16284F]">Website:</p>
                              <a 
                                href={`https://${investor.website}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#0C7C92] hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {investor.website}
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <div className=" btn-class bg-gradient-to-r from-[#16284F] to-[#0C7C92] bg-opacity-10 px-6 py-3 flex justify-between items-center">
                    <button 
                      className="bg-color text-[#0C7C92] font-medium hover:text-[#16284F] transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedInvestor(selectedInvestor === investor.id ? null : investor.id);
                      }}
                    >
                      {selectedInvestor === investor.id ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-[#16284F] to-[#0C7C92] bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#16284F]">Investment Opportunities</h3>
                <p className="text-gray-700 mt-2">
                  Looking for investment opportunities in Ethiopia's growing tech ecosystem?
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-[#16284F] mb-3">For Investors</h4>
                  <p className="text-gray-700 mb-4">
                    Discover high-potential investment opportunities in Ethiopia's fastest-growing tech hub.
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#16284F] to-[#0C7C92] text-white font-medium py-2 px-4 rounded transition cta-button">
                    Investment
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-bold text-[#16284F] mb-3">For Businesses</h4>
                  <p className="text-gray-700 mb-4">
                    Establish your business in a thriving ecosystem with world-class infrastructure and support.
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#16284F] to-[#0C7C92] text-white font-medium py-2 px-4 rounded transition cta-button">
                    Business Opportunities
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#16284F] to-[#0C7C92] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Ecosystem?</h2>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-8">
            Whether you're looking to invest, partner, or establish your business in Ethiopia's premier IT Park,
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-[#16284F] hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 cta-button">
              Schedule a Consultation
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#16284F] font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 cta-button">
              Download Investment Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersInvestors;
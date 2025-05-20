import React, { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaPaperPlane,
  FaTimes,
  FaBuilding,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaLayerGroup
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Office.css';

// TypeScript interface for the Office data structure
interface OfficeData {
  id: string;
  zone: string;
  building: string;
  unitNumber: string;
  floor: number;
  sizeSqm: number;
  status: 'Available' | 'Rented';
  priceMonthly: number;
  rentedBy: string | null;
  availableFrom: string;
  contactName: string;
  contactPhone: string;
  createdAt: string;
  updatedAt: string;
}

// Building information with total and available space
interface BuildingInfo {
  name: string;
  description: string;
  totalOffices: number;
  availableOffices: number;
  totalSizeSqm: number;
  icon: React.ReactNode;
}

// Sample data for demonstration
const sampleOffices: OfficeData[] = [
  {
    id: "OFF-ICTA-305",
    zone: "Tech Innovation Zone",
    building: "ICT Tower A",
    unitNumber: "A305",
    floor: 3,
    sizeSqm: 85,
    status: "Available",
    priceMonthly: 18750,
    rentedBy: null,
    availableFrom: "2025-06-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911223344",
    createdAt: "2025-05-13T10:00:00Z",
    updatedAt: "2025-05-13T10:00:00Z"
  },
  {
    id: "OFF-ICTA-201",
    zone: "Business Hub Zone",
    building: "ICT Tower B",
    unitNumber: "B201",
    floor: 2,
    sizeSqm: 120,
    status: "Rented",
    priceMonthly: 25000,
    rentedBy: "TechEthiopia Solutions",
    availableFrom: "2026-01-15T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911223344",
    createdAt: "2024-12-10T09:30:00Z",
    updatedAt: "2025-01-15T14:20:00Z"
  },
  {
    id: "OFF-ICTA-402",
    zone: "Tech Innovation Zone",
    building: "ICT Tower A",
    unitNumber: "A402",
    floor: 4,
    sizeSqm: 95,
    status: "Available",
    priceMonthly: 20000,
    rentedBy: null,
    availableFrom: "2025-07-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911223344",
    createdAt: "2025-05-20T11:15:00Z",
    updatedAt: "2025-05-20T11:15:00Z"
  },
  {
    id: "OFF-ICTA-510",
    zone: "Digital Services Zone",
    building: "ICT Tower C",
    unitNumber: "C510",
    floor: 5,
    sizeSqm: 150,
    status: "Available",
    priceMonthly: 32000,
    rentedBy: null,
    availableFrom: "2025-08-15T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911223344",
    createdAt: "2025-06-10T14:30:00Z",
    updatedAt: "2025-06-10T14:30:00Z"
  },
  {
    id: "OFF-ICTA-105",
    zone: "Startup Incubator Zone",
    building: "ICT Tower D",
    unitNumber: "D105",
    floor: 1,
    sizeSqm: 70,
    status: "Rented",
    priceMonthly: 15000,
    rentedBy: "Ethio Digital Solutions",
    availableFrom: "2026-03-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911223344",
    createdAt: "2025-01-05T09:45:00Z",
    updatedAt: "2025-02-10T09:45:00Z"
  },
  {
    id: "OFF-ICTA-620",
    zone: "Enterprise Zone",
    building: "ICT Tower B",
    unitNumber: "B620",
    floor: 6,
    sizeSqm: 200,
    status: "Available",
    priceMonthly: 42000,
    rentedBy: null,
    availableFrom: "2025-09-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911223344",
    createdAt: "2025-07-20T11:20:00Z",
    updatedAt: "2025-07-20T11:20:00Z"
  }
];

// Building information
const buildingInfo: BuildingInfo[] = [
  {
    name: "ICT Tower A",
    description: "Premium office spaces designed for tech companies and startups with modern amenities and high-speed internet.",
    totalOffices: 50,
    availableOffices: 30,
    totalSizeSqm: 4500,
    icon: <FaBuilding />
  },
  {
    name: "ICT Tower B",
    description: "Enterprise-grade office spaces with larger floor plans, suitable for established companies and organizations.",
    totalOffices: 40,
    availableOffices: 15,
    totalSizeSqm: 5200,
    icon: <FaBuilding />
  },
  {
    name: "ICT Tower C",
    description: "Mixed-use office spaces with flexible layouts, ideal for digital service providers and creative agencies.",
    totalOffices: 45,
    availableOffices: 25,
    totalSizeSqm: 4800,
    icon: <FaBuilding />
  },
  {
    name: "ICT Tower D",
    description: "Affordable office spaces designed for startups and small businesses with essential amenities.",
    totalOffices: 60,
    availableOffices: 35,
    totalSizeSqm: 3800,
    icon: <FaBuilding />
  }
];

// Contact Form Modal Component
const ContactFormModal = ({ isOpen, onClose, prefilledMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: prefilledMessage,
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      // Success case
      setFormStatus({ submitting: false, submitted: true, error: null });
      
      // Reset form after success
      setTimeout(() => {
        if (formStatus.submitted && !formStatus.error) {
          onClose();
          setFormData({ name: '', email: '', phone: '', message: '' });
          setFormStatus({ submitting: false, submitted: false, error: null });
        }
      }, 2000);
      
      // Error case example (uncomment to test)
      // setFormStatus({ submitting: false, submitted: false, error: "Network error. Please try again." });
    }, 1500);
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div 
            className="contact-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3><FaEnvelope /> Contact Ethiopian IT Park</h3>
              <button className="close-button" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-body">
              {formStatus.submitted ? (
                <div className="success-message">
                  <FaPaperPlane className="success-icon" />
                  <h4>Thank you for contacting us!</h4>
                  <p>We have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  
                  {formStatus.error && (
                    <div className="error-message">
                      {formStatus.error}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Component for displaying detailed information about a selected office
const OfficeDetail = ({ office, onClose, onApply }) => {
  // Format date for display
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Find building information
  const buildingData = buildingInfo.find(b => b.name === office.building) || {
    description: "Information not available",
    totalOffices: 0,
    availableOffices: 0,
    totalSizeSqm: 0
  };

  return (
    <div className="office-detail-overlay">
      <div className="office-detail-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>{office.id} - {office.building} {office.unitNumber}</h2>
        
        <div className="building-info-banner">
          <FaBuilding className="building-icon" />
          <div className="building-info-content">
            <h4>Building Information</h4>
            <p>{buildingData.description}</p>
            <div className="building-metrics">
              <span>Total Offices: {buildingData.totalOffices}</span>
              <span>Available Offices: {buildingData.availableOffices}</span>
            </div>
          </div>
        </div>
        
        <div className="detail-section">
          <div className="detail-row">
            <div className="detail-label">Status:</div>
            <div className={`detail-value status-badge ${office.status.toLowerCase()}`}>{office.status}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Zone:</div>
            <div className="detail-value">{office.zone}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Floor:</div>
            <div className="detail-value">{office.floor}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Unit Number:</div>
            <div className="detail-value">{office.unitNumber}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Size:</div>
            <div className="detail-value">{office.sizeSqm} m²</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Monthly Rent:</div>
            <div className="detail-value">{formatCurrency(office.priceMonthly)}</div>
          </div>
          
          {office.status === 'Rented' && (
            <div className="detail-row">
              <div className="detail-label">Rented By:</div>
              <div className="detail-value">{office.rentedBy}</div>
            </div>
          )}
          
          <div className="detail-row">
            <div className="detail-label">Available From:</div>
            <div className="detail-value">{formatDate(office.availableFrom)}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Contact Person:</div>
            <div className="detail-value">{office.contactName}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Contact Phone:</div>
            <div className="detail-value">{office.contactPhone}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Created:</div>
            <div className="detail-value">{formatDate(office.createdAt)}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Last Updated:</div>
            <div className="detail-value">{formatDate(office.updatedAt)}</div>
          </div>
        </div>
        
        <div className="action-buttons">
          {office.status === 'Available' ? (
            <button className="apply-button" onClick={onApply}>Apply for Rental</button>
          ) : (
            <button className="contact-button" onClick={onApply}>Contact Property Manager</button>
          )}
          <button className="secondary-button" onClick={onClose}>Close</button>
        </div>
        
        {office.status === 'Available' && (
          <div className="application-note">
            <FaInfoCircle /> We are working on an online application form. For now, please use the contact form to express your interest.
          </div>
        )}
      </div>
    </div>
  );
};

// Building Summary Component
const BuildingSummary: React.FC = () => {
  // Calculate total offices
  const totalOffices = buildingInfo.reduce((total, building) => total + building.totalOffices, 0);
  const totalAvailableOffices = buildingInfo.reduce((total, building) => total + building.availableOffices, 0);
  const totalSpace = buildingInfo.reduce((total, building) => total + building.totalSizeSqm, 0);
  
  return (
    <div className="building-summary">
      <h3>IT Park Office Buildings</h3>
      <p className="building-summary-intro">
        The Ethiopian IT Park offers {totalOffices} office spaces across multiple buildings, 
        with {totalAvailableOffices} currently available for rent. Total office space: {totalSpace} m².
      </p>
      
      <div className="building-grid">
        {buildingInfo.map((building, index) => (
          <div className="building-card" key={index}>
            <div className="building-card-header">
              {building.icon}
              <h4>{building.name}</h4>
            </div>
            <div className="building-card-body">
              <p>{building.description}</p>
              <div className="building-metrics">
                <div className="building-metric">
                  <span className="metric-label">Total Offices:</span>
                  <span className="metric-value">{building.totalOffices}</span>
                </div>
                <div className="building-metric">
                  <span className="metric-label">Available:</span>
                  <span className="metric-value">{building.availableOffices}</span>
                </div>
                <div className="building-metric">
                  <span className="metric-label">Total Area:</span>
                  <span className="metric-value">{building.totalSizeSqm} m²</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component for the Office page
const Office: React.FC = () => {
  const [offices, setOffices] = useState<OfficeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<OfficeData | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [buildingFilter, setBuildingFilter] = useState<string>('all');
  const [sortConfig, setSortConfig] = useState<{ key: keyof OfficeData; direction: 'ascending' | 'descending' } | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contactMessage, setContactMessage] = useState<string>('');
  const [showBuildingSummary, setShowBuildingSummary] = useState<boolean>(true);

  // Fetch data (simulated with setTimeout)
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOffices(sampleOffices);
        setLoading(false);
      } catch (err) {
        setError('Failed to load office data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Format date for display
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Filter offices based on selected filters
  const filteredOffices = offices.filter(office => {
    // Status filter
    if (filter !== 'all' && filter === 'available' && office.status !== 'Available') return false;
    if (filter !== 'all' && filter === 'rented' && office.status !== 'Rented') return false;
    
    // Building filter
    if (buildingFilter !== 'all' && office.building !== buildingFilter) return false;
    
    return true;
  });

  // Sort function for table columns
  const requestSort = (key: keyof OfficeData) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting to the filtered offices
  const sortedOffices = React.useMemo(() => {
    let sortableOffices = [...filteredOffices];
    if (sortConfig !== null) {
      sortableOffices.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableOffices;
  }, [filteredOffices, sortConfig]);

  // Handle office row click
  const handleOfficeClick = (office: OfficeData) => {
    setSelectedOffice(office);
  };

  // Close detail view
  const handleCloseDetail = () => {
    setSelectedOffice(null);
  };

  // Handle apply button click
  const handleApply = () => {
    if (selectedOffice) {
      const message = `I am interested in renting office ${selectedOffice.unitNumber} in ${selectedOffice.building}. Please provide more information about the application process.`;
      setContactMessage(message);
      setContactModalOpen(true);
    }
  };

  // Get the sort direction indicator
  const getSortDirectionIndicator = (key: keyof OfficeData) => {
    if (!sortConfig || sortConfig.key !== key) {
      return '⇅';
    }
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  // Toggle building summary visibility
  const toggleBuildingSummary = () => {
    setShowBuildingSummary(!showBuildingSummary);
  };

  // Get unique buildings for filter dropdown
  const uniqueBuildings = ['all', ...new Set(offices.map(office => office.building))];

  return (
    <div className="office-container">
      <h1>Ethiopian IT Park Office Spaces</h1>
      
      <button 
        className={`building-summary-toggle ${showBuildingSummary ? 'active' : ''}`}
        onClick={toggleBuildingSummary}
      >
        {showBuildingSummary ? 'Hide Building Summary' : 'Show Building Summary'}
      </button>
      
      {showBuildingSummary && <BuildingSummary />}
      
      <div className="filter-container">
        <div className="filter-group">
          <div className="filter-label">Filter by status:</div>
          <div className="filter-options">
            <button 
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Offices
            </button>
            <button 
              className={`filter-button ${filter === 'available' ? 'active' : ''}`}
              onClick={() => setFilter('available')}
            >
              Available
            </button>
            <button 
              className={`filter-button ${filter === 'rented' ? 'active' : ''}`}
              onClick={() => setFilter('rented')}
            >
              Rented
            </button>
          </div>
        </div>
        
        <div className="filter-group">
          <div className="filter-label">Filter by building:</div>
          <select 
            className="building-filter-select"
            value={buildingFilter}
            onChange={(e) => setBuildingFilter(e.target.value)}
          >
            <option value="all">All Buildings</option>
            {uniqueBuildings.filter(building => building !== 'all').map((building, index) => (
              <option key={index} value={building}>{building}</option>
            ))}
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading office space data...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <div className="office-table-container">
          {sortedOffices.length > 0 ? (
            <table className="office-table">
              <thead>
                <tr>
                  <th onClick={() => requestSort('id')}>
                    ID {getSortDirectionIndicator('id')}
                  </th>
                  <th onClick={() => requestSort('building')}>
                    Building {getSortDirectionIndicator('building')}
                  </th>
                  <th onClick={() => requestSort('unitNumber')}>
                    Unit {getSortDirectionIndicator('unitNumber')}
                  </th>
                  <th onClick={() => requestSort('floor')}>
                    Floor {getSortDirectionIndicator('floor')}
                  </th>
                  <th onClick={() => requestSort('zone')}>
                    Zone {getSortDirectionIndicator('zone')}
                  </th>
                  <th onClick={() => requestSort('sizeSqm')}>
                    Size (m²) {getSortDirectionIndicator('sizeSqm')}
                  </th>
                  <th onClick={() => requestSort('priceMonthly')}>
                    Monthly Rent {getSortDirectionIndicator('priceMonthly')}
                  </th>
                  <th onClick={() => requestSort('status')}>
                    Status {getSortDirectionIndicator('status')}
                  </th>
                  <th onClick={() => requestSort('availableFrom')}>
                    Available From {getSortDirectionIndicator('availableFrom')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedOffices.map(office => (
                  <tr 
                    key={office.id} 
                    className={office.status === 'Available' ? 'available-row' : 'rented-row'}
                    onClick={() => handleOfficeClick(office)}
                  >
                    <td>{office.id}</td>
                    <td>{office.building}</td>
                    <td>{office.unitNumber}</td>
                    <td>{office.floor}</td>
                    <td>{office.zone}</td>
                    <td>{office.sizeSqm}</td>
                    <td>{formatCurrency(office.priceMonthly)}</td>
                    <td>
                      <span className={`status-badge ${office.status.toLowerCase()}`}>
                        {office.status}
                      </span>
                    </td>
                    <td>{formatDate(office.availableFrom)}</td>
                    <td>
                      <button 
                        className="view-details-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOfficeClick(office);
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-results">
              <p>No offices found matching the selected filters.</p>
            </div>
          )}
        </div>
      )}
      
      {selectedOffice && (
        <OfficeDetail 
          office={selectedOffice} 
          onClose={handleCloseDetail} 
          onApply={handleApply}
        />
      )}
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)}
        prefilledMessage={contactMessage}
      />
    </div>
  );
};

export default Office;
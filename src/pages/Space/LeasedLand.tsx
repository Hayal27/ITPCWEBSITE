import React, { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaPaperPlane,
  FaTimes,
  FaMapMarkedAlt,
  FaBuilding,
  FaInfoCircle
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './LeasedLand.css';

// TypeScript interface for the Leased Land data structure
interface LeasedLandData {
  id: string;
  zone: string;
  landType: string;
  location: string;
  sizeSqm: number;
  availableSizeSqm: number;
  status: 'Available' | 'Leased';
  leasedBy: string | null;
  leasedFrom: string;
  contactName: string;
  contactPhone: string;
  createdAt: string;
  updatedAt: string;
}

// Zone information with total and available space
interface ZoneInfo {
  name: string;
  description: string;
  totalSizeSqm: number;
  availableSizeSqm: number;
  icon: React.ReactNode;
}

// Sample data for demonstration
const sampleLeasedLands: LeasedLandData[] = [
  {
    id: "LND-ICTA-202",
    zone: "IT Business Zone",
    landType: "Commercial",
    location: "Behind ICT Tower A",
    sizeSqm: 1500,
    availableSizeSqm: 1200,
    status: "Available",
    leasedBy: null,
    leasedFrom: "2025-06-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251913456789",
    createdAt: "2025-05-13T10:00:00Z",
    updatedAt: "2025-05-13T10:00:00Z"
  },
  {
    id: "LND-ICTA-203",
    zone: "Commercial Zone",
    landType: "Commercial",
    location: "East Wing, ICT Park",
    sizeSqm: 2200,
    availableSizeSqm: 0,
    status: "Leased",
    leasedBy: "TechEthiopia Solutions",
    leasedFrom: "2025-01-15T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251911234567",
    createdAt: "2024-12-10T09:30:00Z",
    updatedAt: "2025-01-15T14:20:00Z"
  },
  {
    id: "LND-ICTA-204",
    zone: "Manufacturing Zone",
    landType: "Industrial",
    location: "Near Main Entrance",
    sizeSqm: 3000,
    availableSizeSqm: 1800,
    status: "Available",
    leasedBy: null,
    leasedFrom: "2025-07-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251944567890",
    createdAt: "2025-05-20T11:15:00Z",
    updatedAt: "2025-05-20T11:15:00Z"
  },
  {
    id: "LND-ICTA-205",
    zone: "Knowledge Zone",
    landType: "Commercial",
    location: "North Section",
    sizeSqm: 1800,
    availableSizeSqm: 1200,
    status: "Available",
    leasedBy: null,
    leasedFrom: "2025-08-15T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251922345678",
    createdAt: "2025-06-10T14:30:00Z",
    updatedAt: "2025-06-10T14:30:00Z"
  },
  {
    id: "LND-ICTA-206",
    zone: "Residential Zone",
    landType: "Residential",
    location: "South Wing",
    sizeSqm: 5000,
    availableSizeSqm: 2500,
    status: "Available",
    leasedBy: null,
    leasedFrom: "2025-09-01T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251933456789",
    createdAt: "2025-07-05T09:45:00Z",
    updatedAt: "2025-07-05T09:45:00Z"
  },
  {
    id: "LND-ICTA-207",
    zone: "Skill and Learning Zone",
    landType: "Educational",
    location: "West Section",
    sizeSqm: 4000,
    availableSizeSqm: 1500,
    status: "Available",
    leasedBy: null,
    leasedFrom: "2025-10-15T00:00:00Z",
    contactName: "Henok Ahimed",
    contactPhone: "+251955678901",
    createdAt: "2025-08-20T11:20:00Z",
    updatedAt: "2025-08-20T11:20:00Z"
  }
];

// Zone information
const zoneInfo: ZoneInfo[] = [
  {
    name: "IT Business Zone",
    description: "Dedicated space for IT companies and startups focusing on software development and digital services.",
    totalSizeSqm: 400000, // 40 hectares
    availableSizeSqm: 250000,
    icon: <FaBuilding />
  },
  {
    name: "Commercial Zone",
    description: "Area for commercial establishments, retail spaces, and business services supporting the IT Park ecosystem.",
    totalSizeSqm: 300000, // 30 hectares
    availableSizeSqm: 150000,
    icon: <FaBuilding />
  },
  {
    name: "Manufacturing Zone",
    description: "Specialized area for hardware manufacturing, assembly, and production facilities.",
    totalSizeSqm: 350000, // 35 hectares
    availableSizeSqm: 200000,
    icon: <FaBuilding />
  },
  {
    name: "Knowledge Zone",
    description: "Space for research institutions, innovation labs, and knowledge-based organizations.",
    totalSizeSqm: 250000, // 25 hectares
    availableSizeSqm: 150000,
    icon: <FaBuilding />
  },
  {
    name: "Residential Zone",
    description: "Housing and accommodation facilities for professionals working in the IT Park.",
    totalSizeSqm: 400000, // 40 hectares
    availableSizeSqm: 250000,
    icon: <FaBuilding />
  },
  {
    name: "Skill and Learning Zone",
    description: "Area dedicated to educational institutions, training centers, and skill development facilities.",
    totalSizeSqm: 300000, // 30 hectares
    availableSizeSqm: 180000,
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

// Component for displaying detailed information about a selected land
const LeasedLandDetail = ({ land, onClose, onApply }) => {
  // Format date for display
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Find zone information
  const zoneData = zoneInfo.find(z => z.name === land.zone) || {
    description: "Information not available",
    totalSizeSqm: 0,
    availableSizeSqm: 0
  };

  return (
    <div className="land-detail-overlay">
      <div className="land-detail-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>{land.id} - {land.zone}</h2>
        
        <div className="zone-info-banner">
          <FaMapMarkedAlt className="zone-icon" />
          <div className="zone-info-content">
            <h4>Zone Information</h4>
            <p>{zoneData.description}</p>
            <div className="zone-metrics">
              <span>Total Zone Area: {(zoneData.totalSizeSqm / 10000).toFixed(1)} hectares</span>
              <span>Available in Zone: {(zoneData.availableSizeSqm / 10000).toFixed(1)} hectares</span>
            </div>
          </div>
        </div>
        
        <div className="detail-section">
          <div className="detail-row">
            <div className="detail-label">Status:</div>
            <div className={`detail-value status-badge ${land.status.toLowerCase()}`}>{land.status}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Land Type:</div>
            <div className="detail-value">{land.landType}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Location:</div>
            <div className="detail-value">{land.location}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Total Size:</div>
            <div className="detail-value">{land.sizeSqm} m² ({(land.sizeSqm / 10000).toFixed(2)} hectares)</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Available Size:</div>
            <div className="detail-value">{land.availableSizeSqm} m² ({(land.availableSizeSqm / 10000).toFixed(2)} hectares)</div>
          </div>
          
          {land.status === 'Leased' && (
            <div className="detail-row">
              <div className="detail-label">Leased By:</div>
              <div className="detail-value">{land.leasedBy}</div>
            </div>
          )}
          
          <div className="detail-row">
            <div className="detail-label">Available From:</div>
            <div className="detail-value">{formatDate(land.leasedFrom)}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Contact Person:</div>
            <div className="detail-value">{land.contactName}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Contact Phone:</div>
            <div className="detail-value">{land.contactPhone}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Created:</div>
            <div className="detail-value">{formatDate(land.createdAt)}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Last Updated:</div>
            <div className="detail-value">{formatDate(land.updatedAt)}</div>
          </div>
        </div>
        
        <div className="action-buttons">
          {land.status === 'Available' ? (
            <button className="apply-button" onClick={onApply}>Apply for Lease</button>
          ) : (
            <button className="contact-button" onClick={onApply}>Contact Leaseholder</button>
          )}
          <button className="secondary-button" onClick={onClose}>Close</button>
        </div>
        
        {land.status === 'Available' && (
          <div className="application-note">
            <FaInfoCircle /> We are working on an application form. For now, please use the contact form to express your interest.
          </div>
        )}
      </div>
    </div>
  );
};

// Zone Summary Component
const ZoneSummary: React.FC = () => {
  // Calculate total park area
  const totalParkArea = zoneInfo.reduce((total, zone) => total + zone.totalSizeSqm, 0);
  const totalAvailableArea = zoneInfo.reduce((total, zone) => total + zone.availableSizeSqm, 0);
  
  return (
    <div className="zone-summary">
      <h3>IT Park Zone Summary</h3>
      <p className="zone-summary-intro">
        The Ethiopian IT Park spans a total area of {(totalParkArea / 10000).toFixed(0)} hectares, 
        with {(totalAvailableArea / 10000).toFixed(0)} hectares currently available for lease.
      </p>
      
      <div className="zone-grid">
        {zoneInfo.map((zone, index) => (
          <div className="zone-card" key={index}>
            <div className="zone-card-header">
              {zone.icon}
              <h4>{zone.name}</h4>
            </div>
            <div className="zone-card-body">
              <p>{zone.description}</p>
              <div className="zone-metrics">
                <div className="zone-metric">
                  <span className="metric-label">Total Area:</span>
                  <span className="metric-value">{(zone.totalSizeSqm / 10000).toFixed(1)} hectares</span>
                </div>
                <div className="zone-metric">
                  <span className="metric-label">Available:</span>
                  <span className="metric-value">{(zone.availableSizeSqm / 10000).toFixed(1)} hectares</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component for the Leased Land page
const LeasedLand: React.FC = () => {
  const [lands, setLands] = useState<LeasedLandData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLand, setSelectedLand] = useState<LeasedLandData | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [zoneFilter, setZoneFilter] = useState<string>('all');
  const [sortConfig, setSortConfig] = useState<{ key: keyof LeasedLandData; direction: 'ascending' | 'descending' } | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contactMessage, setContactMessage] = useState<string>('');
  const [showZoneSummary, setShowZoneSummary] = useState<boolean>(true);

  // Fetch data (simulated with setTimeout)
  useEffect(() => {
    // In a real application, this would be an API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLands(sampleLeasedLands);
        setLoading(false);
      } catch (err) {
        setError('Failed to load leased land data. Please try again later.');
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

  // Filter lands based on selected filters
  const filteredLands = lands.filter(land => {
    // Status filter
    if (filter !== 'all' && filter === 'available' && land.status !== 'Available') return false;
    if (filter !== 'all' && filter === 'leased' && land.status !== 'Leased') return false;
    
    // Zone filter
    if (zoneFilter !== 'all' && land.zone !== zoneFilter) return false;
    
    return true;
  });

  // Sort function for table columns
  const requestSort = (key: keyof LeasedLandData) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting to the filtered lands
  const sortedLands = React.useMemo(() => {
    let sortableLands = [...filteredLands];
    if (sortConfig !== null) {
      sortableLands.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableLands;
  }, [filteredLands, sortConfig]);

  // Handle land row click
  const handleLandClick = (land: LeasedLandData) => {
    setSelectedLand(land);
  };

  // Close detail view
  const handleCloseDetail = () => {
    setSelectedLand(null);
  };

  // Handle apply button click
  const handleApply = () => {
    if (selectedLand) {
      const message = `I am interested in leasing land parcel ${selectedLand.id} in the ${selectedLand.zone}. Please provide more information about the application process.`;
      setContactMessage(message);
      setContactModalOpen(true);
    }
  };

  // Get the sort direction indicator
  const getSortDirectionIndicator = (key: keyof LeasedLandData) => {
    if (!sortConfig || sortConfig.key !== key) {
      return '⇅';
    }
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  // Toggle zone summary visibility
  const toggleZoneSummary = () => {
    setShowZoneSummary(!showZoneSummary);
  };

  // Get unique zones for filter dropdown
  const uniqueZones = ['all', ...new Set(lands.map(land => land.zone))];

  return (
    <div className="leased-land-container">
      <h1>Ethiopian IT Park Land Management</h1>
      
      <button 
        className={`zone-summary-toggle ${showZoneSummary ? 'active' : ''}`}
        onClick={toggleZoneSummary}
      >
        {showZoneSummary ? 'Hide Zone Summary' : 'Show Zone Summary'}
      </button>
      
      {showZoneSummary && <ZoneSummary />}
      
      <div className="filter-container">
        <div className="filter-group">
          <div className="filter-label">Filter by status:</div>
          <div className="filter-options">
            <button 
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Lands
            </button>
            <button 
              className={`filter-button ${filter === 'available' ? 'active' : ''}`}
              onClick={() => setFilter('available')}
            >
              Available
            </button>
            <button 
              className={`filter-button ${filter === 'leased' ? 'active' : ''}`}
              onClick={() => setFilter('leased')}
            >
              Leased
            </button>
          </div>
        </div>
        
        <div className="filter-group">
          <div className="filter-label">Filter by zone:</div>
          <select 
            className="zone-filter-select"
            value={zoneFilter}
            onChange={(e) => setZoneFilter(e.target.value)}
          >
            <option value="all">All Zones</option>
            {uniqueZones.filter(zone => zone !== 'all').map((zone, index) => (
              <option key={index} value={zone}>{zone}</option>
            ))}
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading leased land data...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      ) : (
        <div className="land-table-container">
          {sortedLands.length > 0 ? (
            <table className="land-table">
              <thead>
                <tr>
                  <th onClick={() => requestSort('id')}>
                    ID {getSortDirectionIndicator('id')}
                  </th>
                  <th onClick={() => requestSort('zone')}>
                    Zone {getSortDirectionIndicator('zone')}
                  </th>
                  <th onClick={() => requestSort('landType')}>
                    Type {getSortDirectionIndicator('landType')}
                  </th>
                  <th onClick={() => requestSort('location')}>
                    Location {getSortDirectionIndicator('location')}
                  </th>
                  <th onClick={() => requestSort('sizeSqm')}>
                    Total Size (m²) {getSortDirectionIndicator('sizeSqm')}
                  </th>
                  <th onClick={() => requestSort('availableSizeSqm')}>
                    Available Size (m²) {getSortDirectionIndicator('availableSizeSqm')}
                  </th>
                  <th onClick={() => requestSort('status')}>
                    Status {getSortDirectionIndicator('status')}
                  </th>
                  <th onClick={() => requestSort('leasedFrom')}>
                    Available From {getSortDirectionIndicator('leasedFrom')}
                  </th>
                  <th onClick={() => requestSort('contactName')}>
                    Contact {getSortDirectionIndicator('contactName')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedLands.map(land => (
                  <tr 
                    key={land.id} 
                    className={land.status === 'Available' ? 'available-row' : 'leased-row'}
                    onClick={() => handleLandClick(land)}
                  >
                    <td>{land.id}</td>
                    <td>{land.zone}</td>
                    <td>{land.landType}</td>
                    <td>{land.location}</td>
                    <td>{land.sizeSqm}</td>
                    <td>{land.availableSizeSqm}</td>
                    <td>
                      <span className={`status-badge ${land.status.toLowerCase()}`}>
                        {land.status}
                      </span>
                    </td>
                    <td>{formatDate(land.leasedFrom)}</td>
                    <td>{land.contactName}</td>
                    <td>
                      <button 
                        className="view-details-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLandClick(land);
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
              <p>No lands found matching the selected filters.</p>
            </div>
          )}
        </div>
      )}
      
      {selectedLand && (
        <LeasedLandDetail 
          land={selectedLand} 
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

export default LeasedLand;
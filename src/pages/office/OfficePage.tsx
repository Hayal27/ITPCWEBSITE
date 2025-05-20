
import React, { useState } from 'react';
import Office from './Office';
import './Office.css';

// This is a page wrapper for the Office component
// It adds page-specific features like breadcrumbs, page title, and export functionality

const OfficePage: React.FC = () => {
  const [showExportOptions, setShowExportOptions] = useState<boolean>(false);

  // Handle export functionality
  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
    // In a real application, this would trigger an API call to generate the export
    console.log(`Exporting in ${format} format...`);
    
    // Simulate export process
    setTimeout(() => {
      alert(`Office data exported in ${format.toUpperCase()} format successfully!`);
      setShowExportOptions(false);
    }, 1500);
  };

  return (
    <div className="page-container">
      {/* Page header with breadcrumbs */}
      <div className="page-header">
        <div className="breadcrumbs">
          <span>Dashboard</span>
          <span className="separator">›</span>
          <span>Facility Management</span>
          <span className="separator">›</span>
          <span className="current">Office Spaces</span>
        </div>
        
        <div className="page-actions">
          <button 
            className="export-button"
            onClick={() => setShowExportOptions(!showExportOptions)}
          >
            Export Data
            {showExportOptions && (
              <div className="export-dropdown">
                <button onClick={() => handleExport('pdf')}>Export as PDF</button>
                <button onClick={() => handleExport('excel')}>Export as Excel</button>
                <button onClick={() => handleExport('csv')}>Export as CSV</button>
              </div>
            )}
          </button>
          
          <button className="help-button">
            <span className="help-icon">?</span>
          </button>
        </div>
      </div>
      
      {/* Page description */}
      <div className="page-description">
        <p>
          Manage and view all office spaces within the ICT Park. 
          Use the filters to narrow down results or click on an office for detailed information.
        </p>
      </div>
      
      {/* Main component */}
      <Office />
      
    </div>
  );
};

export default OfficePage;

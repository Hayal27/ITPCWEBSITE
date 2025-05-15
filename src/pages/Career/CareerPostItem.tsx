import React, { useState } from 'react';
import { JobPost } from './CareerPage.tsx'; // Assuming JobPost interface is in CareerPage.tsx
import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface CareerPostItemProps {
  job: JobPost;
  onApplyNow: (job: JobPost) => void;
}

const CareerPostItem: React.FC<CareerPostItemProps> = ({ job, onApplyNow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`career-post-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="post-header" onClick={toggleExpand} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && toggleExpand()}>
        <div className="post-title-department">
            <h3>{job.title}</h3>
            <p className="department">{job.department}</p>
        </div>
        <div className="post-meta">
          <span><FaMapMarkerAlt /> {job.location}</span>
          <span><FaBriefcase /> {job.type}</span>
          <span><FaCalendarAlt /> Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
        </div>
        <button className="expand-button" aria-expanded={isExpanded}>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="post-details">
          <h4>Job Description</h4>
          <p>{job.description}</p>
          
          <h4>Responsibilities</h4>
          <ul>
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
          
          <h4>Qualifications</h4>
          <ul>
            {job.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="apply-now-button" onClick={() => onApplyNow(job)}>
        Apply Now
      </button>
    </div>
  );
};

export default CareerPostItem;
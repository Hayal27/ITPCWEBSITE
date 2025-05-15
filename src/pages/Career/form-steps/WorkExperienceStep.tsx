import React from 'react';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

export interface WorkExperience {
  id: string; // For unique key
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string;
}

interface WorkExperienceStepProps {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}

const WorkExperienceStep: React.FC<WorkExperienceStepProps> = ({ data, onChange }) => {
  const handleExperienceChange = (index: number, field: keyof WorkExperience, value: string | boolean) => {
    const newData = [...data];
    (newData[index] as any)[field] = value;
    if (field === 'isCurrent' && value === true) {
        newData[index].endDate = ''; // Clear end date if it's a current job
    }
    onChange(newData);
  };

  const addExperience = () => {
    onChange([
      ...data,
      { id: Date.now().toString(), companyName: '', jobTitle: '', startDate: '', endDate: '', isCurrent: false, responsibilities: '' },
    ]);
  };

  const removeExperience = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="form-step work-experience-step">
      <h4>Work Experience</h4>
      {data.map((exp, index) => (
        <div key={exp.id} className="experience-item form-section">
          <h5>Experience #{index + 1}</h5>
          <div className="form-group">
            <label htmlFor={`companyName-${index}`}>Company Name *</label>
            <input
              type="text"
              id={`companyName-${index}`}
              value={exp.companyName}
              onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`jobTitle-${index}`}>Job Title *</label>
            <input
              type="text"
              id={`jobTitle-${index}`}
              value={exp.jobTitle}
              onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
              required
            />
          </div>
          <div className="form-group date-group">
            <div>
                <label htmlFor={`startDate-${index}`}>Start Date *</label>
                <input
                type="month" // Changed to month for better UX
                id={`startDate-${index}`}
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor={`endDate-${index}`}>End Date</label>
                <input
                type="month" // Changed to month
                id={`endDate-${index}`}
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                disabled={exp.isCurrent}
                />
            </div>
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id={`isCurrent-${index}`}
              checked={exp.isCurrent}
              onChange={(e) => handleExperienceChange(index, 'isCurrent', e.target.checked)}
            />
            <label htmlFor={`isCurrent-${index}`}>I currently work here</label>
          </div>
          <div className="form-group">
            <label htmlFor={`responsibilities-${index}`}>Key Responsibilities</label>
            <textarea
              id={`responsibilities-${index}`}
              value={exp.responsibilities}
              onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value)}
              rows={3}
            ></textarea>
          </div>
          {data.length > 0 && (
             <button type="button" onClick={() => removeExperience(index)} className="remove-button">
                <FaTrash /> Remove Experience
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addExperience} className="add-button">
        <FaPlusCircle /> Add Another Experience
      </button>
    </div>
  );
};

export default WorkExperienceStep;
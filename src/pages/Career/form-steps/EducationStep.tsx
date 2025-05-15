import React from 'react';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

export interface Education {
  id: string; // For unique key
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
  gpa?: string;
}

interface EducationStepProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

const EducationStep: React.FC<EducationStepProps> = ({ data, onChange }) => {
  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const newData = [...data];
    (newData[index] as any)[field] = value;
    onChange(newData);
  };

  const addEducation = () => {
    onChange([
      ...data,
      { id: Date.now().toString(), institutionName: '', degree: '', fieldOfStudy: '', graduationYear: '', gpa: '' },
    ]);
  };

  const removeEducation = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="form-step education-step">
      <h4>Educational Background</h4>
      {data.map((edu, index) => (
        <div key={edu.id} className="education-item form-section">
          <h5>Education #{index + 1}</h5>
          <div className="form-group">
            <label htmlFor={`institutionName-${index}`}>Institution Name *</label>
            <input
              type="text"
              id={`institutionName-${index}`}
              value={edu.institutionName}
              onChange={(e) => handleEducationChange(index, 'institutionName', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`degree-${index}`}>Degree/Certificate *</label>
            <input
              type="text"
              id={`degree-${index}`}
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`fieldOfStudy-${index}`}>Field of Study *</label>
            <input
              type="text"
              id={`fieldOfStudy-${index}`}
              value={edu.fieldOfStudy}
              onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor={`graduationYear-${index}`}>Graduation Year  *</label>
            <input
              type="number"
              id={`graduationYear-${index}`}
              value={edu.graduationYear}
              min="1950"
              max={new Date().getFullYear() + 10}
              placeholder="YYYY"
              onChange={(e) => handleEducationChange(index, 'graduationYear', e.target.value)}
              required
            />
          </div>
           <div className="form-group">
            <label htmlFor={`gpa-${index}`}>GPA (Optional)</label>
            <input
              type="text"
              id={`gpa-${index}`}
              value={edu.gpa || ''}
              placeholder="e.g., 3.8/4.0"
              onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
            />
          </div>
          {data.length > 0 && (
            <button type="button" onClick={() => removeEducation(index)} className="remove-button">
                <FaTrash /> Remove Education
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addEducation} className="add-button">
        <FaPlusCircle /> Add Another Education
      </button>
    </div>
  );
};

export default EducationStep;
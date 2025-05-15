import React from 'react';
import { ApplicationFormData } from '../ApplicationForm'; // Adjust path as needed

interface PersonalDetailsStepProps {
  data: ApplicationFormData['personalDetails'];
  onChange: (data: ApplicationFormData['personalDetails']) => void;
  errors: Record<string, string>;
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({ data, onChange, errors }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-step personal-details-step">
      <h4>Personal Information</h4>
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input type="text" id="fullName" name="fullName" value={data.fullName} onChange={handleChange} required />
        {errors.fullName && <p className="error-message">{errors.fullName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleChange} required />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea id="address" name="address" value={data.address} onChange={handleChange} rows={3}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn Profile URL (Optional)</label>
        <input type="url" id="linkedin" name="linkedin" value={data.linkedin || ''} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" />
      </div>
      <div className="form-group">
        <label htmlFor="portfolio">Portfolio/Website URL (Optional)</label>
        <input type="url" id="portfolio" name="portfolio" value={data.portfolio || ''} onChange={handleChange} placeholder="https://yourportfolio.com" />
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
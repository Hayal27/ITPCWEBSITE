import React, { useState } from 'react';
import { JobPost } from './CareerPage';
import PersonalDetailsStep from './form-steps/PersonalDetailsStep';
import WorkExperienceStep, { WorkExperience } from './form-steps/WorkExperienceStep';
import EducationStep, { Education } from './form-steps/EducationStep';
import SkillsResumeStep from './form-steps/SkillsResumeStep';
import ReviewSubmitStep from './form-steps/ReviewSubmitStep';
import { FaTimes } from 'react-icons/fa';

export interface ApplicationFormData {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    portfolio?: string;
  };
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  resume: File | null;
  coverLetter?: string;
}

interface ApplicationFormProps {
  job: JobPost;
  onClose: () => void;
}

const TOTAL_STEPS = 5;

const ApplicationForm: React.FC<ApplicationFormProps> = ({ job, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>({
    personalDetails: { fullName: '', email: '', phone: '', address: '' },
    workExperience: [],
    education: [],
    skills: [],
    resume: null,
    coverLetter: '',
  });
   const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
        if (!formData.personalDetails.fullName) newErrors.fullName = "Full name is required.";
        if (!formData.personalDetails.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.personalDetails.email)) newErrors.email = "Email is invalid.";
        if (!formData.personalDetails.phone) newErrors.phone = "Phone number is required.";
    }
    // Add more validation for other steps if needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const nextStep = () => {
    if (validateStep()) {
        setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (section: keyof ApplicationFormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
     if (errors[section]) { // Clear error for the field being changed
        setErrors(prevErrors => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[section]; // Assuming field name matches section key
            // For nested fields like personalDetails.fullName:
            if (typeof data === 'object' && data !== null) {
                Object.keys(data).forEach(key => {
                    if (updatedErrors[`${String(section)}.${key}`]) {
                        delete updatedErrors[`${String(section)}.${key}`];
                    }
                });
            }
            return updatedErrors;
        });
    }
  };
  
  const handlePersonalDetailsChange = (data: ApplicationFormData['personalDetails']) => {
    setFormData(prev => ({ ...prev, personalDetails: data }));
    // Clear specific errors as user types
    const newErrors = {...errors};
    if (data.fullName && newErrors.fullName) delete newErrors.fullName;
    if (data.email && newErrors.email) delete newErrors.email;
    if (data.phone && newErrors.phone) delete newErrors.phone;
    setErrors(newErrors);
  };


  const handleSubmit = () => {
    if (validateStep()) {
        console.log('Application Submitted:', { jobId: job.id, ...formData });
        alert(`Application for ${job.title} submitted successfully!`);
        onClose();
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsStep data={formData.personalDetails} onChange={handlePersonalDetailsChange} errors={errors} />;
      case 2:
        return <WorkExperienceStep data={formData.workExperience} onChange={(d) => handleChange('workExperience', d)} />;
      case 3:
        return <EducationStep data={formData.education} onChange={(d) => handleChange('education', d)} />;
      case 4:
        return <SkillsResumeStep 
                    skills={formData.skills}
                    resume={formData.resume}
                    coverLetter={formData.coverLetter || ''}
                    onSkillsChange={(s) => handleChange('skills', s)}
                    onResumeChange={(f) => handleChange('resume', f)}
                    onCoverLetterChange={(cl) => handleChange('coverLetter', cl)}
                />;
      case 5:
        return <ReviewSubmitStep formData={formData} jobTitle={job.title} />;
      default:
        return null;
    }
  };

  return (
    <div className="application-form-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Apply for: {job.title}</h2>
          <button onClick={onClose} className="close-button" aria-label="Close form">
            <FaTimes />
          </button>
        </div>
        <div className="step-indicator">
          Step {currentStep} of {TOTAL_STEPS}
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}></div>
          </div>
        </div>
        <div className="modal-body">
          {renderStepContent()}
        </div>
        <div className="modal-footer">
          {currentStep > 1 && (
            <button onClick={prevStep} className="nav-button prev-button">Previous</button>
          )}
          {currentStep < TOTAL_STEPS && (
            <button onClick={nextStep} className="nav-button next-button">Next</button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button onClick={handleSubmit} className="nav-button submit-button">Submit Application</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
import React from 'react';
import { ApplicationFormData } from '../ApplicationForm'; // Adjust path as needed
import { FaUserAlt, FaBriefcase, FaGraduationCap, FaTools, FaFileAlt, FaEnvelopeOpenText } from 'react-icons/fa';

interface ReviewSubmitStepProps {
  formData: ApplicationFormData;
  jobTitle: string;
}

const ReviewSubmitStep: React.FC<ReviewSubmitStepProps> = ({ formData, jobTitle }) => {
  const { personalDetails, workExperience, education, skills, resume, coverLetter } = formData;

  return (
    <div className="form-step review-submit-step">
      <h4>Review Your Application for {jobTitle}</h4>
      <p>Please review all the information carefully before submitting.</p>

      <div className="review-section">
        <h5><FaUserAlt /> Personal Details</h5>
        <p><strong>Full Name:</strong> {personalDetails.fullName}</p>
        <p><strong>Email:</strong> {personalDetails.email}</p>
        <p><strong>Phone:</strong> {personalDetails.phone}</p>
        <p><strong>Address:</strong> {personalDetails.address || 'N/A'}</p>
        {personalDetails.linkedin && <p><strong>LinkedIn:</strong> <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer">{personalDetails.linkedin}</a></p>}
        {personalDetails.portfolio && <p><strong>Portfolio:</strong> <a href={personalDetails.portfolio} target="_blank" rel="noopener noreferrer">{personalDetails.portfolio}</a></p>}
      </div>

      <div className="review-section">
        <h5><FaBriefcase /> Work Experience</h5>
        {workExperience.length > 0 ? (
          workExperience.map((exp, index) => (
            <div key={index} className="review-item">
              <p><strong>{exp.jobTitle}</strong> at {exp.companyName}</p>
              <p>{exp.startDate} - {exp.isCurrent ? 'Present' : exp.endDate}</p>
              {exp.responsibilities && <p><em>Responsibilities:</em> {exp.responsibilities}</p>}
            </div>
          ))
        ) : <p>No work experience provided.</p>}
      </div>

      <div className="review-section">
        <h5><FaGraduationCap /> Education</h5>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="review-item">
              <p><strong>{edu.degree}</strong> in {edu.fieldOfStudy}</p>
              <p>{edu.institutionName} - Graduated: {edu.graduationYear}</p>
              {edu.gpa && <p><em>GPA:</em> {edu.gpa}</p>}
            </div>
          ))
        ) : <p>No education details provided.</p>}
      </div>

      <div className="review-section">
        <h5><FaTools /> Skills</h5>
        {skills.length > 0 ? (
          <ul className="skills-list-review">
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        ) : <p>No skills listed.</p>}
      </div>

      <div className="review-section">
        <h5><FaFileAlt /> Resume/CV</h5>
        <p>{resume ? `File: ${resume.name}` : 'No resume uploaded.'}</p>
      </div>

      {coverLetter && (
        <div className="review-section">
          <h5><FaEnvelopeOpenText /> Cover Letter</h5>
          <p className="cover-letter-review">{coverLetter}</p>
        </div>
      )}
      <p className="confirmation-text">
        By submitting this application, I confirm that all the information provided is accurate and complete to the best of my knowledge.
      </p>
    </div>
  );
};

export default ReviewSubmitStep;
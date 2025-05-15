import React, { useState } from 'react';
import { FaUpload, FaTimesCircle } from 'react-icons/fa';

interface SkillsResumeStepProps {
  skills: string[];
  resume: File | null;
  coverLetter: string;
  onSkillsChange: (skills: string[]) => void;
  onResumeChange: (file: File | null) => void;
  onCoverLetterChange: (text: string) => void;
}

const SkillsResumeStep: React.FC<SkillsResumeStepProps> = ({
  skills,
  resume,
  coverLetter,
  onSkillsChange,
  onResumeChange,
  onCoverLetterChange,
}) => {
  const [currentSkill, setCurrentSkill] = useState('');

  const handleAddSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      onSkillsChange([...skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    onSkillsChange(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onResumeChange(e.target.files[0]);
    }
  };

  return (
    <div className="form-step skills-resume-step">
      <h4>Skills & Documents</h4>
      
      <div className="form-group">
        <label htmlFor="skills">Skills (e.g., JavaScript, Project Management)</label>
        <div className="skills-input-group">
          <input
            type="text"
            id="currentSkill"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
            placeholder="Type a skill and press Enter or Add"
          />
          <button type="button" onClick={handleAddSkill} className="add-skill-button">Add Skill</button>
        </div>
        <div className="skills-tags">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
              <button type="button" onClick={() => handleRemoveSkill(skill)} className="remove-skill-button">
                <FaTimesCircle />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="resumeUpload">Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)</label>
        <div className="file-upload-area">
            <input
                type="file"
                id="resumeUpload"
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleResumeUpload}
                style={{ display: 'none' }} // Hide default input
            />
            <label htmlFor="resumeUpload" className="file-upload-button">
                <FaUpload /> Choose File
            </label>
            {resume && <span className="file-name">{resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)</span>}
        </div>
        {!resume && <p className="error-message">Resume is required.</p>} {/* Basic validation hint */}
      </div>

      <div className="form-group">
        <label htmlFor="coverLetter">Cover Letter (Optional)</label>
        <textarea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => onCoverLetterChange(e.target.value)}
          rows={6}
          placeholder="Tell us why you're a great fit for this role..."
        ></textarea>
      </div>
    </div>
  );
};

export default SkillsResumeStep;
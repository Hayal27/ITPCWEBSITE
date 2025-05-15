import React, { useState, useEffect } from 'react';
import CareerPostList from './CareerPostList';
import ApplicationForm from './ApplicationForm';
import './Career.css';

export interface JobPost {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  responsibilities: string[];
  qualifications: string[];
  postedDate: string;
}

// Mock Data for Job Posts
const mockJobPosts: JobPost[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Addis Ababa, Ethiopia (Remote options available)',
    type: 'Full-time',
    description: 'We are looking for an experienced Senior Frontend Developer to join our dynamic team. You will be responsible for building and maintaining high-quality web applications.',
    responsibilities: [
      'Develop new user-facing features using React.js.',
      'Build reusable components and front-end libraries for future use.',
      'Translate designs and wireframes into high-quality code.',
      'Optimize components for maximum performance across a vast array of web-capable devices and browsers.',
    ],
    qualifications: [
      '5+ years of experience in frontend development.',
      'Proficiency in JavaScript, TypeScript, React, HTML5, CSS3.',
      'Experience with state management libraries (e.g., Redux, Zustand).',
      'Familiarity with RESTful APIs and modern authorization mechanisms.',
      'Strong understanding of web performance and optimization techniques.',
    ],
    postedDate: '2024-07-15',
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'Addis Ababa, Ethiopia',
    type: 'Full-time',
    description: 'Seeking a visionary Product Manager to lead the development and execution of our product strategy. You will work closely with engineering, design, and marketing teams.',
    responsibilities: [
      'Define and own the product roadmap.',
      'Gather and prioritize product and customer requirements.',
      'Work with cross-functional teams to deliver high-quality products.',
      'Conduct market research and competitor analysis.',
    ],
    qualifications: [
      '3+ years of experience in product management.',
      'Proven ability to develop product and marketing strategies.',
      'Excellent written and verbal communication skills.',
      'Experience with Agile development methodologies.',
    ],
    postedDate: '2024-07-10',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
    description: 'We need a creative UX/UI Designer to craft intuitive and visually appealing user experiences for our web and mobile applications.',
    responsibilities: [
        'Conduct user research and evaluate user feedback.',
        'Create user flows, wireframes, prototypes, and mockups.',
        'Design graphic user interface elements, like menus, tabs, and widgets.',
        'Collaborate with product management and engineering to define and implement innovative solutions.',
    ],
    qualifications: [
        'Proven UX/UI design experience with a strong portfolio.',
        'Proficiency in Figma, Sketch, Adobe XD, or similar tools.',
        'Solid understanding of user-centered design principles.',
        'Ability to iterate designs and solutions efficiently and intelligently.',
    ],
    postedDate: '2024-07-20',
  },
];

const CareerPage: React.FC = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    // In a real application, you would fetch job posts from an API
    setJobPosts(mockJobPosts);
  }, []);

  const handleApplyNow = (job: JobPost) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="career-page">
      <header className="career-header">
        <h1>Join Our Team</h1>
        <p>Explore exciting career opportunities and help us shape the future of technology in Ethiopia.</p>
      </header>

      <CareerPostList jobPosts={jobPosts} onApplyNow={handleApplyNow} />

      {showApplicationForm && selectedJob && (
        <ApplicationForm job={selectedJob} onClose={handleCloseForm} />
      )}


    </div>
  );
};

export default CareerPage;
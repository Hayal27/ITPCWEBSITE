import React from 'react';
import CareerPostItem from './CareerPostItem';
import { JobPost } from './CareerPage.tsx'; // Assuming JobPost interface is in CareerPage.tsx

interface CareerPostListProps {
  jobPosts: JobPost[];
  onApplyNow: (job: JobPost) => void;
}

const CareerPostList: React.FC<CareerPostListProps> = ({ jobPosts, onApplyNow }) => {
  if (jobPosts.length === 0) {
    return <p className="no-openings">Currently, there are no open positions. Please check back later or send us your resume.</p>;
  }

  return (
    <div className="career-post-list">
      <h2>Current Openings</h2>
      {jobPosts.map((job) => (
        <CareerPostItem key={job.id} job={job} onApplyNow={onApplyNow} />
      ))}
    </div>
  );
};

export default CareerPostList;
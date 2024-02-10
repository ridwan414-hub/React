import { useEffect, useState } from 'react';
import FeaturedJobCard from './FeaturedJobCard/FeaturedJobCard';

const FeaturedJobs = () => {
    const [jobCards, setJobCards] = useState([]);
    const [jobs, setJobs] = useState(4);



  useEffect(() => {
    fetch('./career-hub/data/jobs.json')
      .then((res) => res.json())
      .then((data) => setJobCards(data));
  }, []);
    
    
    // handleShowMoreJob = () => {
        
    // }

  return (
    <div className="mx-auto border-4 grid grid-cols-2 gap-12">
      {jobCards.slice(0, jobs).map((job) => (
        <FeaturedJobCard key={jobCards.id} job={job}></FeaturedJobCard>
      ))}
          <div className={jobs===jobCards.length && 'hidden'}>
        <button
          onClick={() => setJobs(jobCards.length)}
          className="btn btn-primary mx-auto"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

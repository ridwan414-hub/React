import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplications } from '../../LocalStoraage';
import { useState } from 'react';

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  useEffect(() => {
    // const jobsApplied = [];
    const storedJobIDs = getStoredJobApplications();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIDs.includes(job.id));
      //   console.log(jobs, storedJobIDs, jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJob(jobsApplied);
    }
  }, [jobs]);

  const handleDisplayingJob = (filter) => {
    if (filter === 'All') {
      setDisplayJob(appliedJobs);
    } else if (filter === 'Onsite') {
      const O = appliedJobs.filter((job) => job.remote_or_onsite === 'Onsite');
      setDisplayJob(O);
    } else if (filter === 'Remote') {
      const R = appliedJobs.filter((job) => job.remote_or_onsite === 'Remote');
      setDisplayJob(R);
    }
  };

  // console.log(appliedJobs);
  //   for (const id of storedJobIDs) {
  //     const job = jobs.filter((job) => job.id === id);
  //   if (job) {
  //       jobsApplied.push(job);
  // }

  // const job = appliedJobs.map((job) => job.id);
  return (
    <div>
      <h1>Applied Job:{appliedJobs.length}</h1>

      <details className="dropdown">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a onClick={() => handleDisplayingJob('All')}>All</a>
          </li>
          <li>
            <a onClick={() => handleDisplayingJob('Remote')}>Remote</a>
          </li>
          <li>
            <a onClick={() => handleDisplayingJob('Onsite')}>Onsite</a>
          </li>
        </ul>
      </details>

      <ul className="flex gap-24 mt-24 p-6">
        {displayJob.map((job) => (
          <li key={job.id}>
            <img src={job.logo} alt="" />
            <span>
              {job.job_title}
              {job.company_name}
              <br />
              <br />
              <hr />
              {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;

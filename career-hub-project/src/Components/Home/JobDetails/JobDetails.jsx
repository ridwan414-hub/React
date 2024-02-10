import { useLoaderData, useParams } from 'react-router-dom';
// import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from '../../../LocalStoraage';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const notify = () => {
    saveJobApplications(idInt);
    toast('Applied!');
  };

  return (
    <>
      <h1 className="text-7xl text-center">Job Details:{id}</h1>
      <div className="grid gap-5 mx-auto mt-12 mb-12">
        <img className="w-1/2" src={job.logo} alt="" />
        <h3>Details::::{job.job_title}</h3>
        <h3>Details::::{job.company_name}</h3>
        <h3>Details::::{job.salary}</h3>
        <h3>Details::::{job.job_responsibility}</h3>
        <h3>Details::::{job.job_description}</h3>
      </div>
      <button onClick={notify} className="btn btn-primary ">
        Apply Now
      </button>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default JobDetails;

const Banner = () => {
  return (
    <div className="flex justify-between bg-slate-400 text-gray-50 ">
      <div className="w-1/2 pl-2 mt-16">
        <h1 className="text-6xl">
          One Step Closer To Your <span className="text-purple-800">Dream</span>
          Job
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
      </div>
      <img className="w-96 " src="career-hub\assets\images\user.png" alt="" />
    </div>
  );
};

export default Banner;

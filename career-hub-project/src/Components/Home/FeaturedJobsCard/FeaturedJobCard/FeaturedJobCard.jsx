import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FeaturedJobCard = ({ job }) => {
  const { id,logo, job_title, company_name } = job;

  return (
    <div className="mt-4 mx-auto">
      <img src={logo} alt="" />
      <p>{company_name}</p>
      <p>{job_title}</p>
      <button className="btn rounded-full bg-white">
        <NavLink to={`/jobDetails/${id}`}>View Details</NavLink>
      </button>
    </div>
  );
};

export default FeaturedJobCard;

FeaturedJobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

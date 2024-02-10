import { Link, useNavigate } from 'react-router-dom';
import './user.css';
import PropTypes from 'prop-types';
const User = ({ user }) => {
  const navigate = useNavigate();
  const handleSeeDetails = () => {
    navigate(`/users/${id}`);
  }
  const { username, email, id } = user;
  return (
    <div className="userStyle">
      <h3>User Id:{id}</h3>
      <p>Name:{username}</p>
      <p>Email:{email}</p>
      <Link to={`/users/${id}`}>View Details</Link>
      <button onClick={handleSeeDetails}>See Details Button</button>
    </div>
  );
};

export default User;
User.propTypes = {
  user: PropTypes.object.isRequired,
};

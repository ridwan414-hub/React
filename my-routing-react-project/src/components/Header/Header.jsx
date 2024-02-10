import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="divStyle">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Header;

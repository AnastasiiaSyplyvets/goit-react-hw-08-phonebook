import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;

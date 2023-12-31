import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from '../components/Navigation/navigation.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: #147909;
  }
`;

const AuthNav = () => {
  return (
    <div>
      <ul className={css.menueList}>
        <li className={css.listItem}>
          <StyledLink to="/register">Registration</StyledLink>
        </li>
        <li className={css.listItem}>
          <StyledLink to="/login">Login</StyledLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;

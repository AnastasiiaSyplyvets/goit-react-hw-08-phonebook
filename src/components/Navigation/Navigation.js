import { NavLink } from 'react-router-dom';

import css from '../Navigation/navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: #147909;
  }
`;

export const Navigation = () => {
  return (
    <>
      <ul className={css.menueList}>
        <li className={css.listItem}>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li className={css.listItem}>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </li>
      </ul>
    </>
  );
};

import { NavLink, Outlet } from 'react-router-dom';
export const SharedLayOut = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

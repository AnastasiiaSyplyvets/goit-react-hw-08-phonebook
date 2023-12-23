import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
export const SharedLayOut = () => {
  return (
    <>
      {/* <nav>
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
      </nav> */}
      <AppBar />
      <Outlet />
    </>
  );
};

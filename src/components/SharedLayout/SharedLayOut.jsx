import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
export const SharedLayOut = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

import AuthNav from './Auth-Nav';
import { UserMenue } from './UserMenue/UserMenue';
import { Navigation } from '../components/Navigation';

import { selectIsLoggedIn } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenue /> : <AuthNav />}
    </>
  );
};

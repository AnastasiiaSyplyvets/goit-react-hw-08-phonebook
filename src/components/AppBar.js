import AuthNav from './Auth-Nav';
import { UserMenue } from './UserMenue/UserMenue';
import { Navigation } from '../components/Navigation';

import { selectIsLoggedIn } from '../redux/selectors';
import { useSelector } from 'react-redux';
import css from '../components/appBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.header}>
      <Navigation />

      {isLoggedIn ? <UserMenue /> : <AuthNav />}
    </div>
  );
};

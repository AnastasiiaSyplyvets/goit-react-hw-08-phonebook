import { useSelector } from 'react-redux';

import { selectAuthName } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import css from '../UserMenue/userMenue.module.css';
import { Button } from '@chakra-ui/react';

export const UserMenue = () => {
  const userName = useSelector(selectAuthName);
  const dispatch = useDispatch();
  return (
    <div className={css.manue}>
      <p className={css.userText}>
        Welcome <span className={css.userName}>{userName}</span>
      </p>
      <Button
        colorScheme="green"
        size="sm"
        variant="outline"
        border="2px"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </Button>
    </div>
  );
};

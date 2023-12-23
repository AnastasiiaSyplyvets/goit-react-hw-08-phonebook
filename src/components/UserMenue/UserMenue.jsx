import { useSelector } from 'react-redux';

import { selectAuthName } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';

export const UserMenue = () => {
  const userName = useSelector(selectAuthName);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome {userName}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
};

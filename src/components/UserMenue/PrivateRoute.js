// import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';

// export default function PrivateRoute({ children, ...routeProps }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to="/login" />}
//     </Route>
//   );
// }

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

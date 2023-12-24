import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Form from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { Contact } from './ContactList/ContactList';

import { Register } from '../../src/components/pages/Register';
import { LoginPage } from '../components/pages/LoginPage';
import { ContactsPage } from '../../src/components/pages/ContactsPage';
import { SharedLayOut } from '../components/SharedLayout/SharedLayOut';

// import css from '../components/ContactForm/ContactForm.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../components/UserMenue/PrivateRoute';
import { RestrictedRoute } from '../components/UserMenue/RestrictedRoute';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ChakraProvider>
        <div>
          <Routes>
            <Route path="/" element={<SharedLayOut />}>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
              {/* <PrivateRoute path="/contacts">
              <ContactsPage />
            </PrivateRoute> */}
            </Route>
          </Routes>
        </div>
        <ToastContainer />
      </ChakraProvider>
    </>
  );
};

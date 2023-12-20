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

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayOut />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

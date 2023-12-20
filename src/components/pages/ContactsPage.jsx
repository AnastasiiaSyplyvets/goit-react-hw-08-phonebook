import css from '../ContactForm/ContactForm.module.css';
import Form from '../../components/ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { Contact } from '../ContactList/ContactList';

export const ContactsPage = () => {
  return (
    <>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <Form />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      <Contact />
    </>
  );
};

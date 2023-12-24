import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectVisibleContacts } from '../../redux/selectors';

import { fetchContacts } from '../../redux/operations';
import * as contactOperations from '../../redux/operations';

import css from './ContactList.module.css';

import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const Contact = () => {
  const contactsRedux = useSelector(selectContacts);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contactsRedux) {
    return;
  }

  const handleDeleteBtn = id => {
    dispatch(contactOperations.deleteContact(id));
  };

  return (
    <ul className={css.listCover}>
      {contacts.map(contact => {
        return (
          <li className={css.contactList} key={contact.id}>
            <p className={css.contactText}>
              {contact.name} : {contact.number}
            </p>
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="rgb(24, 108, 24)"
              variant="solid"
              className={css.deleteBtn}
              type="button"
              onClick={() => {
                handleDeleteBtn(contact.id);
              }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

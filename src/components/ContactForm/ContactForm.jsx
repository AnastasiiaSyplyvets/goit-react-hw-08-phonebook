import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addNewContact } from '../../redux/contacts/operations'; //new

import { selectContacts } from '../../redux/selectors';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './ContactForm.module.css';

import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { PhoneIcon, ArrowRightIcon } from '@chakra-ui/icons';
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsRedux = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormReset = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setName(name);
    setNumber(number);

    createContact({ name, number });

    handleFormReset();
  };

  const createContact = data => {
    if (
      contactsRedux.find(
        contact => contact.name === data.name && contact.number === data.number
      )
    ) {
      toast.error('Such contact exists!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      dispatch(addNewContact(data));

      toast.success('Contact added!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <form className={css.formData} onSubmit={handleFormSubmit}>
      <label className={css.labelName} htmlFor="">
        Name
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <ArrowRightIcon color="#BAF0BC"></ArrowRightIcon>
          </InputLeftElement>
          <Input
            type="text"
            value={name}
            onChange={handleInputChange}
            className={css.input}
            width="200px"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputGroup>
      </label>
      <label className={css.labelName} htmlFor="">
        Number
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="#BAF0BC"></PhoneIcon>
          </InputLeftElement>
          <Input
            className={css.input}
            width="200px"
            type="tel"
            value={number}
            name="number"
            onChange={handleInputChange}
          ></Input>
        </InputGroup>
      </label>
      <Button
        className={css.addBtn}
        colorScheme="rgb(24, 108, 24)"
        variant="solid"
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};

export default Form;

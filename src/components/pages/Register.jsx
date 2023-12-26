import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

import { EmailIcon, ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import css from './LoginPage.module.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  console.log(name, email, password);
  const handleFormReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    console.log('submitted');
    handleFormReset();
  };

  return (
    <div>
      <h1>Registration form</h1>
      <form onSubmit={handleFormSubmit}>
        <label className={css.label}>
          Name
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ArrowLeftIcon color="#BAF0BC"></ArrowLeftIcon>
            </InputLeftElement>
            <Input
              className={css.input}
              size="sm"
              width="50%"
              variant="outline"
              value={name}
              name="name"
              onChange={handleInputChange}
            ></Input>
          </InputGroup>
        </label>

        <label className={css.label}>
          Email
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="#BAF0BC"></EmailIcon>
            </InputLeftElement>
            <Input
              className={css.input}
              size="sm"
              width="50%"
              variant="outline"
              value={email}
              name="email"
              onChange={handleInputChange}
            ></Input>
          </InputGroup>
        </label>

        <label className={css.label}>
          Password
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ArrowRightIcon color="#BAF0BC"></ArrowRightIcon>
            </InputLeftElement>
            <Input
              className={css.input}
              size="sm"
              width="50%"
              variant="outline"
              value={password}
              name="password"
              onChange={handleInputChange}
            ></Input>
          </InputGroup>
        </label>
        <Button colorScheme="green" size="md" variant="solid" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

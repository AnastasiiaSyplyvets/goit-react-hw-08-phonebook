import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './LoginPage.module.css';

import { login } from '../../redux/auth/auth-operations';
import { Button } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, ArrowRightIcon } from '@chakra-ui/icons';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }

    console.log(email, password);
  };

  const handleFormReset = () => {
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    handleFormReset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label className={css.label}>
          <p>Email </p>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="#BAF0BC"></EmailIcon>
            </InputLeftElement>

            <Input
              size="sm"
              variant="outline"
              onChange={handleInputChange}
              name="email"
              className={css.input}
            ></Input>
          </InputGroup>
          <p>Password</p>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ArrowRightIcon color="#BAF0BC"></ArrowRightIcon>
            </InputLeftElement>

            <Input
              size="sm"
              variant="outline"
              onChange={handleInputChange}
              name="password"
              className={css.input}
            ></Input>
          </InputGroup>
        </label>
        {/* <button type="submit">Log in</button> */}
        <Button colorScheme="green" size="md" variant="solid" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

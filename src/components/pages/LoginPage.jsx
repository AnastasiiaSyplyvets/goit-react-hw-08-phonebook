import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';

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
        <label>
          <p>Email </p>
          <input onChange={handleInputChange} name="email"></input>
          <p>Password</p>
          <input onChange={handleInputChange} name="password"></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

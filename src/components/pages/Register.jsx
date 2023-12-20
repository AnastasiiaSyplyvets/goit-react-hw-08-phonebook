import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

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
        <label>
          <p>Name</p>
          <input value={name} name="name" onChange={handleInputChange}></input>
          <p>Email </p>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
          ></input>
          <p>Password</p>
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

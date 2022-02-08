import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import { nanoid } from 'nanoid';
const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
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
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor={emailInputId}>Email</label>
        <input
          id={emailInputId}
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
      </div>
      <label htmlFor={passwordInputId}>Password</label>
      <div>
        <input
          id={passwordInputId}
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterView;

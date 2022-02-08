import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

import { nanoid } from 'nanoid';
const emailInputId = nanoid();
const passwordInputId = nanoid();

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginView;

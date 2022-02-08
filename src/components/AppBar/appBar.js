import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { LogOut } from 'components/logOut/LogOut';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav>
        {isLoggedIn ? (
          <LogOut />
        ) : (
          <ul>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

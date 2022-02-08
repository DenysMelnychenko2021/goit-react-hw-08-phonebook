import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export const LogOut = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <span>Welcome, {name} </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

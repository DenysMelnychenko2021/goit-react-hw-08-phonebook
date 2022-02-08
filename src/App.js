import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrent } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { Switch } from 'react-router-dom';
import { AppBar } from 'components/AppBar/appBar';
import PrivateRoute from 'route/PrivateRoute';
import PublicRoute from 'route/PublicRoute';

const RegisterView = lazy(() => import('views/RegisterViev'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute exact path="/login" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute exact path="/contacts">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </>
  );
}

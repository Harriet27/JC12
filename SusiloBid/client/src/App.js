import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// // socket io
// import io from 'socket.io-client';

// // API
// import { API_URL } from './support/API_URL';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { keepLogin, checkStatus, Logout } from './redux/action';

// children
import {
  Home,
  Register,
  Admin,
  Verify,
  NotFound,
  Wallet,
} from './pages';
import Header from './components/Header';

const App = () => {

  const dispatch = useDispatch();

  const role = useSelector(({ auth }) => auth.role_id);
  const id = useSelector(({ auth }) => auth.user_id);
  const status = useSelector(({ status }) => status.status);
  

  useEffect(() => {
    dispatch(checkStatus(id));
    dispatch(keepLogin());
  });

  if (status === 'Banned') {
    dispatch(Logout());
  };

  return (
    <Fragment>
      {
        role !== 1
        ?
        <Header />
        :
        null
      }
      <Switch>
        <Route path = '/' component = {Home} exact />
        <Route path = '/register' component = {Register} />
        <Route path = '/verify' component = {Verify} />
        <Route path = '/wallet' component = {Wallet} />
        {
          role === 1
          ?
          <Route path = '/internal' component = {Admin} />
          : 
          null
        }
        <Route path = '*' component = {NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;

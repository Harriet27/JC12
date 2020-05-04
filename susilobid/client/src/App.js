import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { keepLogin } from './redux/action';
import Header from './components/Header';
import {
  Home,
  Register,
  Admin,
  Verify,
  NotFound,
  editProfile
} from './pages';

const App = () => {

  const dispatch = useDispatch();

  const role = useSelector(({ auth }) => auth.role_id);

  useEffect(() => {
    dispatch(
      keepLogin()
    )
  });

  return (
    <Fragment>
      <div>
        {
          role === 1
          ?
          <Route path = '/internal' component = {Admin} />
          : 
          null
        }
      </div>
      <Header/>
        <Switch>
          <Route path = '/' component = {Home} exact />
          <Route path = '/register' component = {Register} />
          <Route path = '/verify' component = {Verify} />
          <Route path = '/edit-profile' component = {editProfile} />
          <Route path = '*' component = {NotFound} />
        </Switch>
    </Fragment>
  );
};

export default App;
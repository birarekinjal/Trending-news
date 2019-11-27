import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from '../Notfound';
import News from '../../screen/news/News';
import Login from '../../screen/form/Login';
import BookMarkHome from '../../screen/BookMarkHome';
import Logout from '../../screen/Logout';
import Register from '../../screen/form/Register';
import SecretRoute from './SecretRoute';

const Routes = props => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <SecretRoute exact path="/news" component={News} />
          <SecretRoute exact path="/news/bbc-news" component={News} />
          <SecretRoute exact path="/news/bookmark" component={BookMarkHome} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </>
  );
};
export default Routes;

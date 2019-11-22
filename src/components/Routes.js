import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './Notfound';
import News from '../screen/news/News';
import BookMarkHome from '../screen/BookMarkHome';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="" component={News} />
      <Route exact path="/news/bbc-news" component={News} />
      <Route exact path="/news/bookmark" component={BookMarkHome} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from '../Notfound';
import News from '../../screen/news/News';
import Login from '../../screen/form/Login';
import BookMarkHome from '../../screen/BookMarkHome';
import Logout from '../../screen/Logout';
import Register from '../../screen/form/Register';
import SecretRoute from './SecretRoute';
import PaginationNews from '../../screen/news/PaginationNews';
import FavoriteNews from '../../screen/news/FavoriteNews';
import ContextNews from '../../screen/news/ContextNews';
const Routes = () => {
  return (
    <>
     <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <SecretRoute exact path="/news" component={News} />
          <SecretRoute exact path="/news/bbc-news" component={News} />
          <SecretRoute exact path="/news/bookmark" component={News} />
          <SecretRoute exact path="/news/pagination" component={PaginationNews} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/news/fav" component={ContextNews} />
          <Route component={Notfound} />
        
          
        </Switch>
      </Router>
    </>
  );
};
export default Routes;

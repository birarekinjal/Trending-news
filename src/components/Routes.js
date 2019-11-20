import React from 'react';
import {
   BrowserRouter as Router,
   Route,Switch,Link} from "react-router-dom";
import Layout from './Layout';
import  AboutUs  from './AboutUs';
import  Notfound  from './Notfound';
import News from '../screen/news/News';
import BBCNews from '../screen/news/BBCNews'

const Routes = () => (
    <Router>
      
      <Switch>
         <Route exact  path="/" component={News}/>
         <Route exact path="/news/bbc-news" component={BBCNews}/>
         <Route component={Notfound} />
       </Switch>
    </Router>

);

export default Routes;
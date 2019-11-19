import React from 'react';
import {
   BrowserRouter as Router,
   Route,Switch,Link} from "react-router-dom";
import Layout from './Layout';
import  AboutUs  from './AboutUs';
import  Notfound  from './Notfound';

const Routes = () => (
    <Router>
      
      <Switch>
         <Route exact  path="/" component={Layout}/>
         <Route exact path="/about" component={AboutUs}/>
         <Route component={Notfound} />
       </Switch>
    </Router>

);

export default Routes;
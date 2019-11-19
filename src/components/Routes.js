import React from 'react';
import {
   BrowserRouter as Router,
   Route,Switch,Link} from "react-router-dom";
import Home from './Home';
import  AboutUs  from './AboutUs';
import  Notfound  from './Notfound';

const Routes = () => (
    <Router>
    <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <Switch>
         <Route exact  path="/" component={Home}/>
         <Route exact path="/about" component={AboutUs}/>
         <Route component={Notfound} />
       </Switch>
    </Router>

);

export default Routes;
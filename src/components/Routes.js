import React from 'react';
import { BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";
import  Notfound  from './Notfound';
import News from '../screen/news/News';

const Routes = () => (
    <Router>
      
      <Switch>
         <Route exact path="" component={News}/>
         <Route exact path="/news/bbc-news" component={News}/>
         <Route component={Notfound} />
       </Switch>
    </Router>

);

export default Routes;
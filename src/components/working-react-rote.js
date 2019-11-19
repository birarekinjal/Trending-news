import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";


import * as serviceWorker from './serviceWorker';
import Home from  './components/Home';
import  AboutUs  from './components/AboutUs';


// const routes = Routes();
ReactDOM.render(
    <Provider store={configureStore()}>
    <Router>
      <Route  path="/home" component={Home}/>
      <Route  path="/about" component={AboutUs}/>
    </Router>
    </Provider>,
    document.getElementById('root')
   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

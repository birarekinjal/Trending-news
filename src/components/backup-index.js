import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
// import App from './components/Routes';
import Routes from './components/Routes';
import * as serviceWorker from './serviceWorker';


const routes = Routes();
ReactDOM.render(
    <Provider store={configureStore()}>
     
      {routes},
    </Provider>,
    document.getElementById('root')
   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

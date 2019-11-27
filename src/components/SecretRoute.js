import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class SecretRoute extends Component {
  render() {
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    const { component, render, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          <>{loggedIn === false ? <Redirect to="/" /> : render(props)}</>
        )}
      />
    );
  }
}

export default SecretRoute;

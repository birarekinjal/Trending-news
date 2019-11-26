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
    const { render, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <>
            {console.log(matchProps)}
            {loggedIn === false ? (
              <Redirect from={matchProps.path} to="/" />
            ) : (
              render(matchProps)
            )}
          </>
        )}
      />
    );
  }
}

export default SecretRoute;

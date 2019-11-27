import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const SecretRoute = props => {
  const token = localStorage.getItem('token');
  const { component: WrappedComponent, render, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => (
        <>
          {token === null ? (
            <Redirect to="/" />
          ) : (
            <WrappedComponent {...props} />
          )}
        </>
      )}
    />
  );
};
export default SecretRoute;

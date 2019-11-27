import React from 'react';
import {
  Route,
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

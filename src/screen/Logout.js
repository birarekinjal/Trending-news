import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  localStorage.removeItem('token');
  const token = localStorage.getItem('token');
  if (token === null) {
    return <Redirect to="/" />;
  }
  return <h1> hiii </h1>;
};
export default Logout;

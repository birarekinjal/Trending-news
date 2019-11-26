import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    localStorage.removeItem('token');
    const token = localStorage.getItem('token');
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }

    super(props);
    this.state = {
      loggedIn
    };
  }

  render() {
    console.log('hiiii');
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return <h1> hii i</h1>;
  }
}
export default Logout;

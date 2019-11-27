import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
import FormLayout from '../../components/form/FormLayout';

class Login extends Component {
  constructor(props) {
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
    if (this.state.loggedIn) {
      return <Redirect to="/news" />;
    }
    return (
      <div className="login-form">
        <FormLayout>
          <div>
            <h1 className="title">Login</h1>
            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                const userData = localStorage.getItem('userData');
                const userDataList = JSON.parse(userData);
                if (userDataList.username !== null && userDataList.password) {
                  if (
                    values.username === userDataList.username &&
                    values.password === userDataList.password
                  ) {
                    const randomNo = Math.random();
                    localStorage.setItem('token', randomNo);
                    this.setState({
                      loggedIn: true
                    });
                  }
                } else {
                  alert('please sign up');
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <Form>
                  <label>
                    Username
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" />
                  </label>
                  <label>
                    Password
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                  </label>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            {' '}
            <div className="sign-up-link">
              {' '}
              <span onClick={() => this.props.history.push('/register')}>
                {' '}
                SignUp{' '}
              </span>
            </div>
          </div>
        </FormLayout>
      </div>
    );
  }
}
export default Login;

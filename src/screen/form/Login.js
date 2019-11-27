import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import FormLayout from '../../components/form/FormLayout';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required')
});

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
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect to="/news" />;
    }
    return (
      <div className="login-form">
        <FormLayout>
          <div>
            <h1 className="title">Login</h1>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={SignUpSchema}
              onSubmit={values => {
                const userData = localStorage.getItem('userData');
                const userDataList = JSON.parse(userData);
                if (
                  userDataList.username !== null &&
                  userDataList.password !== null
                ) {
                  if (
                    values.username === userDataList.username &&
                    values.password === userDataList.password
                  ) {
                    const randomNo = Math.random();
                    localStorage.setItem('token', randomNo);
                    this.setState({
                      loggedIn: true
                    });
                  } else {
                    alert('invalid data');
                  }
                } else {
                  alert('please sign up');
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label htmlFor="username">
                    Username
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error-msg"
                    />
                  </label>
                  <label htmlFor="password">
                    Password
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-msg"
                    />
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

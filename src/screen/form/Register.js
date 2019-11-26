import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormLayout from '../../components/form/FormLayout';
// import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    // const token = localStorage.getItem("token");
    // let loggedIn = true;
    // if (token === null) {
    //     loggedIn = false;
    // }
    // this.state = {

    //     loggedIn
    // };
  }

  componentDidMount() {
    console.log('didmout');
  }

  render() {
    return (
      <div className="login-form">
        <FormLayout>
          <div>
            <h1>Register</h1>
            <Formik
              initialValues={{ username: '', password: '', email: '' }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values, '_++++');
                localStorage.setItem('userData', JSON.stringify(values));
                this.props.history.push('/');
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
                /* and other goodies */
              }) => (
                <Form>
                  <label>
                    Username
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" />
                  </label>
                  <label>
                    Email
                    <Field type="text" name="email" />
                    <ErrorMessage name="email" component="div" />
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
        </FormLayout>

        <div className="signup-link">
          {' '}
          <span onClick={() => this.props.history.push('/')}> Login </span>
        </div>
      </div>
    );
  }
}
export default Register;

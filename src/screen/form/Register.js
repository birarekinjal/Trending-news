import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormLayout from '../../components/form/FormLayout';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-form">
        <FormLayout>
          <div>
            <h1 className="title">Register</h1>
            <Formik
              initialValues={{ username: '', password: '', email: '' }}
              onSubmit={(values, { setSubmitting }) => {
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
          <div>
            {' '}
            <div className="sign-up-link">
              {' '}
              <span onClick={() => this.props.history.push('/')}> Login </span>
            </div>
          </div>
        </FormLayout>
      </div>
    );
  }
}
export default Register;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import FormLayout from '../../components/form/FormLayout';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Register = (props) => {
  return (
    <div className="login-form">
      <FormLayout>
        <div>
          <h1 className="title">Register</h1>
          <Formik
            initialValues={{ username: '', password: '', email: '' }}
            validationSchema={SignUpSchema}
            onSubmit={(values, { setSubmitting }) => {
              localStorage.setItem('userData', JSON.stringify(values));
              props.history.push('/');
            }}
          >
            {({
              isSubmitting
            }) => (
                <Form>
                  <label htmlFor="register-username">
                    Username
                    <Field type="text" name="username" id="register-username" placeholder="username" />
                    <ErrorMessage name="username" component="div" className="error-msg" />
                  </label>
                  <label htmlFor="email">
                    Email
                    <Field type="text" name="email" id="email" placeholder="email" />
                    <ErrorMessage name="email" component="div" className="error-msg" />
                  </label>

                  <label htmlFor="register-password">
                    Password
                    <Field type="password" name="password" id="register-password" placeholder="password" />
                    <ErrorMessage name="password" component="div" className="error-msg" />
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
            {/* eslint-disable-next-line */}
            <span onClick={() => props.history.push('/')}> Login </span>
          </div>
        </div>
      </FormLayout>
    </div >
  );
};
export default Register;

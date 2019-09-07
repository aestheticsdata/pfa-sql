import React from 'react';
import Swal from 'sweetalert2';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

import StyledSharedLoginForm from './StyledSharedLoginForm';

const SharedLoginForm = (props) => {
  const {
    onSubmit,
  } = props;

  return (
    <StyledSharedLoginForm>
      <div className="container">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password required';
            } else if (values.password.length < 5) {
              errors.password = 'at least 5 chars';
            }
            return errors;
          }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="span" />
              <Field type="password" name="password" placeholder="password"/>
              <ErrorMessage name="password" component="span" />
              <button type="submit" disabled={isSubmitting || errors.email || errors.password}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </StyledSharedLoginForm>
  )
};

export default SharedLoginForm;




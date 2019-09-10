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
    buttonTitle,
    displayEmailField,
    displayPasswordField,
  } = props;

  const validate = values => {
    let errors = {};

    if (displayEmailField && !values.email) {
      errors.email = 'Required';
    } else if (
      displayEmailField && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (displayPasswordField && !values.password) {
      errors.password = 'Password required';
    } else if (displayPasswordField && values.password.length < 5) {
      errors.password = 'at least 5 chars';
    }

    return errors;
  };

  return (
    <StyledSharedLoginForm>
      <div className="container">
        <div className="title">Personal Finance Assistant</div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {
                displayEmailField ?
                  <>
                    <Field type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" component="span" />
                  </>
                  :
                  null
              }
              {
                displayPasswordField ?
                  <>
                    <Field type="password" name="password" placeholder="password"/>
                    <ErrorMessage name="password" component="span" />
                  </>
                  :
                  null
              }
              <button
                type="submit"
                disabled={isSubmitting || errors.email || errors.password}
                className="shared-login-submit-btn"
              >
                {buttonTitle}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </StyledSharedLoginForm>
  )
};

export default SharedLoginForm;




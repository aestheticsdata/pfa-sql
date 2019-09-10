import React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';

import StyledSharedLoginForm from './StyledSharedLoginForm';

const SharedLoginForm = (props) => {
  const {
    onSubmit,
    buttonTitle,
    displayEmailField,
    displayPasswordField,
  } = props;

  // //////////////////////////////////////////////////////////////////////
  // https://jaredpalmer.com/formik/docs/guides/validation#field-level-validation
  const validateEmail = value => {
    let error;

    if (!value) {
      error = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validatePassword = value => {
    let error;

    if (!value) {
      error = 'Password required';
    } else if (displayPasswordField && value.length < 5) {
      error = 'at least 5 chars';
    }

    return error;
  };
  // ////////////////////////////////////////////////////////////////////

  return (
    <StyledSharedLoginForm>
      <div className="container">
        <div className="title">Personal Finance Assistant</div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              {
                displayEmailField ?
                  <>
                    <Field
                      type="email"
                      name="email"
                      placeholder="email"
                      validate={validateEmail}
                    />
                    {errors.email && <div>{errors.email}</div>}
                  </>
                  :
                  null
              }
              {
                displayPasswordField ?
                  <>
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                      validate={validatePassword}
                    />
                    {errors.password && <div>{errors.password}</div>}
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




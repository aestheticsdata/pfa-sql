import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

import { resetPassword } from './actions';
import StyledForgotPassword from './StyledForgotPassword';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (values, { setSubmitting }) => {
    this.props.resetPassword(values.email);
    setSubmitting(false);
  };

  render() {
    return (
      <StyledForgotPassword>
        <div className="container">
          <Formik
            initialValues={{ email: '' }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
            }}
            onSubmit={this.onSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <Field type="email" name="email" placeholder="email" />
                <ErrorMessage name="email" component="span" />
                <button type="submit" disabled={isSubmitting || errors.email}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </StyledForgotPassword>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email)),
  }
};

export default connect(null, mapDispatchToProps)(ForgotPassword);

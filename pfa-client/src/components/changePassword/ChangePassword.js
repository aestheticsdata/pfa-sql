import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

import { changePassword } from './actions';
import StyledChangePassword from './StyledChangePassword';


class ChangePassword extends Component {
  user = JSON.parse(localStorage.getItem('pfa-user'));
  onSubmit = (values, { setSubmitting,resetForm }) => {
    this.props.changePassword(this.user.email, values.newpassword);
    resetForm({ newpassword: '' });
    setSubmitting(false);
  };

  render() {
    return (
      <StyledChangePassword>
        <div className="container">
          <Formik
            initialValues={{ newpassword: '' }}
            validate={values => {
              let errors = {};
              if (!values.newpassword) {
                errors.newpassword = 'Password required';
              } else if (values.newpassword.length < 5) {
                errors.newpassword = 'at least 5 chars';
              }
            }}
            onSubmit={this.onSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <Field type="password" name="newpassword" placeholder="new password"/>
                <ErrorMessage name="newpassword" component="span" />
                <button type="submit" disabled={isSubmitting || errors.newpassword}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </StyledChangePassword>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (email, password) => dispatch(changePassword(email, password)),
  }
};

export default connect(null, mapDispatchToProps)(ChangePassword);
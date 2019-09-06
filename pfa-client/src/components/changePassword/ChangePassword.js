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
  onSubmit = (values, { setSubmitting }) => {
    this.props.changePassword(this.props.user.email, values.newpassword);
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

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (email, password) => dispatch(changePassword(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
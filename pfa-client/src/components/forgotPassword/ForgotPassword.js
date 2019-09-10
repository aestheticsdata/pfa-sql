import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetPassword } from './actions';

import SharedLoginForm from "../shared/sharedLoginForm/SharedLoginForm";
import StyledForgotPassword from './StyledForgotPassword';
import StyledSharedLoginContainer from '../shared/sharedLoginContainer/StyledSharedLoginContainer';

class ForgotPassword extends Component {
  onSubmit = (values, { setSubmitting }) => {
    this.props.resetPassword(values.email);
    setSubmitting(false);
  };

  render() {
    return (
      <StyledForgotPassword>
        <StyledSharedLoginContainer>
          <SharedLoginForm
            onSubmit={this.onSubmit}
            buttonTitle={"reset password"}
            displayEmailField
          />
        </StyledSharedLoginContainer>
      </StyledForgotPassword>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email)),
  }
};

export default connect(null, mapDispatchToProps)(ForgotPassword);

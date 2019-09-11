import React, { Component } from 'react';
import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import { resetPassword } from './actions';
import messages from './messages';

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
            buttonTitle={this.props.intl.formatMessage({ ...messages.buttonLabel })}
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

export default injectIntl(connect(null, mapDispatchToProps)(ForgotPassword));

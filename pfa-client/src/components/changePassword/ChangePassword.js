import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePassword } from './actions';

import SharedLoginForm from '../shared/sharedLoginForm/SharedLoginForm';
import StyledChangePassword from './StyledChangePassword';
import StyledSharedLoginContainer from '../shared/sharedLoginContainer/StyledSharedLoginContainer';


class ChangePassword extends Component {
  user = JSON.parse(localStorage.getItem('pfa-user'));
  onSubmit = (values, { setSubmitting,resetForm }) => {
    this.props.changePassword(this.user.email, values.password);
    resetForm({ password: '' });
    setSubmitting(false);
  };

  render() {
    return (
      <StyledChangePassword>
        <StyledSharedLoginContainer>
          <SharedLoginForm
            onSubmit={this.onSubmit}
            buttonTitle={"change password"}
            displayPasswordField
          />
        </StyledSharedLoginContainer>
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
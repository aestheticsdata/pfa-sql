import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { injectIntl } from 'react-intl';

import {
  register,
  clearRegisterFailed,
} from './actions';

import SharedLoginForm from "../shared/sharedLoginForm/SharedLoginForm";
import StyledRegister from './StyledRegister';
import StyledSharedLoginContainer from '../shared/sharedLoginContainer/StyledSharedLoginContainer';
import messages from './messages';

class Register extends Component {
  onSubmit = (values, { setSubmitting }) => {
    console.log('1 : ', values);
    this.props.register(values.email, values.password, values.currency);
    setSubmitting(false);
  };

  componentDidMount() {
    if (localStorage.getItem('pfa-token')) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.token !== prevProps.token) {
      this.props.history.push('/');
    }
    if (this.props.registerFailed) {
      Swal.fire({
        title: 'Error',
        text: this.props.registerErrorMessage,
        type: 'error',
        confirmButtonText: 'close',
        onClose: () => {
          this.props.clearRegisterFailed()
        }
      })
    }
  }

  render() {
    return (
      <StyledRegister>
        <StyledSharedLoginContainer>
          <SharedLoginForm
            onSubmit={this.onSubmit}
            buttonTitle={this.props.intl.formatMessage({ ...messages.buttonLabel })}
            displayEmailField
            displayPasswordField
            displayCurrencyField
          />
        </StyledSharedLoginContainer>
      </StyledRegister>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
    registerFailed: state.registerReducer.failed,
    registerErrorMessage: state.registerReducer.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password, currency) => dispatch(register(email, password, currency)),
    clearRegisterFailed: () => dispatch(clearRegisterFailed()),
  }
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Register));

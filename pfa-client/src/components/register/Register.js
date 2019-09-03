import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import {
  register,
  clearRegisterFailed,
} from './actions';

import StyledRegister from './StyledRegister';
import SharedLoginForm from "../sharedLoginForm/SharedLoginForm";

class Register extends Component {
  onSubmit = (values, { setSubmitting }) => {
    this.props.register(values.email, values.password);
    setSubmitting(false);
  };

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
        <div className="register-container">
          <SharedLoginForm
            onSubmit={this.onSubmit}
          />
        </div>
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
    register: (email, password) => dispatch(register(email, password)),
    clearRegisterFailed: () => dispatch(clearRegisterFailed()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

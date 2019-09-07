import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import SharedLoginForm from '../sharedLoginForm/SharedLoginForm';

import {
  login,
  clearLoginFailed,
} from './actions';

import StyledLogin from './StyledLogin';


class Login extends Component {
  onSubmit = (values, { setSubmitting }) => {
    this.props.login(values.email, values.password);
    setSubmitting(false);
  };

  componentDidMount() {
    if (localStorage.getItem('pfa-token')) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.loginErrorMessage !== '') {
      Swal.fire({
        title: 'Error',
        text: this.props.loginErrorMessage,
        type: 'error',
        confirmButtonText: 'close',
        onClose: () => {
          this.props.clearLoginFailed()
        }
      })
    }
    if (this.props.token !== prevProps.token) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <>
      {
        this.props.token ?
          null
          :
          <StyledLogin>
            <div className="login-container">
              <SharedLoginForm
                onSubmit={this.onSubmit}
              />
              <div className="pwd-forgot">
                <NavLink to="/forgotpassword">Forgot Password ?</NavLink>
              </div>
            </div>
          </StyledLogin>
      }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
    loginErrorMessage: state.loginReducer.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    clearLoginFailed: () => dispatch(clearLoginFailed()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

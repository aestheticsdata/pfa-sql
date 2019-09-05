import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SharedLoginForm from '../sharedLoginForm/SharedLoginForm';

import { login } from './actions';

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
                <NavLink to="/forgotpassword">Password forgotten</NavLink>
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

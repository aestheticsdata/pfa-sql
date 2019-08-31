import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SharedLoginForm from '../sharedLoginForm/SharedLoginForm';

import { login } from './actions';

import StyledLogin from './StyledLogin';


class Login extends Component {
  onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      console.log(this.props.history);
    }
  }

  render() {
    return (
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
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

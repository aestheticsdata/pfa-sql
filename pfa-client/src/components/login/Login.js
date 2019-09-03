import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SharedLoginForm from '../sharedLoginForm/SharedLoginForm';

import { login } from './actions';

import StyledLogin from './StyledLogin';


class Login extends Component {
  constructor(props) {
    super(props);
    console.log('Login constructor');
  }
  onSubmit = (values, { setSubmitting }) => {
    this.props.login(values.email, values.password);
    setSubmitting(false);
  };

  componentDidUpdate(prevProps) {
    if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
      this.props.history.push('/');
    }
  }
  componentDidMount() {
    console.log('Login isAuthenticated : ', this.props.isAuthenticated);
  }
  componentWillUnmount() {
    console.log('Login unmount');
  }

  render() {
    return (
      <>
      {
        this.props.isAuthenticated ?
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
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

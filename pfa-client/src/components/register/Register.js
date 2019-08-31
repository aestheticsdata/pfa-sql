import React, { Component } from 'react';
import { connect } from 'react-redux';

import { register } from './actions';

import StyledRegister from './StyledRegister';
import SharedLoginForm from "../sharedLoginForm/SharedLoginForm";

class Register extends Component {
  onSubmit = (values, { setSubmitting }) => {
    console.log('onSubmit values : ', values);
    this.props.register(values.email, values.password);
    setSubmitting(false);
    this.props.history.push('/login');
  };

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

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password) => dispatch(register(email, password)),
  }
};

export default connect(null, mapDispatchToProps)(Register);

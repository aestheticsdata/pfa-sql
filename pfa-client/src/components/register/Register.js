import React from 'react';
import { connect } from 'react-redux';

import { register } from './actions';

import StyledRegister from './StyledRegister';
import SharedLoginForm from "../sharedLoginForm/SharedLoginForm";

const Register = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log('onSubmit values : ', values);
    props.register(values.email, values.password);
    setSubmitting(false);
  };

  return (
    <StyledRegister>
      <div className="register-container">
        <SharedLoginForm
          onSubmit={onSubmit}
        />
      </div>
    </StyledRegister>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password) => dispatch(register(email, password)),
  }
};

export default connect(null, mapDispatchToProps)(Register);

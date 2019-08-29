import React from 'react';
import { NavLink } from 'react-router-dom';
import SharedLoginForm from '../sharedLoginForm/SharedLoginForm';

import StyledLogin from './StyledLogin';

const Login = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <StyledLogin>
        <SharedLoginForm
          onSubmit={onSubmit}
        />
        <NavLink to="/forgotpassword">Password forgotten</NavLink>
      </StyledLogin>
    </>
  );
};

export default Login;

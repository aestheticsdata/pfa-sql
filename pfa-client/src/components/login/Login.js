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
        <div className="login-container">
          <SharedLoginForm
            onSubmit={onSubmit}
          />
          <div className="pwd-forgot">
            <NavLink to="/forgotpassword">Password forgotten</NavLink>
          </div>
        </div>
      </StyledLogin>
    </>
  );
};

export default Login;

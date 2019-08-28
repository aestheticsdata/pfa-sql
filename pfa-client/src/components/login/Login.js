import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledLogin from './StyledLogin';

const Login = (props) => {
  return (
    <>
      <StyledLogin>
        <div>Login</div>
        <NavLink to="/forgotpassword">Password forgotten</NavLink>
      </StyledLogin>
    </>
  );
};

export default Login;

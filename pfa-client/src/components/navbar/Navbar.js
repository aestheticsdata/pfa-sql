import React from 'react';
import {NavLink} from "react-router-dom";

import StyledNavBar from './StyledNavBar';

const NavBar = (props) => {
  return (
    <StyledNavBar>
      <NavLink to='/' className="link" exact>Home</NavLink>
      <NavLink to='/login' className="link" exact>Login</NavLink>
      <NavLink to='/register' className="link" exact>Register</NavLink>
    </StyledNavBar>
  );
};

export default NavBar;

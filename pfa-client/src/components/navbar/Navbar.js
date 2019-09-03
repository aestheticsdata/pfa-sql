import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import StyledNavBar from './StyledNavBar';

const NavBar = (props) => {
  const { token } = props;

  return (
    <StyledNavBar>
      {
        token ?
          <>
            <NavLink to='/' className="link" exact>Home</NavLink>
            <NavLink to='/logout' className="link" exact>Logout</NavLink>
          </>
          :
          <>
            <NavLink to='/login' className="link" exact>Login</NavLink>
            <NavLink to='/register' className="link" exact>Register</NavLink>
          </>

      }
    </StyledNavBar>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
  }
};

export default connect(mapStateToProps, null)(NavBar);

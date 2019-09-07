import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import StyledNavBar from './StyledNavBar';

const NavBar = (props) => {
  const { token } = props;
  const user = JSON.parse(localStorage.getItem('pfa-user'));

  return (
    <StyledNavBar>
      <div className="logo" />
      {
        token ?
          <>
            <NavLink to='/' className="link" exact>Home</NavLink>
            <NavLink to='/logout' className="link" exact>Logout</NavLink>
            <NavLink to='/changepassword' className="link" exact>Change password</NavLink>
            <span className="email">{user.email}</span>
          </>
          :
          <>
            <NavLink to='/login' className="link" exact>Login</NavLink>
            <NavLink to='/register' className="link" exact>Sign up</NavLink>
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

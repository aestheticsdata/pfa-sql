import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import StyledNavBar from './StyledNavBar';
import messages from './messages';

import UserMenu from './userMenu/UserMenu';
import LangMenu from './langMenu/LangMenu';

class NavBar extends Component {
  render() {
    const { token } = this.props;
    const user = JSON.parse(localStorage.getItem('pfa-user'));

    return (
      <StyledNavBar>
        <div className="logo" />
        {
          token ?
            <>
              <NavLink to='/' className="link" exact>
                <FormattedMessage
                  {...messages.home}
                />
              </NavLink>
              <UserMenu
                className="usermenu"
                user={user}
              />
              <LangMenu
                className="langmenu"
              />
            </>
            :
            <>
              <NavLink to='/login' className="link" exact>
                <FormattedMessage
                  {...messages.login}
                />
              </NavLink>
              <NavLink to='/register' className="link" exact>
                <FormattedMessage
                  {...messages.signUp}
                />
              </NavLink>
            </>

        }
      </StyledNavBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
  }
};

export default connect(mapStateToProps, null)(NavBar);

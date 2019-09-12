import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import StyledNavBar from './StyledNavBar';
import messages from './messages';

import Dropdown from '../common/dropdown/Dropdown';

class NavBar extends Component {
  render() {
    const { token } = this.props;
    const user = JSON.parse(localStorage.getItem('pfa-user'));
    const listItems = [
      {
        id: 'abc',
        name: 'an item',
      },
    ];

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
              <NavLink to='/logout' className="link" exact>
                <FormattedMessage
                  {...messages.logout}
                />
              </NavLink>
              <NavLink to='/changepassword' className="link" exact>Change password</NavLink>
              <Dropdown
                title={user.email}
                listItems={listItems}
              />
              <span className="email">{user.email}</span>
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

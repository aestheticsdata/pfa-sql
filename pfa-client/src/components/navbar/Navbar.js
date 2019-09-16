import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import getSymbolFromCurrency from 'currency-symbol-map';

import DatePickerWrapper from '../datePickerWrapper/DatePickerWrapper';

import { ReactComponent as Logo } from './money-svgrepo-com.svg';

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
        <div className="logo">
          <Logo />
        </div>
        {
          token ?
            <>
              <NavLink to='/' className="link" exact>
                <FormattedMessage
                  { ...messages.spendings }
                />
              </NavLink>
              <NavLink to='/stats' className="link" exact>
                <FormattedMessage
                  { ...messages.stats }
                />
              </NavLink>
              <div className="date-picker-wrapper">
                <DatePickerWrapper />
              </div>
              <UserMenu
                className="usermenu"
                user={user}
              />
              <LangMenu
                className="langmenu"
              />
              <div className="base-currency">
                <FormattedMessage
                  { ...messages.globalCurrency }
                /> :
                <span className="symbol">{ getSymbolFromCurrency(user.baseCurrency) }</span>
              </div>
            </>
            :
            <>
              <NavLink to='/login' className="link" exact>
                <FormattedMessage
                  { ...messages.login }
                />
              </NavLink>
              <NavLink to='/register' className="link" exact>
                <FormattedMessage
                  { ...messages.signUp }
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
    user: state.loginReducer.user,
  }
};

export default connect(mapStateToProps, null)(NavBar);

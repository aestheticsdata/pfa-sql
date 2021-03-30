import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import getSymbolFromCurrency from 'currency-symbol-map';

import DatePickerWrapper from '../datePickerWrapper/DatePickerWrapper';

import { ReactComponent as Logo } from './money-svgrepo-com.svg';

import StyledNavBar from './StyledNavBar';
import messages from './messages';

import UserMenu from './userMenu/UserMenu';
import LangMenu from './langMenu/LangMenu';


const NavBar = ( ) => {
  const user = JSON.parse(localStorage.getItem('pfa-user'));
  const token = useSelector(state => state.loginReducer.token);

  return (
    <StyledNavBar>
      <div className="logo">
        <Logo />
      </div>
      {
        token ?
          <>
            <div className="flex-container">
              <div className="nav-link-container">
                <NavLink to='/' className="link" exact>
                  <FormattedMessage
                    { ...messages.spendings }
                  />
                </NavLink>
                <NavLink to='/categories' className="link" exact>
                  <FormattedMessage
                    { ...messages.categories }
                  />
                </NavLink>
                <NavLink to='/stats' className="link" exact>
                  <FormattedMessage
                    { ...messages.stats }
                  />
                </NavLink>
              </div>
              <div className="date-picker-wrapper">
                <DatePickerWrapper />
              </div>
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

export default NavBar;

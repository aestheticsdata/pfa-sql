import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import { faSignOutAlt, faKey, faCoins } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../../common/dropdown/Dropdown';
import UserMenuContent from './UserMenuContent';
import StyledUserMenu from './StyledUserMenu';
import { history } from '../../../history';
import messages from './messages';
import { changeBaseCurrency } from './actions';
import { default as currencyCodes } from  '../../../currency-codes';

const UserMenu = (props) => {
  const currencies = Object.assign({}, ...currencyCodes.map(currency => {
    return { [currency.code]: currency.name }
  }));
  const openModalCurrency = () => {
    Swal.fire({
      title: 'change currency',
      input: 'select',
      inputOptions: currencies,
      inputValue: 'USD',
      inputPlaceholder: 'Select a currency',
      showCancelButton: true,
    }).then((currencyObject) => currencyObject.value && props.changeBaseCurrency(props.user.id, currencyObject.value));
  };

  const listItems = [
    {
      id: 'changepassword',
      label: props.intl.formatMessage({ ...messages.changePassword }),
      icon: faKey,
      callback: () => history.push('/changepassword'),
    },
    {
      id: 'changebasecurrency',
      label: props.intl.formatMessage({ ...messages.changeBaseCurrency }),
      icon: faCoins,
      callback: () => openModalCurrency(),
    },
    {
      id: 'logout',
      label: props.intl.formatMessage({ ...messages.logout }),
      icon: faSignOutAlt,
      callback: () => history.push('/logout'),
    },
  ];

  return (
    <StyledUserMenu>
      <Dropdown>
        <span className="email">{props.user.email}</span>
        <UserMenuContent
          listItems={listItems}
        />
      </Dropdown>
    </StyledUserMenu>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBaseCurrency: (userID, currency) => dispatch(changeBaseCurrency(userID, currency)),
  }
}

export default injectIntl(connect(null, mapDispatchToProps)(UserMenu));


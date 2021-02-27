import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import {
  faSignOutAlt,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../../common/dropdown/Dropdown';
import UserMenuContent from './UserMenuContent';
import StyledUserMenu from './StyledUserMenu';
import { history } from '../../../history';
import messages from './messages';


const UserMenu = () => {
  const intl = useIntl();

  const user = useSelector(state => state.loginReducer.user);

  const listItems = [
    {
      id: 'changepassword',
      label: intl.formatMessage({ ...messages.changePassword }),
      icon: faKey,
      callback: () => history.push('/changepassword'),
    },
    {
      id: 'logout',
      label: intl.formatMessage({ ...messages.logout }),
      icon: faSignOutAlt,
      callback: () => history.push('/logout'),
    },
  ];

  return (
    <StyledUserMenu>
      <Dropdown>
        <span className="email">{user.email}</span>
        <UserMenuContent
          listItems={listItems}
        />
      </Dropdown>
    </StyledUserMenu>
  )
};

export default UserMenu;


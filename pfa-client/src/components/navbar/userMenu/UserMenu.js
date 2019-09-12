import React from 'react';
import { injectIntl } from 'react-intl';
import Dropdown from '../../common/dropdown/Dropdown';
import UserMenuContent from './UserMenuContent';
import StyledUserMenu from './StyledUserMenu';
import { history } from '../../../history';
import messages from './messages';

const UserMenu = (props) => {
  const listItems = [
    {
      id: 'changepassword',
      label: props.intl.formatMessage({ ...messages.changePassword }),
      callback: () => history.push('/changepassword'),
    },
    {
      id: 'logout',
      label: props.intl.formatMessage({ ...messages.logout }),
      callback: () => history.push('/logout'),
    },
  ];

  return (
    <StyledUserMenu>
      <Dropdown>
        <span>{props.user.email}</span>
        <UserMenuContent
          listItems={listItems}
        />
      </Dropdown>
    </StyledUserMenu>
  )
};

export default injectIntl(UserMenu);


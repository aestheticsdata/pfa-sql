import React from 'react';
import Dropdown from '../../common/dropdown/Dropdown';
import UserMenuContent from './UserMenuContent';

const UserMenu = (props) => {
  const listItems = [
    {
      id: 'firstitem',
      label: 'first item'
    },
    {
      id: 'secondItem',
      label: 'second item'
    },
    {
      id: 'thirdItem',
      label: 'third item'
    },
    {
      id: 'forthItem',
      label: 'forth item'
    },
  ];

  return (
    <Dropdown>
      <div>{props.user.email}</div>
      <UserMenuContent
        listItems={listItems}
      />
    </Dropdown>
  )
};

export default UserMenu;


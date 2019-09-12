import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledUserMenuContent from './StyledUserMenuContent';

const UserMenuContent = (props) => {
  const content = props.listItems && props.listItems.map(item => (
    <li
      key={item.id}
      className="dropdownitems"
      onClick={() => item.callback && item.callback()}
    >
      <FontAwesomeIcon
        className="icon"
        icon={item.icon}
      />
      {item.label}
    </li>
  ));

  return (
    <StyledUserMenuContent>
      <div
        onClick={() => props.handleclosefromchild()}
        role="menu"
      >
        <ul>
          {
            content
          }
        </ul>
      </div>
    </StyledUserMenuContent>
  )
};

export default UserMenuContent;

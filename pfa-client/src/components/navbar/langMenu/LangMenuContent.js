import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

import Cookie from 'js-cookie';

import StyledLangMenuContent from './StyledLangMenuContent';

const UserMenuContent = (props) => {
  const content = props.listItems && props.listItems.map(item => (
    <li
      key={item.id}
      className="dropdownitems"
      onClick={() => item.callback && item.callback()}
    >
      <span className="item-label">{item.label}</span>
      {
        Cookie.get('lang') === item.id ?
          <FontAwesomeIcon icon={faCheck} className="check" />
          :
          null
      }
    </li>
  ));

  return (
    <StyledLangMenuContent>
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
    </StyledLangMenuContent>
  )
};

export default UserMenuContent;

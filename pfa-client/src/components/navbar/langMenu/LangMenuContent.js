import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

import Cookie from 'js-cookie';

import Content from '../common/Content';
import StyledLangMenuContent from './StyledLangMenuContent';

const UserMenuContent = ({ listItems, handleclosefromchild }) => {
  const content = listItems && listItems.map(item => (
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
  <Content
    handleclosefromchild={handleclosefromchild}
    ContentStyle={StyledLangMenuContent}
    content={content}
  />
  )
};

export default UserMenuContent;

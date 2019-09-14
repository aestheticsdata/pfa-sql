import React from 'react';

import StyledLangMenuContent from './StyledLangMenuContent';

const UserMenuContent = (props) => {
  const content = props.listItems && props.listItems.map(item => (
    <li
      key={item.id}
      className="dropdownitems"
      onClick={() => item.callback && item.callback()}
    >
      {item.label}
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

import React from 'react';

const UserMenuContent = (props) => {
  const content = props.listItems && props.listItems.map(item => (
    <li key={item.id}>{item.label}</li>
  ));

  return (
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
  )
};

export default UserMenuContent;

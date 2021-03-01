import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Content from '../common/Content';
import StyledUserMenuContent from './StyledUserMenuContent';

const UserMenuContent = ({ listItems, handleclosefromchild }) => {
  const content = listItems && listItems.map(item => (
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
    <Content
      handleclosefromchild={handleclosefromchild}
      ContentStyle={StyledUserMenuContent}
      content={content}
    />
  )
};

export default UserMenuContent;

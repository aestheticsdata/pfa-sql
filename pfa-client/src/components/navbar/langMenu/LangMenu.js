import React from 'react';
import { injectIntl } from 'react-intl';
import Cookie from 'js-cookie';

import Dropdown from '../../common/dropdown/Dropdown';
import LangMenuContent from './LangMenuContent';
import StyledLangMenu from './StyledLangMenu';
import messages from './messages';


const LangMenu = (props) => {
  const listItems = [
    {
      id: 'fr',
      label: 'fr',
      callback: () => {
        Cookie.set('lang', 'fr');
        window.location.reload();
      },
    },
    {
      id: 'en',
      label: 'en',
      callback: () => {
        Cookie.set('lang', 'en');
        window.location.reload();
      },
    }
  ];

  return (
    <StyledLangMenu>
      <Dropdown>
        <span>{props.intl.formatMessage({ ...messages.languageLabel })}</span>
        <LangMenuContent
          listItems={listItems}
        />
      </Dropdown>
    </StyledLangMenu>
  )
};

export default injectIntl(LangMenu);


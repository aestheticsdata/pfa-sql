import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';

import Dropdown from '../../common/dropdown/Dropdown';
import LangMenuContent from './LangMenuContent';
import StyledLangMenu from './StyledLangMenu';
import messages from './messages';

import { updateLang } from './actions';


const LangMenu = (props) => {
  const listItems = [
    {
      id: 'fr',
      label: 'fr',
      callback: () => {
        Cookie.set('lang', 'fr');
        props.updateLang('fr');
        // window.location.reload();
      },
    },
    {
      id: 'en',
      label: 'en',
      callback: () => {
        Cookie.set('lang', 'en');
        props.updateLang('en');
        // window.location.reload();
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateLang: (lang) => dispatch(updateLang(lang)),
  }
};

export default injectIntl(connect(null, mapDispatchToProps)(LangMenu));


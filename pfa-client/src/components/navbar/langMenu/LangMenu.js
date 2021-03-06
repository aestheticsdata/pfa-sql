import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';

import Dropdown from '@components/common/dropdown/Dropdown';
import LangMenuContent from './LangMenuContent';
import StyledLangMenu from './StyledLangMenu';
import messages from './messages';

import { updateLang } from './actions';


const LangMenu = () => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const listItems = [
    {
      id: 'fr',
      label: 'fr',
      callback: () => {
        Cookie.set('lang', 'fr');
        dispatch(updateLang('fr'));
      },
    },
    {
      id: 'en',
      label: 'en',
      callback: () => {
        Cookie.set('lang', 'en');
        dispatch(updateLang('en'));
      },
    }
  ];

  return (
    <StyledLangMenu>
      <Dropdown>
        <span>{intl.formatMessage({ ...messages.languageLabel })}</span>
        <LangMenuContent
          listItems={listItems}
        />
      </Dropdown>
    </StyledLangMenu>
  )
};


export default LangMenu;


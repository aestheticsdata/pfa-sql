import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createIntl, createIntlCache, IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';
import translations from './i18n/locales';


const locale = Cookie.get('lang') || navigator.language.split('-')[0];

const messages = translations[locale];

// needed in sagas ////////////////
const cache = createIntlCache();
const intl = createIntl({
  locale,
  messages,
}, cache);
// ////////////////////////////////

ReactDOM.render(
  <IntlProvider
    locale={locale}
    defaultLocale="en-US"
    key={'fr-FR'}
    messages={messages}
  >
    <App />
  </IntlProvider>
  ,
  document.getElementById('root')
);

export { intl };


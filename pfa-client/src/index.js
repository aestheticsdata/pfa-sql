import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import translations from './i18n/locales';
import * as serviceWorker from './serviceWorker';


// const locale = navigator.language.split('-')[0];
const locale = 'fr';

const messages = translations[locale];
console.log('messages : ', messages);

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

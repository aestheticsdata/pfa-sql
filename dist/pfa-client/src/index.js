"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intl = void 0;
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var react_intl_1 = require("react-intl");
var js_cookie_1 = __importDefault(require("js-cookie"));
var locales_1 = __importDefault(require("./i18n/locales"));
var locale = js_cookie_1.default.get('lang') || navigator.language.split('-')[0];
var messages = locales_1.default[locale];
// needed in sagas ////////////////
var cache = react_intl_1.createIntlCache();
var intl = react_intl_1.createIntl({
    locale: locale,
    messages: messages,
}, cache);
exports.intl = intl;
// ////////////////////////////////
react_dom_1.default.render(<react_intl_1.IntlProvider locale={locale} defaultLocale="en-US" key={'fr-FR'} messages={messages}>
    <App_1.default />
  </react_intl_1.IntlProvider>, document.getElementById('root'));

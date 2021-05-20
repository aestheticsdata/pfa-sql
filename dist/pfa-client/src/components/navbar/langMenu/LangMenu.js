"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var react_redux_1 = require("react-redux");
var js_cookie_1 = __importDefault(require("js-cookie"));
var Dropdown_1 = __importDefault(require("@components/common/dropdown/Dropdown"));
var LangMenuContent_1 = __importDefault(require("./LangMenuContent"));
var StyledLangMenu_1 = __importDefault(require("./StyledLangMenu"));
var messages_1 = __importDefault(require("./messages"));
var actions_1 = require("./actions");
var LangMenu = function () {
    var intl = react_intl_1.useIntl();
    var dispatch = react_redux_1.useDispatch();
    var listItems = [
        {
            id: 'fr',
            label: 'fr',
            callback: function () {
                js_cookie_1.default.set('lang', 'fr');
                dispatch(actions_1.updateLang('fr'));
            },
        },
        {
            id: 'en',
            label: 'en',
            callback: function () {
                js_cookie_1.default.set('lang', 'en');
                dispatch(actions_1.updateLang('en'));
            },
        }
    ];
    return (<StyledLangMenu_1.default>
      <Dropdown_1.default>
        <span>{intl.formatMessage(__assign({}, messages_1.default.languageLabel))}</span>
        <LangMenuContent_1.default listItems={listItems}/>
      </Dropdown_1.default>
    </StyledLangMenu_1.default>);
};
exports.default = LangMenu;

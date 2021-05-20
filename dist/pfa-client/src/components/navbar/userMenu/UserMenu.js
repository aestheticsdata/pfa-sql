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
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Dropdown_1 = __importDefault(require("@components/common/dropdown/Dropdown"));
var UserMenuContent_1 = __importDefault(require("./UserMenuContent"));
var StyledUserMenu_1 = __importDefault(require("./StyledUserMenu"));
var history_1 = require("@src/history");
var messages_1 = __importDefault(require("./messages"));
var UserMenu = function () {
    var intl = react_intl_1.useIntl();
    var user = react_redux_1.useSelector(function (state) { return state.loginReducer.user; });
    var listItems = [
        {
            id: 'changepassword',
            label: intl.formatMessage(__assign({}, messages_1.default.changePassword)),
            icon: free_solid_svg_icons_1.faKey,
            callback: function () { return history_1.history.push('/changepassword'); },
        },
        {
            id: 'logout',
            label: intl.formatMessage(__assign({}, messages_1.default.logout)),
            icon: free_solid_svg_icons_1.faSignOutAlt,
            callback: function () { return history_1.history.push('/logout'); },
        },
    ];
    return (<StyledUserMenu_1.default>
      <Dropdown_1.default>
        <span className="email">{user.email}</span>
        <UserMenuContent_1.default listItems={listItems}/>
      </Dropdown_1.default>
    </StyledUserMenu_1.default>);
};
exports.default = UserMenu;

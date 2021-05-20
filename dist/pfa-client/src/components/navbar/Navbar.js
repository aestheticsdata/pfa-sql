"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var react_intl_1 = require("react-intl");
var currency_symbol_map_1 = __importDefault(require("currency-symbol-map"));
var DatePickerWrapper_1 = __importDefault(require("../datePickerWrapper/DatePickerWrapper"));
var money_svgrepo_com_svg_1 = require("./money-svgrepo-com.svg");
var StyledNavBar_1 = __importDefault(require("./StyledNavBar"));
var messages_1 = __importDefault(require("./messages"));
var UserMenu_1 = __importDefault(require("./userMenu/UserMenu"));
var LangMenu_1 = __importDefault(require("./langMenu/LangMenu"));
var globalContext_1 = __importDefault(require("@src/globalContext"));
var react_1 = require("react");
var NavBar = function () {
    var user = JSON.parse(localStorage.getItem('pfa-user'));
    var token = react_redux_1.useSelector(function (state) { return state.loginReducer.token; });
    var context = react_1.useContext(globalContext_1.default).context;
    return (<StyledNavBar_1.default>
      <div className="logo">
        <money_svgrepo_com_svg_1.ReactComponent />
      </div>
      {token ?
            <>
            <div className="flex-container">
              <div className="nav-link-container">
                <react_router_dom_1.NavLink to='/' className="link" exact>
                  <react_intl_1.FormattedMessage {...messages_1.default.spendings}/>
                </react_router_dom_1.NavLink>
                <react_router_dom_1.NavLink to='/categories' className="link" exact>
                  <react_intl_1.FormattedMessage {...messages_1.default.categories}/>
                </react_router_dom_1.NavLink>
                <react_router_dom_1.NavLink to='/stats' className="link" exact>
                  <react_intl_1.FormattedMessage {...messages_1.default.stats}/>
                </react_router_dom_1.NavLink>
              </div>
              {context.displayDatePicker ?
                    <div className="date-picker-wrapper">
                    <DatePickerWrapper_1.default />
                  </div>
                    :
                        null}
            </div>
            <UserMenu_1.default className="usermenu" user={user}/>
            <LangMenu_1.default className="langmenu"/>
            <div className="base-currency">
              <react_intl_1.FormattedMessage {...messages_1.default.globalCurrency}/> :
              <span className="symbol">{currency_symbol_map_1.default(user.baseCurrency)}</span>
            </div>
          </>
            :
                <>
            <react_router_dom_1.NavLink to='/login' className="link" exact>
              <react_intl_1.FormattedMessage {...messages_1.default.login}/>
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink to='/register' className="link" exact>
              <react_intl_1.FormattedMessage {...messages_1.default.signUp}/>
            </react_router_dom_1.NavLink>
          </>}
    </StyledNavBar_1.default>);
};
exports.default = NavBar;

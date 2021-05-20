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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var react_router_dom_1 = require("react-router-dom");
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("./messages"));
var actions_1 = require("./actions");
var SharedLoginForm_1 = __importDefault(require("../shared/sharedLoginForm/SharedLoginForm"));
var StyledLogin_1 = __importDefault(require("./StyledLogin"));
var StyledSharedLoginContainer_1 = __importDefault(require("../shared/sharedLoginContainer/StyledSharedLoginContainer"));
var Login = function (_a) {
    var history = _a.history;
    var dispatch = react_redux_1.useDispatch();
    var onSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        dispatch(actions_1.login(values.email, values.password));
        setSubmitting(false);
    };
    var token = react_redux_1.useSelector(function (state) { return state.loginReducer.token; });
    var loginErrorMessage = react_redux_1.useSelector(function (state) { return state.loginReducer.errorMessage; });
    var intl = react_intl_1.useIntl();
    react_1.useEffect(function () {
        if (localStorage.getItem('pfa-token')) {
            history.push('/');
        }
    }, [token]);
    react_1.useEffect(function () {
        if (loginErrorMessage !== '') {
            sweetalert2_1.default.fire({
                title: intl.formatMessage(__assign({}, messages_1.default.loginError)),
                text: loginErrorMessage,
                type: 'error',
                confirmButtonText: 'close',
                willClose: function () {
                    dispatch(actions_1.clearLoginFailed());
                }
            });
        }
    }, [loginErrorMessage]);
    return (<>
      {token ?
            null
            :
                <StyledLogin_1.default>
            <StyledSharedLoginContainer_1.default>
              <SharedLoginForm_1.default onSubmit={onSubmit} buttonTitle={intl.formatMessage(__assign({}, messages_1.default.buttonLabel))} displayEmailField displayPasswordField/>
              <div className="pwd-forgot">
                <react_router_dom_1.NavLink to="/forgotpassword">
                  <react_intl_1.FormattedMessage {...messages_1.default.forgotPassword}/>
                </react_router_dom_1.NavLink>
              </div>
            </StyledSharedLoginContainer_1.default>
          </StyledLogin_1.default>}
    </>);
};
exports.default = Login;

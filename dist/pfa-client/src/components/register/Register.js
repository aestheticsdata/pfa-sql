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
var react_intl_1 = require("react-intl");
var actions_1 = require("./actions");
var StyledRegister_1 = __importDefault(require("./StyledRegister"));
var SharedLoginForm_1 = __importDefault(require("@components/shared/sharedLoginForm/SharedLoginForm"));
var StyledSharedLoginContainer_1 = __importDefault(require("@components/shared/sharedLoginContainer/StyledSharedLoginContainer"));
var messages_1 = __importDefault(require("./messages"));
var Register = function (_a) {
    var history = _a.history;
    var dispatch = react_redux_1.useDispatch();
    var intl = react_intl_1.useIntl();
    var token = react_redux_1.useSelector(function (state) { return state.loginReducer.token; });
    var registerFailed = react_redux_1.useSelector(function (state) { return state.registerReducer.failed; });
    var registerErrorMessage = react_redux_1.useSelector(function (state) { return state.registerReducer.errorMessage; });
    var onSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        dispatch(actions_1.register(values.email, values.password, values.currency));
        setSubmitting(false);
    };
    react_1.useEffect(function () {
        if (localStorage.getItem('pfa-token')) {
            history.push('/');
        }
    }, [token]);
    react_1.useEffect(function () {
        if (registerFailed) {
            sweetalert2_1.default.fire({
                title: 'Error',
                text: registerErrorMessage,
                type: 'error',
                confirmButtonText: 'close',
                onClose: function () {
                    dispatch(actions_1.clearRegisterFailed());
                }
            });
        }
    }, [registerFailed]);
    return (<StyledRegister_1.default>
      <StyledSharedLoginContainer_1.default>
        <SharedLoginForm_1.default onSubmit={onSubmit} buttonTitle={intl.formatMessage(__assign({}, messages_1.default.buttonLabel))} displayEmailField displayPasswordField displayCurrencyField/>
      </StyledSharedLoginContainer_1.default>
    </StyledRegister_1.default>);
};
exports.default = Register;

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
var react_redux_1 = require("react-redux");
var react_intl_1 = require("react-intl");
var actions_1 = require("./actions");
var SharedLoginForm_1 = __importDefault(require("@components/shared/sharedLoginForm/SharedLoginForm"));
var StyledChangePassword_1 = __importDefault(require("./StyledChangePassword"));
var StyledSharedLoginContainer_1 = __importDefault(require("@components/shared/sharedLoginContainer/StyledSharedLoginContainer"));
var messages_1 = __importDefault(require("./messages"));
var ChangePassword = function () {
    var user = JSON.parse(localStorage.getItem('pfa-user'));
    var dispatch = react_redux_1.useDispatch();
    var intl = react_intl_1.useIntl();
    var onSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting, resetForm = _a.resetForm;
        dispatch(actions_1.changePassword(user.email, values.password));
        resetForm({ password: '' });
        setSubmitting(false);
    };
    return (<StyledChangePassword_1.default>
      <StyledSharedLoginContainer_1.default>
        <SharedLoginForm_1.default onSubmit={onSubmit} buttonTitle={intl.formatMessage(__assign({}, messages_1.default.buttonLabel))} displayPasswordField/>
      </StyledSharedLoginContainer_1.default>
    </StyledChangePassword_1.default>);
};
exports.default = ChangePassword;

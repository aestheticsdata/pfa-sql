"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_intl_1 = require("react-intl");
var actions_1 = require("./actions");
var messages_1 = __importDefault(require("./messages"));
var SharedLoginForm_1 = __importDefault(require("../shared/sharedLoginForm/SharedLoginForm"));
var StyledForgotPassword_1 = __importDefault(require("./StyledForgotPassword"));
var StyledSharedLoginContainer_1 = __importDefault(require("../shared/sharedLoginContainer/StyledSharedLoginContainer"));
var ForgotPassword = /** @class */ (function (_super) {
    __extends(ForgotPassword, _super);
    function ForgotPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSubmit = function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            _this.props.resetPassword(values.email);
            setSubmitting(false);
        };
        return _this;
    }
    ForgotPassword.prototype.render = function () {
        return (<StyledForgotPassword_1.default>
        <StyledSharedLoginContainer_1.default>
          <SharedLoginForm_1.default onSubmit={this.onSubmit} buttonTitle={this.props.intl.formatMessage(__assign({}, messages_1.default.buttonLabel))} displayEmailField/>
        </StyledSharedLoginContainer_1.default>
      </StyledForgotPassword_1.default>);
    };
    return ForgotPassword;
}(react_1.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        resetPassword: function (email) { return dispatch(actions_1.resetPassword(email)); },
    };
};
exports.default = react_intl_1.injectIntl(react_redux_1.connect(null, mapDispatchToProps)(ForgotPassword));

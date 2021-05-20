"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var scope = 'app.components.ForgotPassword';
exports.default = react_intl_1.defineMessages({
    buttonLabel: {
        id: scope + ".resetPasswordButtonLabel",
        defaultMessage: 'Reset password',
    },
    emailSentSuccessTitle: {
        id: scope + ".emailSentSuccessTitle",
        defaultMessage: 'Success',
    },
    emailSentSuccessMessage: {
        id: scope + ".emailSentSuccessMessage",
        defaultMessage: 'A recovery password has been sent to your email',
    },
    emailSentErrorTitle: {
        id: scope + ".emailSentErrorTitle",
        defaultMessage: 'Recovery password error',
    },
    emailSubject: {
        id: scope + ".emailSubject",
        defaultMessage: 'password recovery from PFA',
    },
});

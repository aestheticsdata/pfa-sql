"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var scope = 'app.components.Login';
exports.default = react_intl_1.defineMessages({
    buttonLabel: {
        id: scope + ".buttonLabel",
        defaultMessage: 'Login',
    },
    forgotPassword: {
        id: scope + ".forgotPassword",
        defaultMessage: 'Forgot password ?',
    },
    loginError: {
        id: scope + ".loginError",
        defaultMessage: 'Error while login',
    }
});

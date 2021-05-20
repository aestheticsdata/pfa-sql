"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var scope = 'app.helpers.requestHelper';
exports.default = react_intl_1.defineMessages({
    expiredToken: {
        id: scope + ".expiredToken",
        defaultMessage: 'Session has expired',
    },
    text: {
        id: scope + ".text",
        defaultMessage: 'You will be redirected to login',
    },
});

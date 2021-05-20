"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLoginFailed = exports.loginError = exports.loginSucess = exports.login = void 0;
var constants_1 = require("./constants");
var login = function (email, password) {
    return {
        type: constants_1.LOGIN,
        email: email,
        password: password,
    };
};
exports.login = login;
var loginSucess = function (payload) {
    return {
        type: constants_1.LOGIN_SUCCESS,
        payload: payload,
    };
};
exports.loginSucess = loginSucess;
var loginError = function (errorMessage) {
    return {
        type: constants_1.LOGIN_ERROR,
        errorMessage: errorMessage,
    };
};
exports.loginError = loginError;
var clearLoginFailed = function () {
    return {
        type: constants_1.CLEAR_LOGIN_ERROR,
    };
};
exports.clearLoginFailed = clearLoginFailed;

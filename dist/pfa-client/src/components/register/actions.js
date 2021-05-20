"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearRegisterFailed = exports.registerFail = exports.registerSuccess = exports.register = void 0;
var constants_1 = require("./constants");
function register(email, password, currency) {
    return {
        type: constants_1.REGISTER,
        email: email,
        password: password,
        currency: currency,
    };
}
exports.register = register;
function registerSuccess(payload) {
    return {
        type: constants_1.REGISTER_SUCCESS,
        payload: payload,
    };
}
exports.registerSuccess = registerSuccess;
function registerFail(error) {
    return {
        type: constants_1.REGISTER_FAIL,
        error: error,
    };
}
exports.registerFail = registerFail;
function clearRegisterFailed() {
    return {
        type: constants_1.CLEAR_REGISTER_FAILED,
    };
}
exports.clearRegisterFailed = clearRegisterFailed;

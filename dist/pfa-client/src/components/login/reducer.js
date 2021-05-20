"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var js_cookie_1 = __importDefault(require("js-cookie"));
var constants_1 = require("../register/constants");
var constants_2 = require("./constants");
var constants_3 = require("../logout/constants");
var constants_4 = require("../navbar/userMenu/constants");
var getInitialState = function () {
    var pfaToken = localStorage.getItem('pfa-token');
    return {
        isAuthenticated: !!pfaToken || false,
        token: pfaToken,
        user: JSON.parse(localStorage.getItem('pfa-user')),
        errorMessage: ''
    };
};
var loginReducer = function (state, action) {
    if (state === void 0) { state = getInitialState(); }
    return immer_1.default(state, function (draft) {
        switch (action.type) {
            case constants_1.REGISTER_SUCCESS:
            case constants_2.LOGIN_SUCCESS:
                localStorage.setItem('pfa-token', action.payload.data.token);
                localStorage.setItem('pfa-user', JSON.stringify(action.payload.data.user));
                !js_cookie_1.default.get('lang') && js_cookie_1.default.set('lang', action.payload.data.user.language);
                draft.isAuthenticated = true;
                draft.token = action.payload.data.token;
                draft.user = action.payload.data.user;
                break;
            case constants_4.CHANGE_BASE_CURRENCY_SUCCESS:
                localStorage.setItem('pfa-user', JSON.stringify(action.user));
                draft.user = action.user;
                break;
            case constants_3.LOG_OUT:
                localStorage.removeItem('pfa-token');
                localStorage.removeItem('pfa-user');
                draft.isAuthenticated = false;
                draft.token = null;
                break;
            case constants_2.LOGIN_ERROR:
                draft.errorMessage = action.errorMessage;
                break;
            case constants_2.CLEAR_LOGIN_ERROR:
                draft.errorMessage = '';
                break;
            default:
                return state;
        }
    });
};
exports.default = loginReducer;

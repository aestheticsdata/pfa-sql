"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var constants_1 = require("./constants");
var initialState = {
    failed: false,
    errorMessage: '',
    success: false,
};
var registerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return immer_1.default(state, function (draft) {
        switch (action.type) {
            case constants_1.REGISTER_SUCCESS:
                draft.success = true;
                break;
            case constants_1.REGISTER_FAIL:
                draft.failed = true;
                draft.errorMessage = action.error;
                break;
            case constants_1.CLEAR_REGISTER_FAILED:
                draft.failed = false;
                draft.errorMessage = '';
                break;
            default:
                return state;
        }
    });
};
exports.default = registerReducer;

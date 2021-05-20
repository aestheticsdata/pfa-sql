"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var constants_1 = require("@components/categories/constants");
var initialState = {
    failed: false,
    errorMessage: '',
    ID: null,
};
var categoriesReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return immer_1.default(state, function (draft) {
        if (action.type === constants_1.UPDATE_CATEGORY_ERROR) {
            draft.failed = true;
            draft.errorMessage = action.error;
            draft.ID = action.error.errors[0].instance.ID;
        }
        else {
            return state;
        }
    });
};
exports.default = categoriesReducer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategoryError = exports.updateCategory = void 0;
var constants_1 = require("@components/categories/constants");
var updateCategory = function (category) {
    return {
        type: constants_1.UPDATE_CATEGORY,
        category: category,
    };
};
exports.updateCategory = updateCategory;
var updateCategoryError = function (error) {
    return {
        type: constants_1.UPDATE_CATEGORY_ERROR,
        error: error,
    };
};
exports.updateCategoryError = updateCategoryError;
var deleteCategory = function (category) {
    return {
        type: constants_1.DELETE_CATEGORY,
        category: category,
    };
};
exports.deleteCategory = deleteCategory;

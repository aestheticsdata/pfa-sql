"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSpendingDayItem = function () {
    var _a = react_1.useState(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var _b = react_1.useState(true), addSpendingEnabled = _b[0], setAddSpendingEnabled = _b[1];
    var _c = react_1.useState({}), spending = _c[0], setSpending = _c[1];
    var _d = react_1.useState(false), isEditing = _d[0], setIsEditing = _d[1];
    var addSpending = function () {
        setIsModalVisible(true);
        setAddSpendingEnabled(false);
    };
    var closeModal = function () {
        setIsModalVisible(false);
        setAddSpendingEnabled(true);
        setSpending({});
        setIsEditing(false);
    };
    var toggleAddSpending = function () {
        setAddSpendingEnabled(!addSpendingEnabled);
    };
    var editSpending = function (spending) {
        setIsEditing(true);
        setIsModalVisible(true);
        setAddSpendingEnabled(false);
        setSpending(spending);
    };
    return {
        isModalVisible: isModalVisible,
        addSpendingEnabled: addSpendingEnabled,
        spending: spending,
        isEditing: isEditing,
        addSpending: addSpending,
        closeModal: closeModal,
        toggleAddSpending: toggleAddSpending,
        editSpending: editSpending,
    };
};
exports.default = useSpendingDayItem;

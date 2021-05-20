"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var Wedges_3s_200px_svg_1 = require("@src/assets/Wedges-3s-200px.svg");
var SpendingItem_1 = __importDefault(require("@components/spendings/spendingDayItem/spendingItem/SpendingItem"));
var SpendingListContainer = function (_a) {
    var spendingsByDaySorted = _a.spendingsByDaySorted, deleteSpending = _a.deleteSpending, toggleAddSpending = _a.toggleAddSpending, editSpending = _a.editSpending, isLoading = _a.isLoading, recurringType = _a.recurringType;
    return (<div className={(recurringType ? 'recurrings' : 'spendings') + "-list-container"}>
    {spendingsByDaySorted ?
            isLoading ?
                <div className="spinner">
            <Wedges_3s_200px_svg_1.ReactComponent width="60px" height="60px"/>
          </div>
                :
                    // spendingsByDay.map((spending: SpendingType) => {
                    spendingsByDaySorted.map(function (spending) { return (<SpendingItem_1.default key={spending.ID} spending={spending} editCallback={editSpending} deleteCallback={deleteSpending} toggleAddSpending={toggleAddSpending}/>); })
            :
                null}
  </div>);
};
exports.default = SpendingListContainer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StyledSpendingSort_1 = __importDefault(require("@components/spendings/spendingSort/StyledSpendingSort"));
var SpendingSortItem_1 = __importDefault(require("@components/spendings/spendingSort/SpendingSortItem"));
var SpendingSort = function (_a) {
    var recurringType = _a.recurringType, onClickSort = _a.onClickSort;
    return (<StyledSpendingSort_1.default>
      <div className="spending-sort-container">
        <SpendingSortItem_1.default name="label" onClickSort={onClickSort}/>
        {!recurringType && (<SpendingSortItem_1.default name="category" onClickSort={onClickSort}/>)}
        <SpendingSortItem_1.default name="amount" onClickSort={onClickSort}/>
      </div>
    </StyledSpendingSort_1.default>);
};
exports.default = SpendingSort;

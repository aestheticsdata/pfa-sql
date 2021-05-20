"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var format_1 = __importDefault(require("date-fns/format"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var StyledSpendingDayItem_1 = __importDefault(require("./StyledSpendingDayItem"));
var getDayOfYear_1 = __importDefault(require("date-fns/getDayOfYear"));
var react_intl_1 = require("react-intl");
var lodash_1 = __importDefault(require("lodash"));
var messages_1 = __importDefault(require("../messages"));
var SpendingModal_1 = __importDefault(require("./spendingModal/SpendingModal"));
var lang_1 = require("@helpers/lang");
var SpendingListContainer_1 = __importDefault(require("./spendingModal/SpendingListContainer"));
var useSpendingDayItem_1 = __importDefault(require("@components/spendings/spendingDayItem/spendingItem/helpers/useSpendingDayItem"));
var SpendingSort_1 = __importDefault(require("@components/spendings/spendingSort/SpendingSort"));
var useClickSort_1 = __importDefault(require("@components/spendings/helpers/useClickSort"));
var SpendingDayItem = function (_a) {
    var spendingsByDay = _a.spendingsByDay, deleteSpending = _a.deleteSpending, user = _a.user, _b = _a.month, month = _b === void 0 ? null : _b, _c = _a.date, date = _c === void 0 ? 0 : _c, _d = _a.recurringType, recurringType = _d === void 0 ? false : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e;
    var lang = react_1.useState(lang_1.getLang())[0];
    var _f = useClickSort_1.default(), onClickSort = _f.onClickSort, spendingsByDaySorted = _f.spendingsByDaySorted, setSpendingsByDaySorted = _f.setSpendingsByDaySorted;
    react_1.useEffect(function () {
        setSpendingsByDaySorted(spendingsByDay);
    }, [spendingsByDay]);
    var getRecurringsTotal = function (recurrings) { return lodash_1.default.sumBy(recurrings, function (item) { return parseFloat(item.amount); }); };
    var _g = useSpendingDayItem_1.default(), isModalVisible = _g.isModalVisible, addSpendingEnabled = _g.addSpendingEnabled, spending = _g.spending, isEditing = _g.isEditing, addSpending = _g.addSpending, closeModal = _g.closeModal, toggleAddSpending = _g.toggleAddSpending, editSpending = _g.editSpending;
    var isToday = getDayOfYear_1.default(date) === getDayOfYear_1.default(Date.now());
    return (<>
      {date || recurringType ?
            <StyledSpendingDayItem_1.default recurringType={recurringType} className={"" + (isToday && 'today-border')}>
            <div>
              <div className="spending-modal">
                {isModalVisible ?
                    <SpendingModal_1.default date={date} closeModal={closeModal} user={user} spending={spending} recurringType={recurringType} isEditing={isEditing} month={month}/>
                    :
                        null}
              </div>
              <div className="header">
                {!recurringType ?
                    <div className={"date " + (isToday && 'today')}>
                      {date ?
                            <div>{format_1.default(date, lang_1.locales[lang].formatString, { locale: lang_1.locales[lang][lang] })}</div>
                            :
                                null}
                    </div>
                    :
                        <div className="recurrings">
                      <react_intl_1.FormattedMessage {...messages_1.default.recurrings}/>
                    </div>}
                {addSpendingEnabled ?
                    <div className="add-spending" onClick={addSpending}>
                      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faPlusSquare}/>
                    </div>
                    :
                        <div className="add-spending disabled">
                      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faPlusSquare}/>
                    </div>}
              </div>
              <div className="total">
                {spendingsByDaySorted ?
                    <>
                      <span className="total-label">Total</span>
                      {<span className="total-amount">
                          {!recurringType ?
                                <react_intl_1.FormattedNumber value={spendingsByDaySorted.total} style="currency" currency={user.baseCurrency}/>
                                :
                                    <react_intl_1.FormattedNumber value={getRecurringsTotal(spendingsByDaySorted)} style="currency" currency={user.baseCurrency}/>}
                        </span>}
                    </>
                    :
                        null}
              </div>
              <SpendingSort_1.default recurringType={recurringType} onClickSort={onClickSort}/>
              {SpendingListContainer_1.default({
                    spendingsByDaySorted: spendingsByDaySorted,
                    deleteSpending: deleteSpending,
                    toggleAddSpending: toggleAddSpending,
                    editSpending: editSpending,
                    isLoading: isLoading,
                    recurringType: recurringType
                })}
            </div>
          </StyledSpendingDayItem_1.default>
            :
                null}
    </>);
};
exports.default = SpendingDayItem;

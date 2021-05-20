"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var StyledSpendingItem_1 = __importDefault(require("./StyledSpendingItem"));
var InvoiceModal_1 = __importDefault(require("@components/spendings/invoiceModal/InvoiceModal"));
var Category_1 = __importDefault(require("@components/common/Category"));
var messages_1 = __importDefault(require("../../messages"));
var SpendingItem = function (_a) {
    var spending = _a.spending, editCallback = _a.editCallback, deleteCallback = _a.deleteCallback, toggleAddSpending = _a.toggleAddSpending;
    var _b = react_1.useState(false), hover = _b[0], setHover = _b[1];
    var _c = react_1.useState(false), isDeleteConfirmVisible = _c[0], setIsDeleteConfirmVisible = _c[1];
    var _d = react_1.useState(false), isInvoiceModalVisible = _d[0], setIsInvoiceModalVisible = _d[1];
    var onMouseOver = function () { setHover(true); };
    var onMouseLeave = function () { setHover(false); };
    var openEditModal = function () { return editCallback(spending); };
    var hideConfirm = function () {
        toggleAddSpending();
        setIsDeleteConfirmVisible(false);
    };
    var confirmDeletePopin = function (item, deleteCallback) {
        return (<div className="confirm-delete-popin">
        <span className="title">
          <react_intl_1.FormattedMessage {...messages_1.default.confirmDeleteTitle}/>
        </span>
        <div className="button-container">
          <button className="cancel-button" onClick={function () { return hideConfirm(); }}>
            <react_intl_1.FormattedMessage {...messages_1.default.confirmDeleteCancelButton}/>
          </button>
          <button className="confirm-button" onClick={function () {
                hideConfirm();
                deleteCallback(item.ID, item.itemType);
            }}>
            <react_intl_1.FormattedMessage {...messages_1.default.confirmDeleteConfirmButton}/>
          </button>
        </div>
      </div>);
    };
    return (<StyledSpendingItem_1.default>
      <div className="spending-item-container" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {isInvoiceModalVisible ?
            <InvoiceModal_1.default handleClickOutside={function () { setHover(false); setIsInvoiceModalVisible(!isInvoiceModalVisible); }} spending={spending}/>
            :
                null}
        {!isDeleteConfirmVisible ?
            <div className="spending">
              <span className="label" title={spending.label}>{spending.label}</span>
              {(spending === null || spending === void 0 ? void 0 : spending.category) && Category_1.default(spending)}
              {hover ?
                    <>
                    <span className={"invoice action " + (spending.invoicefile && 'isPresent')} title="display invoice" onClick={function () { setIsInvoiceModalVisible(!isInvoiceModalVisible); }}>
                      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faFileInvoice}/>
                    </span>
                    <span className="edit action" title="edit" onClick={function () { return openEditModal(); }}>
                      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faPencilAlt}/>
                    </span>
                    <span className="delete action" title="delete" onClick={function () {
                            toggleAddSpending();
                            setIsDeleteConfirmVisible(true);
                        }}>
                      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTrashAlt}/>
                    </span>
                  </>
                    :
                        null}
              <span className="amount">
                  {/* eslint-disable  react/style-prop-object */}
                <react_intl_1.FormattedNumber value={spending.amount} style="currency" currency={spending.currency}/>
                </span>
            </div>
            :
                confirmDeletePopin(spending, deleteCallback)}
      </div>
    </StyledSpendingItem_1.default>);
};
exports.default = SpendingItem;

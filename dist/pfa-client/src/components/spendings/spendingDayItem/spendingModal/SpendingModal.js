"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var format_1 = __importDefault(require("date-fns/format"));
var react_intl_1 = require("react-intl");
var formik_1 = require("formik");
var formik_material_ui_lab_1 = require("formik-material-ui-lab");
var core_1 = require("@material-ui/core");
var actions_1 = require("../../actions");
var messages_1 = __importDefault(require("../../messages"));
var StyledSpendingModal_1 = __importDefault(require("./StyledSpendingModal"));
var SpendingModal = function (_a) {
    var date = _a.date, closeModal = _a.closeModal, user = _a.user, spending = _a.spending, recurringType = _a.recurringType, isEditing = _a.isEditing, month = _a.month;
    var initialEmptyCategoryState = {
        ID: null,
        userID: null,
        name: "",
        color: null
    };
    var intl = react_intl_1.useIntl();
    var initialCategoryState = (spending === null || spending === void 0 ? void 0 : spending.category) ?
        {
            ID: spending.categoryID,
            userID: user.id,
            name: spending.category,
            color: spending.color,
        }
        :
            initialEmptyCategoryState;
    var _b = react_1.useState(initialCategoryState), selectedCategory = _b[0], setselectedCategory = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var categories = react_redux_1.useSelector(function (state) { return state.spendingsReducer.categories; });
    var recurrings = react_redux_1.useSelector(function (state) { return state.spendingsReducer.recurrings; });
    var getRandomHexColor = function () {
        var r = Math.floor(Math.random() * 255).toString(16);
        var g = Math.floor(Math.random() * 255).toString(16);
        var b = Math.floor(Math.random() * 255).toString(16);
        r = r.length < 2 ? '0' + r : r;
        g = g.length < 2 ? '0' + g : g;
        b = b.length < 2 ? '0' + b : b;
        return r + g + b;
    };
    var onSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        var spendingEdited = {
            // this format date is required to avoid inconsistency
            // when axios convert date in POST request
            // see https://github.com/axios/axios/issues/567
            date: date ? format_1.default(date, 'yyyy-MM-dd') : null,
            // ///////////////////////////////////////////////////
            label: values.label,
            amount: values.amount,
            category: selectedCategory,
            currency: user.baseCurrency,
            userID: user.id,
            id: spending.ID,
        };
        if (isEditing) {
            if (recurringType) {
                dispatch(actions_1.updateRecurring(spendingEdited));
            }
            else {
                dispatch(actions_1.updateSpending(spendingEdited));
            }
        }
        else {
            if (recurringType) {
                var formattedMonth = {
                    start: format_1.default(month.start, 'yyyy-MM-dd'),
                    end: format_1.default(month.end, 'yyyy-MM-dd'),
                };
                dispatch(actions_1.createRecurring(spendingEdited, formattedMonth));
            }
            else {
                dispatch(actions_1.createSpending(spendingEdited));
            }
        }
        closeModal();
        setSubmitting(false);
    };
    var handleAutocompleteChange = function (value) {
        setselectedCategory(value !== null && value !== void 0 ? value : initialEmptyCategoryState);
    };
    return (<StyledSpendingModal_1.default recurringType={recurringType}>
      <div className="spending-modal-container">
        <formik_1.Formik initialValues={{
            label: spending.label || '',
            amount: spending.amount || '',
            category: spending.category || '',
        }} onSubmit={onSubmit}>
          {function (_a) {
            var isSubmitting = _a.isSubmitting, errors = _a.errors;
            return (<formik_1.Form>
              <formik_1.Field type="text" name="label" placeholder={intl.formatMessage(messages_1.default.editModalSpendingLabelPlaceholder)}/>
              <formik_1.Field type="number" name="amount" placeholder={intl.formatMessage(messages_1.default.editModalSpendingAmountPlaceholder)}/>
              {!recurringType ?
                    // see https://stackoverflow.com/a/63422513/2466369 for Formik with material-ui autocomplete
                    // https://stackworx.github.io/formik-material-ui/docs/api/material-ui-lab
                    // https://material-ui.com/api/autocomplete/
                    <formik_1.Field name="autocomplete" value={selectedCategory} component={formik_material_ui_lab_1.Autocomplete} autoComplete={true} options={categories} getOptionLabel={function (option) { return option.name; }} style={{ width: '100%' }} getOptionSelected={function (item, current) { return item.value === current.value; }} onBlur={function (event) {
                            if ((selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.ID) === null) { // so it's a new category
                                handleAutocompleteChange({
                                    ID: null,
                                    userID: user.id,
                                    name: event.target.value,
                                    color: event.target.value !== '' && "#" + getRandomHexColor() // if there is a name, it's a new category, else it's a category deletion
                                });
                            }
                        }} onChange={function (_, value) { handleAutocompleteChange(value); }} noOptionsText="create category" renderInput={function (params) { return (<core_1.TextField {...params} label={intl.formatMessage(messages_1.default.editModalSpendingCategoryPlaceholder)} variant="outlined" size="small"/>); }}/>
                    :
                        null}
              {recurringType && recurrings.length === 0 && (<button type="button" className="spending-btn copy-recurrings" onClick={function () { closeModal(); dispatch(actions_1.copyRecurrings(user.id, month)); }}>
                    <react_intl_1.FormattedMessage {...messages_1.default.copyRecurringsFromLastMonth}/>
                  </button>)}
              <button type="submit" disabled={isSubmitting || errors.email || errors.password} className="spending-btn submit">
                {isEditing ?
                    <react_intl_1.FormattedMessage {...messages_1.default.editModalButton}/>
                    :
                        <react_intl_1.FormattedMessage {...messages_1.default.createModalButton}/>}
              </button>
              <button type="reset" value="Reset" className="spending-btn cancel" onClick={function () { return closeModal(); }}>
                <react_intl_1.FormattedMessage {...messages_1.default.cancelModalButton}/>
              </button>
            </formik_1.Form>);
        }}
        </formik_1.Formik>
      </div>
    </StyledSpendingModal_1.default>);
};
exports.default = SpendingModal;

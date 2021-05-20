"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StyledCategories_1 = __importDefault(require("@components/categories/StyledCategories"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Category_1 = __importDefault(require("@components/common/Category"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("@components/categories/messages"));
var messages_2 = __importDefault(require("@components/spendings/messages"));
var actions_1 = require("@components/categories/actions");
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var CategoryItem = function (_a) {
    var category = _a.category;
    var _b = react_1.useState(false), isDeleteConfirmVisible = _b[0], setIsDeleteConfirmVisible = _b[1];
    var _c = react_1.useState(false), isEditing = _c[0], setIsEditing = _c[1];
    var _d = react_1.useState(category), singleCategory = _d[0], setSingleCategory = _d[1];
    var initialCategory = __assign({}, category);
    var dispatch = react_redux_1.useDispatch();
    var updateError = react_redux_1.useSelector(function (state) { return state.categoriesReducer; });
    var updateErrorMessage = react_redux_1.useSelector(function (state) { return state.categoriesReducer.errorMessage; });
    react_1.useEffect(function () {
        if (updateErrorMessage !== '' && updateError.ID === category.ID) {
            setSingleCategory(initialCategory);
            sweetalert2_1.default.fire({
                title: 'Error',
                text: updateErrorMessage.errors[0].message,
                confirmButtonText: 'close',
            });
        }
    }, [updateError]);
    var deleteCallback = function () {
        dispatch(actions_1.deleteCategory(category));
        setIsDeleteConfirmVisible(false);
    };
    var item = {
        category: singleCategory.name,
        categoryColor: singleCategory.color,
    };
    var cancelEditing = function () {
        setIsEditing(false);
        setSingleCategory(initialCategory);
    };
    var commitEditing = function () {
        setIsEditing(false);
        dispatch(actions_1.updateCategory(singleCategory));
    };
    var confirmDeletePopin = function (item, deleteCallback) {
        return (<div className="confirm-delete-popin">
        <span className="title">
          <react_intl_1.FormattedMessage {...messages_2.default.confirmDeleteTitle}/>
        </span>
        <div className="button-container">
          <button className="cancel-button" onClick={function () { return setIsDeleteConfirmVisible(false); }}>
            <react_intl_1.FormattedMessage {...messages_2.default.confirmDeleteCancelButton}/>
          </button>
          <button className="confirm-button" onClick={function () {
                setIsDeleteConfirmVisible(false);
                deleteCallback(item.ID);
            }}>
            <react_intl_1.FormattedMessage {...messages_2.default.confirmDeleteConfirmButton}/>
          </button>
        </div>
      </div>);
    };
    var editCategoryPopin = function () {
        return (<div className="edit-category-popin">

        <input type="text" className="edit-category-popin-name" value={singleCategory.name} onChange={function (ev) { return setSingleCategory(__assign(__assign({}, singleCategory), { name: ev.target.value })); }} onKeyPress={function (keypressEvent) { keypressEvent.code === 'Enter' && commitEditing(); }}/>

        <input type="color" className="edit-category-popin-color" value={singleCategory.color} onChange={function (ev) { return setSingleCategory(__assign(__assign({}, singleCategory), { color: ev.target.value })); }}/>

        <button className="cancel-button" onClick={function () { cancelEditing(); }}>
          <react_intl_1.FormattedMessage {...messages_1.default.confirmDeleteCancelButton}/>
        </button>

        <button className="confirm-button" onClick={function () { commitEditing(); }}>
          <react_intl_1.FormattedMessage {...messages_1.default.confirmChangesCategoryButton}/>
        </button>

      </div>);
    };
    var actionsFragment = function () { return (<div className="actions">
      <span className="edit action" onClick={function () {
            setIsEditing(true);
        }}>
        <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faPencilAlt}/>
      </span>
      <span className="delete action" onClick={function () { setIsDeleteConfirmVisible(true); }}>
        <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faTrashAlt}/>
      </span>
    </div>); };
    var getCategoryContainer = function () {
        if (isDeleteConfirmVisible)
            return confirmDeletePopin(category, deleteCallback);
        if (isEditing)
            return editCategoryPopin();
        return (<div className="category-sub-container">
        <span>{Category_1.default(item)}</span>
        {actionsFragment()}
      </div>);
    };
    return (<StyledCategories_1.default>
      <div className="category-container">
        {getCategoryContainer()}
      </div>
    </StyledCategories_1.default>);
};
exports.default = CategoryItem;

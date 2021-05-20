"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Wedges_3s_200px_svg_1 = require("@src/assets/Wedges-3s-200px.svg");
var react_1 = require("react");
var globalContext_1 = __importDefault(require("@src/globalContext"));
var useSpendingsHelpers_1 = __importDefault(require("@components/spendings/helpers/useSpendingsHelpers"));
var react_redux_1 = require("react-redux");
var CategoryItem_1 = __importDefault(require("@components/categories/CategoryItem"));
var StyledCategoriesListcontainer_1 = __importDefault(require("@components/categories/StyledCategoriesListcontainer"));
var CategoriesListContainer = function () {
    var setContext = react_1.useContext(globalContext_1.default).setContext;
    var getCategories = useSpendingsHelpers_1.default().getCategories;
    var categories = react_redux_1.useSelector(function (state) { return state.spendingsReducer.categories; });
    react_1.useEffect(function () {
        setContext({ displayDatePicker: false });
        getCategories();
    }, []);
    return (<StyledCategoriesListcontainer_1.default>
      <div className="categories-list-container">
        {categories.length > 0 ?
            categories.map(function (category) { return (<CategoryItem_1.default key={category.ID} category={category}/>); })
            :
                <div className="spinner">
              <Wedges_3s_200px_svg_1.ReactComponent width="60px" height="60px"/>
            </div>}
      </div>
    </StyledCategoriesListcontainer_1.default>);
};
exports.default = CategoriesListContainer;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var connected_react_router_1 = require("connected-react-router");
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("./store"));
var history_1 = require("./history");
var global_styles_1 = __importDefault(require("./global-styles"));
var Navbar_1 = __importDefault(require("@components/navbar/Navbar"));
var Spendings_1 = __importDefault(require("@components/spendings/Spendings"));
var Stats_1 = __importDefault(require("@components/stats/Stats"));
var CategoriesListContainer_1 = __importDefault(require("@components/categories/CategoriesListContainer"));
var Login_1 = __importDefault(require("@components/login/Login"));
var Register_1 = __importDefault(require("@components/register/Register"));
var Logout_1 = __importDefault(require("@components/logout/Logout"));
var ForgotPassword_1 = __importDefault(require("@components/forgotPassword/ForgotPassword"));
var ChangePassword_1 = __importDefault(require("@components/changePassword/ChangePassword"));
var NotFoundComponent_1 = __importDefault(require("@components/notFoundComponent/NotFoundComponent"));
var PrivateRoute_1 = require("@components/privateRoute/PrivateRoute");
var globalContext_1 = __importStar(require("@src/globalContext"));
var react_1 = require("react");
var App = function () {
    var _a = react_1.useState(globalContext_1.globalContext), context = _a[0], setContext = _a[1];
    return (<globalContext_1.default.Provider value={{ context: context, setContext: setContext }}>
      <react_redux_1.Provider store={store_1.default}>
        <div className="App">
          <global_styles_1.default />
          <connected_react_router_1.ConnectedRouter history={history_1.history}>
            <Navbar_1.default />
            <react_router_dom_1.Switch>
              <PrivateRoute_1.PrivateRoute exact path="/" component={Spendings_1.default}/>
              <PrivateRoute_1.PrivateRoute exact path="/stats" component={Stats_1.default}/>
              <PrivateRoute_1.PrivateRoute exact path="/categories" component={CategoriesListContainer_1.default}/>
              <react_router_dom_1.Route exact path="/login" component={Login_1.default}/>
              <react_router_dom_1.Route exact path="/logout" component={Logout_1.default}/>
              <react_router_dom_1.Route exact path="/register" component={Register_1.default}/>
              <react_router_dom_1.Route exact path="/forgotpassword" component={ForgotPassword_1.default}/>
              <react_router_dom_1.Route exact path="/changepassword" component={ChangePassword_1.default}/>
              <react_router_dom_1.Route exact path="*" component={NotFoundComponent_1.default}/>
            </react_router_dom_1.Switch>
          </connected_react_router_1.ConnectedRouter>
        </div>
      </react_redux_1.Provider>
    </globalContext_1.default.Provider>);
};
exports.default = App;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("./actions");
var Logout = function () {
    var dispatch = react_redux_1.useDispatch();
    var token = react_redux_1.useSelector(function (state) { return state.loginReducer.token; });
    react_1.useEffect(function () {
        dispatch(actions_1.logout());
    }, []);
    react_1.useEffect(function () {
        if (!localStorage.getItem('pfa-token')) {
            dispatch(actions_1.logoutSuccess());
        }
    }, [token]);
    return null;
};
exports.default = Logout;

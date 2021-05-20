"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("./messages"));
var SpendingSortItem = function (_a) {
    var name = _a.name, onClickSort = _a.onClickSort;
    var sortName = "SORT_BY_" + name.toUpperCase();
    return (<div className={name + "-sort"} onClick={function () { return onClickSort(sortName); }}>
      <span>
        <react_intl_1.FormattedMessage {...messages_1.default[sortName]}/>
      </span>
      <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faSort} className="icon"/>
    </div>);
};
exports.default = SpendingSortItem;

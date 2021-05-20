"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var js_cookie_1 = __importDefault(require("js-cookie"));
var Content_1 = __importDefault(require("../common/Content"));
var StyledLangMenuContent_1 = __importDefault(require("./StyledLangMenuContent"));
var UserMenuContent = function (_a) {
    var listItems = _a.listItems, handleclosefromchild = _a.handleclosefromchild;
    var content = listItems && listItems.map(function (item) { return (<li key={item.id} className="dropdownitems" onClick={function () { return item.callback && item.callback(); }}>
      <span className="item-label">{item.label}</span>
      {js_cookie_1.default.get('lang') === item.id ?
            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faCheck} className="check"/>
            :
                null}
    </li>); });
    return (<Content_1.default handleclosefromchild={handleclosefromchild} ContentStyle={StyledLangMenuContent_1.default} content={content}/>);
};
exports.default = UserMenuContent;

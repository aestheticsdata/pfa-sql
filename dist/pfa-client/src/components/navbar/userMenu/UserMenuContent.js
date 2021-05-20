"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Content_1 = __importDefault(require("../common/Content"));
var StyledUserMenuContent_1 = __importDefault(require("./StyledUserMenuContent"));
var UserMenuContent = function (_a) {
    var listItems = _a.listItems, handleclosefromchild = _a.handleclosefromchild;
    var content = listItems && listItems.map(function (item) { return (<li key={item.id} className="dropdownitems" onClick={function () { return item.callback && item.callback(); }}>
      <react_fontawesome_1.FontAwesomeIcon className="icon" icon={item.icon}/>
      {item.label}
    </li>); });
    return (<Content_1.default handleclosefromchild={handleclosefromchild} ContentStyle={StyledUserMenuContent_1.default} content={content}/>);
};
exports.default = UserMenuContent;

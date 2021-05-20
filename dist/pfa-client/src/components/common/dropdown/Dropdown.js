"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var use_onclickoutside_1 = __importDefault(require("use-onclickoutside"));
var StyledDropDown_1 = __importDefault(require("./StyledDropDown"));
var DropDown = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var ref = react_1.useRef(null);
    var toggleDropdown = function () { setIsOpen(!isOpen); };
    var handleClickOutside = function () { setIsOpen(false); };
    use_onclickoutside_1.default(ref, handleClickOutside);
    var close = function () { setIsOpen(false); };
    return (<StyledDropDown_1.default ref={ref}>
      <div className="container">
        <div onClick={toggleDropdown}>
          <>
            {isOpen ?
            <react_fontawesome_1.FontAwesomeIcon className="icon" icon={free_solid_svg_icons_1.faAngleUp}/>
            :
                <react_fontawesome_1.FontAwesomeIcon className="icon" icon={free_solid_svg_icons_1.faAngleDown}/>}
          </>
          {children[0]}
        </div>
        <div>
          {isOpen ?
            react_1.cloneElement(children[1], { handleclosefromchild: function () { return close(); } })
            :
                null}
        </div>
      </div>
    </StyledDropDown_1.default>);
};
exports.default = DropDown;

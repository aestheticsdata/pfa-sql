"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_onclickoutside_1 = __importDefault(require("use-onclickoutside"));
var StyledInvoiceImageModal_1 = __importDefault(require("./StyledInvoiceImageModal"));
var InvoiceImageModal = function (_a) {
    var image = _a.image, closeImage = _a.closeImage;
    var ref = react_1.useRef(null);
    use_onclickoutside_1.default(ref, closeImage);
    return (<StyledInvoiceImageModal_1.default>
      <div className="image-container-fullsize">
        <img ref={ref} src={image} alt="invoice"/>
      </div>
    </StyledInvoiceImageModal_1.default>);
};
exports.default = InvoiceImageModal;

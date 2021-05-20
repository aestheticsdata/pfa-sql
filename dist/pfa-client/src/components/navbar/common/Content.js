"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Content = function (_a) {
    var handleclosefromchild = _a.handleclosefromchild, ContentStyle = _a.ContentStyle, content = _a.content;
    return (<ContentStyle>
      <div onClick={function () { return handleclosefromchild(); }} role="menu">
        <ul>
          {content}
        </ul>
      </div>
    </ContentStyle>);
};
exports.default = Content;

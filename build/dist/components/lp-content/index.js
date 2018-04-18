var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Layout } from 'antd';
var LpContent = /** @class */ (function (_super) {
    __extends(LpContent, _super);
    function LpContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpContent.prototype.render = function () {
        return (React.createElement(Layout.Content, { style: { overflow: 'auto', margin: '24px 24px 0' } },
            React.createElement("div", { style: { minHeight: 'calc(100vh - 260px)' } }, this.props.children)));
    };
    return LpContent;
}(React.Component));
export default LpContent;
//# sourceMappingURL=index.js.map
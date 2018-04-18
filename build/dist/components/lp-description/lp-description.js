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
import { Row, Col } from 'antd';
var styles = require('./index.scss');
var LpDescription = /** @class */ (function (_super) {
    __extends(LpDescription, _super);
    function LpDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpDescription.prototype.render = function () {
        var _a = this.props, term = _a.term, _b = _a.column, column = _b === void 0 ? 3 : _b, groupcol = _a.groupcol, children = _a.children;
        var labelSpan = (groupcol || column) * 2;
        var valueSpan = 24 - labelSpan;
        return (React.createElement(Col, { span: 24 / column },
            React.createElement(Row, null,
                React.createElement(Col, { key: "label", span: labelSpan, style: { textAlign: 'right' } },
                    React.createElement("div", { className: styles['term'], style: { marginBottom: 10 } },
                        term ? term + ':' : null,
                        "\u00A0")),
                React.createElement(Col, { key: "value", span: valueSpan },
                    React.createElement("div", { className: styles['detail'], style: { marginBottom: 10 } }, children || React.createElement("span", null))))));
    };
    return LpDescription;
}(React.Component));
export default LpDescription;
//# sourceMappingURL=lp-description.js.map
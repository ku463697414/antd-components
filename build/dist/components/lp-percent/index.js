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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { InputNumber } from 'antd';
var LpPercent = /** @class */ (function (_super) {
    __extends(LpPercent, _super);
    function LpPercent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpPercent.prototype.render = function () {
        return (React.createElement(InputNumber, __assign({ min: 0, max: 100, formatter: function (v) { return v + "%"; }, parser: function (v) { return +v.replace('%', ''); } }, this.props)));
    };
    return LpPercent;
}(React.Component));
export default LpPercent;
//# sourceMappingURL=index.js.map
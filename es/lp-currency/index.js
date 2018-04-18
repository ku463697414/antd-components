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
var LpCurrency = /** @class */ (function (_super) {
    __extends(LpCurrency, _super);
    function LpCurrency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpCurrency.prototype.render = function () {
        return (React.createElement(InputNumber, __assign({ formatter: function (value) { return ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }, parser: function (value) { return parseInt((value + '').replace(/\$\s?|(,*)/g, ''), 10); } }, this.props)));
    };
    return LpCurrency;
}(React.Component));
export default LpCurrency;
//# sourceMappingURL=index.js.map
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
var format = function (value, symbol, float) {
    return symbol + (float ? value.toFixed(2) : value.toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
var LpPrice = /** @class */ (function (_super) {
    __extends(LpPrice, _super);
    function LpPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpPrice.prototype.render = function () {
        var _a = this.props, _b = _a.value, value = _b === void 0 ? 0 : _b, _c = _a.symbol, symbol = _c === void 0 ? '￥' : _c, _d = _a.size, size = _d === void 0 ? 'normal' : _d, _e = _a.color, color = _e === void 0 ? true : _e, _f = _a.float, float = _f === void 0 ? true : _f;
        return (React.createElement("span", { style: { fontWeight: 600, fontSize: size === 'large' ? 18 : 'inherit', color: color ? '#dd4b39' : 'inherit' } }, format(value, symbol, float)));
    };
    return LpPrice;
}(React.Component));
export default LpPrice;
//# sourceMappingURL=index.js.map
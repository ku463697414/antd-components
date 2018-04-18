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
import { LpCurrency, LpPrice, LpPercent, LpRangePicker, } from '../../components';
var BasicForm = /** @class */ (function (_super) {
    __extends(BasicForm, _super);
    function BasicForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicForm.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(LpCurrency, null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpPrice, { value: 10000.111 }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpPrice, { value: 10000.111, size: "large" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpPrice, { value: 10000.111, color: false }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpPrice, { value: 10000.111, float: false }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpPercent, null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpRangePicker, null),
            React.createElement("br", null),
            React.createElement("br", null)));
    };
    return BasicForm;
}(React.Component));
export default BasicForm;
//# sourceMappingURL=basic-form.js.map
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
import { Col } from 'antd';
var empty = function () { return null; };
var LpDescriptionGroup = /** @class */ (function (_super) {
    __extends(LpDescriptionGroup, _super);
    function LpDescriptionGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpDescriptionGroup.prototype.render = function () {
        var _a = this.props, column = _a.column, groupcol = _a.groupcol, children = _a.children;
        return groupcol ? (React.createElement(Col, { span: 24 / groupcol }, React.Children.map(children, function (child) {
            return child
                // tslint:disable-next-line:no-any
                ? React.cloneElement(child, {
                    column: column,
                    groupcol: groupcol
                })
                : empty;
        }))) : (React.Children.map(children, function (child) {
            return child
                // tslint:disable-next-line:no-any
                ? React.cloneElement(child, {
                    column: column,
                    groupcol: groupcol
                })
                : empty;
        }));
    };
    return LpDescriptionGroup;
}(React.Component));
export default LpDescriptionGroup;
//# sourceMappingURL=lp-descriptionGroup.js.map
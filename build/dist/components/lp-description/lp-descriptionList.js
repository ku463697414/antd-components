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
import { Card, Row } from 'antd';
var empty = function () { return null; };
var LpDescriptionList = /** @class */ (function (_super) {
    __extends(LpDescriptionList, _super);
    function LpDescriptionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpDescriptionList.prototype.render = function () {
        var _a = this.props, _b = _a.col, col = _b === void 0 ? 3 : _b, title = _a.title, groupcol = _a.groupcol, children = _a.children;
        var column = col > 3 ? 3 : col;
        return (React.createElement("div", null,
            React.createElement(Card, { title: title },
                React.createElement(Row, null, React.Children.map(children, function (child) {
                    return child
                        // tslint:disable-next-line:no-any
                        ? React.cloneElement(child, {
                            column: column,
                            groupcol: groupcol
                        })
                        : empty;
                }))),
            React.createElement("br", null)));
    };
    return LpDescriptionList;
}(React.Component));
export default LpDescriptionList;
/**
 * 分组
 * @param arr
 * @param size
 */
// function group<T>(arr: T[], size: number) {
//   var groups = [], i;
//   for (i = 0; i < arr.length; i += size) {
//       groups.push(arr.slice(i, i + size));
//   }
//   return groups;
// }
//# sourceMappingURL=lp-descriptionList.js.map
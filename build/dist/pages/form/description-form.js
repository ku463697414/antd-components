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
import { LpDescriptionList, LpDescriptionGroup, LpDescription } from '../../components';
var DescriptionDemo = /** @class */ (function (_super) {
    __extends(DescriptionDemo, _super);
    function DescriptionDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionDemo.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(LpDescriptionList, { title: "联系人信息", col: 3 },
                React.createElement(LpDescription, { term: "姓名" }, "xxxx"),
                React.createElement(LpDescription, { term: "手机号" }, "xxxx"),
                React.createElement(LpDescription, { term: "邮箱" }, "xxxx"),
                React.createElement(LpDescription, { term: "姓名" }, "xxxx"),
                React.createElement(LpDescription, { term: "手机号" }, "xxxx"),
                React.createElement(LpDescription, { term: "邮箱" }, "xxxx"),
                React.createElement(LpDescription, { term: "姓名" }, "xxxx"),
                React.createElement(LpDescription, { term: "手机号" }, "xxxx"),
                React.createElement(LpDescription, { term: "邮箱" }, "xxxx")),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpDescriptionList, { title: "联系人信息", col: 1 },
                React.createElement(LpDescription, { term: "姓名" }, "xxxx"),
                React.createElement(LpDescription, { term: "手机号" }, "xxxx"),
                React.createElement(LpDescription, { term: "邮箱" }, "xxxx")),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(LpDescriptionList, { title: "联系人信息", col: 1, groupcol: 3 },
                React.createElement(LpDescriptionGroup, null,
                    React.createElement(LpDescription, { term: "姓名" }, "xxxx"),
                    React.createElement(LpDescription, { term: "手机号" }, "xxxx"),
                    React.createElement(LpDescription, { term: "邮箱" }, "xxxx")),
                React.createElement(LpDescriptionGroup, null,
                    React.createElement(LpDescription, { term: "姓名" }, "xxxx"),
                    React.createElement(LpDescription, { term: "手机号" }, "xxxx"),
                    React.createElement(LpDescription, { term: "邮箱" }, "xxxx")))));
    };
    return DescriptionDemo;
}(React.Component));
export default DescriptionDemo;
//# sourceMappingURL=description-form.js.map
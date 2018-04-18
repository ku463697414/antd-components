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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { Form } from 'antd';
var LpOriginModalForm = /** @class */ (function (_super) {
    __extends(LpOriginModalForm, _super);
    function LpOriginModalForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 生成表单项实体
         * @param item
         */
        _this.renderField = function (item) {
            var form = _this.props.form;
            var key = item.key, rest = __rest(item, ["key"]);
            return (React.createElement(Form.Item, __assign({ key: Array.isArray(key) ? key[2] : key, labelCol: { span: 6 }, wrapperCol: { span: 18 } }, rest), form.getFieldDecorator(item.key, item.options)(item.node)));
        };
        return _this;
    }
    LpOriginModalForm.prototype.render = function () {
        var _a = this.props, fields = _a.fields, form = _a.form, wrappedComponentRef = _a.wrappedComponentRef, rest = __rest(_a, ["fields", "form", "wrappedComponentRef"]);
        return (React.createElement(Form, __assign({ layout: "horizontal" }, rest), fields.map(this.renderField)));
    };
    return LpOriginModalForm;
}(React.Component));
export { LpOriginModalForm };
export default Form.create({
    // tslint:disable-next-line
    onFieldsChange: function (props, fields) {
        props.onChange && props.onChange(props, fields);
    }
})(LpOriginModalForm);
//# sourceMappingURL=index.js.map
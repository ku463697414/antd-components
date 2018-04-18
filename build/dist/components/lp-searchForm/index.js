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
import { Button, Form, Row, Col, Icon } from 'antd';
import * as qs from 'qs';
import * as moment from 'moment';
var style = {
    searchForm: {
        padding: '14px 24px 0 24px',
        background: '#fbfbfb',
        border: '1px solid #d9d9d9',
        borderRadius: '6px',
        marginBottom: '14px'
    },
    formItem: {
        marginBottom: '14px'
    },
    btnGroup: {
        marginBottom: '14px'
    }
};
// 默认每行显示的查询条件个数
var COLUMNS = 3;
var LpOriginSearchForm = /** @class */ (function (_super) {
    __extends(LpOriginSearchForm, _super);
    function LpOriginSearchForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expand = true;
        /**
         * 重置查询参数
         */
        _this.handleClear = function () {
            _this.props.form.resetFields();
            _this.handleSubmit();
        };
        /**
         * 处理新增按钮
         */
        _this.handleCreate = function () {
            _this.props.onCreate && _this.props.onCreate();
        };
        /**
         * 处理编辑按钮
         */
        _this.handleEdit = function () {
            _this.props.onEdit && _this.props.onEdit();
        };
        /**
         * 处理删除按钮
         */
        _this.handleDelete = function () {
            _this.props.onDelete && _this.props.onDelete();
        };
        /**
         * 处理查询
         */
        _this.handleSubmit = function (e) {
            e && e.preventDefault();
            // 表单参数
            var formParams = _this.props.form.getFieldsValue();
            // 上次查询参数
            var searchParams = qs.parse(location.search.substring(1));
            // 合并参数
            var params = __assign({ limit: 15 }, searchParams, formParams, { no: 1 });
            // 去除没有值或者值为空的key，去除字符串两边的空格
            Object.keys(params).forEach(function (key) {
                if (typeof params[key] === 'string') {
                    params[key] = params[key].trim();
                }
                (params[key] === undefined || params[key] === '') && delete params[key];
                // 将moment转换为字符串
                // datepicker
                if (moment.isMoment(params[key])) {
                    params[key] = params[key].format('YYYY-MM-DD');
                }
                else if (
                // rangepicker
                Array.isArray(params[key]) &&
                    params[key].length === 2 &&
                    moment.isMoment(params[key][0]) &&
                    moment.isMoment(params[key][1])) {
                    delete params[key];
                }
            });
            // 变更路由
            var path = location.pathname + '?' + qs.stringify(params);
            history.pushState(null, '', path);
            _this.props.onSubmit && _this.props.onSubmit(params);
        };
        /**
         * 将查询参数分行
         * @param arr
         */
        _this.renderRow = function (fields) {
            var form = _this.props.form;
            return fields.map(function (item, index) {
                // 日期范围组件
                if (item.extraKeys && item.extraKeys.length === 2) {
                    form.getFieldDecorator(item.extraKeys[0]);
                    form.getFieldDecorator(item.extraKeys[1]);
                    item.options = __assign({ getValueFromEvent: function (value) {
                            form.setFieldsValue((_a = {},
                                _a[item.extraKeys[0]] = value[0],
                                _a[item.extraKeys[1]] = value[1],
                                _a));
                            return value;
                            var _a;
                        } }, item.options);
                }
                return (React.createElement(Col, { lg: 24 / (_this.props.columnsNum || COLUMNS), key: index },
                    React.createElement(Form.Item, { key: item.key, style: style.formItem, label: item.label, labelCol: { span: 6 }, wrapperCol: { span: 18 } }, form.getFieldDecorator(item.key, item.options)(item.node))));
            });
        };
        _this.handleExpand = function () {
            _this.expand = !_this.expand;
            _this.props.onExpand && _this.props.onExpand();
        };
        return _this;
    }
    LpOriginSearchForm.prototype.render = function () {
        var fields = this.props.fields;
        return (React.createElement(Form, { layout: "horizontal", style: style.searchForm, onSubmit: this.handleSubmit },
            React.createElement(Row, { gutter: 20 },
                fields && this.renderRow(fields),
                React.createElement(Col, { lg: 24 / (this.props.columnsNum || COLUMNS), style: style.btnGroup },
                    React.createElement(Row, null,
                        React.createElement(Col, { span: 18, offset: 6 },
                            fields &&
                                fields.length > 0 && (React.createElement("span", null,
                                React.createElement(Button, { type: "primary", htmlType: "submit" }, "\u641C\u7D22"),
                                "\u00A0\u00A0")),
                            fields &&
                                fields.length > 0 && (React.createElement("span", null,
                                React.createElement(Button, { onClick: this.handleClear }, "\u91CD\u7F6E"),
                                "\u00A0\u00A0")),
                            this.props.onCreate && (React.createElement("span", null,
                                React.createElement(Button, { type: "primary", onClick: this.handleCreate }, "\u65B0\u589E"),
                                "\u00A0\u00A0")),
                            this.props.onEdit && (React.createElement("span", null,
                                React.createElement(Button, { onClick: this.handleEdit }, "\u7F16\u8F91"),
                                "\u00A0\u00A0")),
                            this.props.onDelete && (React.createElement("span", null,
                                React.createElement(Button, { type: "danger", onClick: this.handleDelete }, "\u5220\u9664"),
                                "\u00A0\u00A0")),
                            this.props.onExpand && (React.createElement("span", null,
                                React.createElement("a", { onClick: this.handleExpand },
                                    this.expand ? '展开' : '收起',
                                    React.createElement(Icon, { type: this.expand ? 'down' : 'up' }))))))))));
    };
    return LpOriginSearchForm;
}(React.Component));
export { LpOriginSearchForm };
export default Form.create({
    // tslint:disable-next-line
    onFieldsChange: function (props, fields) {
        props.onChange && props.onChange(props, fields);
    }
})(LpOriginSearchForm);
//# sourceMappingURL=index.js.map
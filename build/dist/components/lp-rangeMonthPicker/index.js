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
import { DatePicker, Button } from 'antd';
import * as moment from 'moment';
var styles = require('./index.scss');
// 自定义日期范围查询
var today = moment();
var currentMonthStart = moment().startOf('month');
var currentYearStart = moment().startOf('year');
var lastMonthStart = moment()
    .subtract(1, 'month')
    .startOf('month');
var lastMonthEnd = moment()
    .subtract(1, 'month')
    .endOf('month');
var lastYearStart = moment()
    .subtract(1, 'year')
    .startOf('year');
var lastYearEnd = moment()
    .subtract(1, 'year')
    .endOf('year');
export var ranges = {
    本月: [currentMonthStart, today],
    上月: [lastMonthStart, lastMonthEnd],
    今年: [currentYearStart, today],
    去年: [lastYearStart, lastYearEnd]
};
var LpRangeMonthPicker = /** @class */ (function (_super) {
    __extends(LpRangeMonthPicker, _super);
    function LpRangeMonthPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
            value: null
        };
        _this.handleOpenChange = function (open) {
            _this.setState({
                open: open
            });
        };
        _this.handlePanelChange = function (value) {
            _this.selectedValue = value;
        };
        _this.handleChange = function () {
            return;
        };
        _this.save = function () {
            _this.setState({
                value: _this.selectedValue,
                open: false
            });
            _this.props.onChange && _this.props.onChange(_this.selectedValue, ['', '']);
        };
        return _this;
    }
    LpRangeMonthPicker.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            value: nextProps.value
        });
    };
    LpRangeMonthPicker.prototype.render = function () {
        var _this = this;
        return (React.createElement(DatePicker.RangePicker, __assign({ onPanelChange: this.handlePanelChange, onOpenChange: this.handleOpenChange, onChange: this.handleChange, onOk: this.handleChange, open: this.state.open, value: this.state.value, placeholder: ['开始月份', '结束月份'], format: "YYYY-MM", ranges: ranges, mode: ['month', 'month'], renderExtraFooter: function () { return (React.createElement(Button, { className: styles['ok'], size: "small", type: "primary", onClick: _this.save }, "\u786E\u5B9A")); } }, this.props)));
    };
    return LpRangeMonthPicker;
}(React.Component));
export default LpRangeMonthPicker;
//# sourceMappingURL=index.js.map
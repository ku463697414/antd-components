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
import { DatePicker } from 'antd';
import * as moment from 'moment';
// 自定义日期范围查询
var today = moment();
var yesterday = moment().subtract(1, 'd');
var currentWeekStart = moment().startOf('week');
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
    今天: [today, today],
    昨天: [yesterday, yesterday],
    本周: [currentWeekStart, today],
    本月: [currentMonthStart, today],
    上月: [lastMonthStart, lastMonthEnd],
    今年: [currentYearStart, today],
    去年: [lastYearStart, lastYearEnd]
};
var AntdRangePicker = /** @class */ (function (_super) {
    __extends(AntdRangePicker, _super);
    function AntdRangePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdRangePicker.prototype.render = function () {
        return React.createElement(DatePicker.RangePicker, __assign({ ranges: ranges }, this.props));
    };
    return AntdRangePicker;
}(React.Component));
export default AntdRangePicker;
//# sourceMappingURL=index.js.map
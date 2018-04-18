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
import { Row, Col, Tooltip, Icon, Radio, Card, Select, Input, TreeSelect } from 'antd';
import * as numeral from 'numeral';
import * as moment from 'moment';
import { LpChartCard, LpField, LpTrend, LpWaterWave, LpPie, LpMiniBar, LpBar, LpBarLineCard, LpRadar, LpSearchForm, LpRangePicker } from '../../components';
var yuan = function (val, float) {
    if (float === void 0) { float = true; }
    return "\uFFE5" +
        (float ? val.toFixed(2) : val.toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
var styles = require('./index.scss');
var DataSet = require('@antv/data-set');
var RadioGroup = Radio.Group;
var BasicForm = /** @class */ (function (_super) {
    __extends(BasicForm, _super);
    function BasicForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            varity: {
                total: 'interval',
                plane: 'interval'
            },
            value: 'month',
            expand: true
        };
        _this.changeChart = function (key, type) {
            _this.setState({ varity: __assign({}, _this.state.varity, (_a = {}, _a[key] = type, _a)) });
            var _a;
        };
        // tslint:disable-next-line:no-any
        _this.handleChange = function (e) {
            _this.setState({
                value: e.target.value
            });
        };
        _this.setFormRef = function (ref) {
            _this.formRef = ref;
        };
        _this.handleSearchFormSubmit = function () {
            // 搜索
        };
        _this.toggleForm = function () {
            _this.setState({
                expand: !_this.state.expand
            });
        };
        _this.setFormFields = function () {
            var formFields = [
                {
                    key: 'planeOrderNo',
                    label: '订单号',
                    node: React.createElement(Input, { autoComplete: "off" })
                },
                {
                    key: 'idcName',
                    label: '旅客',
                    node: React.createElement(Input, { autoComplete: "off" })
                },
                {
                    key: 'createTime',
                    label: '预订日期',
                    node: React.createElement(LpRangePicker, null),
                    extraKeys: ['createTimeStart', 'createTimeEnd']
                },
                {
                    key: 'orderType',
                    label: '订单类型',
                    options: {
                        initialValue: ''
                    },
                    node: (React.createElement(Select, null,
                        React.createElement(Select.Option, { value: "" }, "\u5168\u90E8"),
                        React.createElement(Select.Option, { key: "1", value: "1" }, "\u673A\u7968\u8BA2\u5355")))
                },
                {
                    key: 'departCityName',
                    label: '出发地',
                    node: React.createElement(Input, { autoComplete: "off" })
                },
                {
                    key: 'arriveCityName',
                    label: '目的地',
                    node: React.createElement(Input, { autoComplete: "off" })
                },
                {
                    key: 'nameCn',
                    label: '预订人',
                    node: React.createElement(Input, { autoComplete: "off" })
                },
                {
                    key: 'deptId',
                    label: '部门',
                    node: (React.createElement(TreeSelect, { showSearch: true, allowClear: true, treeNodeFilterProp: "label", dropdownStyle: { maxHeight: 400, overflow: 'auto' }, placeholder: "请选择部门", treeDefaultExpandAll: true }))
                },
                {
                    key: 'costCenterId',
                    label: '成本中心',
                    node: (React.createElement(Select, { showSearch: true, placeholder: "请选择成本中心", optionFilterProp: "children" },
                        React.createElement(Select.Option, { key: "168", value: "168" }, "\u6280\u672F\u90E8")))
                }
            ];
            return formFields;
        };
        _this.setFormFields1 = function () {
            var formFields = [
                {
                    key: 'planeOrderNo',
                    label: '订单号',
                    node: React.createElement(Input, { autoComplete: "off" })
                },
                {
                    key: 'idcName',
                    label: '旅客',
                    node: React.createElement(Input, { autoComplete: "off" })
                }
            ];
            return formFields;
        };
        return _this;
    }
    BasicForm.prototype.render = function () {
        var _this = this;
        var topColResponsiveProps = {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
            style: { marginBottom: 24 }
        };
        var salesPieData = [
            {
                x: '家用电器',
                y: 4544
            },
            {
                x: '食用酒水',
                y: 3321
            },
            {
                x: '个护健康',
                y: 3113
            },
            {
                x: '服饰箱包',
                y: 2341
            },
            {
                x: '母婴产品',
                y: 1231
            },
            {
                x: '其他',
                y: 1231
            }
        ];
        var data = [
            { x: '事例一', y: 40.5 },
            { x: '事例二', y: 21 },
            { x: '事例三', y: 17 },
            { x: '事例四', y: 13 },
            { x: '事例五', y: 9 }
        ];
        var visitData = [];
        var beginDay = new Date().getTime();
        for (var i = 0; i < 20; i += 1) {
            visitData.push({
                x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
                y: Math.floor(Math.random() * 100) + 10
            });
        }
        var salesData = [];
        var planeData = [];
        var seasonData = [];
        for (var i = 0; i < 12; i += 1) {
            salesData.push({
                x: i + 1 + "\u6708",
                y: 100 + i * 10,
                name: '总消费'
            });
            planeData.push({
                x: i + 1 + "\u6708",
                国内机票消费: 100 + i * 10,
                国际机票消费: 200 + i * 10,
                机票总计消费: 100 + i * 10 + 200 + i * 10
            });
            seasonData.push({
                x: i + 1 + "\u6708",
                国内机票消费: i * 10,
                国际机票消费: i * 20,
                机票总计消费: i * 10 + i * 20
            });
        }
        var radarOriginData = [
            {
                name: '技术部',
                totalNum: 12,
                changePercent: 0.02,
                refundDifferencePercent: 0.03,
                totalSalePrice: 3245
            },
            {
                name: '客服部',
                totalNum: 13,
                changePercent: 31,
                refundDifferencePercent: 41,
                totalSalePrice: 74
            }
        ];
        // tslint:disable-next-line:no-any
        var radarData = [];
        var radarTitleMap = {
            totalNum: '票数(张)',
            changePercent: '改签费占比',
            refundDifferencePercent: '退票费占比',
            totalSalePrice: '退票/改签总金额(元)'
        };
        radarOriginData.forEach(function (item) {
            Object.keys(item).forEach(function (key) {
                if (key !== 'name') {
                    radarData.push({
                        name: item.name,
                        label: radarTitleMap[key],
                        value: item[key]
                    });
                }
            });
        });
        if (this.state.value === 'month') {
            this.fltData = planeData;
        }
        else if (this.state.value === 'season') {
            this.fltData = seasonData;
        }
        // 多条线时transform数据
        var ds = new DataSet();
        var dv = ds.createView().source(this.fltData || []);
        dv.transform({
            type: 'fold',
            fields: ['机票总计消费', '国内机票消费', '国际机票消费'],
            key: 'name',
            value: 'y'
        });
        var newdata = dv.rows;
        // 分组柱状图
        var atrr = { adjust: [{ type: 'dodge', marginRatio: 1 / 32 }] };
        // card的一些属性
        var cardAttr = {
            bordered: false,
            bodyStyle: { padding: 24 },
            style: { minHeight: 409 }
        };
        return (React.createElement("div", null,
            React.createElement(Row, { gutter: 24 },
                React.createElement(Col, __assign({}, topColResponsiveProps),
                    React.createElement(LpChartCard, { bordered: false, title: "总销售额", action: React.createElement(Tooltip, { title: "指标说明" },
                            React.createElement(Icon, { type: "info-circle-o" })), total: yuan(126560), footer: React.createElement(LpField, { label: "日均销售额", value: "\uFFE5" + numeral(12423).format('0,0') }), contentHeight: 46 },
                        React.createElement(LpTrend, { flag: "up", style: { marginRight: 16 } },
                            "\u5468\u540C\u6BD4",
                            React.createElement("span", { className: styles.trendText }, "12%")),
                        React.createElement(LpTrend, { flag: "down" },
                            "\u65E5\u73AF\u6BD4",
                            React.createElement("span", { className: styles.trendText }, "11%")))),
                React.createElement(Col, __assign({}, topColResponsiveProps),
                    React.createElement(LpChartCard, { bordered: false, title: "访问量", action: React.createElement(Tooltip, { title: "指标说明" },
                            React.createElement(Icon, { type: "info-circle-o" })), total: numeral(8846).format('0,0'), footer: React.createElement(LpField, { label: "日访问量", value: numeral(1234).format('0,0') }), contentHeight: 46 })),
                React.createElement(Col, __assign({}, topColResponsiveProps),
                    React.createElement(LpChartCard, { bordered: false, title: "支付笔数", action: React.createElement(Tooltip, { title: "指标说明" },
                            React.createElement(Icon, { type: "info-circle-o" })), total: numeral(6560).format('0,0'), footer: React.createElement(LpField, { label: "转化率", value: "60%" }), contentHeight: 46 })),
                React.createElement(Col, __assign({}, topColResponsiveProps),
                    React.createElement(LpChartCard, { bordered: false, title: "运营活动效果", action: React.createElement(Tooltip, { title: "指标说明" },
                            React.createElement(Icon, { type: "info-circle-o" })), total: "78%", footer: React.createElement("div", { style: { whiteSpace: 'nowrap', overflow: 'hidden' } },
                            React.createElement(LpTrend, { flag: "up", style: { marginRight: 16 } },
                                "\u5468\u540C\u6BD4",
                                React.createElement("span", { className: styles.trendText }, "12%")),
                            React.createElement(LpTrend, { flag: "down" },
                                "\u65E5\u73AF\u6BD4",
                                React.createElement("span", { className: styles.trendText }, "11%"))), contentHeight: 46 }))),
            React.createElement(LpWaterWave, { height: 161, title: "补贴资金剩余", percent: 34 }),
            React.createElement("div", null,
                React.createElement(LpPie, { hasLegend: true, title: "销售额", subTitle: "销售额", total: yuan(salesPieData.reduce(function (pre, now) { return now.y + pre; }, 0)), data: salesPieData, valueFormat: yuan, height: 294, inner: 0.75 })),
            React.createElement("div", null,
                React.createElement(LpMiniBar, { height: 45, data: visitData })),
            React.createElement("div", null,
                React.createElement(LpBar, { height: 200, title: "销售额趋势", data: salesData })),
            React.createElement("div", null,
                React.createElement(LpBarLineCard, { cardTitle: "总消费", changeChartType: function (type) { return _this.changeChart('total', type); }, data: salesData, height: 295, title: "月度柱状图", variety: this.state.varity['total'], cardAttrs: cardAttr, isTranspose: true, isTime: true })),
            React.createElement("br", null),
            React.createElement("div", null,
                React.createElement(LpBarLineCard, { cardTitle: React.createElement("div", null,
                        React.createElement("span", null, "\u673A\u7968\u6D88\u8D39"),
                        "\u00A0\u00A0",
                        React.createElement("span", null,
                            React.createElement(RadioGroup, { onChange: this.handleChange, value: this.state.value },
                                React.createElement(Radio, { value: "month" }, "\u6708\u4EFD"),
                                React.createElement(Radio, { value: "season" }, "\u5B63\u5EA6")))), changeChartType: function (type) { return _this.changeChart('plane', type); }, data: newdata, height: 295, title: "月度柱状图", variety: this.state.varity['plane'], attrs: atrr, isRoom: true, showTitle: true })),
            React.createElement("div", null,
                React.createElement(Card, null,
                    React.createElement(LpRadar, { hasLegend: true, height: 323, data: radarData, title: "退改金额前十部门分析图" }))),
            React.createElement("div", null,
                React.createElement(LpPie, { animate: false, percent: 28, subTitle: "中式快餐", total: "28%", height: 128, lineWidth: 2, inner: 0.75 })),
            React.createElement("div", null,
                React.createElement(Card, null,
                    React.createElement(LpPie, { hasLegend: true, title: "销售额", data: data, valueFormat: yuan, height: 294, inner: 0, isLabel: true, radius: 0.75 }))),
            React.createElement("div", null,
                React.createElement(Card, null,
                    React.createElement(LpSearchForm, { wrappedComponentRef: this.setFormRef, onSubmit: this.handleSearchFormSubmit, fields: this.state.expand ? this.setFormFields1() : this.setFormFields(), onExpand: this.toggleForm })))));
    };
    return BasicForm;
}(React.Component));
export default BasicForm;
//# sourceMappingURL=index.js.map
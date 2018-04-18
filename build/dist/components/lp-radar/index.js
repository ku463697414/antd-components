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
import { Chart, Tooltip, Geom, Coord, Axis } from 'bizcharts';
import { Row, Col } from 'antd';
import autoHeight from '../autoHeight';
var styles = require('./index.scss');
var LpRadar = /** @class */ (function (_super) {
    __extends(LpRadar, _super);
    function LpRadar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            legendData: []
        };
        // tslint:disable-next-line:no-any
        _this.getG2Instance = function (chart) {
            _this.chart = chart;
        };
        // for custom lengend view
        _this.getLengendData = function () {
            if (!_this.chart) {
                return;
            }
            var geom = _this.chart.getAllGeoms()[0]; // 获取所有的图形
            var items = geom.get('dataArray') || []; // 获取图形对应的
            // tslint:disable-next-line:no-any
            var legendData = items.map(function (item) {
                // tslint:disable-next-line:no-any
                var origins = item.map(function (t) { return t._origin; });
                var result = {
                    name: origins[0].name,
                    color: item[0].color,
                    checked: true,
                    // tslint:disable-next-line:no-any
                    value: origins.reduce(function (p, n) { return p + n.value; }, 0)
                };
                return result;
            });
            _this.setState({
                legendData: legendData
            });
        };
        _this.handleRef = function (n) {
            _this.node = n;
        };
        // tslint:disable-next-line:no-any
        _this.handleLegendClick = function (item, i) {
            var newItem = item;
            newItem.checked = !newItem.checked;
            var legendData = _this.state.legendData;
            legendData[i] = newItem;
            var filteredLegendData = legendData
                .filter(function (l) { return l.checked; })
                .map(function (l) { return l.name; });
            if (_this.chart) {
                _this.chart.filter('name', 
                // tslint:disable-next-line:no-any
                function (val) { return filteredLegendData.indexOf(val) > -1; });
                _this.chart.repaint();
            }
            _this.setState({
                legendData: legendData
            });
        };
        return _this;
    }
    LpRadar.prototype.componentDidMount = function () {
        this.getLengendData();
    };
    LpRadar.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.data !== nextProps.data) {
            this.getLengendData();
        }
    };
    LpRadar.prototype.render = function () {
        var _this = this;
        var defaultColors = [
            '#1890FF',
            '#FACC14',
            '#2FC25B',
            '#8543E0',
            '#F04864',
            '#13C2C2',
            '#fa8c16',
            '#a0d911'
        ];
        var _a = this.props, _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 0 : _c, title = _a.title, _d = _a.hasLegend, hasLegend = _d === void 0 ? false : _d, _e = _a.forceFit, forceFit = _e === void 0 ? true : _e, _f = _a.tickCount, tickCount = _f === void 0 ? 4 : _f, _g = _a.padding, padding = _g === void 0 ? [35, 30, 35, 45] : _g, _h = _a.animate, animate = _h === void 0 ? true : _h, _j = _a.colors, colors = _j === void 0 ? defaultColors : _j;
        var legendData = this.state.legendData;
        var scale = {
            type: 'linear',
            value: {
                min: 0,
                tickCount: tickCount
            }
        };
        var chartHeight = height - (hasLegend ? 80 : 22);
        return (React.createElement("div", { className: styles.radar, style: { height: height } },
            React.createElement("div", null,
                title && React.createElement("h4", null, title),
                React.createElement(Chart, { scale: scale, height: chartHeight, forceFit: forceFit, data: data, padding: padding, animate: animate, onGetG2Instance: this.getG2Instance },
                    React.createElement(Tooltip, null),
                    React.createElement(Coord, { type: "polar" }),
                    React.createElement(Axis, { name: "label", line: null, tickLine: null, grid: {
                            lineStyle: {
                                lineDash: null
                            },
                            hideFirstLine: false,
                            type: 'polygon'
                        } }),
                    React.createElement(Axis, { name: "value", grid: {
                            type: 'polygon',
                            lineStyle: {
                                lineDash: null
                            }
                        } }),
                    React.createElement(Geom, { type: "line", position: "label*value", color: ['name', colors], size: 1 }),
                    React.createElement(Geom, { type: "point", position: "label*value", color: ['name', colors], shape: "circle", size: 3 })),
                hasLegend && (React.createElement(Row, { className: styles.legend }, legendData.map(function (item, i) { return (React.createElement(Col, { span: 24 / legendData.length, key: item.name },
                    React.createElement("div", { className: styles.legendItem, onClick: function () { return _this.handleLegendClick(item, i); } },
                        React.createElement("p", null,
                            React.createElement("span", { className: styles.dot, style: {
                                    backgroundColor: !item.checked ? '#aaa' : item.color
                                } }),
                            React.createElement("span", null, item.name))))); }))))));
    };
    return LpRadar;
}(React.Component));
export default autoHeight(LpRadar);
//# sourceMappingURL=index.js.map
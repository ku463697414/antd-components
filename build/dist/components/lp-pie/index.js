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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as React from 'react';
import { Chart, Tooltip, Geom, Coord, Label } from 'bizcharts';
import { DataView } from '@antv/data-set';
import { Divider } from 'antd';
import * as classNames from 'classnames';
import ReactFitText from 'react-fittext';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
var styles = require('./index.scss');
var LpPie = /** @class */ (function (_super) {
    __extends(LpPie, _super);
    function LpPie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            legendData: [],
            legendBlock: false
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
                /* eslint no-underscore-dangle:0 */
                var origin = item[0]._origin;
                origin.color = item[0].color;
                origin.checked = true;
                return origin;
            });
            _this.setState({
                legendData: legendData
            });
        };
        _this.handleRoot = function (n) {
            _this.root = n;
        };
        // tslint:disable-next-line:no-any
        _this.handleLegendClick = function (item, i) {
            var newItem = item;
            newItem.checked = !newItem.checked;
            var legendData = _this.state.legendData;
            legendData[i] = newItem;
            var filteredLegendData = legendData.filter(function (l) { return l.checked; }).map(function (l) { return l.x; });
            if (_this.chart) {
                _this.chart.filter('x', 
                // tslint:disable-next-line:no-any
                function (val) { return filteredLegendData.indexOf(val) > -1; });
            }
            _this.setState({
                legendData: legendData
            });
        };
        return _this;
    }
    LpPie.prototype.componentDidMount = function () {
        this.getLengendData();
        this.resize();
        window.addEventListener('resize', this.resize);
    };
    LpPie.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.data !== nextProps.data) {
            this.getLengendData();
        }
    };
    LpPie.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize);
        // this.resize.cancel();
    };
    // for window resize auto responsive legend
    LpPie.prototype.resize = function () {
        var hasLegend = this.props.hasLegend;
        if (!hasLegend || !this.root) {
            window.removeEventListener('resize', this.resize);
            return;
        }
        if (this.root.parentNode.clientWidth <= 380) {
            if (!this.state.legendBlock) {
                this.setState({
                    legendBlock: true
                });
            }
        }
        else if (this.state.legendBlock) {
            this.setState({
                legendBlock: false
            });
        }
    };
    LpPie.prototype.render = function () {
        var _this = this;
        var _a = this.props, valueFormat = _a.valueFormat, subTitle = _a.subTitle, total = _a.total, _b = _a.hasLegend, hasLegend = _b === void 0 ? false : _b, className = _a.className, style = _a.style, height = _a.height, _c = _a.forceFit, forceFit = _c === void 0 ? true : _c, _d = _a.percent, percent = _d === void 0 ? 0 : _d, color = _a.color, inner = _a.inner, _e = _a.animate, animate = _e === void 0 ? true : _e, colors = _a.colors, _f = _a.lineWidth, lineWidth = _f === void 0 ? 1 : _f, isLabel = _a.isLabel, radius = _a.radius;
        var _g = this.state, legendData = _g.legendData, legendBlock = _g.legendBlock;
        var pieClassName = classNames(styles.pie, className, (_h = {},
            _h[styles.hasLegend] = !!hasLegend,
            _h[styles.legendBlock] = legendBlock,
            _h));
        var defaultColors = colors;
        var data = this.props.data || [];
        var selected = this.props.selected || true;
        var tooltip = this.props.tooltip || true;
        var formatColor;
        var scale = {
            x: {
                type: 'cat',
                range: [0, 1]
            },
            y: {
                min: 0
            }
        };
        if (percent) {
            selected = false;
            tooltip = false;
            // tslint:disable-next-line:no-any
            formatColor = function (value) {
                if (value === '占比') {
                    return color || 'rgba(24, 144, 255, 0.85)';
                }
                else {
                    return '#F0F2F5';
                }
            };
            data = [
                {
                    x: '占比',
                    y: parseFloat(percent)
                },
                {
                    x: '反比',
                    y: 100 - parseFloat(percent)
                }
            ];
        }
        var tooltipFormat = [
            'x*percent',
            // tslint:disable-next-line:no-any
            function (x, p) { return ({
                name: x,
                value: (p * 100).toFixed(2) + "%"
            }); }
        ];
        var padding = [12, 0, 12, 0];
        var dv = new DataView();
        dv.source(data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent'
        });
        return (React.createElement("div", { ref: this.handleRoot, className: pieClassName, style: style },
            React.createElement(ReactFitText, { maxFontSize: 25 },
                React.createElement("div", { className: styles.chart },
                    React.createElement(Chart, { scale: scale, height: height, forceFit: forceFit, data: dv, padding: padding, animate: animate, onGetG2Instance: this.getG2Instance },
                        !!tooltip && React.createElement(Tooltip, { showTitle: false }),
                        React.createElement(Coord, { type: "theta", radius: radius, innerRadius: inner }),
                        React.createElement(Geom, { style: { lineWidth: lineWidth, stroke: '#fff' }, tooltip: tooltip && tooltipFormat, type: "intervalStack", position: "percent", color: ['x', percent ? formatColor : defaultColors], selected: selected }, isLabel && (React.createElement(Label, { content: [
                                'x*y',
                                // tslint:disable-next-line:no-any
                                function (x, y) {
                                    return x + '/' + y;
                                }
                            ], 
                            // tslint:disable-next-line:no-any
                            formatter: function (val, item) {
                                return (val.split('/')[0] +
                                    ':' +
                                    val.split('/')[1] +
                                    '  ' +
                                    '(' +
                                    (item.point.percent * 100).toFixed(2) +
                                    '%' +
                                    ')');
                            } })))),
                    (subTitle || total) && (React.createElement("div", { className: styles.total },
                        subTitle && React.createElement("h4", { className: "pie-sub-title" }, subTitle),
                        total && (React.createElement("div", { className: "pie-stat", dangerouslySetInnerHTML: { __html: total } })))))),
            hasLegend && (React.createElement("ul", { className: styles.legend }, legendData.map(function (item, i) { return (React.createElement("li", { key: item.x, onClick: function () { return _this.handleLegendClick(item, i); } },
                React.createElement("span", { className: styles.dot, style: {
                        backgroundColor: !item.checked ? '#aaa' : item.color
                    } }),
                React.createElement("span", { className: styles.legendTitle }, item.x),
                React.createElement(Divider, { type: "vertical" }),
                item.percent ? (React.createElement("span", { className: styles.percent }, (item.percent * 100).toFixed(2) + "%")) : ('--%'),
                React.createElement("span", { className: styles.value, dangerouslySetInnerHTML: {
                        __html: valueFormat ? valueFormat(item.y) : item.y
                    } }))); })))));
        var _h;
    };
    __decorate([
        Bind(),
        Debounce(300),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LpPie.prototype, "resize", null);
    return LpPie;
}(React.Component));
export default autoHeight(LpPie);
//# sourceMappingURL=index.js.map
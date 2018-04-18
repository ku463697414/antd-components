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
import { Chart, Axis, Tooltip, Geom, Legend, Coord } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import { Card, Icon, Popover } from 'antd';
var styles = require('./index.scss');
var LpBarLineCard = /** @class */ (function (_super) {
    __extends(LpBarLineCard, _super);
    function LpBarLineCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            autoHideXLabels: false
        };
        _this.className = 'intervalActive';
        _this.handleRoot = function (n) {
            _this.root = n;
        };
        _this.handleRef = function (n) {
            _this.node = n;
        };
        _this.chartDownload = function () {
            var myChart = _this.chart;
            setTimeout(function () {
                myChart && myChart.downloadImage();
            }, 1000);
        };
        return _this;
    }
    LpBarLineCard.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.resize);
    };
    LpBarLineCard.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize);
    };
    LpBarLineCard.prototype.resize = function () {
        if (!this.node) {
            return;
        }
        var canvasWidth = this.node.parentNode.clientWidth;
        var _a = this.props, _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.autoLabel, autoLabel = _c === void 0 ? true : _c;
        if (!autoLabel) {
            return;
        }
        var minWidth = data.length * 30;
        var autoHideXLabels = this.state.autoHideXLabels;
        if (canvasWidth <= minWidth) {
            if (!autoHideXLabels) {
                this.setState({
                    autoHideXLabels: true
                });
            }
        }
        else if (autoHideXLabels) {
            this.setState({
                autoHideXLabels: false
            });
        }
    };
    LpBarLineCard.prototype.render = function () {
        var _this = this;
        var _a = this.props, height = _a.height, title = _a.title, _b = _a.forceFit, forceFit = _b === void 0 ? true : _b, data = _a.data, 
        //   color = 'rgba(24, 144, 255, 0.85)',
        padding = _a.padding, variety = _a.variety, attrs = _a.attrs, cardTitle = _a.cardTitle, cardAttrs = _a.cardAttrs, isTranspose = _a.isTranspose, isRoom = _a.isRoom, showTitle = _a.showTitle;
        var autoHideXLabels = this.state.autoHideXLabels;
        var scale = {
            x: {
                type: 'cat'
            }
        };
        // const tooltip = [
        //   'x*y',
        //   (x: string, y: string, name: string) => ({
        //     // title: name,
        //     name: x,
        //     value: y
        //   })
        // ];
        return (React.createElement(Card, __assign({ title: cardTitle, extra: React.createElement("div", { className: styles['report-extra-wrap'] },
                React.createElement("a", { className: this.className === 'intervalActive'
                        ? styles['current-icon']
                        : '', onClick: function () {
                        _this.className = 'intervalActive';
                        _this.props.changeChartType('interval');
                    } },
                    React.createElement(Popover, { content: '切换为柱状图' },
                        React.createElement(Icon, { type: "bar-chart" }))),
                "\u00A0\u00A0",
                React.createElement("a", { className: this.className === 'lineActive' ? styles['current-icon'] : '', onClick: function () {
                        _this.className = 'lineActive';
                        _this.props.changeChartType('line');
                    } },
                    React.createElement(Popover, { content: '切换为折线图' },
                        React.createElement(Icon, { type: "line-chart" }))),
                "\u00A0\u00A0",
                React.createElement("a", { onClick: function () { return _this.chartDownload(); } },
                    React.createElement(Popover, { content: '保存为图片' },
                        React.createElement(Icon, { type: "download" })))) }, cardAttrs),
            React.createElement("div", { style: { height: height }, ref: this.handleRoot },
                React.createElement("div", { ref: this.handleRef, id: "mountNode" },
                    title && React.createElement("h4", { style: { marginBottom: 20 } }, title),
                    React.createElement(Chart, { scale: scale, height: title ? height && height - 41 : height, forceFit: forceFit, data: data, padding: padding || 'auto', 
                        // tslint:disable-next-line:no-any
                        onGetG2Instance: function (g2chart) { return (_this.chart = g2chart); } },
                        !!isTranspose ? React.createElement(Coord, { transpose: true }) : React.createElement(Coord, null),
                        React.createElement(Axis, { name: "x", title: false, label: { formatter: function (val) { return "" + val.split('/')[0]; } }, tickLine: autoHideXLabels ? false : {} }),
                        React.createElement(Axis, { name: "y", min: 0, line: false, tickLine: false, label: {
                                formatter: function (val) {
                                    return !!isRoom ? val + "\u95F4\u591C" : val + "\u5143";
                                }
                            } }),
                        React.createElement(Tooltip, { showTitle: !!showTitle, crosshairs: { type: 'rect' } }),
                        React.createElement(Legend, null),
                        variety && variety === 'line' ? (React.createElement("div", null,
                            React.createElement(Geom, { type: variety, position: "x*y", color: 'name', 
                                // tooltip={tooltip}
                                legend: true }),
                            React.createElement(Geom, { type: "point", position: "x*y", color: 'name', 
                                // tooltip={tooltip}
                                legend: true }))) : (React.createElement(Geom, __assign({ type: variety, position: "x*y", color: 'name', 
                            // tooltip={tooltip}
                            legend: true }, attrs))))))));
    };
    __decorate([
        Bind(),
        Debounce(400),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LpBarLineCard.prototype, "resize", null);
    return LpBarLineCard;
}(React.Component));
export default autoHeight(LpBarLineCard);
//# sourceMappingURL=index.js.map
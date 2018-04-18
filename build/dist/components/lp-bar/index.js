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
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
var styles = require('./index.scss');
var LpBar = /** @class */ (function (_super) {
    __extends(LpBar, _super);
    function LpBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            autoHideXLabels: false,
        };
        _this.handleRoot = function (n) {
            _this.root = n;
        };
        _this.handleRef = function (n) {
            _this.node = n;
        };
        return _this;
    }
    LpBar.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.resize);
    };
    LpBar.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize);
    };
    LpBar.prototype.resize = function () {
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
                    autoHideXLabels: true,
                });
            }
        }
        else if (autoHideXLabels) {
            this.setState({
                autoHideXLabels: false,
            });
        }
    };
    LpBar.prototype.render = function () {
        var _a = this.props, height = _a.height, title = _a.title, _b = _a.forceFit, forceFit = _b === void 0 ? true : _b, data = _a.data, _c = _a.color, color = _c === void 0 ? 'rgba(24, 144, 255, 0.85)' : _c, padding = _a.padding;
        var autoHideXLabels = this.state.autoHideXLabels;
        var scale = {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        };
        var tooltip = [
            'x*y',
            // tslint:disable-next-line:no-any
            function (x, y) { return ({
                name: x,
                value: y,
            }); },
        ];
        return (React.createElement("div", { className: styles.chart, style: { height: height }, ref: this.handleRoot },
            React.createElement("div", { ref: this.handleRef },
                title && React.createElement("h4", null, title),
                React.createElement(Chart, { scale: scale, height: height, forceFit: forceFit, data: data, padding: padding || 'auto' },
                    React.createElement(Axis, { name: "x", title: false, label: !autoHideXLabels, tickLine: !autoHideXLabels }),
                    React.createElement(Axis, { name: "y", title: false, line: false, tickLine: false, min: 0 }),
                    React.createElement(Tooltip, { showTitle: false, crosshairs: false }),
                    React.createElement(Geom, { type: "interval", position: "x*y", color: color, tooltip: tooltip })))));
    };
    __decorate([
        Bind(),
        Debounce(400),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LpBar.prototype, "resize", null);
    return LpBar;
}(React.Component));
export default autoHeight(LpBar);
//# sourceMappingURL=index.js.map
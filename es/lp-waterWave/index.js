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
import autoHeight from '../autoHeight';
var styles = require('./index.scss');
var LpWaterWave = /** @class */ (function (_super) {
    __extends(LpWaterWave, _super);
    function LpWaterWave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            radio: 1
        };
        _this.resize = function () {
            var height = _this.props.height;
            var offsetWidth = _this.root.parentNode.offsetWidth;
            _this.setState({
                radio: offsetWidth < height ? offsetWidth / height : 1
            });
        };
        return _this;
    }
    LpWaterWave.prototype.componentDidMount = function () {
        this.renderChart();
        this.resize();
        window.addEventListener('resize', this.resize);
    };
    LpWaterWave.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this.timer);
        if (this.node) {
            this.node.innerHTML = '';
        }
        window.removeEventListener('resize', this.resize);
    };
    LpWaterWave.prototype.renderChart = function () {
        var _a = this.props, percent = _a.percent, _b = _a.color, color = _b === void 0 ? '#1890FF' : _b;
        var data = percent / 100;
        var self = this;
        if (!this.node || !data) {
            return;
        }
        var canvas = this.node;
        var ctx = canvas.getContext('2d');
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var radius = canvasWidth / 2;
        var lineWidth = 2;
        var cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        var axisLength = canvasWidth - lineWidth;
        var unit = axisLength / 8;
        var range = 0.2; // 振幅
        var currRange = range;
        var xOffset = lineWidth;
        var sp = 0; // 周期偏移量
        var currData = 0;
        var waveupsp = 0.005; // 水波上涨速度
        var arcStack = [];
        var bR = radius - lineWidth;
        var circleOffset = -(Math.PI / 2);
        var circleLock = true;
        for (var i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        var cStartPoint = arcStack.shift();
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            var sinStack = [];
            for (var i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                var x = sp + (xOffset + i) / unit;
                var y = Math.sin(x) * currRange;
                var dx = i;
                var dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            var startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, '#1890FF');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        function render() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock) {
                if (arcStack.length) {
                    var temp = arcStack.shift();
                    ctx.lineTo(temp[0], temp[1]);
                    ctx.stroke();
                }
                else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = null;
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI);
                    ctx.beginPath();
                    ctx.save();
                    ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI);
                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = '#1890FF';
                }
            }
            else {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        var t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        var t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            self.timer = requestAnimationFrame(render);
        }
        render();
    };
    LpWaterWave.prototype.render = function () {
        var _this = this;
        var radio = this.state.radio;
        var _a = this.props, percent = _a.percent, title = _a.title, height = _a.height;
        return (React.createElement("div", { className: styles.waterWave, ref: function (n) { return (_this.root = n); }, style: { transform: "scale(" + radio + ")" } },
            React.createElement("div", { style: { width: height, height: height, overflow: 'hidden' } },
                React.createElement("canvas", { className: styles.waterWaveCanvasWrapper, ref: function (n) { return (_this.node = n); }, width: height * 2, height: height * 2 })),
            React.createElement("div", { className: styles.text, style: { width: height } },
                title && React.createElement("span", null, title),
                percent ? React.createElement("h4", null,
                    percent,
                    "%") : '--%')));
    };
    return LpWaterWave;
}(React.Component));
export default autoHeight(LpWaterWave);
//# sourceMappingURL=index.js.map
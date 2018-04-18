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
import { Chart, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../autoHeight';
var styles = require('./index.scss');
var LpMiniBar = /** @class */ (function (_super) {
    __extends(LpMiniBar, _super);
    function LpMiniBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LpMiniBar.prototype.render = function () {
        var _a = this.props, height = _a.height, _b = _a.forceFit, forceFit = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? '#1890FF' : _c, _d = _a.data, data = _d === void 0 ? [] : _d;
        var scale = {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        };
        var padding = [36, 5, 30, 5];
        var tooltip = [
            'x*y',
            // tslint:disable-next-line:no-any
            function (x, y) { return ({
                name: x,
                value: y,
            }); },
        ];
        // for tooltip not to be hide
        var chartHeight = height + 54;
        return (React.createElement("div", { className: styles.miniChart, style: { height: height } },
            React.createElement("div", { className: styles.chartContent },
                React.createElement(Chart, { scale: scale, height: chartHeight, forceFit: forceFit, data: data, padding: padding },
                    React.createElement(Tooltip, { showTitle: false, crosshairs: false }),
                    React.createElement(Geom, { type: "interval", position: "x*y", color: color, tooltip: tooltip })))));
    };
    return LpMiniBar;
}(React.Component));
export default autoHeight(LpMiniBar);
//# sourceMappingURL=index.js.map
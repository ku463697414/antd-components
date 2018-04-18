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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { Card, Spin } from 'antd';
import * as classNames from 'classnames';
var styles = require('./index.scss');
var LpChartCard = /** @class */ (function (_super) {
    __extends(LpChartCard, _super);
    function LpChartCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false
        };
        return _this;
    }
    LpChartCard.prototype.render = function () {
        var loading = this.state.loading;
        var _a = this.props, contentHeight = _a.contentHeight, title = _a.title, avatar = _a.avatar, action = _a.action, total = _a.total, footer = _a.footer, children = _a.children, rest = __rest(_a, ["contentHeight", "title", "avatar", "action", "total", "footer", "children"]);
        var content = (React.createElement("div", { className: styles.chartCard },
            React.createElement("div", { className: classNames(styles.chartTop, (_b = {}, _b[styles.chartTopMargin] = (!children && !footer), _b)) },
                React.createElement("div", { className: styles.avatar }, avatar),
                React.createElement("div", { className: styles.metaWrap },
                    React.createElement("div", { className: styles.meta },
                        React.createElement("span", { className: styles.title }, title),
                        React.createElement("span", { className: styles.action }, action)),
                    (total !== undefined) && (React.createElement("div", { className: styles.total, dangerouslySetInnerHTML: { __html: total } })))),
            children && (React.createElement("div", { className: styles.content, style: { height: contentHeight || 'auto' } },
                React.createElement("div", { className: contentHeight && styles.contentFixed }, children))),
            footer && (React.createElement("div", { className: classNames(styles.footer, (_c = {}, _c[styles.footerMargin] = !children, _c)) }, footer))));
        return (React.createElement(Card, __assign({ bodyStyle: { padding: '20px 24px 8px 24px' } }, rest), React.createElement(Spin, { spinning: loading }, content)));
        var _b, _c;
    };
    return LpChartCard;
}(React.Component));
export default LpChartCard;
//# sourceMappingURL=index.js.map
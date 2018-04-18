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
import { Tabs } from 'antd';
import * as qs from 'qs';
var LpTabs = /** @class */ (function (_super) {
    __extends(LpTabs, _super);
    function LpTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTabClick = function (selectedKey) {
            // 上次查询参数
            var searchParams = qs.parse(location.search.substring(1));
            // 合并参数
            var params = __assign({ limit: 15 }, searchParams, (_a = {}, _a[_this.props.urlKey] = selectedKey, _a.no = 1, _a));
            // 去除没有值或者值为空的key，去除字符串两边的空格
            Object.keys(params).forEach(function (key) {
                if (typeof params[key] === 'string') {
                    params[key] = params[key].trim();
                }
                (params[key] === undefined || params[key] === '') && delete params[key];
            });
            // 变更路由
            var path = location.pathname + '?' + qs.stringify(params);
            history.pushState(null, '', path);
            _this.props.onLpTabClick && _this.props.onLpTabClick(selectedKey, params);
            var _a;
        };
        return _this;
    }
    LpTabs.prototype.render = function () {
        return (React.createElement(Tabs, __assign({}, this.props, { onTabClick: this.handleTabClick }), this.props.children));
    };
    return LpTabs;
}(React.Component));
export default LpTabs;
//# sourceMappingURL=index.js.map
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
import { Table } from 'antd';
import * as qs from 'qs';
var LpTable = /** @class */ (function (_super) {
    __extends(LpTable, _super);
    function LpTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            current: 1,
            pageSize: 15
        };
        /**
         * 监听分页、排序、筛选变化变化
         */
        _this.handleChange = function (_a) {
            var current = _a.current, pageSize = _a.pageSize;
            // 上次查询参数
            var querystring = location.search.substring(1);
            var searchParams = qs.parse(querystring);
            // 合并参数
            var params = __assign({}, searchParams, { no: current, limit: pageSize });
            // 去除没有值的key
            Object.keys(params).forEach(function (key) {
                (params[key] === undefined || params[key] === '') && delete params[key];
            });
            // 变更路由
            var path = location.pathname + '?' + qs.stringify(params);
            history.pushState(null, '', path);
            _this.setState({
                current: current,
                pageSize: pageSize
            });
            _this.props.onLpChange(params);
        };
        _this.setPaginationProps = function (_a) {
            var no = _a.no, limit = _a.limit;
            var current = typeof no === 'undefined'
                ? 1
                : typeof no === 'string' ? parseInt(no, 10) : no;
            var pageSize = typeof limit === 'undefined'
                ? 15
                : typeof limit === 'string' ? parseInt(limit, 10) : limit;
            _this.setState({
                current: current,
                pageSize: pageSize
            });
        };
        return _this;
    }
    LpTable.prototype.render = function () {
        var _a = this.state, current = _a.current, pageSize = _a.pageSize;
        var _b = this.props, pagination = _b.pagination, onLpChange = _b.onLpChange, rest = __rest(_b, ["pagination", "onLpChange"]);
        // 分页参数
        var defaultPagination = pagination === false
            ? false
            : __assign({ showSizeChanger: true, pageSizeOptions: ['15', '30', '50'], showQuickJumper: true, current: current,
                pageSize: pageSize, showTotal: function (t) {
                    if (t === void 0) { t = 0; }
                    return "\u5171 " + t + " \u6761";
                }, total: 0 }, pagination);
        // 表格参数
        var tableProps = __assign({ onChange: this.handleChange, pagination: defaultPagination }, rest);
        return React.createElement(Table, __assign({}, tableProps));
    };
    return LpTable;
}(React.Component));
export default LpTable;
//# sourceMappingURL=index.js.map
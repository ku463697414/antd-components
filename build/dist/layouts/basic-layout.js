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
import { inject, observer } from 'mobx-react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import menus from '../menus';
import { LpSiderbar, LpHeader, LpContent, LpFooter } from '../components';
var BasicLayout = /** @class */ (function (_super) {
    __extends(BasicLayout, _super);
    function BasicLayout(props) {
        var _this = _super.call(this, props) || this;
        _this.appStore = props.appStore;
        _this.routerStore = props.routerStore;
        return _this;
    }
    BasicLayout.prototype.componentDidMount = function () {
        // 监听路由变化
        var setKeysByPath = this.appStore.setKeysByPath;
        var history = this.routerStore.history;
        this.unsubscribeHistory = history.subscribe(function () {
            setKeysByPath(location.pathname);
        });
    };
    BasicLayout.prototype.componentWillUnmount = function () {
        this.unsubscribeHistory();
    };
    BasicLayout.prototype.render = function () {
        return (React.createElement(Layout, null,
            React.createElement(LpSiderbar, null),
            React.createElement(Layout, null,
                React.createElement(LpHeader, null),
                React.createElement(LpContent, null,
                    React.createElement(Switch, null, menus.map(function (v) {
                        return v.children.map(function (child, i) { return (React.createElement(Route, { key: i, path: child.path, component: child.component, exact: true })); });
                    })),
                    React.createElement(LpFooter, { links: [
                            {
                                title: '人脸识别首页',
                                href: 'http://180.97.70.120:9003/',
                                target: '_blank'
                            },
                            {
                                title: 'gitlab',
                                href: 'https://github.com/ku463697414/antd-components',
                                target: '_blank'
                            }
                        ], copyright: React.createElement("div", null,
                            "Copyright ",
                            React.createElement(Icon, { type: "copyright" }),
                            " 2018 \u4E2D\u56FD\u5236\u9020") })))));
    };
    BasicLayout = __decorate([
        inject('appStore', 'routerStore'),
        observer,
        __metadata("design:paramtypes", [Object])
    ], BasicLayout);
    return BasicLayout;
}(React.Component));
export default BasicLayout;
//# sourceMappingURL=basic-layout.js.map
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
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Layout, Divider, Icon, Menu, Dropdown, Avatar, Spin } from 'antd';
var styles = require('./index.scss');
var logo = require('../../assets/images/logo.png');
var avatar = require('../../assets/images/avatar.png');
var LpHeader = /** @class */ (function (_super) {
    __extends(LpHeader, _super);
    function LpHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.appStore = props.appStore;
        return _this;
    }
    LpHeader.prototype.render = function () {
        var _a = this.appStore, user = _a.user, isMobile = _a.isMobile, collapsed = _a.collapsed, toggle = _a.toggle;
        var menu = (React.createElement(Menu, { className: styles['menu'] },
            React.createElement(Menu.Item, { disabled: true },
                React.createElement(Icon, { type: "user" }),
                "\u4E2A\u4EBA\u4E2D\u5FC3"),
            React.createElement(Menu.Item, { disabled: true },
                React.createElement(Icon, { type: "setting" }),
                "\u8BBE\u7F6E"),
            React.createElement(Menu.Divider, null),
            React.createElement(Menu.Item, { key: "logout" },
                React.createElement(Icon, { type: "logout" }),
                "\u9000\u51FA\u767B\u5F55")));
        return (React.createElement(Layout.Header, { className: styles['header'] },
            isMobile && ([
                React.createElement(Link, { key: "logo", to: "/", className: styles['logo'] },
                    React.createElement("img", { src: logo })),
                React.createElement(Divider, { key: "line", type: "vertical" })
            ]),
            React.createElement(Icon, { className: styles['trigger'], type: collapsed ? 'menu-unfold' : 'menu-fold', onClick: function () { return toggle(!collapsed); } }),
            React.createElement("div", { className: styles['right'] }, user.name ? (React.createElement(Dropdown, { overlay: menu },
                React.createElement("span", { className: styles['action'] + " " + styles['account'] },
                    user.avatar
                        ? React.createElement(Avatar, { size: "small", className: styles['avatar'], src: user.avatar })
                        : React.createElement(Avatar, { size: "small", className: styles['avatar'], src: avatar }),
                    React.createElement("span", { className: styles['name'] }, user.name)))) : React.createElement(Spin, { size: "small", style: { marginLeft: 8 } }))));
    };
    LpHeader = __decorate([
        inject('appStore'),
        observer,
        __metadata("design:paramtypes", [Object])
    ], LpHeader);
    return LpHeader;
}(React.Component));
export default LpHeader;
//# sourceMappingURL=index.js.map
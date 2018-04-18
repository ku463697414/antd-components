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
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Layout, Menu, Icon } from 'antd';
import DrawerMenu from 'rc-drawer-menu';
import menus from '../../menus';
require('rc-drawer-menu/assets/index.css');
var styles = require('./index.scss');
var logo = require('../../assets/images/logo.png');
var LpSiderbar = /** @class */ (function (_super) {
    __extends(LpSiderbar, _super);
    function LpSiderbar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpenChange = function (openKeys) {
            var setOpenKeys = _this.appStore.setOpenKeys;
            if (openKeys.length === 0) {
                // 全部关闭
                setOpenKeys([]);
            }
            else {
                // len为1时，从无到有
                // len为2时，从一个菜单到另一个菜单
                var key_1 = openKeys[1] || openKeys[0];
                var menu = menus.find(function (v) { return v.name === key_1; });
                if (menu && menu.children) {
                    setOpenKeys([menu.name]);
                }
            }
        };
        _this.renderMenus = function (nodes) {
            var collapsed = _this.appStore.collapsed;
            return nodes.map(function (node) {
                return (React.createElement(Menu.SubMenu, { title: React.createElement("span", null,
                        React.createElement(Icon, { type: node.icon }),
                        !collapsed ? node.name : ''), key: node.name }, node.children.map(function (child) { return (React.createElement(Menu.Item, { key: child.name },
                    React.createElement(Link, { to: child.path }, child.name))); })));
            });
        };
        _this.renderSiderbar = function () {
            var _a = _this.appStore, collapsed = _a.collapsed, toggle = _a.toggle, openKeys = _a.openKeys, selectedKeys = _a.selectedKeys;
            var menuProps = collapsed ? {} : {
                openKeys: openKeys.slice(),
            };
            return (React.createElement(Layout.Sider, { trigger: null, collapsible: true, collapsed: collapsed, breakpoint: "md", onCollapse: toggle, width: 256, className: styles['sider'] },
                React.createElement("div", { className: styles['logo'] },
                    React.createElement(Link, { to: "/" },
                        React.createElement("img", { src: logo, alt: "logo" }),
                        React.createElement("h1", null, "\u7F57\u76D8\u7BA1\u7406\u7CFB\u7EDF"))),
                React.createElement(Menu, __assign({ theme: "dark", mode: "inline" }, menuProps, { onOpenChange: _this.handleOpenChange, selectedKeys: selectedKeys.slice(), style: { padding: '16px 0', width: '100%' } }), _this.renderMenus(menus))));
        };
        _this.appStore = props.appStore;
        return _this;
    }
    LpSiderbar.prototype.render = function () {
        var _a = this.appStore, isMobile = _a.isMobile, collapsed = _a.collapsed, toggle = _a.toggle;
        return isMobile
            ? (React.createElement(DrawerMenu, { parent: null, level: null, iconChild: null, open: !collapsed, onMaskClick: function () { return toggle(true); }, width: "256px" }, this.renderSiderbar()))
            : this.renderSiderbar();
    };
    LpSiderbar = __decorate([
        inject('appStore'),
        observer,
        __metadata("design:paramtypes", [Object])
    ], LpSiderbar);
    return LpSiderbar;
}(React.Component));
export default LpSiderbar;
//# sourceMappingURL=index.js.map
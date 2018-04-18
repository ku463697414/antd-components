var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, action } from 'mobx';
import menus from './menus';
var AppStore = /** @class */ (function () {
    function AppStore() {
        var _this = this;
        /** 是否是移动设备 */
        this.isMobile = false;
        /** 侧边栏打开的菜单 */
        this.openKeys = [];
        /** 侧边栏选中的菜单 */
        this.selectedKeys = [];
        /** 侧边栏是否折叠 */
        this.collapsed = false;
        /** 登录状态 */
        this.logined = false;
        /** 登录账户 */
        this.user = {
            name: 'hp'
        };
        this.logout = function () {
            _this.logined = false;
        };
        this.setIsMobile = function (isMobile) {
            _this.isMobile = isMobile;
        };
        this.toggle = function (collapsed) {
            _this.collapsed = collapsed;
        };
        this.setOpenKeys = function (openKeys) {
            _this.openKeys = openKeys;
        };
        this.setKeysByPath = function (pathname) {
            menus.forEach(function (parent) {
                parent.children && parent.children.forEach(function (child) {
                    if (child.path === pathname) {
                        _this.selectedKeys = [child.name];
                        _this.openKeys = [parent.name];
                    }
                });
            });
        };
        var match = matchMedia('(max-width: 768px)');
        match.addListener(function () { return _this.setIsMobile(match.matches); });
    }
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], AppStore.prototype, "isMobile", void 0);
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], AppStore.prototype, "openKeys", void 0);
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], AppStore.prototype, "selectedKeys", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], AppStore.prototype, "collapsed", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], AppStore.prototype, "logined", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], AppStore.prototype, "user", void 0);
    __decorate([
        action,
        __metadata("design:type", Object)
    ], AppStore.prototype, "logout", void 0);
    __decorate([
        action,
        __metadata("design:type", Object)
    ], AppStore.prototype, "setIsMobile", void 0);
    __decorate([
        action,
        __metadata("design:type", Object)
    ], AppStore.prototype, "toggle", void 0);
    __decorate([
        action,
        __metadata("design:type", Object)
    ], AppStore.prototype, "setOpenKeys", void 0);
    __decorate([
        action,
        __metadata("design:type", Object)
    ], AppStore.prototype, "setKeysByPath", void 0);
    return AppStore;
}());
export { AppStore };
export default new AppStore();
//# sourceMappingURL=app.store.js.map
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
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import appStore from './app.store';
import { BasicLayout } from './layouts';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var browserHistory = createBrowserHistory();
        var routerStore = new RouterStore();
        var history = syncHistoryWithStore(browserHistory, routerStore);
        return (React.createElement(LocaleProvider, { locale: zhCN },
            React.createElement(Router, { history: history },
                React.createElement(Provider, { appStore: appStore, routerStore: routerStore },
                    React.createElement(Switch, null,
                        React.createElement(Route, { path: "/", component: BasicLayout }))))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=app.js.map
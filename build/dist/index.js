import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import 'moment/locale/zh-cn';
import * as FastClick from 'fastclick';
import { AppContainer } from 'react-hot-loader';
// import './g2';
// import './rollbar';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
// import 'antd/dist/antd.min.css';
import './index.scss';
useStrict(true);
var render = function () {
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(App, null)), document.getElementById('root'));
};
render();
if (module.hot) {
    module.hot.accept('./app', function () { return render(); });
}
FastClick['attach'](document.body);
registerServiceWorker();
//# sourceMappingURL=index.js.map
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

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root') as HTMLElement
  );
};

render();

if (module.hot) {
  module.hot.accept('./app', () => render());
}

FastClick['attach'](document.body);
registerServiceWorker();

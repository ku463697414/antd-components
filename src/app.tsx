import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

import appStore from './app.store';
import { BasicLayout } from './layouts';

class App extends React.Component {
  render() {
    const browserHistory = createBrowserHistory();
    const routerStore = new RouterStore();
    const history = syncHistoryWithStore(browserHistory, routerStore);
    
    return (
      <LocaleProvider locale={zhCN}>
        <Router history={history}>
          <Provider appStore={appStore} routerStore={routerStore}>
            <Switch>
              <Route path="/" component={BasicLayout} />
            </Switch>
          </Provider>
        </Router>
      </LocaleProvider>
    );
  }
}

export default App;
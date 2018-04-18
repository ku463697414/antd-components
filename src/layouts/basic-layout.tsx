import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { RouterStore, SynchronizedHistory } from 'mobx-react-router';
import { Layout, Icon } from 'antd';

import menus from '../menus';
import { LpSiderbar, LpHeader, LpContent, LpFooter } from '../components';
import { AppStore } from '../app.store';

export interface Props extends RouteComponentProps<{}> {
  appStore?: AppStore;
  routerStore?: RouterStore;
}

@inject('appStore', 'routerStore')
@observer
class BasicLayout extends React.Component<Props> {
  appStore: AppStore;
  routerStore: RouterStore;
  unsubscribeHistory: () => void;

  constructor(props: Props) {
    super(props);
    this.appStore = props.appStore!;
    this.routerStore = props.routerStore!;
  }

  componentDidMount() {
    // 监听路由变化
    const { setKeysByPath } = this.appStore;
    const { history } = this.routerStore;

    this.unsubscribeHistory = (history as SynchronizedHistory).subscribe(() => {
      setKeysByPath(location.pathname);
    });
  }

  componentWillUnmount() {
    this.unsubscribeHistory();
  }

  render() {
    return (
      <Layout>
        <LpSiderbar />
        <Layout>
          <LpHeader />
          <LpContent>
            <Switch>
              {menus.map((v) => {
                return v.children!.map((child, i) => (
                  <Route
                    key={i}
                    path={child.path}
                    component={child.component}
                    exact
                  />
                ));
              })}
            </Switch>
            <LpFooter
              links={[
                {
                  title: '罗盘商旅首页',
                  href: 'http://www.jiketravel.com',
                  target: '_blank'
                },
                {
                  title: 'gitlab',
                  href: 'http://120.27.146.48:9090/jike/customer-admin',
                  target: '_blank'
                }
              ]}
              copyright={
                <div>Copyright <Icon type="copyright" /> 2018 罗盘商旅技术部出品</div>
              }
            />
          </LpContent>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
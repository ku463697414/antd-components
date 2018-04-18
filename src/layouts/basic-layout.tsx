import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { RouterStore, SynchronizedHistory } from 'mobx-react-router';
import { Layout, Icon } from 'antd';

import menus from '../menus';
import { AntdSiderbar, AntdHeader, AntdContent, AntdFooter } from '../components';
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
        <AntdSiderbar />
        <Layout>
          <AntdHeader />
          <AntdContent>
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
            <AntdFooter
              links={[
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
              ]}
              copyright={
                <div>Copyright <Icon type="copyright" /> 2018 中国制造</div>
              }
            />
          </AntdContent>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
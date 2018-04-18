import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Layout, Divider, Icon, Menu, Dropdown, Avatar, Spin } from 'antd';

import { AppStore } from '../../app.store';

export interface Props {
  appStore?: AppStore;
}

const styles = require('./index.scss');
const logo = require('../../assets/images/logo.png');
const avatar = require('../../assets/images/avatar.png');

@inject('appStore')
@observer
class AntdHeader extends React.Component<Props> {
  appStore: AppStore;

  constructor(props: Props) {
    super(props);
    this.appStore = props.appStore!;
  }

  render() {
    const { user, isMobile, collapsed, toggle } = this.appStore;
    const menu = (
      <Menu className={styles['menu']}>
        <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );

    return (
      <Layout.Header className={styles['header']}>
        {isMobile && (
          [
            <Link
              key="logo"
              to="/" 
              className={styles['logo']}
            >
              <img src={logo} />
            </Link>,
            <Divider key="line" type="vertical" />
          ]
        )}
        <Icon
          className={styles['trigger']}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => toggle(!collapsed)}
        />
        <div className={styles['right']}>
          {user.name ? (
              <Dropdown overlay={menu}>
                <span className={`${styles['action']} ${styles['account']}`}>
                  {user.avatar
                    ? <Avatar size="small" className={styles['avatar']} src={user.avatar} />
                    : <Avatar size="small" className={styles['avatar']} src={avatar} />
                  }
                  <span className={styles['name']}>{user.name}</span>
                </span>
              </Dropdown>
            ) : <Spin size="small" style={{ marginLeft: 8 }} />}
        </div>
      </Layout.Header>
    );
  }
}

export default AntdHeader;

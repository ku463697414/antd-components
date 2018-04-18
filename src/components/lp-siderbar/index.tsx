import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Layout, Menu, Icon } from 'antd';
import DrawerMenu from 'rc-drawer-menu';

import { AppStore } from '../../app.store';
import menus from '../../menus';

/** 侧边栏菜单 */
export interface SiderbarMenu {
  name: string;
  path?: string;
  children?: SiderbarMenu[];
}

export interface Props {
  appStore?: AppStore;
}

require('rc-drawer-menu/assets/index.css');
const styles = require('./index.scss');
const logo = require('../../assets/images/logo.png');

@inject('appStore')
@observer
class LpSiderbar extends React.Component {
  appStore: AppStore;

  constructor(props: Props) {
    super(props);
    this.appStore = props.appStore!;
  }

  handleOpenChange = (openKeys: string[]) => {
    const { setOpenKeys } = this.appStore;
    if (openKeys.length === 0) {
      // 全部关闭
      setOpenKeys([]);
    } else {
      // len为1时，从无到有
      // len为2时，从一个菜单到另一个菜单
      const key = openKeys[1] || openKeys[0];
      const menu = menus.find(v => v.name === key);
      if (menu && menu.children) {
        setOpenKeys([menu.name]);
      }
    }
  };

  renderMenus = (nodes: MenuData[]): JSX.Element[] => {
    const { collapsed } = this.appStore;
    return nodes.map(node => {
      return (
        <Menu.SubMenu title={<span><Icon type={node.icon!} />{!collapsed ? node.name : ''}</span>} key={node.name}>
          {node.children!.map(child => (
            <Menu.Item key={child.name}>
              <Link to={child.path!}>{child.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    });
  };

  renderSiderbar = () => {
    const { collapsed, toggle, openKeys, selectedKeys } = this.appStore;
    const menuProps = collapsed ? {} : {
      openKeys: openKeys.slice(),
    };

    return (
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onCollapse={toggle}
        width={256}
        className={styles['sider']}
      >
        <div className={styles['logo']}>
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>罗盘管理系统</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={this.handleOpenChange}
          selectedKeys={selectedKeys.slice()}
          style={{ padding: '16px 0', width: '100%' }}
        >
          {this.renderMenus(menus)}
        </Menu>
      </Layout.Sider>
    );
  }

  render() {
    const {
      isMobile,
      collapsed,
      toggle
    } = this.appStore;

    return isMobile
      ? (
          <DrawerMenu
            parent={null}
            level={null}
            iconChild={null}
            open={!collapsed}
            onMaskClick={() => toggle(true)}
            width="256px"
          >
            {this.renderSiderbar()}
          </DrawerMenu>
        )
      : this.renderSiderbar();
  }
}

export default LpSiderbar;

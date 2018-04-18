import { observable, action } from 'mobx';

import menus from './menus';

export class AppStore {
  /** 是否是移动设备 */
  @observable isMobile = false;
  /** 侧边栏打开的菜单 */
  @observable openKeys: string[] = [];
  /** 侧边栏选中的菜单 */
  @observable selectedKeys: string[] = [];
  /** 侧边栏是否折叠 */
  @observable collapsed = false;
  /** 登录状态 */
  @observable logined = false;
  /** 登录账户 */
  @observable user: User = {
    name: 'zqgu'
  };

  constructor() {
    const match = matchMedia('(max-width: 768px)');
    match.addListener(() => this.setIsMobile(match.matches));
  }

  @action
  logout = () => {
    this.logined = false;
  };

  @action
  setIsMobile = (isMobile: boolean) => {
    this.isMobile = isMobile;
  }

  @action
  toggle = (collapsed: boolean) => {
    this.collapsed = collapsed;
  }

  @action
  setOpenKeys = (openKeys: string[]) => {
    this.openKeys = openKeys;
  }
  
  @action
  setKeysByPath = (pathname: string) => {
    menus.forEach(parent => {
      parent.children && parent.children.forEach(child => {
        if (child.path === pathname) {
          this.selectedKeys = [child.name];
          this.openKeys = [parent.name];
        }
      });
    });
  }
}

export default new AppStore();

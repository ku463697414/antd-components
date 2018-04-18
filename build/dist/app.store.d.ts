export declare class AppStore {
    /** 是否是移动设备 */
    isMobile: boolean;
    /** 侧边栏打开的菜单 */
    openKeys: string[];
    /** 侧边栏选中的菜单 */
    selectedKeys: string[];
    /** 侧边栏是否折叠 */
    collapsed: boolean;
    /** 登录状态 */
    logined: boolean;
    /** 登录账户 */
    user: User;
    constructor();
    logout: () => void;
    setIsMobile: (isMobile: boolean) => void;
    toggle: (collapsed: boolean) => void;
    setOpenKeys: (openKeys: string[]) => void;
    setKeysByPath: (pathname: string) => void;
}
declare const _default: AppStore;
export default _default;

/// <reference types="react" />
import * as React from 'react';
import { AppStore } from '../../app.store';
/** 侧边栏菜单 */
export interface SiderbarMenu {
    name: string;
    path?: string;
    children?: SiderbarMenu[];
}
export interface Props {
    appStore?: AppStore;
}
declare class LpSiderbar extends React.Component {
    appStore: AppStore;
    constructor(props: Props);
    handleOpenChange: (openKeys: string[]) => void;
    renderMenus: (nodes: MenuData[]) => JSX.Element[];
    renderSiderbar: () => JSX.Element;
    render(): JSX.Element;
}
export default LpSiderbar;

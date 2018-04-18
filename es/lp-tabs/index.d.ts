/// <reference types="react" />
import * as React from 'react';
import { TabsProps } from 'antd/es/tabs';
export interface Qs {
    [key: string]: number | string | string[];
}
export interface Props extends TabsProps {
    urlKey: string;
    /**
     * params: 传递url参数
     */
    onLpTabClick: (key: string, params: Qs) => void;
}
declare class LpTabs extends React.Component<Props> {
    handleTabClick: (selectedKey: string) => void;
    render(): JSX.Element;
}
export default LpTabs;

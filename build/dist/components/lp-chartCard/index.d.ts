/// <reference types="react" />
import * as React from 'react';
import { CardProps } from 'antd/es/card';
export interface Props extends CardProps {
    contentHeight?: number | string;
    title: string;
    avatar?: JSX.Element;
    action: JSX.Element;
    total: string;
    footer?: JSX.Element;
}
declare class LpChartCard extends React.Component<Props> {
    state: {
        loading: boolean;
    };
    render(): JSX.Element;
}
export default LpChartCard;

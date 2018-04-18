/// <reference types="react" />
import * as React from 'react';
export interface Props {
    colorful?: boolean;
    flag: string;
    className?: string;
    style?: {};
}
declare class LpTrend extends React.Component<Props> {
    render(): JSX.Element;
}
export default LpTrend;

/// <reference types="react" />
import * as React from 'react';
export interface Props {
    value?: number;
    /** 货币符号 */
    symbol?: string;
    /** 字体大小 */
    size?: 'normal' | 'large';
    /** 是否需要颜色 */
    color?: boolean;
    /** 是否需要小数点 */
    float?: boolean;
}
declare class LpPrice extends React.Component<Props> {
    render(): JSX.Element;
}
export default LpPrice;

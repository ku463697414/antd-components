/// <reference types="react" />
import * as React from 'react';
export interface Props {
    /** 标题 */
    title?: string;
    /** 列数 */
    col?: number;
    /** 分组 */
    groupcol?: number;
}
declare class LpDescriptionList extends React.Component<Props> {
    render(): JSX.Element;
}
export default LpDescriptionList;

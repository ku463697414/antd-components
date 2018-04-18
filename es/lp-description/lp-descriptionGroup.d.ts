/// <reference types="react" />
import * as React from 'react';
export interface Props {
    column?: number;
    groupcol?: number;
}
declare class LpDescriptionGroup extends React.Component<Props> {
    render(): JSX.Element | (React.ReactElement<any> | (() => null))[];
}
export default LpDescriptionGroup;

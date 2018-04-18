/// <reference types="react" />
import * as React from 'react';
export interface Props {
    term?: string;
    column?: number;
    groupcol?: number;
}
declare class LpDescription extends React.Component<Props> {
    render(): JSX.Element;
}
export default LpDescription;

/// <reference types="react" />
import * as React from 'react';
import { AppStore } from '../../app.store';
export interface Props {
    appStore?: AppStore;
}
declare class LpHeader extends React.Component<Props> {
    appStore: AppStore;
    constructor(props: Props);
    render(): JSX.Element;
}
export default LpHeader;

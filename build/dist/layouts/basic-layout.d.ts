/// <reference types="react" />
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';
import { AppStore } from '../app.store';
export interface Props extends RouteComponentProps<{}> {
    appStore?: AppStore;
    routerStore?: RouterStore;
}
declare class BasicLayout extends React.Component<Props> {
    appStore: AppStore;
    routerStore: RouterStore;
    unsubscribeHistory: () => void;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default BasicLayout;

/// <reference types="react" />
import * as React from 'react';
export interface FooterLink {
    title: string;
    href: string;
    target: '_blank' | '_self';
}
export interface Props {
    links?: FooterLink[];
    copyright?: JSX.Element;
    className?: string;
}
declare class AntdFooter extends React.Component<Props> {
    render(): JSX.Element;
}
export default AntdFooter;

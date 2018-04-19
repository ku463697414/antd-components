/// <reference types="react" />
import * as React from 'react';
export interface Props {
    cardLink: any;
    openModal: () => void;
    handleDelete: () => void;
    remark: any;
    arr: string[];
}
declare class LabCard extends React.Component<Props> {
    constructor(props: Props);
    render(): JSX.Element;
}
export default LabCard;

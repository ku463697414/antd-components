/// <reference types="react" />
import * as React from 'react';
import { LpOriginSearchForm, FormField } from '../../components/lp-searchForm';
export interface State {
    varity: Object;
    value: string;
    expand: boolean;
}
declare class BasicForm extends React.Component {
    formRef: LpOriginSearchForm;
    state: State;
    fltData: any[];
    changeChart: (key: string, type: string) => void;
    handleChange: (e: any) => void;
    setFormRef: (ref: LpOriginSearchForm) => void;
    handleSearchFormSubmit: () => void;
    toggleForm: () => void;
    setFormFields: () => FormField[];
    setFormFields1: () => {
        key: string;
        label: string;
        node: JSX.Element;
    }[];
    render(): JSX.Element;
}
export default BasicForm;

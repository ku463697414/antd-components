/// <reference types="react" />
import * as React from 'react';
import { FormComponentProps, FormItemProps } from 'antd/es/form';
export interface FormField extends FormItemProps {
    key: string;
    options?: any;
    node?: any;
    /** 扩展表单字段 */
    extraKeys?: string[];
}
export interface Props extends FormComponentProps {
    /** 表单字段 */
    fields: FormField[];
    /** 获取ref */
    wrappedComponentRef?: (ref: AntdOriginModalForm) => void;
}
export declare class AntdOriginModalForm extends React.Component<Props> {
    /**
     * 生成表单项实体
     * @param item
     */
    renderField: (item: FormField) => JSX.Element;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<any>;
export default _default;

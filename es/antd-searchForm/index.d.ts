/// <reference types="react" />
import * as React from 'react';
import { FormComponentProps, FormItemProps } from 'antd/es/form';
export interface Qs {
    [key: string]: number | string | string[];
}
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
    wrappedComponentRef?: (ref: AntdOriginSearchForm) => void;
    /** 列数 */
    columnsNum?: number;
    /** 监听新增 */
    onCreate?: () => void;
    /** 监听编辑 */
    onEdit?: () => void;
    /** 监听删除 */
    onDelete?: () => void;
    /** 监听查询 */
    onSubmit: (params: Qs) => void;
}
export declare class AntdOriginSearchForm extends React.Component<Props> {
    /**
     * 重置查询参数
     */
    handleClear: () => void;
    /**
     * 处理新增按钮
     */
    handleCreate: () => void;
    /**
     * 处理编辑按钮
     */
    handleEdit: () => void;
    /**
     * 处理删除按钮
     */
    handleDelete: () => void;
    /**
     * 处理查询
     */
    handleSubmit: (e?: React.SyntheticEvent<HTMLElement> | undefined) => void;
    /**
     * 将查询参数分行
     * @param arr
     */
    renderRow: (fields: FormField[]) => JSX.Element[];
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<any>;
export default _default;

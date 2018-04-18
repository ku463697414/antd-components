/// <reference types="react" />
import * as React from 'react';
import { PaginationProps } from 'antd/es/pagination';
import { TableProps } from 'antd/es/table';
export interface Qs {
    [key: string]: number | string | string[];
}
export interface Props extends TableProps<object> {
    /** 表格分页变化时触发 */
    onLpChange: (params: Qs) => void;
}
export interface State {
    current?: number;
    pageSize?: number;
}
declare class LpTable extends React.Component<Props> {
    state: State;
    /**
     * 监听分页、排序、筛选变化变化
     */
    handleChange: ({current, pageSize}: PaginationProps) => void;
    setPaginationProps: ({no, limit}: {
        no?: string | number | undefined;
        limit?: string | number | undefined;
    }) => void;
    render(): JSX.Element;
}
export default LpTable;

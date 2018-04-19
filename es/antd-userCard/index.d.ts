/// <reference types="react" />
import * as React from 'react';
export interface DataSource {
    gender?: string;
    face?: string;
    userId?: number;
    username?: string;
}
export interface Props {
    dataSource: DataSource[];
    cardTitle?: string;
    userMsg?: React.ReactNode;
    cardWidth?: string;
    onDelete?: (userId: number) => void;
    onEdit?: (userId: number) => void;
}
declare class AntdUserCards extends React.Component<Props> {
    /**
     * 删除卡片
     */
    handleDelete: (userId: number) => void;
    /**
     * 修改卡片
     */
    handleEdit: (userId: number) => void;
    render(): JSX.Element;
}
export default AntdUserCards;

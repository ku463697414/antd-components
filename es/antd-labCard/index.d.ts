/// <reference types="react" />
import * as React from 'react';
export interface DataSource {
    /** card内容描述 */
    remark?: string;
    /** 标题 */
    name?: string;
    /** 库Id */
    labId?: number;
    /** link的地址前缀 */
    link?: string;
}
export interface Props {
    dataSource: DataSource[];
    /** 监听编辑 */
    onEdit?: (LabId: number) => void;
    /** 监听删除 */
    onDelete?: (LabId: number) => void;
    /** 头像展示 */
    arr?: string[];
    /** 一个卡片里头像的数量 */
    avatarNumber?: number;
}
declare class AntdLabCard extends React.Component<Props> {
    /**
     * 删除卡片
     */
    handleDelete: (LabId: number) => void;
    /**
     * 修改卡片
     */
    handleEdit: (LabId: number) => void;
    render(): JSX.Element;
}
export default AntdLabCard;

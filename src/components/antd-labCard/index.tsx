import * as React from 'react';
import { Card, Icon, Popconfirm, Avatar } from 'antd';
import { Link } from 'react-router-dom';
const style = require('./index.scss');
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
class AntdLabCard extends React.Component<Props> {
  /**
   * 删除卡片
   */
  handleDelete = (LabId: number) => {
    this.props.onDelete && this.props.onDelete(LabId);
  };

  /**
   * 修改卡片
   */
  handleEdit = (LabId: number) => {
    this.props.onEdit && this.props.onEdit(LabId);
  };
  render() {
    const { dataSource, arr } = this.props;
    const cardContent = dataSource.map(v => {
      return (
        <div key={v.labId}>
          <Card
            title={<Link to={`${v.link}${v.labId}`}>{v.name}</Link>}
            actions={[
              <div key={'d1'} onClick={() => this.handleEdit(v.labId!)}>
                <Icon type="edit" />&nbsp;&nbsp;&nbsp;<span>编辑</span>
              </div>,
              <div key={'d2'}>
                <Popconfirm
                  title={'确认删除?'}
                  onConfirm={() => this.handleDelete(v.labId!)}
                >
                  <Icon type="delete" />&nbsp;&nbsp;&nbsp;<span>删除</span>
                </Popconfirm>
              </div>
            ]}
          >
            <div
              className={`${style['LabcardM-B']} ${style['personCardItemS']}`}
            >
              {v.remark}
            </div>
            <div className={style['personCardItemS']}>
              {arr!
                .slice(0, this.props.avatarNumber || 5)
                .map((v: string, i: number) => {
                  return (
                    <Avatar
                      key={i}
                      size="large"
                      src={v}
                      className={style['Avatar']}
                    />
                  );
                })}
            </div>
          </Card>
        </div>
      );
    });
    return <div className={style['LabCard']}>{cardContent}</div>;
  }
}
export default AntdLabCard;

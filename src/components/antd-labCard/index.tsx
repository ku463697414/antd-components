import * as React from 'react';
import { Card, Icon, Popconfirm, Avatar } from 'antd';
const style = require('./index.scss');
export interface Props {
  cardLink: any;
  openModal: () => void;
  handleDelete: () => void;
  remark: any;
  arr: string[];
}
class LabCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const cardLink = this.props.cardLink;
    return (
      <div className={style['LabCard']}>
        <Card
          title={cardLink}
          actions={[
            <div key={'d1'} onClick={() => this.props.openModal()}>
              <Icon type="edit" />&nbsp;&nbsp;&nbsp;<span>编辑</span>
            </div>,
            <div key={'d2'}>
              <Popconfirm
                title={'确认删除?'}
                onConfirm={() => this.props.handleDelete()}
              >
                <Icon type="delete" />&nbsp;&nbsp;&nbsp;<span>删除</span>
              </Popconfirm>
            </div>
          ]}
        >
          <div className={`${style['LabcardM-B']} ${style['personCardItemS']}`}>
            {this.props.remark}
          </div>
          <div className={style['personCardItemS']}>
            {this.props.arr.slice(0, 5).map((v: any, i: number) => {
              return (
                <Avatar
                  key={i}
                  size="large"
                  src={`/file/${v}`}
                  className={style['Avatar']}
                />
              );
            })}
          </div>
        </Card>
      </div>
    );
  }
}
export default LabCard;

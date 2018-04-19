import * as React from 'react';
import { Card, Icon, Row, Col, Tooltip, Popconfirm } from 'antd';
const style = require('./index.scss');

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

class AntdUserCards extends React.Component<Props> {
  /**
   * 删除卡片
   */
  handleDelete = (userId: number) => {
    this.props.onDelete && this.props.onDelete(userId);
  };
  /**
   * 修改卡片
   */
  handleEdit = (userId: number) => {
    this.props.onEdit && this.props.onEdit(userId);
  };

  render() {
    const { dataSource, userMsg, cardWidth } = this.props;

    const cardContent = dataSource.map(v => {
      return (
        <div key={v.userId}>
          <div
            className={style['user_gender']}
            style={
              v.gender === '1'
                ? { borderTop: '60px solid #3499fb' }
                : v.gender === '2'
                  ? { borderTop: '60px solid #efc45d' }
                  : { borderTop: '60px solid #ddd' }
            }
          >
            <span>
              {v.gender === '1' ? '男' : v.gender === '2' ? '女' : '无'}
            </span>
          </div>
          <Row>
            <Col md={24} className={style['user_card']}>
              <img
                alt="example"
                src={v.face}
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '90px'
                }}
              />
              <Tooltip key="uc2" placement="bottom" title="修改">
                {this.props.onEdit && (
                  <Icon
                    type="form"
                    className={style['user_icon']}
                    onClick={() => this.handleEdit(v.userId!)}
                  />
                )}
              </Tooltip>
              <p style={{ fontSize: '18px', color: '#262626' }}>{v.username}</p>
            </Col>
            <Col span={24} className={style['user_msg']}>
              {userMsg}
            </Col>
          </Row>

          <Tooltip key="uc1" placement="bottom" title="删除">
            {this.props.onDelete && (
              <Popconfirm
                title={'确定删除 ？'}
                onConfirm={() => this.handleDelete(v.userId!)}
              >
                <Icon type="delete" className={style['user_delete']} />
              </Popconfirm>
            )}
          </Tooltip>
        </div>
      );
    });

    return (
      <Card
        style={{
          borderRadius: '5px',
          width: cardWidth,
          display: 'inline-block'
        }}
        hoverable
        type={'inner'}
      >
        {cardContent}
      </Card>
    );
  }
}

export default AntdUserCards;

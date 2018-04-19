import * as React from 'react';
import { AntdUserCards } from '../../components';
import { Icon, Tooltip } from 'antd';

class UserCards extends React.Component {
  handalDelete = () => null;

  handalEdit = () => null;
  render() {
    const datasource = [
      {
        gender: '1',
        face: require('../../assets/images/avatar.png'),
        userId: 1,
        userName: '黄大大'
      }
    ];

    const userMsg = (
      <div>
        <p>
          <Icon type="idcard" />&nbsp;&nbsp;&nbsp; 超级管理员
        </p>
        <p>
          <Icon type="team" />&nbsp;&nbsp;&nbsp; 阿里
        </p>
        <p>
          <Icon type="phone" />&nbsp;&nbsp;&nbsp; 13002505165
        </p>
        <p>
          <Tooltip placement="bottom" title={'uhfuhaf@sd.com'}>
            <Icon type="mail" />&nbsp;&nbsp;&nbsp; uhfuhaf@sd.com
          </Tooltip>
        </p>
        <p>
          <Icon type="clock-circle-o" />&nbsp;&nbsp;&nbsp; 2012-03-04 22:00:33
        </p>
      </div>
    );

    return (
      <div>
        <AntdUserCards
          dataSource={datasource}
          onDelete={this.handalDelete}
          onEdit={this.handalEdit}
          userMsg={userMsg}
          cardWidth={'25%'}
        />
      </div>
    );
  }
}

export default UserCards;

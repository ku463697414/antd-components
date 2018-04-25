import { AntdLabCard } from '../../components';
import * as React from 'react';
import { List } from 'antd';

export interface PersonLab {
  remark: string;
  name: string;
  labId: number;
}
class LabCard extends React.Component {
  handalDelete = () => null;
  handalEdit = () => null;
  render() {
    const labs = [
      {
        remark: '卧槽不要太吊',
        labId: 1,
        name: '你特么点我啊'
      },
      {
        remark: '卧槽不要太吊2',
        labId: 2,
        name: '你特么点我啊2'
      }
    ];

    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={labs}
        renderItem={(item: PersonLab) => {
          const datasource = [
            {
              remark: item.remark,
              name: item.name,
              labId: item.labId,
              link: '/face/personlab/'
            }
          ];
          const arrlist: string = require('../../assets/images/avatar.png');
          const arrlist1: string = require('../../assets/images/avatar.png');
          const arrlist2: string = require('../../assets/images/avatar.png');
          const arrlist3: string = require('../../assets/images/avatar.png');
          const arrlist4: string = require('../../assets/images/avatar.png');
          const arr = [arrlist, arrlist1, arrlist2, arrlist3, arrlist4];
          return (
            <List.Item key={item.labId}>
              <AntdLabCard
                dataSource={datasource}
                onDelete={this.handalDelete}
                onEdit={this.handalEdit}
                arr={arr}
                avatarNumber={2}
              />
            </List.Item>
          );
        }}
      />
    );
  }
}
export default LabCard;

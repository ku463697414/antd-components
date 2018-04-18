import * as React from 'react';
import { 
  LpDescriptionList,
  LpDescriptionGroup,
  LpDescription
} from '../../components';

class DescriptionDemo extends React.Component {
  render() {
    return (
      <div>
        <LpDescriptionList title="联系人信息" col={3}>
          <LpDescription term="姓名">xxxx</LpDescription>
          <LpDescription term="手机号">xxxx</LpDescription>
          <LpDescription term="邮箱">xxxx</LpDescription>
          <LpDescription term="姓名">xxxx</LpDescription>
          <LpDescription term="手机号">xxxx</LpDescription>
          <LpDescription term="邮箱">xxxx</LpDescription>
          <LpDescription term="姓名">xxxx</LpDescription>
          <LpDescription term="手机号">xxxx</LpDescription>
          <LpDescription term="邮箱">xxxx</LpDescription>
        </LpDescriptionList><br /><br />
        <LpDescriptionList title="联系人信息" col={1}>
          <LpDescription term="姓名">xxxx</LpDescription>
          <LpDescription term="手机号">xxxx</LpDescription>
          <LpDescription term="邮箱">xxxx</LpDescription>
        </LpDescriptionList><br /><br />
        <LpDescriptionList title="联系人信息" col={1} groupcol={3}>
          <LpDescriptionGroup>
            <LpDescription term="姓名">xxxx</LpDescription>
            <LpDescription term="手机号">xxxx</LpDescription>
            <LpDescription term="邮箱">xxxx</LpDescription>
          </LpDescriptionGroup>
          <LpDescriptionGroup>
            <LpDescription term="姓名">xxxx</LpDescription>
            <LpDescription term="手机号">xxxx</LpDescription>
            <LpDescription term="邮箱">xxxx</LpDescription>
          </LpDescriptionGroup>
        </LpDescriptionList>
      </div>
    );
  }
}

export default DescriptionDemo;
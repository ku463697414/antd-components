import * as React from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'antd/es/tabs';
import * as qs from 'qs';

export interface Qs { 
  [key: string]: number | string | string[];
}

export interface Props extends TabsProps {
  urlKey: string;
  /**
   * params: 传递url参数
   */
  onLpTabClick: (
    key: string,
    params: Qs
  ) => void;
}

class LpTabs extends React.Component<Props> {
  handleTabClick = (selectedKey: string) => {
    // 上次查询参数
    const searchParams = qs.parse(location.search.substring(1));
    // 合并参数
    const params = {
      limit: 15,
      ...searchParams,
      [this.props.urlKey]: selectedKey,
      no: 1
    };
    // 去除没有值或者值为空的key，去除字符串两边的空格
    Object.keys(params).forEach(key => {
      if (typeof params[key] === 'string') {
        params[key] = params[key].trim();
      }
      (params[key] === undefined || params[key] === '') && delete params[key];
    });
    // 变更路由
    const path = location.pathname + '?' + qs.stringify(params);
    history.pushState(null, '', path);

    this.props.onLpTabClick && this.props.onLpTabClick(selectedKey, params);
  };

  render() {
    return (
      <Tabs {...this.props} onTabClick={this.handleTabClick}>
        {this.props.children}
      </Tabs>
    );
  }
}

export default LpTabs;

import * as React from 'react';
import { Table } from 'antd';
import { PaginationProps } from 'antd/es/pagination';
import { TableProps } from 'antd/es/table';
import * as qs from 'qs';

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

class LpTable extends React.Component<Props> {
  state: State = {
    current: 1,
    pageSize: 15
  };

  /**
   * 监听分页、排序、筛选变化变化
   */
  handleChange = ({ current, pageSize }: PaginationProps) => {
    // 上次查询参数
    const querystring = location.search.substring(1);
    const searchParams = qs.parse(querystring);
    // 合并参数
    const params = { ...searchParams, no: current, limit: pageSize };

    // 去除没有值的key
    Object.keys(params).forEach(key => {
      (params[key] === undefined || params[key] === '') && delete params[key];
    });
    // 变更路由
    const path = location.pathname + '?' + qs.stringify(params);
    history.pushState(null, '', path);

    this.setState({
      current,
      pageSize
    });

    this.props.onLpChange(params);
  };

  setPaginationProps = ({
    no,
    limit
  }: {
    no?: number | string;
    limit?: number | string;
  }) => {
    const current =
      typeof no === 'undefined'
        ? 1
        : typeof no === 'string' ? parseInt(no, 10) : no;
    const pageSize =
      typeof limit === 'undefined'
        ? 15
        : typeof limit === 'string' ? parseInt(limit, 10) : limit;

    this.setState({
      current,
      pageSize
    });
  };

  render() {
    const { current, pageSize } = this.state;
    const { pagination, onLpChange, ...rest } = this.props;
    // 分页参数
    let defaultPagination =
      pagination === false
        ? false
        : {
            showSizeChanger: true,
            pageSizeOptions: ['15', '30', '50'],
            showQuickJumper: true,
            current,
            pageSize,
            showTotal: (t = 0) => `共 ${t} 条`,
            total: 0,
            ...(pagination as PaginationProps)
          };
    // 表格参数
    const tableProps = {
      onChange: this.handleChange,
      pagination: defaultPagination,
      ...rest
    };

    return <Table {...tableProps as TableProps<object>} />;
  }
}

export default LpTable;

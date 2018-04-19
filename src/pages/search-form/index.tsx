import * as React from 'react';
import { AntdSearchForm, AntdRangePicker } from '../../components';
import { Select, Input, TreeSelect } from 'antd';
import {
  AntdOriginSearchForm,
  FormField
} from '../../components/antd-searchForm';

class BasicForm extends React.Component {
  formRef: AntdOriginSearchForm;
  setFormFields = () => {
    const formFields: FormField[] = [
      {
        key: 'planeOrderNo',
        label: '订单号',
        node: <Input autoComplete="off" />
      },
      {
        key: 'idcName',
        label: '旅客',
        node: <Input autoComplete="off" />
      },
      {
        key: 'createTime',
        label: '预订日期',
        node: <AntdRangePicker />,
        extraKeys: ['createTimeStart', 'createTimeEnd']
      },
      {
        key: 'orderType',
        label: '订单类型',
        options: {
          initialValue: ''
        },
        node: (
          <Select>
            <Select.Option value="">全部</Select.Option>
            <Select.Option key="1" value="1">
              机票订单
            </Select.Option>
          </Select>
        )
      },
      {
        key: 'departCityName',
        label: '出发地',
        node: <Input autoComplete="off" />
      },
      {
        key: 'arriveCityName',
        label: '目的地',
        node: <Input autoComplete="off" />
      },
      {
        key: 'nameCn',
        label: '预订人',
        node: <Input autoComplete="off" />
      },
      {
        key: 'deptId',
        label: '部门',
        node: (
          <TreeSelect
            showSearch
            allowClear
            treeNodeFilterProp="label"
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="请选择部门"
            treeDefaultExpandAll
          />
        )
      },
      {
        key: 'costCenterId',
        label: '成本中心',
        node: (
          <Select
            showSearch
            placeholder="请选择成本中心"
            optionFilterProp="children"
          >
            <Select.Option key="168" value="168">
              技术部
            </Select.Option>
          </Select>
        )
      }
    ];
    return formFields;
  };
  setFormRef = (ref: AntdOriginSearchForm) => {
    this.formRef = ref;
  };

  render() {
    return (
      <div>
        <AntdSearchForm
          fields={this.setFormFields()}
          wrappedComponentRef={this.setFormRef}
        />
      </div>
    );
  }
}

export default BasicForm;

import * as React from 'react';
import { Button, Form, Row, Col } from 'antd';
import { FormComponentProps, FormItemProps } from 'antd/es/form';
import * as qs from 'qs';
import * as moment from 'moment';

const style = {
  searchForm: {
    padding: '14px 24px 0 24px',
    background: '#fbfbfb',
    border: '1px solid #d9d9d9',
    borderRadius: '6px',
    marginBottom: '14px'
  },
  formItem: {
    marginBottom: '14px'
  },
  btnGroup: {
    marginBottom: '14px'
  }
};

export interface Qs {
  [key: string]: number | string | string[];
}

export interface FormField extends FormItemProps {
  key: string;
  // tslint:disable-next-line:no-any
  options?: any;
  // tslint:disable-next-line:no-any
  node?: any;
  /** 扩展表单字段 */
  extraKeys?: string[];
}

export interface Props extends FormComponentProps {
  /** 表单字段 */
  fields: FormField[];
  /** 获取ref */
  wrappedComponentRef?: (ref: AntdOriginSearchForm) => void;
  /** 列数 */
  columnsNum?: number;
  /** 监听新增 */
  onCreate?: () => void;
  /** 监听编辑 */
  onEdit?: () => void;
  /** 监听删除 */
  onDelete?: () => void;
  /** 监听查询 */
  onSubmit: (params: Qs) => void;
}

// 默认每行显示的查询条件个数
const COLUMNS = 3;

export class AntdOriginSearchForm extends React.Component<Props> {
  /**
   * 重置查询参数
   */
  handleClear = () => {
    this.props.form.resetFields();
    this.handleSubmit();
  };

  /**
   * 处理新增按钮
   */
  handleCreate = () => {
    this.props.onCreate && this.props.onCreate();
  };

  /**
   * 处理编辑按钮
   */
  handleEdit = () => {
    this.props.onEdit && this.props.onEdit();
  };

  /**
   * 处理删除按钮
   */
  handleDelete = () => {
    this.props.onDelete && this.props.onDelete();
  };

  /**
   * 处理查询
   */
  handleSubmit = (e?: React.SyntheticEvent<HTMLElement>) => {
    e && e.preventDefault();

    // 表单参数
    const formParams = this.props.form.getFieldsValue();
    // 上次查询参数
    const searchParams = qs.parse(location.search.substring(1));
    // 合并参数
    const params = { limit: 15, ...searchParams, ...formParams, no: 1 };
    // 去除没有值或者值为空的key，去除字符串两边的空格
    Object.keys(params).forEach(key => {
      if (typeof params[key] === 'string') {
        params[key] = params[key].trim();
      }
      (params[key] === undefined || params[key] === '') && delete params[key];
      // 将moment转换为字符串
      // datepicker
      if (moment.isMoment(params[key])) {
        params[key] = params[key].format('YYYY-MM-DD');
      } else if (
        // rangepicker
        Array.isArray(params[key]) &&
        params[key].length === 2 &&
        moment.isMoment(params[key][0]) &&
        moment.isMoment(params[key][1])
      ) {
        delete params[key];
      }
    });

    this.props.onSubmit && this.props.onSubmit(params);
  };

  /**
   * 将查询参数分行
   * @param arr
   */
  renderRow = (fields: FormField[]) => {
    const { form } = this.props;
    return fields.map((item, index) => {
      // 日期范围组件
      if (item.extraKeys && item.extraKeys.length === 2) {
        form.getFieldDecorator(item.extraKeys[0]);
        form.getFieldDecorator(item.extraKeys[1]);
        item.options = {
          getValueFromEvent: (value: string[]) => {
            form.setFieldsValue({
              [item.extraKeys![0]]: value[0],
              [item.extraKeys![1]]: value[1]
            });
            return value;
          },
          ...item.options
        };
      }

      return (
        <Col lg={24 / (this.props.columnsNum || COLUMNS)} key={index}>
          <Form.Item
            key={item.key}
            style={style.formItem}
            label={item.label}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            {form.getFieldDecorator(item.key, item.options)(item.node)}
          </Form.Item>
        </Col>
      );
    });
  };

  render() {
    const { fields } = this.props;

    return (
      <Form
        layout="horizontal"
        style={style.searchForm}
        onSubmit={this.handleSubmit}
      >
        <Row gutter={20}>
          {fields && this.renderRow(fields)}
          {
            <Col
              lg={24 / (this.props.columnsNum || COLUMNS)}
              style={style.btnGroup}
            >
              <Row>
                <Col span={18} offset={6}>
                  {fields &&
                    fields.length > 0 && (
                      <span>
                        <Button type="primary" htmlType="submit">
                          搜索
                        </Button>&nbsp;&nbsp;
                      </span>
                    )}
                  {fields &&
                    fields.length > 0 && (
                      <span>
                        <Button onClick={this.handleClear}>重置</Button>&nbsp;&nbsp;
                      </span>
                    )}
                  {this.props.onCreate && (
                    <span>
                      <Button type="primary" onClick={this.handleCreate}>
                        新增
                      </Button>&nbsp;&nbsp;
                    </span>
                  )}
                  {this.props.onEdit && (
                    <span>
                      <Button onClick={this.handleEdit}>编辑</Button>&nbsp;&nbsp;
                    </span>
                  )}
                  {this.props.onDelete && (
                    <span>
                      <Button type="danger" onClick={this.handleDelete}>
                        删除
                      </Button>&nbsp;&nbsp;
                    </span>
                  )}
                </Col>
              </Row>
            </Col>
          }
        </Row>
      </Form>
    );
  }
}

export default Form.create({
  // tslint:disable-next-line
  onFieldsChange(props: any, fields: Array<any>) {
    props.onChange && props.onChange(props, fields);
  }
})(AntdOriginSearchForm);

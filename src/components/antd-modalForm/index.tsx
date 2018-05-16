import * as React from 'react';
import { Form } from 'antd';
import { FormComponentProps, FormItemProps } from 'antd/es/form';

// import { getFormItem } from './form-item';
// import { FormField } from '../../types/third';
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
  wrappedComponentRef?: (ref: AntdOriginModalForm) => void;
}

export class AntdOriginModalForm extends React.Component<Props> {
  /**
   * 生成表单项实体
   * @param item
   */
  renderField = (item: FormField) => {
    const { form } = this.props;
    const { key, ...rest } = item;
    return (
      <Form.Item
        key={Array.isArray(key) ? key[2] : key}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        {...rest}
      >
        {form.getFieldDecorator(item.key, item.options)(item.node)}
        {/* {getFormItem(item, this.props.form)} */}
      </Form.Item>
    );
  };

  render() {
    const { fields, form, wrappedComponentRef, ...rest } = this.props;

    return (
      <Form layout="horizontal" {...rest}>
        {fields.map(this.renderField)}
      </Form>
    );
  }
}

export default Form.create({
  // tslint:disable-next-line
  onFieldsChange(props: any, fields: Array<any>) {
    props.onChange && props.onChange(props, fields);
  }
})(AntdOriginModalForm);

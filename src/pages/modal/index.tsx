import * as React from 'react';
import { Modal, Spin, Input, TreeSelect, Upload, Button, Icon } from 'antd';

import { AntdModalForm } from '../../components';
import {
  FormField,
  AntdOriginModalForm
} from '../../components/antd-modalForm';

class UserModal extends React.Component {
  state = {
    fileList: [],
    uploading: false,
    imageUrl: '',
    visible: false,
    loading: false
  };

  formRef: AntdOriginModalForm;

  setFormFields = () => {
    const uploadButton = (
      <div>
        <Icon type={this.state.uploading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    const formFields: FormField[] = [
      {
        key: 'username',
        node: <Input />,
        label: '姓名',
        options: {
          rules: [
            {
              required: true,
              message: '请填写姓名',
              whitespace: true
            },
            {
              max: 50,
              message: '长度不能超过50个字符'
            }
          ]
        }
      },
      {
        key: 'email',
        node: <Input />,
        label: '邮箱',
        options: {
          rules: [
            {
              required: true,
              message: '请填写邮箱',
              whitespace: true
            },
            {
              max: 50,
              message: '长度不能超过50个字符'
            }
          ]
        }
      },
      {
        key: 'face',
        label: '头像',
        node: (
          <div>
            <Upload
              listType="picture-card"
              showUploadList={false}
              className={'uploadFace'}
            >
              {imageUrl ? (
                <img
                  src={`/file/${imageUrl}`}
                  style={{ width: '102px', height: '102px' }}
                />
              ) : (
                uploadButton
              )}
              <Spin spinning={this.state.uploading} />
            </Upload>
          </div>
        ),
        options: {
          rules: [
            {
              required: true,
              message: '请上传图片',
              whitespace: true
            }
          ]
        }
      },

      {
        key: 'phone',
        node: <Input />,
        label: '手机号',
        options: {
          rules: [
            {
              required: true,
              message: '请填写手机号',
              whitespace: true
            },
            {
              max: 50,
              message: '长度不能超过50个字符'
            }
          ]
        }
      },

      {
        key: 'structureId',
        label: '部门',
        node: <TreeSelect showSearch allowClear treeNodeFilterProp="label" />,
        options: {
          rules: [
            {
              required: true,
              message: '请选择部门',
              whitespace: true
            },
            {
              max: 50,
              message: '长度不能超过50个字符'
            }
          ],
          initialValue: '所有'
        }
      },
      {
        key: 'remark',
        node: <Input />,
        label: '职位',
        options: {
          rules: [
            {
              required: true,
              message: '请填写职位',
              whitespace: true
            },
            {
              max: 50,
              message: '长度不能超过50个字符'
            }
          ]
        }
      }
    ];

    return formFields;
  };

  /**
   * 取消
   */
  handleCancel = () => {
    this.setState({ visible: false });
  };

  /**
   * 获取表单实例
   */
  setFormRef = (ref: AntdOriginModalForm) => {
    this.formRef = ref;
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          打开模态框
        </Button>
        <Modal
          okText="保存"
          visible={visible}
          title="标题"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              保存
            </Button>
          ]}
        >
          <AntdModalForm
            wrappedComponentRef={this.setFormRef}
            fields={this.setFormFields()}
          />
        </Modal>
      </div>
    );
  }
}

export default UserModal;

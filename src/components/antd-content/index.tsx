import * as React from 'react';
import { Layout } from 'antd';

class AntdContent extends React.Component {
  render() {
    return (
      <Layout.Content style={{ overflow: 'auto', margin: '24px 24px 0' }}>
        <div style={{ minHeight: 'calc(100vh - 260px)' }}>
          {this.props.children}
        </div>
      </Layout.Content>
    );
  }
}

export default AntdContent;

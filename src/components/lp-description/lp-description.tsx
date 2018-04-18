import * as React from 'react';
import { Row, Col } from 'antd';

export interface Props {
  term?: string;
  column?: number;
  groupcol?: number;
}

const styles = require('./index.scss');

class LpDescription extends React.Component<Props> {
  render() {
    const { term, column = 3, groupcol, children } = this.props;
    const labelSpan = (groupcol || column) * 2;
    const valueSpan = 24 - labelSpan;
    return (
      <Col span={24 / column}>
        <Row>
          <Col key="label" span={labelSpan} style={{ textAlign: 'right' }}>
            <div className={styles['term']} style={{ marginBottom: 10 }}>
              {term ? term + ':' : null}&nbsp;
            </div>
          </Col>
          <Col key="value" span={valueSpan}>
            <div className={styles['detail']} style={{ marginBottom: 10 }}>{children || <span />}</div>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default LpDescription;

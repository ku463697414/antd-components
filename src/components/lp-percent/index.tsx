import * as React from 'react';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/es/input-number';

class LpPercent extends React.Component<InputNumberProps> {
  render() {
    return (
      <InputNumber
        min={0}
        max={100}
        formatter={v => `${v}%`}
        parser={v => +v!.replace('%', '')}
        {...this.props}
      />
    );
  }
}

export default LpPercent;

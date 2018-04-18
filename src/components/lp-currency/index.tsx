import * as React from 'react';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/es/input-number';

class LpCurrency extends React.Component<InputNumberProps> {
  render() {
    return (
      <InputNumber
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => parseInt((value + '').replace(/\$\s?|(,*)/g, ''), 10)}
        {...this.props}
      />
    );
  }
}

export default LpCurrency;

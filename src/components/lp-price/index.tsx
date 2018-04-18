import * as React from 'react';

export interface Props {
  value?: number;
  /** 货币符号 */
  symbol?: string;
  /** 字体大小 */
  size?: 'normal'|'large';
  /** 是否需要颜色 */
  color?: boolean;
  /** 是否需要小数点 */
  float?: boolean;
}

const format = (value: number, symbol: string, float: boolean) => {
  return symbol + (float ? value.toFixed(2) : value.toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

class LpPrice extends React.Component<Props> {
  render() {
    const { 
      value = 0, 
      symbol = '￥', 
      size = 'normal', 
      color = true, 
      float = true 
    } = this.props;
    return (
      <span 
        style={{ fontWeight: 600, fontSize: size === 'large' ? 18 : 'inherit', color: color ? '#dd4b39' : 'inherit' }}
      >
        {format(value, symbol, float)}
      </span>
    );
  }
}

export default LpPrice;

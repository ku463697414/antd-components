import * as React from 'react';
import * as classNames from 'classnames';
import { Icon } from 'antd';

export interface Props {
  colorful?: boolean;
  flag: string;
  className?: string;
  style?: {};
}

const styles = require('./index.scss');

class LpTrend extends React.Component<Props> {
  render() {
    const { colorful = true, flag, children, className, ...rest } = this.props;
    const classString = classNames(styles.trendItem, {
      [styles.trendItemGrey]: !colorful,
    }, className);
    return (
      <div
        {...rest}
        className={classString}
        title={typeof children === 'string' ? children : ''}
      >
        <span className={styles.value}>{children}</span>
        {flag && <span className={styles[flag]}><Icon type={`caret-${flag}`} /></span>}
      </div>
    );
  }
}

export default LpTrend;
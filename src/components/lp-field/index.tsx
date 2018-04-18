import * as React from 'react';

export interface Props {
  label: string;
  value: string;
}

const styles = require('./index.scss');

class LpChartCard extends React.Component<Props> {
  render() {
    const { label, value, ...rest } = this.props;
    return (
      <div className={styles.field} {...rest}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
    );
  }
}

export default LpChartCard;
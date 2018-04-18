import * as React from 'react';
import { Chart, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../autoHeight';

interface Props {
  height: number;
  forceFit: boolean;
  color: string;
  // tslint:disable-next-line:no-any
  data: any[];
}

const styles = require('./index.scss');

class LpMiniBar extends React.Component<Props> {
  render() {
    const { height, forceFit = true, color = '#1890FF', data = [] } = this.props;

    const scale = {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    };

    const padding = [36, 5, 30, 5];

    const tooltip = [
      'x*y',
      // tslint:disable-next-line:no-any
      (x: any, y: any) => ({
        name: x,
        value: y,
      }),
    ];

    // for tooltip not to be hide
    const chartHeight = height + 54;

    return (
      <div className={styles.miniChart} style={{ height }}>
        <div className={styles.chartContent}>
          <Chart
            scale={scale}
            height={chartHeight}
            forceFit={forceFit}
            data={data}
            padding={padding}
          >
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip} />
          </Chart>
        </div>
      </div>
    );
  }
}

export default autoHeight(LpMiniBar);
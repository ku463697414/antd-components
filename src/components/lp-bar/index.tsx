import * as React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';

import autoHeight from '../autoHeight';

export interface Props {
  // tslint:disable-next-line:no-any
  data: any[];
  autoLabel: boolean;
  height: number;
  title: string;
  forceFit: boolean;
  color: string;
  padding: string;
}

const styles = require('./index.scss');

class LpBar extends React.Component<Props> {
  node: Element|null;
  root: Element|null;
  state = {
    autoHideXLabels: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  @Bind()
  @Debounce(400)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = (this.node.parentNode! as Element).clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }

  handleRoot = (n: Element|null) => {
    this.root = n;
  };

  handleRef = (n: Element|null) => {
    this.node = n;
  };

  render() {
    const { height, title, forceFit = true, data, color = 'rgba(24, 144, 255, 0.85)', padding } = this.props;

    const { autoHideXLabels } = this.state;

    const scale = {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    };

    const tooltip = [
      'x*y',
      // tslint:disable-next-line:no-any
      (x: any, y: any) => ({
        name: x,
        value: y,
      }),
    ];

    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4>{title}</h4>}
          <Chart
            scale={scale}
            height={height}
            forceFit={forceFit}
            data={data}
            padding={padding || 'auto'}
          >
            <Axis name="x" title={false} label={!autoHideXLabels} tickLine={!autoHideXLabels} />
            <Axis name="y" title={false} line={false} tickLine={false} min={0} />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip} />
          </Chart>
        </div>
      </div>
    );
  }
}

export default autoHeight(LpBar);
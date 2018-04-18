import * as React from 'react';
import { Chart, Tooltip, Geom, Coord, Label } from 'bizcharts';
import { DataView } from '@antv/data-set';
import { Divider } from 'antd';
import * as classNames from 'classnames';
import ReactFitText from 'react-fittext';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';

interface Props {
  // tslint:disable-next-line:no-any
  data: any[];
  hasLegend: boolean;
  valueFormat: (v: string) => string;
  subTitle: string;
  total: string;
  className: string;
  style: {};
  height: number;
  forceFit: boolean;
  percent: string;
  color: string;
  inner: number;
  animate: boolean;
  colors: string;
  lineWidth: number;
  selected: boolean;
  tooltip: boolean;
  isLabel: boolean;
  radius: number;
}

interface State {
  // tslint:disable-next-line:no-any
  legendData: any[];
  legendBlock: boolean;
}

const styles = require('./index.scss');

class LpPie extends React.Component<Props> {
  root: Element | null;
  // tslint:disable-next-line:no-any
  chart: any;
  state: State = {
    legendData: [],
    legendBlock: false
  };

  componentDidMount() {
    this.getLengendData();
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.data !== nextProps.data) {
      this.getLengendData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    // this.resize.cancel();
  }

  // tslint:disable-next-line:no-any
  getG2Instance = (chart: any) => {
    this.chart = chart;
  };

  // for custom lengend view
  getLengendData = () => {
    if (!this.chart) {
      return;
    }
    const geom = this.chart.getAllGeoms()[0]; // 获取所有的图形
    const items = geom.get('dataArray') || []; // 获取图形对应的

    // tslint:disable-next-line:no-any
    const legendData = items.map((item: any) => {
      /* eslint no-underscore-dangle:0 */
      const origin = item[0]._origin;
      origin.color = item[0].color;
      origin.checked = true;
      return origin;
    });

    this.setState({
      legendData
    });
  };

  // for window resize auto responsive legend
  @Bind()
  @Debounce(300)
  resize() {
    const { hasLegend } = this.props;
    if (!hasLegend || !this.root) {
      window.removeEventListener('resize', this.resize);
      return;
    }
    if ((this.root.parentNode as Element).clientWidth <= 380) {
      if (!this.state.legendBlock) {
        this.setState({
          legendBlock: true
        });
      }
    } else if (this.state.legendBlock) {
      this.setState({
        legendBlock: false
      });
    }
  }

  handleRoot = (n: Element | null) => {
    this.root = n;
  };

  // tslint:disable-next-line:no-any
  handleLegendClick = (item: any, i: number) => {
    const newItem = item;
    newItem.checked = !newItem.checked;

    const { legendData } = this.state;
    legendData[i] = newItem;

    const filteredLegendData = legendData.filter(l => l.checked).map(l => l.x);

    if (this.chart) {
      this.chart.filter(
        'x',
        // tslint:disable-next-line:no-any
        (val: any) => filteredLegendData.indexOf(val) > -1
      );
    }

    this.setState({
      legendData
    });
  };

  render() {
    const {
      valueFormat,
      subTitle,
      total,
      hasLegend = false,
      className,
      style,
      height,
      forceFit = true,
      percent = 0,
      color,
      inner,
      animate = true,
      colors,
      lineWidth = 1,
      isLabel,
      radius
    } = this.props;

    const { legendData, legendBlock } = this.state;
    const pieClassName = classNames(styles.pie, className, {
      [styles.hasLegend]: !!hasLegend,
      [styles.legendBlock]: legendBlock
    });

    const defaultColors = colors;
    let data = this.props.data || [];
    let selected = this.props.selected || true;
    let tooltip = this.props.tooltip || true;
    let formatColor;

    const scale = {
      x: {
        type: 'cat',
        range: [0, 1]
      },
      y: {
        min: 0
      }
    };

    if (percent) {
      selected = false;
      tooltip = false;
      // tslint:disable-next-line:no-any
      formatColor = (value: any) => {
        if (value === '占比') {
          return color || 'rgba(24, 144, 255, 0.85)';
        } else {
          return '#F0F2F5';
        }
      };

      data = [
        {
          x: '占比',
          y: parseFloat(percent)
        },
        {
          x: '反比',
          y: 100 - parseFloat(percent)
        }
      ];
    }

    const tooltipFormat = [
      'x*percent',
      // tslint:disable-next-line:no-any
      (x: any, p: any) => ({
        name: x,
        value: `${(p * 100).toFixed(2)}%`
      })
    ];

    const padding = [12, 0, 12, 0];

    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'y',
      dimension: 'x',
      as: 'percent'
    });

    return (
      <div ref={this.handleRoot} className={pieClassName} style={style}>
        <ReactFitText maxFontSize={25}>
          <div className={styles.chart}>
            <Chart
              scale={scale}
              height={height}
              forceFit={forceFit}
              data={dv}
              padding={padding}
              animate={animate}
              onGetG2Instance={this.getG2Instance}
            >
              {!!tooltip && <Tooltip showTitle={false} />}
              <Coord type="theta" radius={radius} innerRadius={inner} />
              <Geom
                style={{ lineWidth, stroke: '#fff' }}
                tooltip={tooltip && tooltipFormat}
                type="intervalStack"
                position="percent"
                color={['x', percent ? formatColor : defaultColors]}
                selected={selected}
              >
                {isLabel && (
                  <Label
                    content={[
                      'x*y',
                      // tslint:disable-next-line:no-any
                      (x: any, y: any) => {
                        return x + '/' + y;
                      }
                    ]}
                    // tslint:disable-next-line:no-any
                    formatter={(val: string, item: any) => {
                      return (
                        val.split('/')[0] +
                        ':' +
                        val.split('/')[1] +
                        '  ' +
                        '(' +
                        (item.point.percent * 100).toFixed(2) +
                        '%' +
                        ')'
                      );
                    }}
                  />
                )}
              </Geom>
            </Chart>

            {(subTitle || total) && (
              <div className={styles.total}>
                {subTitle && <h4 className="pie-sub-title">{subTitle}</h4>}
                {/* eslint-disable-next-line */}
                {total && (
                  <div
                    className="pie-stat"
                    dangerouslySetInnerHTML={{ __html: total }}
                  />
                )}
              </div>
            )}
          </div>
        </ReactFitText>

        {hasLegend && (
          <ul className={styles.legend}>
            {legendData.map((item, i) => (
              <li key={item.x} onClick={() => this.handleLegendClick(item, i)}>
                <span
                  className={styles.dot}
                  style={{
                    backgroundColor: !item.checked ? '#aaa' : item.color
                  }}
                />
                <span className={styles.legendTitle}>{item.x}</span>
                <Divider type="vertical" />
                {item.percent ? (
                  <span className={styles.percent}>{`${(
                    item.percent * 100
                  ).toFixed(2)}%`}</span>
                ) : (
                  '--%'
                )}
                <span
                  className={styles.value}
                  dangerouslySetInnerHTML={{
                    __html: valueFormat ? valueFormat(item.y) : item.y
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default autoHeight(LpPie);

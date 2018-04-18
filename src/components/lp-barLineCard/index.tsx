import * as React from 'react';
import { Chart, Axis, Tooltip, Geom, Legend, Coord } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import { Card, Icon, Popover } from 'antd';

interface Props {
  // chart属性
  forceFit: boolean;
  title: React.ReactNode;
  color: string;
  padding: [number, number, number, number];
  height: number;
  // tslint:disable-next-line:no-any
  data: any[];
  autoLabel?: boolean;
  style?: React.CSSProperties;
  variety: string;
  attrs?: Object;
  isTranspose?: boolean; // 是否转置x轴和y轴
  isRoom?: boolean;
  showTitle?: boolean; // 是否显示Tooltip的标题
  // card属性
  cardTitle: string | React.ReactNode;
  cardAttrs: Object;
  changeChartType: (v: string) => void;
}

interface State {
  autoHideXLabels: boolean;
}

const styles = require('./index.scss');

class LpBarLineCard extends React.Component<Props> {
  root: Element | null;
  node: Element | null;
  state: State = {
    autoHideXLabels: false
  };
  className: string = 'intervalActive';
  // tslint:disable-next-line:no-any
  chart: any;

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
          autoHideXLabels: true
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false
      });
    }
  }

  handleRoot = (n: Element | null) => {
    this.root = n;
  };

  handleRef = (n: Element | null) => {
    this.node = n;
  };

  chartDownload = () => {
    const myChart = this.chart;
    setTimeout(function() {
      myChart && myChart.downloadImage();
    }, 1000);
  };

  render() {
    const {
      height,
      title,
      forceFit = true,
      data,
      //   color = 'rgba(24, 144, 255, 0.85)',
      padding,
      variety,
      attrs,
      cardTitle,
      cardAttrs,
      isTranspose,
      isRoom,
      showTitle
    } = this.props;

    const { autoHideXLabels } = this.state;

    const scale = {
      x: {
        type: 'cat'
      }
    };

    // const tooltip = [
    //   'x*y',
    //   (x: string, y: string, name: string) => ({
    //     // title: name,
    //     name: x,
    //     value: y
    //   })
    // ];

    return (
      <Card
        title={cardTitle}
        extra={
          <div className={styles['report-extra-wrap']}>
            <a
              className={
                this.className === 'intervalActive'
                  ? styles['current-icon']
                  : ''
              }
              onClick={() => {
                this.className = 'intervalActive';
                this.props.changeChartType('interval');
              }}
            >
              <Popover content={'切换为柱状图'}>
                <Icon type="bar-chart" />
              </Popover>
            </a>&nbsp;&nbsp;
            <a
              className={
                this.className === 'lineActive' ? styles['current-icon'] : ''
              }
              onClick={() => {
                this.className = 'lineActive';
                this.props.changeChartType('line');
              }}
            >
              <Popover content={'切换为折线图'}>
                <Icon type="line-chart" />
              </Popover>
            </a>&nbsp;&nbsp;
            <a onClick={() => this.chartDownload()}>
              <Popover content={'保存为图片'}>
                <Icon type="download" />
              </Popover>
            </a>
          </div>
        }
        {...cardAttrs}
      >
        <div style={{ height }} ref={this.handleRoot}>
          <div ref={this.handleRef} id="mountNode">
            {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
            <Chart
              scale={scale}
              height={title ? height && height - 41 : height}
              forceFit={forceFit}
              data={data}
              padding={padding || 'auto'}
              // tslint:disable-next-line:no-any
              onGetG2Instance={(g2chart: any) => (this.chart = g2chart)}
            >
              {!!isTranspose ? <Coord transpose /> : <Coord />}
              <Axis
                name="x"
                title={false}
                label={{ formatter: (val: string) => `${val.split('/')[0]}` }}
                tickLine={autoHideXLabels ? false : {}}
              />
              <Axis
                name="y"
                min={0}
                line={false}
                tickLine={false}
                label={{
                  formatter: (val: string) =>
                    !!isRoom ? `${val}间夜` : `${val}元`
                }}
              />
              <Tooltip showTitle={!!showTitle} crosshairs={{ type: 'rect' }} />
              <Legend />
              {variety && variety === 'line' ? (
                <div>
                  <Geom
                    type={variety}
                    position="x*y"
                    color={'name'}
                    // tooltip={tooltip}
                    legend={true}
                  />
                  <Geom
                    type="point"
                    position="x*y"
                    color={'name'}
                    // tooltip={tooltip}
                    legend={true}
                  />
                </div>
              ) : (
                <Geom
                  type={variety}
                  position="x*y"
                  color={'name'}
                  // tooltip={tooltip}
                  legend={true}
                  {...attrs}
                />
              )}
            </Chart>
          </div>
        </div>
      </Card>
    );
  }
}

export default autoHeight(LpBarLineCard);

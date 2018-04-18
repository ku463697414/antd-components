import * as React from 'react';
import {
  Row,
  Col,
  Tooltip,
  Icon,
  Radio,
  Card,
  Select,
  Input,
  TreeSelect
} from 'antd';
import * as numeral from 'numeral';
import * as moment from 'moment';
import {
  LpChartCard,
  LpField,
  LpTrend,
  LpWaterWave,
  LpPie,
  LpMiniBar,
  LpBar,
  LpBarLineCard,
  LpRadar,
  LpSearchForm,
  LpRangePicker
} from '../../components';
import { LpOriginSearchForm, FormField } from '../../components/lp-searchForm';

export interface State {
  varity: Object;
  value: string;
  expand: boolean;
}

const yuan = (val: number, float = true) =>
  `￥` +
  (float ? val.toFixed(2) : val.toFixed(0)).replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1,'
  );
const styles = require('./index.scss');
const DataSet = require('@antv/data-set');
const RadioGroup = Radio.Group;

class BasicForm extends React.Component {
  formRef: LpOriginSearchForm;
  state: State = {
    varity: {
      total: 'interval',
      plane: 'interval'
    },
    value: 'month',
    expand: true
  };
  // tslint:disable-next-line:no-any
  fltData: any[];

  changeChart = (key: string, type: string) => {
    this.setState({ varity: { ...this.state.varity, [key]: type } });
  };

  // tslint:disable-next-line:no-any
  handleChange = (e: any) => {
    this.setState({
      value: e.target.value
    });
  };

  setFormRef = (ref: LpOriginSearchForm) => {
    this.formRef = ref;
  };

  handleSearchFormSubmit = () => {
    // 搜索
  };

  toggleForm = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  setFormFields = () => {
    const formFields: FormField[] = [
      {
        key: 'planeOrderNo',
        label: '订单号',
        node: <Input autoComplete="off" />
      },
      {
        key: 'idcName',
        label: '旅客',
        node: <Input autoComplete="off" />
      },
      {
        key: 'createTime',
        label: '预订日期',
        node: <LpRangePicker />,
        extraKeys: ['createTimeStart', 'createTimeEnd']
      },
      {
        key: 'orderType',
        label: '订单类型',
        options: {
          initialValue: ''
        },
        node: (
          <Select>
            <Select.Option value="">全部</Select.Option>
            <Select.Option key="1" value="1">
              机票订单
            </Select.Option>
          </Select>
        )
      },
      {
        key: 'departCityName',
        label: '出发地',
        node: <Input autoComplete="off" />
      },
      {
        key: 'arriveCityName',
        label: '目的地',
        node: <Input autoComplete="off" />
      },
      {
        key: 'nameCn',
        label: '预订人',
        node: <Input autoComplete="off" />
      },
      {
        key: 'deptId',
        label: '部门',
        node: (
          <TreeSelect
            showSearch
            allowClear
            treeNodeFilterProp="label"
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="请选择部门"
            treeDefaultExpandAll
          />
        )
      },
      {
        key: 'costCenterId',
        label: '成本中心',
        node: (
          <Select
            showSearch
            placeholder="请选择成本中心"
            optionFilterProp="children"
          >
            <Select.Option key="168" value="168">
              技术部
            </Select.Option>
          </Select>
        )
      }
    ];
    return formFields;
  };

  setFormFields1 = () => {
    const formFields = [
      {
        key: 'planeOrderNo',
        label: '订单号',
        node: <Input autoComplete="off" />
      },
      {
        key: 'idcName',
        label: '旅客',
        node: <Input autoComplete="off" />
      }
    ];
    return formFields;
  };

  render() {
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 }
    };
    const salesPieData = [
      {
        x: '家用电器',
        y: 4544
      },
      {
        x: '食用酒水',
        y: 3321
      },
      {
        x: '个护健康',
        y: 3113
      },
      {
        x: '服饰箱包',
        y: 2341
      },
      {
        x: '母婴产品',
        y: 1231
      },
      {
        x: '其他',
        y: 1231
      }
    ];

    const data = [
      { x: '事例一', y: 40.5 },
      { x: '事例二', y: 21 },
      { x: '事例三', y: 17 },
      { x: '事例四', y: 13 },
      { x: '事例五', y: 9 }
    ];
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
          'YYYY-MM-DD'
        ),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    const salesData = [];
    const planeData = [];
    const seasonData = [];
    for (let i = 0; i < 12; i += 1) {
      salesData.push({
        x: `${i + 1}月`,
        y: 100 + i * 10,
        name: '总消费'
      });
      planeData.push({
        x: `${i + 1}月`,
        国内机票消费: 100 + i * 10,
        国际机票消费: 200 + i * 10,
        机票总计消费: 100 + i * 10 + 200 + i * 10
      });
      seasonData.push({
        x: `${i + 1}月`,
        国内机票消费: i * 10,
        国际机票消费: i * 20,
        机票总计消费: i * 10 + i * 20
      });
    }

    const radarOriginData = [
      {
        name: '技术部',
        totalNum: 12,
        changePercent: 0.02,
        refundDifferencePercent: 0.03,
        totalSalePrice: 3245
      },
      {
        name: '客服部',
        totalNum: 13,
        changePercent: 31,
        refundDifferencePercent: 41,
        totalSalePrice: 74
      }
    ];

    // tslint:disable-next-line:no-any
    const radarData: any[] = [];
    const radarTitleMap = {
      totalNum: '票数(张)',
      changePercent: '改签费占比',
      refundDifferencePercent: '退票费占比',
      totalSalePrice: '退票/改签总金额(元)'
    };
    radarOriginData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          radarData.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key]
          });
        }
      });
    });

    if (this.state.value === 'month') {
      this.fltData = planeData;
    } else if (this.state.value === 'season') {
      this.fltData = seasonData;
    }

    // 多条线时transform数据
    const ds = new DataSet();
    const dv = ds.createView().source(this.fltData || []);
    dv.transform({
      type: 'fold',
      fields: ['机票总计消费', '国内机票消费', '国际机票消费'],
      key: 'name',
      value: 'y'
    });
    const newdata = dv.rows;
    // 分组柱状图
    const atrr = { adjust: [{ type: 'dodge', marginRatio: 1 / 32 }] };
    // card的一些属性
    const cardAttr = {
      bordered: false,
      bodyStyle: { padding: 24 },
      style: { minHeight: 409 }
    };
    return (
      <div>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <LpChartCard
              bordered={false}
              title="总销售额"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={yuan(126560)}
              footer={
                <LpField
                  label="日均销售额"
                  value={`￥${numeral(12423).format('0,0')}`}
                />
              }
              contentHeight={46}
            >
              <LpTrend flag="up" style={{ marginRight: 16 }}>
                周同比<span className={styles.trendText}>12%</span>
              </LpTrend>
              <LpTrend flag="down">
                日环比<span className={styles.trendText}>11%</span>
              </LpTrend>
            </LpChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <LpChartCard
              bordered={false}
              title="访问量"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(8846).format('0,0')}
              footer={
                <LpField label="日访问量" value={numeral(1234).format('0,0')} />
              }
              contentHeight={46}
            >
              {/* <MiniArea color="#975FE4" data={visitData} /> */}
            </LpChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <LpChartCard
              bordered={false}
              title="支付笔数"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(6560).format('0,0')}
              footer={<LpField label="转化率" value="60%" />}
              contentHeight={46}
            >
              {/* <MiniBar data={visitData} /> */}
            </LpChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <LpChartCard
              bordered={false}
              title="运营活动效果"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total="78%"
              footer={
                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  <LpTrend flag="up" style={{ marginRight: 16 }}>
                    周同比<span className={styles.trendText}>12%</span>
                  </LpTrend>
                  <LpTrend flag="down">
                    日环比<span className={styles.trendText}>11%</span>
                  </LpTrend>
                </div>
              }
              contentHeight={46}
            >
              {/* <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" /> */}
            </LpChartCard>
          </Col>
        </Row>
        <LpWaterWave height={161} title="补贴资金剩余" percent={34} />
        <div>
          <LpPie
            hasLegend
            title="销售额"
            subTitle="销售额"
            total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
            data={salesPieData}
            valueFormat={yuan}
            height={294}
            inner={0.75}
          />
        </div>
        <div>
          <LpMiniBar height={45} data={visitData} />
        </div>
        <div>
          <LpBar height={200} title="销售额趋势" data={salesData} />
        </div>
        <div>
          <LpBarLineCard
            cardTitle="总消费"
            changeChartType={(type: string) => this.changeChart('total', type)}
            data={salesData}
            height={295}
            title="月度柱状图"
            variety={this.state.varity['total']}
            cardAttrs={cardAttr}
            isTranspose={true}
            isTime={true}
          />
        </div>
        <br />
        <div>
          <LpBarLineCard
            cardTitle={
              <div>
                <span>机票消费</span>&nbsp;&nbsp;
                <span>
                  <RadioGroup
                    onChange={this.handleChange}
                    value={this.state.value}
                  >
                    <Radio value="month">月份</Radio>
                    <Radio value="season">季度</Radio>
                  </RadioGroup>
                </span>
              </div>
            }
            changeChartType={(type: string) => this.changeChart('plane', type)}
            data={newdata}
            height={295}
            title="月度柱状图"
            variety={this.state.varity['plane']}
            attrs={atrr}
            isRoom={true}
            showTitle={true}
          />
        </div>
        <div>
          <Card>
            <LpRadar
              hasLegend
              height={323}
              data={radarData}
              title="退改金额前十部门分析图"
            />
          </Card>
        </div>
        <div>
          <LpPie
            animate={false}
            percent={28}
            subTitle="中式快餐"
            total="28%"
            height={128}
            lineWidth={2}
            inner={0.75}
          />
        </div>
        <div>
          <Card>
            <LpPie
              hasLegend
              title="销售额"
              data={data}
              valueFormat={yuan}
              height={294}
              inner={0}
              isLabel={true}
              radius={0.75}
            />
          </Card>
        </div>
        <div>
          <Card>
            <LpSearchForm
              wrappedComponentRef={this.setFormRef}
              onSubmit={this.handleSearchFormSubmit}
              fields={
                this.state.expand ? this.setFormFields1() : this.setFormFields()
              }
              onExpand={this.toggleForm}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default BasicForm;

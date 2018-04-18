import * as React from 'react';
import { DatePicker, Button } from 'antd';
import * as moment from 'moment';
import {
  RangePickerProps,
  RangePickerPresetRange
} from 'antd/es/date-picker/interface';

export interface State {
  open: boolean;
  value: [moment.Moment, moment.Moment] | null;
}

const styles = require('./index.scss');
// 自定义日期范围查询
const today = moment();
const currentMonthStart = moment().startOf('month');
const currentYearStart = moment().startOf('year');
const lastMonthStart = moment()
  .subtract(1, 'month')
  .startOf('month');
const lastMonthEnd = moment()
  .subtract(1, 'month')
  .endOf('month');
const lastYearStart = moment()
  .subtract(1, 'year')
  .startOf('year');
const lastYearEnd = moment()
  .subtract(1, 'year')
  .endOf('year');
export const ranges: { [range: string]: RangePickerPresetRange } = {
  本月: [currentMonthStart, today],
  上月: [lastMonthStart, lastMonthEnd],
  今年: [currentYearStart, today],
  去年: [lastYearStart, lastYearEnd]
};

class LpRangeMonthPicker extends React.Component<RangePickerProps> {
  selectedValue: [moment.Moment, moment.Moment];
  state: State = {
    open: false,
    value: null
  };

  componentWillReceiveProps(nextProps: RangePickerProps) {
    this.setState({
      value: nextProps.value
    });
  }

  handleOpenChange = (open: boolean) => {
    this.setState({
      open
    });
  };

  handlePanelChange = (value: [moment.Moment, moment.Moment]) => {
    this.selectedValue = value;
  };

  handleChange = () => {
    return;
  };

  save = () => {
    this.setState({
      value: this.selectedValue,
      open: false
    });
    this.props.onChange && this.props.onChange(this.selectedValue, ['', '']);
  };

  render() {
    return (
      <DatePicker.RangePicker
        onPanelChange={this.handlePanelChange}
        onOpenChange={this.handleOpenChange}
        onChange={this.handleChange}
        onOk={this.handleChange}
        open={this.state.open}
        value={this.state.value!}
        placeholder={['开始月份', '结束月份']}
        format="YYYY-MM"
        ranges={ranges}
        mode={['month', 'month']}
        renderExtraFooter={() => (
          <Button
            className={styles['ok']}
            size="small"
            type="primary"
            onClick={this.save}
          >
            确定
          </Button>
        )}
        {...this.props}
      />
    );
  }
}

export default LpRangeMonthPicker;

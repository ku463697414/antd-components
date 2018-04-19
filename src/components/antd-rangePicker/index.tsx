import * as React from 'react';
import { DatePicker } from 'antd';
import * as moment from 'moment';
import {
  RangePickerProps,
  RangePickerPresetRange
} from 'antd/es/date-picker/interface';

// 自定义日期范围查询
const today = moment();
const yesterday = moment().subtract(1, 'd');
const currentWeekStart = moment().startOf('week');
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
  今天: [today, today],
  昨天: [yesterday, yesterday],
  本周: [currentWeekStart, today],
  本月: [currentMonthStart, today],
  上月: [lastMonthStart, lastMonthEnd],
  今年: [currentYearStart, today],
  去年: [lastYearStart, lastYearEnd]
};

class AntdRangePicker extends React.Component<RangePickerProps> {
  render() {
    return <DatePicker.RangePicker ranges={ranges} {...this.props} />;
  }
}

export default AntdRangePicker;

/// <reference types="react" />
import * as React from 'react';
import { RangePickerProps, RangePickerPresetRange } from 'antd/es/date-picker/interface';
export declare const ranges: {
    [range: string]: RangePickerPresetRange;
};
declare class LpRangePicker extends React.Component<RangePickerProps> {
    render(): JSX.Element;
}
export default LpRangePicker;

/// <reference types="react" />
import * as React from 'react';
import * as moment from 'moment';
import { RangePickerProps, RangePickerPresetRange } from 'antd/es/date-picker/interface';
export interface State {
    open: boolean;
    value: [moment.Moment, moment.Moment] | null;
}
export declare const ranges: {
    [range: string]: RangePickerPresetRange;
};
declare class LpRangeMonthPicker extends React.Component<RangePickerProps> {
    selectedValue: [moment.Moment, moment.Moment];
    state: State;
    componentWillReceiveProps(nextProps: RangePickerProps): void;
    handleOpenChange: (open: boolean) => void;
    handlePanelChange: (value: [moment.Moment, moment.Moment]) => void;
    handleChange: () => void;
    save: () => void;
    render(): JSX.Element;
}
export default LpRangeMonthPicker;

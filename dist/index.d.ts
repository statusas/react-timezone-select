import * as React from 'react';
import { Props as Props$1 } from 'react-select';

type ICustomTimezone = {
    [key: string]: string;
};
type ILabelStyle = 'original' | 'altName' | 'abbrev';
type IDisplayValue = 'GMT' | 'UTC';
type ITimezoneOption = {
    value: string;
    label: string;
    abbrev?: string;
    altName?: string;
    offset?: number;
};
type ITimezone = ITimezoneOption | string;
type TimezoneSelectOptions = {
    labelStyle?: ILabelStyle;
    displayValue?: IDisplayValue;
    timezones?: ICustomTimezone;
    maxAbbrLength?: number;
    date?: Date;
};
type Props = Omit<Props$1<ITimezone, false>, 'onChange'> & TimezoneSelectOptions & {
    value: ITimezone;
    onChange?: (timezone: ITimezoneOption) => void;
};

declare const allTimezones: ICustomTimezone;

declare function useTimezoneSelect({ timezones, labelStyle, displayValue, maxAbbrLength, date, }: TimezoneSelectOptions): {
    parseTimezone: (zone: ITimezone) => ITimezoneOption;
    options: ITimezoneOption[];
};
declare const TimezoneSelect: ({ value, onBlur, onChange, labelStyle, displayValue, maxAbbrLength, timezones, date, ...props }: Props) => React.JSX.Element;

export { ILabelStyle, ITimezone, ITimezoneOption, Props, TimezoneSelectOptions, allTimezones, TimezoneSelect as default, useTimezoneSelect };

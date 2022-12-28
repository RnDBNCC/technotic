import React from 'react';
import { DatePickerProps } from './DatePickerProps';
import { cx } from '@emotion/css';
import * as style from './style';

const DatePicker = (
    props: React.PropsWithChildren<DatePickerProps>
): JSX.Element => {
    let className: string;
    className =
        props.dateSize === undefined
            ? (className = cx(style.DatePickerStyle, style.undefined))
            : (className = `${String(props.dateSize)} ${String(
                  style.DatePickerStyle
              )}`);

    return (
        <div>
            <input className={className} type="date" name="" id="" />
        </div>
    );
};

export default DatePicker;

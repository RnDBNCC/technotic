import React, { PropsWithChildren } from 'react';
import { DatePickerProps } from './types';
import { cx } from '@emotion/css';
import { styDatePicker, styLayout } from './style';

const DatePicker = (props: PropsWithChildren<DatePickerProps>): JSX.Element => {
    const { dateSize = 'small', status, onInputChange, ...rest } = props;

    const className = `${dateSize} ${styDatePicker}`;

    const datePickerStatus =
        status !== undefined ? `${status} ${styDatePicker}` : cx(styDatePicker);

    return (
        <div className={cx(styLayout)}>
            <input
                name="date"
                type="date"
                className={`${className} ${datePickerStatus}`}
                onChange={onInputChange}
                {...rest}
            />
        </div>
    );
};

export default DatePicker;

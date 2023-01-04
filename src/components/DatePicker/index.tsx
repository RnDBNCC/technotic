import React, { PropsWithChildren } from 'react';
import { DatePickerProps } from './DatePickerProps';
import { cx } from '@emotion/css';
import { styDatePicker, styLayout, styUndefinedDate } from './style';

const DatePicker = (props: PropsWithChildren<DatePickerProps>): JSX.Element => {
    const { dateSize, status, onInputChange } = props;

    const datePickerSize =
        dateSize !== undefined
            ? `${dateSize} ${styDatePicker}`
            : cx(styDatePicker, styUndefinedDate);

    const datePickerStatus =
        status !== undefined ? `${status} ${styDatePicker}` : cx(styDatePicker);

    return (
        <div className={cx(styLayout)}>
            <input
                type="date"
                name="date"
                id="date"
                className={`${datePickerSize} ${datePickerStatus}`}
                onChange={onInputChange}
            />
        </div>
    );
};

export default DatePicker;

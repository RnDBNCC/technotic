import React, { PropsWithChildren } from 'react';
import { DatePickerProps } from './DatePickerProps';
import { cx } from '@emotion/css';
import { styDatePicker, styUndefinedDate } from './style';

const DatePicker = (props: PropsWithChildren<DatePickerProps>): JSX.Element => {
    const { placeholder, dateSize } = props;
    const className =
        dateSize !== undefined
            ? `${dateSize} ${styDatePicker}`
            : cx(styDatePicker, styUndefinedDate);

    return (
        <div>
            <input
                className={className}
                placeholder={placeholder}
                type="date"
                name=""
                id=""
            />
        </div>
    );
};

export default DatePicker;

import React from 'react';
import { DatePickerProps } from './DatePickerProps';

// type DatePickerTechnotic = (props: DatePickerProps) => JSX.Element;

// const DatePicker: FC<DatePickerProps> = ({ placeholder, text }) => {

//     return (
//         <input type="date" />
//     );
// };

const DatePicker = ({ placeholder }: DatePickerProps): JSX.Element => {
    return <input type="date" placeholder={placeholder} />;
};

export default DatePicker;

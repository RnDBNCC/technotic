import {
    ChangeEvent,
    DetailedHTMLProps,
    FormEvent,
    InputHTMLAttributes,
} from 'react';

type SizeType = 'small' | 'medium' | 'large';
type State = 'success' | 'error';
// type DateType = 'date' | 'week' | 'month' | 'quarter' | 'year';
export interface DatePickerProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    dateSize?: SizeType;
    status?: State;
    // dateType?: DateType;

    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: FormEvent) => void;
}

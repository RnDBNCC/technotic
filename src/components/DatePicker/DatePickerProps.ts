type SizeType = 'small' | 'medium' | 'large' | undefined;
type DateType = 'date' | 'week' | 'month' | 'quarter' | 'year';
export interface DatePickerProps extends HTMLInputElement {
    placeholder: string;
    dateSize?: SizeType;
    dateType?: DateType;
}

import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

type SizeType = 'small' | 'medium' | 'large';
type StatusType = 'success' | 'error';

export interface TextAreaProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    txtAreaSize?: SizeType;
    placeholder?: string;
    text?: string;
    txtAreaStatus?: StatusType;
    fontSize?: string;
}

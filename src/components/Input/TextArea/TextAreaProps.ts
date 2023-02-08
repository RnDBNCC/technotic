import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface TextAreaProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    placeholder?: string;
    text?: string;
}

import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

type SizeType = 'small' | 'medium' | 'large';
type StatusType = 'success' | 'error';

export interface TextFieldProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    inputSize?: SizeType;
    textLabel?: string;
    fontSize?: string;
    borderRadius?: string;
    iconLeft?: string;
    iconButton?: string;
    iconHeight?: string;
    textPlaceholder?: string;
    status?: StatusType;
    textButton?: string;
    backgroundButtonColor?: string;
}

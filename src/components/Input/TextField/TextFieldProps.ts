import {
    ChangeEvent,
    FormEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
} from 'react';

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
    icon?: string;
    textPlaceholder?: string;
    status?: StatusType;
    height?: string;

    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: FormEvent) => void;
}

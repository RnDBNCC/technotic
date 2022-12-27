import { ChangeEvent, FormEvent } from 'react';

type SizeType = 'small' | 'medium' | 'large' | undefined;

export interface TextFieldProps extends HTMLInputElement {
    inputSize?: SizeType;
    textLabel?: string;
    fontSize?: string;
    borderRadius?: string;
    icon?: string;
    textPlaceholder?: string;

    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: FormEvent) => void;
}

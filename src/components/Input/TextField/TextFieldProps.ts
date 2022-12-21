import { ChangeEvent, FormEvent } from 'react';

export interface TextFieldProps {
    textLabel?: string;
    padding?: string;
    fontSize?: string;
    borderRadius?: string;
    icon?: string;
    display?: string;
    placeholder?: string;
    width?: string;

    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e: FormEvent) => void;
}

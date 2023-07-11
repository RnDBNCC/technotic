import { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';

type SizeType = 'small' | 'medium' | 'large';
type CheckBoxType = 'primary' | 'secondary';

export interface CheckBoxProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    cbSize?: SizeType;
    cbType?: CheckBoxType;
    fontSize?: string;
    textLabel?: string;

    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

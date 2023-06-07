import { DetailedHTMLProps, InputHTMLAttributes, ChangeEvent } from 'react';
import { RadioColorType, RadioSizeType } from '../config/TypeContext';

export interface radioProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    radioSize?: RadioSizeType;
    radioColor?: RadioColorType;
    label?: string;
    value?: string;
    name?: string;
    defaultChecked?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

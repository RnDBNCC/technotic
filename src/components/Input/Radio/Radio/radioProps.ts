import { DetailedHTMLProps, InputHTMLAttributes, ChangeEvent } from 'react';
import { RadioType, RadioSizeType } from '../config/TypeContext';

export interface radioProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    radioSize?: RadioSizeType;
    radioType?: RadioType;
    radioColor?: string;
    value?: string;
    name?: string;
    checked?: boolean;
    // onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

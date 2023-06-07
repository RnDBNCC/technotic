import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { radioProps } from '../Radio/radioProps';
import { RadioColorType, RadioSizeType } from '../config/TypeContext';

export interface radioListProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    radioSize?: RadioSizeType;
    radioColor?: RadioColorType;
    options: Array<{
        label?: string;
        value?: string;
        radioProps?: radioProps[];
    }>;
    name?: string;
    defaultChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

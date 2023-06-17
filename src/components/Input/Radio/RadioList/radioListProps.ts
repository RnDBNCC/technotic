import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { RadioProps } from '../Radio/RadioProps';
import { RadioSizeType } from '../config/TypeContext';

export interface radioListProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    radioSize?: RadioSizeType;
    options: Array<{
        label?: string;
        value?: string;
        radioProps?: RadioProps[];
    }>;
    name?: string;
    defaultChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { radioProps } from '../Radio/radioProps';

type sizeType = 'small' | 'medium' | 'large' | undefined;
type radioColor = 'primary' | 'secondary' | undefined;

export interface radioListProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    radioSize?: sizeType;
    radioColor?: radioColor;
    options: Array<{
        label?: string;
        value?: string;
        radioProps?: radioProps[];
    }>;
    name?: string;
    defaultChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

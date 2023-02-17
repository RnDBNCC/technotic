import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type sizeType = 'small' | 'medium' | 'large' | undefined;
type radioColor = 'primary' | 'secondary' | undefined;

export interface radioProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    radioSize?: sizeType;
    radioColor?: radioColor;
    label?: string;
    value?: string;
    name?: string;
    defaultChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

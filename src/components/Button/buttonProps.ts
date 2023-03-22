import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type SizeType = 'small' | 'medium' | 'large';
type ButtonType = 'primary' | 'secondary' | 'link';

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    btnSize?: SizeType;
    btnType?: ButtonType;
    btnColor?: string;
    link?: string;
    element?: any;
}

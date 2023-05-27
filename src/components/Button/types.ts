import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'primary' | 'secondary' | 'link';

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    btnSize?: ButtonSize;
    btnType?: ButtonType;
    btnColor?: string;
    link?: string;
    element?: any;
}

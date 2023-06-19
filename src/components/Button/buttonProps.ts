import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ButtonType, SizeType } from './config/TypeContext';

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    btnSize?: SizeType;
    btnType?: ButtonType;
    disabled?: boolean;
    btnColor?: string;
    link?: string;
    element?: any;
}

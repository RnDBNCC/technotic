import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';
import { ButtonType, SizeType } from './types';

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
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

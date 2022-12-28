import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type SizeType = 'small' | 'medium' | 'large' | undefined;
type ButtonType = 'primary' | 'secondary';

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    btnSize?: SizeType;
    btntype?: ButtonType;
    btnColor?: string;
    to?: string;
}

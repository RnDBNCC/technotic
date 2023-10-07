import React, { PropsWithChildren, MouseEvent } from 'react';
import { styButton } from './styles';
import { ButtonProps } from './buttonProps';
import isRoutes from '../../utils/isRoutes';

function cssClassName(
    btnSize: string,
    btnType: string,
    btnColor?: string
): string {
    switch (btnType) {
        case 'primary':
            return `${btnSize} ${styButton.Primary(btnColor)}`;
        case 'secondary':
            return `${btnSize} ${styButton.Secondary(btnColor)}`;
        case 'link':
            return `${btnSize} ${styButton.Link(btnColor)}`;
        default:
            return 'wrong button type';
    }
}

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
    const {
        btnSize = 'medium',
        btnType = 'primary',
        disabled = false,
        btnColor,
        link,
        element,
        children,
        onClick,
        ...rest
    } = props;
    const className = disabled
        ? `${cssClassName(btnSize, btnType, btnColor)} disabled`
        : cssClassName(btnSize, btnType, btnColor);

    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
        if (onClick !== undefined) {
            onClick(e);
        }
        if (link !== undefined) {
            if (link.includes('http')) {
                isRoutes.isValidHttpUrl(link);
            } else if (element !== undefined) {
                if (e.metaKey || e.ctrlKey) {
                    return;
                }
                // prevents it from loading the page
                e.preventDefault();
                isRoutes.Route(link);
            }
        }
    };

    return (
        <div>
            <button {...rest} onClick={handleClick} className={className}>
                {children}
            </button>
        </div>
    );
};

export default Button;

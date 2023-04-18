import React, { PropsWithChildren, MouseEvent } from 'react';
import { styButton } from './styles';
import { ButtonProps } from './buttonProps';
import isRoutes from '../../utils/isRoutes';

function cssClassName(btnSize: string, btnType: string): string {
    switch (btnType) {
        case 'primary':
            return `${btnSize} ${styButton.Primary}`;
        case 'secondary':
            return `${btnSize} ${styButton.Secondary}`;
        case 'link':
            return `${btnSize} ${styButton.Link}`;
        default:
            return 'wrong button type';
    }
}

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
    const {
        btnSize = 'medium',
        btnType = 'primary',
        btnColor,
        link,
        element,
        children,
        ...rest
    } = props;
    const className = cssClassName(btnSize, btnType);

    const color = { backgroundColor: btnColor };

    const handleClick = (e: MouseEvent): void => {
        if (link !== undefined) {
            if (element !== undefined) {
                if (link.includes('http')) {
                    isRoutes.isValidHttpUrl(link);
                }
                if (e.metaKey || e.ctrlKey) {
                    return;
                }
                // prevents it from loading the page
                e.preventDefault();
                isRoutes.Route(link, element);
            }
        }
    };

    return (
        <div>
            <button
                {...rest}
                onClick={handleClick}
                style={color}
                className={className}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;

import React, { PropsWithChildren, MouseEvent, useMemo } from 'react';
import { cx } from '@emotion/css';
import isRoutes from '../../utils/isRoutes';
import {
    styButton,
    stySecondaryButton,
    styLinkButton,
    styPrimaryButton,
} from './styles';
import { ButtonProps } from './types';

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

    const buttonClass = useMemo(() => {
        switch (btnType) {
            case 'secondary':
                return cx(styButton, stySecondaryButton, btnSize);
            case 'link':
                return cx(styButton, styLinkButton, btnSize);
            default:
                return cx(styButton, styPrimaryButton, btnSize);
        }
    }, [btnType, btnSize]);

    const color = { backgroundColor: btnColor };

    const handleClick = (e: MouseEvent): void => {
        e.preventDefault();
        if (link !== undefined) {
            if (link.includes('http')) {
                isRoutes.isValidHttpUrl(link);
            } else if (element !== undefined) {
                if (e.metaKey || e.ctrlKey) return;
                isRoutes.Route(link);
            }
        }
    };

    return (
        <div>
            <button
                {...rest}
                onClick={handleClick}
                style={color}
                className={buttonClass}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;

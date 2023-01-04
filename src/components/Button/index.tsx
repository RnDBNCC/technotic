import React, { PropsWithChildren, MouseEvent } from 'react';
import { styButtonPrimary, styUndefinedBtn } from './styles';
import { ButtonProps } from './buttonProps';
import { isValidHttpUrl, Route } from './Route';
import { cx } from '@emotion/css';

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
    const { btnSize, btntype, btnColor, link, element, children, ...rest } =
        props;
    const className =
        btnSize !== undefined
            ? `${btnSize} ${styButtonPrimary}`
            : cx(styButtonPrimary, styUndefinedBtn);
    const color = { backgroundColor: btnColor };

    const handleClick = (e: MouseEvent): void => {
        if (link !== undefined) {
            if (element !== undefined) {
                if (e.metaKey || e.ctrlKey) {
                    return;
                }
                e.preventDefault(); // cegah loading
                Route(link, element);
            } else isValidHttpUrl(link);
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                {...rest}
                style={color}
                className={className}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;

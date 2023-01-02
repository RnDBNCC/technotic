import React, { PropsWithChildren } from 'react';
import { styButtonPrimary, styUndefinedBtn } from './styles';
import { ButtonProps } from './buttonProps';
import { isValidHttpUrl, isPath } from './Route';
import { cx } from '@emotion/css';

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
    const { btnSize, btntype, btnColor, link, element, children, ...rest } =
        props;
    const className =
        btnSize !== undefined
            ? `${btnSize} ${styButtonPrimary}`
            : cx(styButtonPrimary, styUndefinedBtn);
    const color = { backgroundColor: btnColor };

    function handleClick(): void {
        if (link !== undefined) isValidHttpUrl(link);
        if (link !== undefined && element !== undefined) isPath(link, element);
    }

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

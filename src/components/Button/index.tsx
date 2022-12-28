import React, { PropsWithChildren } from 'react';
import { styButtonPrimary, styUndefinedBtn } from './styles';
import { ButtonProps } from './buttonProps';
import { cx } from '@emotion/css';

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
    const { btnSize, btntype, btnColor, to, children, ...rest } = props;
    const className =
        btnSize !== undefined
            ? `${btnSize} ${styButtonPrimary}`
            : cx(styButtonPrimary, styUndefinedBtn);
    const color = { backgroundColor: btnColor };
    return (
        <div>
            <button
                onClick={() => {}}
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

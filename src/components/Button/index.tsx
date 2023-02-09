import React, { PropsWithChildren, MouseEvent } from 'react';
import { styButtonPrimary, styButtonSecondary } from './styles';
import { ButtonProps } from './buttonProps';
import { isValidHttpUrl, Route } from '../../Utils/httpValidation';

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
    const className =
        btnType === 'primary'
            ? `${btnSize} ${styButtonPrimary}`
            : `${btnSize} ${styButtonSecondary}`;

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

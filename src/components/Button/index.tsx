import React, { PropsWithChildren, MouseEvent } from 'react';
import { styButton } from './styles';
import { ButtonProps } from './buttonProps';
import { isValidHttpUrl, Route } from '../../Utils/httpValidation';

// function example(btnType: string, btnSize: string): string {
//     return btnType === 'primary' ? `${btnSize} ${styButton.Primary}`
//         : btnType === 'secondary' ? `${btnSize} ${styButton.Secondary}`
//             : btnType === 'link' ? `${btnSize} ${styButton.Link}`;
// }

function example(btnSize: string, btnType: string): string {
    return btnType === 'primary'
        ? `${btnSize} ${styButton.Primary}`
        : btnType === 'secondary'
        ? `${btnSize} ${styButton.Secondary}`
        : btnType === 'link'
        ? `${btnSize} ${styButton.Link}`
        : 'wrong button type';
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
    const className = example(btnSize, btnType);

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

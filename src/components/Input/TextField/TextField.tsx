import { cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';
import {
    styInput,
    styTextField,
    styInputDefault,
    styStatusDefault,
} from './styles';
import { TextFieldProps } from './TextFieldProps';

const TextField = (props: PropsWithChildren<TextFieldProps>): JSX.Element => {
    const {
        inputSize = 'medium',
        textLabel,
        fontSize = '20px',
        borderRadius = '10px',
        icon,
        textPlaceholder = 'Placeholder',
        status,
        height,
        width,
        ...rest
    } = props;

    const inputLayoutSize =
        inputSize !== undefined
            ? `${inputSize} ${styInput}`
            : cx(styInputDefault);

    const inputStatus =
        status !== undefined ? `${status} ${styInput}` : cx(styStatusDefault);

    const styles = `${styTextField}`;

    return (
        <>
            <label style={{ fontSize }} htmlFor="name">
                {textLabel}
            </label>
            <div
                className={`${inputLayoutSize} ${inputStatus}`}
                style={{ borderRadius }}
            >
                <i>
                    <img style={{ height }} src={icon} alt="icon" />
                </i>
                <input
                    className={styles}
                    style={{ fontSize, width }}
                    {...rest}
                    type="text"
                    placeholder={textPlaceholder}
                />
            </div>
        </>
    );
};

export default TextField;

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
        inputSize,
        textLabel,
        fontSize,
        borderRadius,
        icon,
        textPlaceholder,
        status,
        height,
        inputId,
        inputName,
        onSubmit,
        onChange,
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
        <form action="" onSubmit={onSubmit}>
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
                    style={{ fontSize }}
                    {...rest}
                    onChange={onChange}
                    id="name"
                    name="name"
                    type="text"
                    placeholder={textPlaceholder}
                />
            </div>
        </form>
    );
};

export default TextField;

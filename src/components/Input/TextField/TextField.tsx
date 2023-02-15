import { cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';
import {
    styInput,
    styTextField,
    styInputDefault,
    styStatusDefault,
    styButtonIcon,
    styButtonText,
    styButtonDefault,
    styInputBorder,
} from './styles';
import { TextFieldProps } from './TextFieldProps';

const TextField = (props: PropsWithChildren<TextFieldProps>): JSX.Element => {
    const {
        inputSize = 'medium',
        textLabel,
        fontSize = '20px',
        borderRadius = '15px',
        iconLeft,
        iconButton,
        textPlaceholder = 'Insert Here',
        status,
        iconHeight,
        textButton,
        backgroundButtonColor,
        ...rest
    } = props;

    const inputLayoutSize =
        inputSize !== undefined
            ? `${inputSize} ${styInput} `
            : cx(styInputDefault);

    const inputStatus =
        status !== undefined ? `${status} ${styInput}` : cx(styStatusDefault);

    const styles = `${styTextField}`;

    const buttonIcon =
        iconButton !== undefined ? `${styButtonIcon}` : cx(styButtonDefault);

    const buttonText =
        textButton !== undefined ? `${styButtonText}` : cx(styButtonDefault);

    const border = `${styInputBorder}`;

    return (
        <>
            <label style={{ fontSize }}>{textLabel}</label>
            <div
                className={`${border} ${inputStatus}`}
                style={{ borderRadius }}
            >
                <div className={`${inputLayoutSize}`}>
                    <i>
                        <img
                            style={{ height: iconHeight }}
                            src={iconLeft}
                            alt=""
                        />
                    </i>
                    <input
                        className={`${styles}`}
                        style={{ fontSize }}
                        {...rest}
                        type="text"
                        placeholder={textPlaceholder}
                    />
                </div>
                <button
                    className={`${buttonIcon}`}
                    style={{ backgroundColor: backgroundButtonColor }}
                >
                    <img
                        style={{ height: iconHeight }}
                        src={iconButton}
                        alt=""
                    />
                </button>
                <button
                    className={`${buttonText}`}
                    style={{ fontSize, backgroundColor: backgroundButtonColor }}
                >
                    {textButton}
                </button>
            </div>
        </>
    );
};

export default TextField;

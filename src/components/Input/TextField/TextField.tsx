import { cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';
import {
    styInputSize,
    styLayout,
    styTextField,
    styInputDefault,
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
        onSubmit,
        onInputChange,
        ...rest
    } = props;
    const layout = `${styLayout}`;

    const inputLayout =
        inputSize !== undefined
            ? `${inputSize} ${styInputSize}`
            : cx(styInputDefault);
    const styles = `${styTextField}`;

    return (
        <form action="" onSubmit={onSubmit}>
            <div className={layout}>
                <label style={{ fontSize }} htmlFor="name">
                    {textLabel}
                </label>
                <div className={inputLayout} style={{ borderRadius }}>
                    <i>
                        <img style={{ height }} src={props.icon} alt="icon" />
                    </i>
                    <input
                        className={styles}
                        style={{ fontSize }}
                        {...rest}
                        onChange={onInputChange}
                        id="name"
                        name="name"
                        type="text"
                        placeholder={textPlaceholder}
                    />
                </div>
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

export default TextField;

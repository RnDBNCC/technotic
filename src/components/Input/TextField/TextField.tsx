import React from 'react';
import { textFieldContainerStyle } from './styles';
import { cx } from '@emotion/css';
import { TextFieldProps } from './TextFieldProps';

const TextField = ({
    textLabel,
    padding,
    fontSize,
    borderRadius,
    icon,
    placeholder,
    width,
    onInputChange,
    onSubmit,
}: TextFieldProps): JSX.Element => {
    return (
        <form onSubmit={onSubmit}>
            <div className={cx(textFieldContainerStyle)}>
                <label style={{ fontSize }} htmlFor="name">
                    {textLabel}
                </label>
                <img style={{ width }} src={icon} alt="" />
                <input
                    onChange={onInputChange}
                    id="name"
                    name="name"
                    type="text"
                    style={{
                        padding,
                        fontSize,
                        borderRadius,
                    }}
                    placeholder={placeholder}
                ></input>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default TextField;

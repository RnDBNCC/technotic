import { cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';
import { styCheckbox, stySizeDefault, styTypeDefault } from './styles';
import { CheckBoxProps } from './CheckBoxProps';

const CheckBox = (props: PropsWithChildren<CheckBoxProps>): JSX.Element => {
    const {
        cbSize = 'medium',
        cbType = 'primary',
        fontSize = 'medium',
        textLabel,
        onInputChange,
        ...rest
    } = props;

    const inputSize =
        cbSize !== undefined ? `${cbSize} ${styCheckbox}` : cx(stySizeDefault);

    const inputType =
        cbType !== undefined ? `${cbType} ${styCheckbox}` : cx(styTypeDefault);

    return (
        <div>
            <input
                className={cx(inputSize, inputType)}
                type="checkbox"
                {...rest}
            />
            <label style={{ fontSize }}>{textLabel}</label>
        </div>
    );
};

export default CheckBox;

import React, { PropsWithChildren } from 'react';
import { RadioProps } from '../radioProps';
import RadioLabelStyle, { styRadio, TextChildStyle } from '../styles/styles';

function getTypeClassName(
    radioSize: string,
    radioType: string,
    radioColor?: string
): string {
    switch (radioType) {
        case 'primary':
            return `${styRadio.Primary(radioSize, radioColor)}`;
        case 'secondary':
            return `${styRadio.Secondary(radioSize, radioColor)}`;
        default:
            return 'wrong button type';
    }
}

const Radio = (props: PropsWithChildren<RadioProps>): JSX.Element => {
    const {
        radioSize = 'medium',
        radioType = 'primary',
        radioColor,
        value,
        name,
        checked,
        children,
        onChange,
        ...rest
    } = props;

    const RadioClassName = getTypeClassName(radioSize, radioType, radioColor);

    return (
        <label className={RadioLabelStyle}>
            <input
                className={`${RadioClassName}`}
                type="radio"
                value={value}
                name={name}
                checked={checked}
                onChange={onChange}
                {...rest}
            />
            <span className={TextChildStyle}>{children}</span>
        </label>
    );
};

export default Radio;

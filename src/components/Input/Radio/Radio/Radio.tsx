import React, { PropsWithChildren } from 'react';
import { radioProps } from './radioProps';

import RadioLabelStyle, { styRadio, TextChildStyle } from '../styles';

function getTypeClassName(radioSize: string, radioType: string): string {
    switch (radioType) {
        case 'primary':
            return `${radioSize} ${styRadio.Primary}`;
        case 'secondary':
            return `${radioSize} ${styRadio.Secondary}`;
        default:
            return 'wrong button type';
    }
}

const Radio = (props: PropsWithChildren<radioProps>): JSX.Element => {
    const {
        radioSize = 'medium',
        radioType = 'primary',
        radioColor,
        value,
        defaultChecked = false,
    } = props;
    const RadioClassName = getTypeClassName(radioSize, radioType);

    const color = { accentColor: radioColor };

    return (
        <label className={RadioLabelStyle}>
            <input
                style={color}
                className={RadioClassName}
                type="radio"
                value={value}
                defaultChecked={defaultChecked}
            />
            <span className={TextChildStyle}>{props.children}</span>
        </label>
    );
};

export default Radio;

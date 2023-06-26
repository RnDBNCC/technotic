import React, { PropsWithChildren, useState } from 'react';
import { RadioProps } from './RadioProps';
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

const Radio = (props: PropsWithChildren<RadioProps>): JSX.Element => {
    const {
        radioSize = 'medium',
        radioType = 'primary',
        radioColor,
        value,
        name,
        checked = false,
    } = props;

    const [selected, setSelected] = useState(checked);

    const handleRadioChange = (): void => {
        setSelected(!selected);
    };

    const handleRadioClick = (): void => {
        setSelected((prevSelected) => !prevSelected);
    };

    const RadioClassName = getTypeClassName(radioSize, radioType);

    const color = { accentColor: radioColor };

    return (
        <label className={RadioLabelStyle}>
            <input
                style={color}
                className={RadioClassName}
                type="radio"
                value={value}
                checked={selected}
                name={name}
                onChange={handleRadioChange}
                onClick={handleRadioClick}
            />
            <span className={TextChildStyle}>{props.children}</span>
        </label>
    );
};

export default Radio;

import React, { PropsWithChildren } from 'react';
import { radioProps } from './radioProps';
import { RadioStyle } from '../styles';

const Radio = (props: PropsWithChildren<radioProps>): JSX.Element => {
    const { radioSize = 'medium', radioColor } = props;

    const className = `${radioSize} ${RadioStyle}`;

    const color = { accentColor: radioColor };

    return (
        <div>
            <input
                style={color}
                className={className}
                type="radio"
                name="react-radio-btn"
                id="radio1"
                value="radio1"
            />
            <label htmlFor="radio1">{props.children}</label>
        </div>
    );
};

export default Radio;

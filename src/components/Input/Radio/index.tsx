import React, { PropsWithChildren } from 'react';
import { RadioProps } from './radioProps';
import { RadioStyle } from './styles';
import { cx } from '@emotion/css';

const Radio = (props: PropsWithChildren<RadioProps>): JSX.Element => {
    const { radiosize } = props;
    const className =
        radiosize !== undefined ? `${radiosize} ${RadioStyle}` : cx(RadioStyle);

    const color = { accentColor: props.radiocolor };
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

            {/* <input
                type="radio"
                name="react-radio-btn"
                id="radio2"
                value="radio2"
            />
            <label htmlFor="radio2">halo</label> */}
        </div>
    );
};

export default Radio;

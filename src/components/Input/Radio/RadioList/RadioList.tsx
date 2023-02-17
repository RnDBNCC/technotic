import React, { PropsWithChildren } from 'react';
import { radioListProps } from './radioListProps';
import { RadioStyle } from '../styles';
import Radio from '../Radio/Radio';

const RadioList = (props: PropsWithChildren<radioListProps>): JSX.Element => {
    const { radioSize = 'medium', radioColor, options, name, onChange } = props;

    const className = `${radioSize} ${RadioStyle}`;

    const color = { accentColor: radioColor };

    return (
        <div className={`radio-list ${className}`} style={color}>
            {options.map((option, index) => (
                <Radio
                    key={index}
                    name={name}
                    {...option}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default RadioList;

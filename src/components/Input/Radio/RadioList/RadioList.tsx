import React, { PropsWithChildren, useState } from 'react';
import { RadioListProps } from './radioListProps';
import RadioStyle from '../styles';
import Radio from '../Radio/Radio';

const RadioList = (props: PropsWithChildren<RadioListProps>): JSX.Element => {
    const {
        radioSize = 'medium',
        name = 'radio-list',
        radioColor,
        options,
    } = props;

    const className = `${radioSize} ${RadioStyle}`;

    const color = { accentColor: radioColor };

    const [selected, setSelected] = useState<string | null>(null);

    const handleRadioChange = (value: string): void => {
        console.log(selected);
        setSelected(value);
    };

    return (
        <div className={`radio-list ${className}`} style={color}>
            {options.map((option: any, index: number) => (
                <Radio
                    key={option.number}
                    name={`${name}-${index}`}
                    value={option.value}
                    {...props}
                    onChange={() => handleRadioChange(option.value)}
                    checked={
                        selected === option.value
                        // true
                    }
                >
                    {option.label}
                </Radio>
            ))}
        </div>
    );
};

export default RadioList;

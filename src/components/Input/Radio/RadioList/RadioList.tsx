import React, { PropsWithChildren, useState } from 'react';
import { RadioListProps } from '../radioProps';
import RadioStyle from '../styles/styles';
import Radio from '../Radio/Radio';

const RadioList = (props: PropsWithChildren<RadioListProps>): JSX.Element => {
    const { options } = props;

    const className = `${RadioStyle}`;

    const [selected, setSelected] = useState<string | null>(null);

    const handleRadioChange = (value: string): void => {
        setSelected(value);
    };

    return (
        <div className={`radio-list ${className}`}>
            {options.map((option: any, index: number) => (
                <Radio
                    key={`radio-${index}`}
                    value={option.value}
                    {...props}
                    onChange={() => handleRadioChange(option.value)}
                    checked={selected === option.value}
                >
                    {option.label}
                </Radio>
            ))}
        </div>
    );
};

export default RadioList;

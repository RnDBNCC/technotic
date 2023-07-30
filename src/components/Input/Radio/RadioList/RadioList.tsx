import React, { PropsWithChildren, useState } from 'react';
import { RadioListProps } from '../radioProps';
import { styRadioList } from '../styles/styles';
import Radio from '../Radio/Radio';

const RadioList = (props: PropsWithChildren<RadioListProps>): JSX.Element => {
    const { direction = 'row', options, value, onChange, ...rest } = props;

    const className = `${styRadioList(direction)}`;

    const [selected, setSelected] = useState<string | null>(null);
    const [reRenderTrigger, setReRenderTrigger] = useState(false);

    const handleRadioChange = (value: string): void => {
        console.log('value', value);
        setSelected(value);
        setReRenderTrigger(!reRenderTrigger);
    };

    return (
        <div className={`radio-list ${className}`}>
            {options.map((option: any, index: number) => (
                <Radio
                    key={`radio-${index}-${reRenderTrigger.toString()}`}
                    value={option.value}
                    {...rest}
                    checked={selected === option.value}
                    onChange={() => handleRadioChange(option.value)}
                >
                    {option.label}
                </Radio>
            ))}
        </div>
    );
};

export default RadioList;

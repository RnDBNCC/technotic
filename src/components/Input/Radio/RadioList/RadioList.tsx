import React, { PropsWithChildren, useState } from 'react';
import { RadioListProps } from '../radioProps';
import { styRadioList } from '../styles/styles';
import Radio from '../Radio/Radio';

const RadioList = (props: PropsWithChildren<RadioListProps>): JSX.Element => {
    const {
        direction = 'row',
        options,
        checked,
        onChange,
        onRadioChange,
        ...rest
    } = props;

    const className = `${styRadioList(direction)}`;

    const [selected, setSelected] = useState<string | null>(null);

    const handleRadioChange = (value: any): void => {
        setSelected(value);

        if (onChange != null) {
            onChange(value);
        }
    };

    return (
        <div className={`radio-list ${className}`}>
            {options.map((option: any, index: number) => (
                <Radio
                    key={`radio-${index}`}
                    value={option.value}
                    checked={selected === option.value}
                    onRadioChange={handleRadioChange}
                    {...rest}
                >
                    {option.label}
                </Radio>
            ))}
        </div>
    );
};

export default RadioList;

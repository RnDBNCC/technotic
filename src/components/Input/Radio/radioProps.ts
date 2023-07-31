import { MouseEvent, ChangeEvent } from 'react';
import { RadioType, RadioSizeType, RadioGroupDirectionType } from './types';

interface RadioChangeEventTarget {
    radioSize?: RadioSizeType;
    radioType?: RadioType;
    radioColor?: string;
    value?: any;
    name?: string;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onRadioChange: (value: any) => void;
}

interface RadioListChangeEventTarget extends RadioChangeEventTarget {
    options: Array<{
        label?: string;
        value?: string;
    }>;
    direction?: RadioGroupDirectionType;
}

interface RadioProps extends RadioChangeEventTarget {
    checked: boolean;
}

interface RadioListProps extends RadioListChangeEventTarget {
    checked: boolean;
}

export { RadioProps, RadioListProps };

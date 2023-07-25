import { MouseEvent, ChangeEvent } from 'react';
import { RadioType, RadioSizeType, RadioValueType } from './types';

interface RadioChangeEventTarget {
    radioSize?: RadioSizeType;
    radioType?: RadioType;
    radioColor?: string;
    value?: RadioValueType;
    defaultValue?: RadioValueType;
    name?: string;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onChange: (e: RadioChangeEvent) => void;
}

interface RadioListChangeEventTarget extends RadioChangeEventTarget {
    options: Array<{
        label?: string;
        value?: string;
    }>;
}

interface RadioChangeEvent {
    target: RadioProps | RadioListProps;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: ChangeEvent<HTMLInputElement>;
}

interface RadioProps extends RadioChangeEventTarget {
    checked: boolean;
}

interface RadioListProps extends RadioListChangeEventTarget {
    checked: boolean;
}

export { RadioProps, RadioListProps };

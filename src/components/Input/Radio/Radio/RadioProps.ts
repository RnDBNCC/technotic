import { MouseEvent } from 'react';
import { RadioType, RadioSizeType, RadioValueType } from '../types';

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

export interface RadioProps extends RadioChangeEventTarget {
    checked: boolean;
}

interface RadioChangeEvent {
    target: RadioProps;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}

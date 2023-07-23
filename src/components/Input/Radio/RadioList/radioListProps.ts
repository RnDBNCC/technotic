import { MouseEvent } from 'react';
import { RadioSizeType } from '../types';

interface RadioChangeEventTarget {
    radioSize?: RadioSizeType;
    options: Array<{
        label?: string;
        value?: string;
    }>;
    name?: string;
    radioColor?: string;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioListProps extends RadioChangeEventTarget {
    checked: boolean;
}

interface RadioChangeEvent {
    target: RadioListProps;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}

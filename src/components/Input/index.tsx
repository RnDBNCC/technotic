import { ForwardRefExoticComponent } from 'react';
import InternalInput, { InputProps } from './Input';
import Radio from './Radio/Radio';

export { radioProps } from './Radio/radioProps';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
    Radio: typeof Radio;
}

const Input = InternalInput as CompoundedComponent;

Input.Radio = Radio;

export { default } from './Input';

import { ForwardRefExoticComponent } from 'react';
import InternalInput, { InputProps } from './Input';

import TextField from './TextField/TextField';
import Radio from './Radio/Radio/Radio';

export { TextFieldProps } from './TextField/TextFieldProps';
export { radioProps } from './Radio/Radio/radioProps';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
    TextField: typeof TextField;
    Radio: typeof Radio;
}

const Input = InternalInput as CompoundedComponent;

Input.TextField = TextField;
Input.Radio = Radio;

export { default } from './Input';

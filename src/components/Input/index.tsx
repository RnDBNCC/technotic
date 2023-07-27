import { ForwardRefExoticComponent } from 'react';
import InternalInput, { InputProps } from './Input';

import TextField from './TextField/TextField';
import Radio from './Radio/Radio/Radio';
import RadioList from './Radio/RadioList/RadioList';

export { TextFieldProps } from './TextField/TextFieldProps';
export { RadioProps, RadioListProps } from './Radio/radioProps';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
    TextField: typeof TextField;
    Radio: typeof Radio;
    RadioList: typeof RadioList;
}

const Input = InternalInput as CompoundedComponent;

Input.TextField = TextField;
Input.Radio = Radio;
Input.RadioList = RadioList;

export { default } from './Input';

import { ForwardRefExoticComponent } from 'react';
import InternalInput, { InputProps } from './Input';

import TextField from './TextField/TextField';
import CheckBox from './CheckBox/CheckBox';

export { TextFieldProps } from './TextField/TextFieldProps';
export { CheckBoxProps } from './CheckBox/CheckBoxProps';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
    TextField: typeof TextField;
    TextArea: typeof TextArea;
    CheckBox: typeof CheckBox;
}

const Input = InternalInput as CompoundedComponent;
Input.TextField = TextField;
Input.TextArea = TextArea;
Input.CheckBox = CheckBox;

export { default } from './Input';

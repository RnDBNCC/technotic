import { ForwardRefExoticComponent } from 'react';
import InternalInput, { InputProps } from './Input';
import TextArea from './TextArea/TextArea';
import TextField from './TextField/TextField';

export { TextFieldProps } from './TextField/TextFieldProps';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
    TextField: typeof TextField;
    TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.TextField = TextField;
Input.TextArea = TextArea;

export { default } from './Input';

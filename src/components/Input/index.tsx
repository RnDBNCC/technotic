import { ForwardRefExoticComponent } from 'react';
import InternalInput, { InputProps } from './Input';
import TextArea from './TextArea/TextArea';
import TextField from './TextField/TextField';
import CheckBox from './CheckBox/CheckBox';
import Radio from './Radio/Radio/Radio';
import RadioList from './Radio/RadioList/RadioList';

export { TextFieldProps } from './TextField/TextFieldProps';
export { TextAreaProps } from './TextArea/TextAreaProps';
export { CheckBoxProps } from './CheckBox/CheckBoxProps';
export { RadioProps, RadioListProps } from './Radio/radioProps';

interface CompoundedComponent extends ForwardRefExoticComponent<InputProps> {
    TextField: typeof TextField;
    TextArea: typeof TextArea;
    CheckBox: typeof CheckBox;
    Radio: typeof Radio;
    RadioList: typeof RadioList;
}

const Input = InternalInput as CompoundedComponent;

Input.TextField = TextField;
Input.TextArea = TextArea;
Input.CheckBox = CheckBox;
Input.Radio = Radio;
Input.RadioList = RadioList;

export { default } from './Input';

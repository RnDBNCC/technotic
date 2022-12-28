import type { InputProps } from './input';
import InternalInput from './input';
import CheckBox from './CheckBox/CheckBox';
import TextArea from './TextArea/TextArea';

export { InputProps } from './input';
export { CheckBoxProps } from './CheckBox/CheckBoxProps';
export { TextAreaProps } from './TextArea/TextAreaProps';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<InputProps> {
    CheckBox: typeof CheckBox;
    TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.CheckBox = CheckBox;
Input.TextArea = TextArea;

export { default } from './input';

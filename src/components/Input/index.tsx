import TextArea from './TextArea/TextArea';
import { InputProps } from './InputProps';
import InternalInput from './Input';

export { InputProps } from './InputProps';
export { TextAreaProps } from './TextArea/textAreaProps';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<InputProps> {
    TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.TextArea = TextArea;

export { default } from './Input';

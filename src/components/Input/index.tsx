import type { InputProps } from './input';
import InternalInput from './input';
import TextArea from './TextArea/TextArea';

export { InputProps } from './input';
export { TextAreaProps } from './TextArea/TextAreaProps';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<InputProps> {
    TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.TextArea = TextArea;

export { default } from './input';

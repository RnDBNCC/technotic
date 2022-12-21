import InternalInput, { InputProps } from './Input';

import TextField from './TextField/TextField';

export { TextFieldProps } from './TextField/TextField';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<InputProps> {
    TextField: typeof TextField;
}

const Input = InternalInput as CompoundedComponent;

Input.TextField = TextField;

export { default } from './Input';

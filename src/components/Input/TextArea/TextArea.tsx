import React from 'react';
import { TextAreaProps } from './TextAreaProps';
// import * as style from './style';

const TextArea = (
    props: React.PropsWithChildren<TextAreaProps>
): JSX.Element => {
    // const className = `${String(style.TextAreaStyle)}`;

    return (
        <div>
            <label style={{ fontSize: props.fontSize }}>
                {props.textLabel}
            </label>

            <textarea placeholder={props.placeholder}>{props.text}</textarea>
        </div>
    );
};

export default TextArea;

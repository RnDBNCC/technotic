import { cx } from '@emotion/css';
import React from 'react';
import { TextAreaProps } from './textAreaProps';
import { textAreaStyle } from './style';

const TextArea = ({ placeholder, text }: TextAreaProps): JSX.Element => {
    return (
        <textarea className={cx(textAreaStyle)} placeholder={placeholder}>
            {text}
        </textarea>
    );
};

export default TextArea;

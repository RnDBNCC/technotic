import { cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';
import { TextAreaProps } from './TextAreaProps';
import { textAreaStyle } from './styles';

const TextArea = (props: PropsWithChildren<TextAreaProps>): JSX.Element => {
    const { placeholder, text } = props;

    return (
        <textarea className={cx(textAreaStyle)} placeholder={placeholder}>
            {text}
        </textarea>
    );
};

export default TextArea;

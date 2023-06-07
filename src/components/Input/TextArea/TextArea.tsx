import { cx } from '@emotion/css';
import React, { PropsWithChildren } from 'react';
import { TextAreaProps } from './TextAreaProps';
import { textAreaStyle, stySizeDefault, styStatusDefault } from './styles';

const TextArea = (props: PropsWithChildren<TextAreaProps>): JSX.Element => {
    const { placeholder = "Insert Here", text, txtAreaSize = 'medium', txtAreaStatus } = props;

    const inputSize =
        txtAreaSize !== undefined
            ? `${txtAreaSize} ${textAreaStyle}`
            : cx(stySizeDefault);

    const inputStatus =
        txtAreaStatus !== undefined
            ? `${txtAreaStatus} ${textAreaStyle}`
            : cx(styStatusDefault);

    return (
        <div>
            <textarea
                className={`${inputSize} ${inputStatus}`}
                placeholder={placeholder}
            >
                {text}
            </textarea>
        </div>
    );
};

export default TextArea;

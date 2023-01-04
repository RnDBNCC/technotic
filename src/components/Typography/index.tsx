import React from 'react';
import { TypographyProps } from './TypographyProps';

const Typography = ({
    font,
    size,
    color,
    textLabel,
}: TypographyProps): JSX.Element => {
    return (
        <h1
            style={{
                fontFamily: font,
                fontSize: size,
                color,
            }}
        >
            {textLabel}
        </h1>
    );
};

export default Typography;

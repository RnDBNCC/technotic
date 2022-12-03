import React from 'react';

interface TypographyProps {
    Size: string;
    textLabel: string;
    textColor: string;
}

type TypographyTechnotic = (props: TypographyProps) => JSX.Element;

const Typography: TypographyTechnotic = ( { Size, textColor, textLabel }) => {

    return (
        <h1 style={{
            fontSize:Size,
            color:textColor
        }}>
            {textLabel}
        </h1>
    );
};

export default Typography;
import { CSSProperties } from 'react';

const getDefaultButtonStyles = (
    borderValue: string,
    backgroundColorValue: string,
    colorValue: string
): CSSProperties => ({
    border: borderValue,
    backgroundColor: backgroundColorValue,
    color: colorValue,
});

export { getDefaultButtonStyles };

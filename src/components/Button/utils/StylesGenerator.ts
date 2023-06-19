import { CSSProperties } from 'react';

const generateDefaultPrimarySecondaryButtonStyles = (
    borderValue: string,
    backgroundColorValue: string,
    colorValue: string
): CSSProperties => ({
    border: borderValue,
    backgroundColor: backgroundColorValue,
    color: colorValue,
});

export { generateDefaultPrimarySecondaryButtonStyles };

import React, { PropsWithChildren } from 'react';
import { TypographyProps } from './TypographyProps';
import { cx } from '@emotion/css';
import { styTypography, styUndefinedTypography } from './style';

const Typography = (props: PropsWithChildren<TypographyProps>): JSX.Element => {
    const { size, weight, color, children } = props;

    const typographySize =
        size !== undefined
            ? `${size} ${styTypography}`
            : cx(styTypography, styUndefinedTypography);

    const typographyWeight =
        weight !== undefined
            ? `${weight} ${styTypography}`
            : cx(styTypography, styUndefinedTypography);
    return (
        <p
            style={{ color, marginBottom: 0 }}
            className={`${typographySize} ${typographyWeight}`}
        >
            {children}
        </p>
    );
};

export default Typography;

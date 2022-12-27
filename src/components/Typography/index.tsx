import React, { PropsWithChildren } from 'react';
import { TypographyProps } from './TypographyProps';
import { cx } from '@emotion/css';
import { styTypography, styLayout, styUndefinedTypography } from './style';

const Typography = (props: PropsWithChildren<TypographyProps>): JSX.Element => {
    const { size, weight, textLabel, color } = props;

    const typographySize =
        size !== undefined
            ? `${size} ${styTypography}`
            : cx(styTypography, styUndefinedTypography);

    const typographyWeight =
        weight !== undefined
            ? `${weight} ${styTypography}`
            : cx(styTypography, styUndefinedTypography);
    return (
        <div className={cx(styLayout)}>
            <p
                style={{ color }}
                className={`${typographySize} ${typographyWeight}`}
            >
                {textLabel}
            </p>
        </div>
    );
};

export default Typography;

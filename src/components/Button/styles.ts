import { css } from '@emotion/css';
import ColorSystem from '../ColorSystem/index';
import { generateDefaultPrimarySecondaryButtonStyles } from './utils/StylesGenerator';

const SMALL_BTN = '0.25rem 0.5rem';
const MEDIUM_BTN = '0.5rem 1rem';
const LARGE_BTN = '1.5rem 2rem';

const mainStyles = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0.8rem',
    outline: 'none',
    gap: '0.5rem',
    '&.small': {
        padding: SMALL_BTN,
    },
    '&.medium': {
        padding: MEDIUM_BTN,
    },
    '&.large': {
        padding: LARGE_BTN,
    },
};

export const styButton = {
    Primary: css({
        ...mainStyles,
        ...generateDefaultPrimarySecondaryButtonStyles(
            `solid 2px ${ColorSystem.BLUE500}`,
            ColorSystem.BLUE500,
            ColorSystem.GREY100
        ),
        ':hover': {
            backgroundColor: ColorSystem.BLUE400,
            border: `solid 2px ${ColorSystem.BLUE400}`,
            cursor: 'pointer',
        },
        '&.disabled': {
            backgroundColor: ColorSystem.GREY300,
            border: `solid 2px ${ColorSystem.GREY300}`,
            color: ColorSystem.GREY100,
            cursor: 'not-allowed',
        },
    }),

    Secondary: css({
        ...mainStyles,
        ...generateDefaultPrimarySecondaryButtonStyles(
            `solid 2px ${ColorSystem.BLUE500}`,
            ColorSystem.GREY100,
            ColorSystem.BLUE500
        ),
        '&:hover': {
            backgroundColor: ColorSystem.BLUE400,
            border: `solid 2px ${ColorSystem.BLUE400}`,
            cursor: 'pointer',
            color: ColorSystem.GREY100,
        },
        '&.disabled': {
            border: `solid 2px ${ColorSystem.GREY300}`,
            color: ColorSystem.GREY300,
            cursor: 'not-allowed',
            '&:hover': {
                backgroundColor: ColorSystem.GREY100,
                color: ColorSystem.GREY300,
                cursor: 'not-allowed',
            },
        },
    }),

    Link: css({
        border: 'none !important',
        backgroundColor: 'transparent !important',
        ':hover': {
            cursor: 'pointer',
        },
        '&:hover': {
            color: ColorSystem.BLUE400,
        },
        '&.disabled': {
            color: ColorSystem.GREY300,
            '&:hover': {
                cursor: 'not-allowed',
            },
        },
    }),
};

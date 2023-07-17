import { css } from '@emotion/css';
import ColorSystem from '../ColorSystem/index';
import { getDefaultButtonStyles } from './utils/stylesGenerator';

const SMALL_BTN = '0.25rem 0.5rem';
const MEDIUM_BTN = '0.5rem 1rem';
const LARGE_BTN = '1.5rem 2rem';

const mainStyles = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0.8rem',
    outline: 'none',
    gap: '0.5rem',
    transition: 'all 0.3s ease-in-out',
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
    Primary: (customColor = ColorSystem.BLUE500) =>
        css({
            ...mainStyles,
            ...getDefaultButtonStyles(
                `solid 2px ${customColor}`,
                customColor,
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

    Secondary: (customColor = ColorSystem.BLUE500) =>
        css({
            ...mainStyles,
            ...getDefaultButtonStyles(
                `solid 2px ${customColor}`,
                ColorSystem.GREY100,
                customColor
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

    Link: (customColor = ColorSystem.BLUE400) =>
        css({
            border: 'none',
            backgroundColor: 'transparent',
            color: customColor,
            ':hover': {
                cursor: 'pointer',
            },
            '&:hover': {
                color: ColorSystem.GREY300,
            },
            '&.disabled': {
                color: customColor,
                '&:hover': {
                    cursor: 'not-allowed',
                },
            },
        }),
};

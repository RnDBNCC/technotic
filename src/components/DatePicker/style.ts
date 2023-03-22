import { css } from '@emotion/css';
import ColorSystem from '../ColorSystem/index';

const { BNCC, SUCCESS, ERROR } = ColorSystem;

// size
const SMALL_SIZE = '16px';
const MEDIUM_SIZE = '24px';
const LARGE_SIZE = '28px';

// font size
const FONT_SMALL = '16px';
const FONT_MEDIUM = '20px';
const FONT_LARGE = '24px';

// border
const HOVER_BORDER = '2px solid' + BNCC;
const SUCCESS_STATE = '2px solid' + SUCCESS;
const ERROR_STATE = '2px solid' + ERROR;

export const styLayout = css({
    padding: '10px',
});

export const styDatePicker = css({
    '::-webkit-calendar-picker-indicator': {
        background: 'pic',
        opacity: 0.5,
    },
    outline: 'none',
    border: '2px solid #DCDCDC',
    borderRadius: '8px',
    transition: '0.3s ease-in-out',
    color: 'grey',
    ':hover': {
        border: HOVER_BORDER,
    },
    ':focus': {
        color: 'black',
    },

    // size
    '&.small': {
        padding: SMALL_SIZE,
        fontSize: FONT_SMALL,
    },
    '&.medium': {
        padding: MEDIUM_SIZE,
        fontSize: FONT_MEDIUM,
    },
    '&.large': {
        padding: LARGE_SIZE,
        fontSize: FONT_LARGE,
    },

    // status
    '&.success': {
        border: SUCCESS_STATE,
    },
    '&.error': {
        border: ERROR_STATE,
    },
});

export const styUndefinedDate = css({
    outline: 'none',
    borderRadius: '8px',
    padding: SMALL_SIZE,
    fontSize: FONT_SMALL,
});

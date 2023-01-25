import { css } from '@emotion/css';

const MEDIUM_SIZE = '1rem 1.5rem';
const SMALL_SIZE = '0.5rem 1rem';
const LARGE_SIZE = '1.5rem 2rem';

const SUCCESS_STATUS = '3px solid green';
const ERROR_STATUS = '3px solid red';

export const styInput = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    width: 'fit-content',
    border: '3px solid black',

    '&.small': {
        padding: SMALL_SIZE,
    },
    '&.medium': {
        padding: MEDIUM_SIZE,
    },
    '&.large': {
        padding: LARGE_SIZE,
    },

    '&.success': {
        border: SUCCESS_STATUS,
    },
    '&.error': {
        border: ERROR_STATUS,
    },
});

export const styInputDefault = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    width: 'fit-content',
});

export const styStatusDefault = css({
    border: '3px solid black',
});

export const styTextField = css({
    border: 'none',
    outline: 'none',
});

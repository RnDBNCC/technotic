import { css } from '@emotion/css';

const SMALL_SIZE = '16px 4px';
const SMALL_WIDTH = '320px';

const MEDIUM_SIZE = '24px';
const MEDIUM_WIDTH = '380px';

const LARGE_SIZE = '28px';
const LARGE_WIDTH = '560px';

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
        width: SMALL_WIDTH,
    },
    '&.medium': {
        padding: MEDIUM_SIZE,
        width: MEDIUM_WIDTH,
    },
    '&.large': {
        padding: LARGE_SIZE,
        width: LARGE_WIDTH,
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

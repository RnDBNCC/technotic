import { css } from '@emotion/css';

const medium = '1rem 1.5rem';
const small = '0.5rem 1rem';
const large = '1.5rem 2rem';

const success = '3px solid green';
const error = '3px solid red';

export const styInput = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    width: 'fit-content',

    '&.small': {
        padding: small,
    },
    '&.medium': {
        padding: medium,
    },
    '&.large': {
        padding: large,
    },

    '&.success': {
        border: success,
    },
    '&.error': {
        border: error,
    },
});

export const styInputDefault = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    width: 'fit-content',
    padding: medium,
});

export const styStatusDefault = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    width: 'fit-content',
    border: '3px solid black',
});

export const styTextField = css({
    border: 'none',
    outline: 'none',
});

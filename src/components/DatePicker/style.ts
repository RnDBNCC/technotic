import { css } from '@emotion/css';

// size
const smallSize = '0.25rem 0.5rem';
const mediumSize = '0.5rem 1rem';
const largeSize = '1.5rem 2rem';

// status
const successState = '2px solid #2D9D4D';
const errorState = '2px solid #CD1212';

export const styLayout = css`
    padding: 10px;
`;

export const styDatePicker = css({
    outline: 'none',
    borderRadius: '12px',

    // size
    '&.small': {
        padding: smallSize,
    },
    '&.medium': {
        padding: mediumSize,
    },
    '&.large': {
        padding: largeSize,
    },

    // status
    '&.success': {
        border: successState,
    },
    '&.error': {
        border: errorState,
    },
});

export const styUndefinedDate = css({
    outline: 'none',
    borderRadius: '12px',
    padding: mediumSize,
});

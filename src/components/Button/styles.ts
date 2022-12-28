import { css } from '@emotion/css';

const small = '0.25rem 0.5rem';
const medium = '0.5rem 1rem';
const large = '1.5rem 2rem';

export const styButtonPrimary = css({
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    backgroundColor: '#0EB0DD',
    borderRadius: '0.8rem',
    outline: 'none',
    color: '#F0FEFF',
    gap: '0.5rem',
    ':hover': {
        backgroundColor: 'rgb(41 102 117)',
        cursor: 'pointer',
    },
    '&.small': {
        padding: small,
    },
    '&.medium': {
        padding: medium,
    },
    '&.large': {
        padding: large,
    },
});

export const styUndefinedBtn = css({
    padding: medium,
});

export const styButtonSecondary = css({
    border: 'none',
    backgroundColor: '#FF0000',
});

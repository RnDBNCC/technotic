import { css } from '@emotion/css';

const medium = '1rem 1.5rem';
const small = '0.5rem 1rem';
const large = '1.5rem 2rem';

export const Layout = css({
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
});

export const LayoutSize = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: '3px solid black',

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

export const TextFieldStyle = css({
    border: 'none',
    outline: 'none',
});

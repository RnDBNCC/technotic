import { css } from '@emotion/css';

const small = '0.5rem';
const medium = '1rem';
const large = '1.5rem';

export const RadioStyle = css({
    accentColor: 'red',
    margin: '0.5rem',
    '&.small': {
        height: small,
        width: small,
    },
    '&.medium': {
        height: medium,
        width: medium,
    },
    '&.large': {
        height: large,
        width: large,
    },
});

import { css } from '@emotion/css';

const small = '0.25rem 0.5rem';
const medium = '0.5rem 1rem';
const large = '1.5rem 2rem';

export const DatePickerStyle = css({
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

// export const undefined = css({
//     padding: medium
// })

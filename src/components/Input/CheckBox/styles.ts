import { css } from '@emotion/css';

const small = '8px';
const medium = '16px';
const large = '32px';
// const primary = 'red';
// const secondary = 'black';

export const CheckBoxContainerStyle = css({
    width: '',
    height: '',
    '&.small': {
        fontSize: small,
    },
    '&.medium': {
        fontSize: medium,
    },
    '&.large': {
        fontSize: large,
    },
    // '&.primary':{
    //     color: primary,
    // },
    // '&.secondary':{
    //     color: secondary,
    // },
});

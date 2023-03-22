import { css } from '@emotion/css';
import { ColorSystem } from '../ColorSystem/index';

const SMALL_BTN = '0.25rem 0.5rem';
const MEDIUM_BTN = '0.5rem 1rem';
const LARGE_BTN = '1.5rem 2rem';

export const styButton = {
    Primary: css({
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        backgroundColor: ColorSystem.BL500,
        borderRadius: '0.8rem',
        outline: 'none',
        color: '#F0FEFF',
        gap: '0.5rem',
        ':hover': {
            backgroundColor: '#296675',
            cursor: 'pointer',
        },
        '&.small': {
            padding: SMALL_BTN,
        },
        '&.medium': {
            padding: MEDIUM_BTN,
        },
        '&.large': {
            padding: LARGE_BTN,
        },
    }),

    Secondary: css({
        border: 'none',
        backgroundColor: '#FF0000',
        ':hover': {
            backgroundColor: '#296675',
            cursor: 'pointer',
        },
        // tunggu design
    }),

    Link: css({
        border: 'none',
        backgroundColor: 'transparent',
        ':hover': {
            cursor: 'pointer',
        },
        // tunggu design
    }),
};
// export const styButtonPrimary = css({
//     display: 'flex',
//     alignItems: 'center',
//     border: 'none',
//     backgroundColor: ColorSystem.BL500,
//     borderRadius: '0.8rem',
//     outline: 'none',
//     color: '#F0FEFF',
//     gap: '0.5rem',
//     ':hover': {
//         backgroundColor: '#296675',
//         cursor: 'pointer',
//     },
//     '&.small': {
//         padding: SMALL_BTN,
//     },
//     '&.medium': {
//         padding: MEDIUM_BTN,
//     },
//     '&.large': {
//         padding: LARGE_BTN,
//     },
// });

// export const styButtonSecondary = css({
//     border: 'none',
//     backgroundColor: '#FF0000',
//     // tunggu design
// });

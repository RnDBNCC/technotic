import { css } from '@emotion/css';

const SMALL_SIZE = '18px';
const MEDIUM_SIZE = '24px';
const LARGE_SIZE = '28px';

const PRIMARY = '#0054A5';
const SECONDARY = '#000000';

export const styCheckbox = css({
    '&.small': {
        height: SMALL_SIZE,
        width: SMALL_SIZE,
    },
    '&.medium': {
        height: MEDIUM_SIZE,
        width: MEDIUM_SIZE,
    },
    '&.large': {
        height: LARGE_SIZE,
        width: LARGE_SIZE,
    },

    '&.primary': {
        accentColor: PRIMARY,
    },

    '&.secondary': {
        accentColor: SECONDARY,
    },
});

export const stySizeDefault = css({
    height: MEDIUM_SIZE,
    width: MEDIUM_SIZE,
});

export const styTypeDefault = css({
    accentColor: PRIMARY,
});

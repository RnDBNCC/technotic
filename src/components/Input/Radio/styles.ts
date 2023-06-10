import { css } from '@emotion/css';

// Radio Size
const SMALL_RADIO = '16px';
const MEDIUM_RADIO = '20px';
const LARGE_RADIO = '24px';

// Radio Color
const PRIMARY_COLOR = '#22539F';
const SECONDARY_COLOR = '#676767';

// CSS styles for the label radio
export default css({
    display: 'inline-flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: '1rem',
});

// CSS styles for the size of the radio
const commonStyles = {
    ':hover': {
        cursor: 'pointer',
    },
    '&.small': {
        height: SMALL_RADIO,
        width: SMALL_RADIO,
    },
    '&.medium': {
        height: MEDIUM_RADIO,
        width: MEDIUM_RADIO,
    },
    '&.large': {
        height: LARGE_RADIO,
        width: LARGE_RADIO,
    },
};

// CSS styles for the type of the radio
export const styRadio = {
    Primary: css({
        accentColor: PRIMARY_COLOR,
        ...commonStyles,
    }),

    Secondary: css({
        accentColor: SECONDARY_COLOR,
        ...commonStyles,
    }),
};

export const TextChildStyle = css({
    display: 'inline-flex',
    alignItems: 'end',
    textAlign: 'end',
    padding: `0 0.5rem`,
    '&:hover': {
        cursor: 'pointer',
    },
});

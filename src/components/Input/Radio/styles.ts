import { css } from '@emotion/css';
import ColorSystem from '../../ColorSystem/index';

// Radio Size
const SMALL_RADIO = '16px';
const MEDIUM_RADIO = '20px';
const LARGE_RADIO = '24px';

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
        accentColor: ColorSystem.BLUE500,
        ...commonStyles,
    }),

    Secondary: css({
        accentColor: ColorSystem.GREY500,
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

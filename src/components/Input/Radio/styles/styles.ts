import { css } from '@emotion/css';
import ColorSystem from '../../../ColorSystem/index';
import sizeGenerator from './styleGenerator';

// CSS default styles for the label radio
export default css({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
});

// const for the radio list relative and absolute
export const styRadioList = (direction: string): ReturnType<typeof css> => {
    if (direction === 'row') {
        return css({
            position: 'relative',
            display: 'inline-flex',
            gap: '0.75rem',
            flexDirection: 'row',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
        });
    } else {
        return css({
            position: 'relative',
            display: 'inline-flex',
            width: 'fit-content',
            gap: '0.75rem',
            flexDirection: 'column',
            justifyContent: 'start',
            justifyItems: 'start',
            alignItems: 'start',
        });
    }
};

// main styles for the radio
const commonStyles = {
    transition: 'all 0.5s ease-in-out',
    '&:active': {
        opacity: '0.8',
        accentColor: ColorSystem.GREY100,
        transition: 'opacity 0.5s ease-in-out',
    },
    '&:hover': {
        cursor: 'pointer',
    },
};

// CSS styles for the type of the radio
export const styRadio = {
    Primary: (customSize: string, customColor = ColorSystem.BLUE500) =>
        css({
            accentColor: customColor,
            ...sizeGenerator[customSize],
            ...commonStyles,
        }),

    Secondary: (customSize: string, customColor = ColorSystem.GREY500) =>
        css({
            accentColor: customColor,
            ...sizeGenerator[customSize],
            ...commonStyles,
        }),
};

export const TextChildStyle = css({
    display: 'inline-flex',
    alignItems: 'end',
    textAlign: 'end',
    padding: '0 0.5rem',
    '&:hover': {
        cursor: 'pointer',
    },
});

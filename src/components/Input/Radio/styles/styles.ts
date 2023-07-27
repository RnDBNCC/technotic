import { css } from '@emotion/css';
import ColorSystem from '../../../ColorSystem/index';
import sizeGenerator from './styleGenerator';

// CSS default styles for the label radio
export default css({
    display: 'inline-flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
});

// main styles for the radio
const commonStyles = {
    transition: 'all 0.5s ease-in-out',
    '&:active': {
        opacity: '0.8',
        accentColor: ColorSystem.GREY100,
        transition: 'opacity 0.5s ease-in-out',
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

    Secondary: (customSize: string, customColor = ColorSystem.BLUE500) =>
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
    padding: `0 0.5rem`,
    '&:hover': {
        cursor: 'pointer',
    },
});

import { css } from '@emotion/css';

const SIZES = {
    small: {
        padding: '8px',
        width: '320px',
        largeTablet: {
            padding: '6px',
            width: '290px',
        },
        smallTablet: {
            padding: '5px',
            width: '275px',
        },
        phone: {
            padding: '4px',
            width: '260px',
        },
    },
    medium: {
        padding: '12px',
        width: '380px',
        largeTablet: {
            padding: '10px',
            width: '330px',
        },
        smallTablet: {
            padding: '9px',
            width: '305px',
        },
        phone: {
            padding: '8px',
            width: '280px',
        },
    },
    large: {
        padding: '14px',
        width: '560px',
        largeTablet: {
            padding: '12px',
            width: '430px',
        },
        smallTablet: {
            padding: '11px',
            width: '365px',
        },
        phone: {
            padding: '10px',
            width: '300px',
        },
    },
};

export const styInputBorder = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    width: 'fit-content',
    border: '3px solid #DCDCDC',
    backgroundColor: 'white',
});

const BORDERS = {
    success: '3px solid green',
    error: '3px solid red',
};

export const styInput = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    width: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '100px',

    '&.small': SIZES.small,
    '&.medium': SIZES.medium,
    '&.large': SIZES.large,

    '@media screen and (max-width: 768px)': {
        '&.small': SIZES.small.largeTablet,
        '&.medium': SIZES.medium.largeTablet,
        '&.large': SIZES.large.largeTablet,
    },

    '@media screen and (max-width: 592px)': {
        '&.small': SIZES.small.smallTablet,
        '&.medium': SIZES.medium.smallTablet,
        '&.large': SIZES.large.smallTablet,
    },

    '@media screen and (max-width: 414px)': {
        '&.small': SIZES.small.phone,
        '&.medium': SIZES.medium.phone,
        '&.large': SIZES.large.phone,
    },

    '&.success': {
        border: BORDERS.success,
    },
    '&.error': {
        border: BORDERS.error,
    },
});

export const styInputDefault = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    width: 'fit-content',
    alignItems: 'center',
});

export const styStatusDefault = css({
    border: '3px solid #DCDCDC',
});

export const styTextField = css({
    border: 'none',
    outline: 'none',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
});

export const styButtonIcon = css({
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: '11%',
    height: 'max-content',
    paddingTop: '3.5%',
    paddingBottom: '3.5%',
    margin: '0',
    border: 'none',
    borderRadius: '0px 12px 12px 0px',
    cursor: 'pointer',
});

export const styButtonText = css({
    overflowX: 'hidden',
    overflowY: 'hidden',
    width: 'max-content',
    height: 'max-content',
    paddingTop: '3%',
    paddingBottom: '3%',
    margin: '0',
    border: 'none',
    borderRadius: '0px 12px 12px 0px',
    cursor: 'pointer',
    color: 'white',
});

export const styButtonDefault = css({
    display: 'none',
});

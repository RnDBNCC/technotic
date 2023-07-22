import { css } from '@emotion/css';

const sizes = {
    small: {
        padding: '8px',
        width: '320px',
        tablet1: {
            padding: '6px',
            width: '290px',
        },
        tablet2: {
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
        tablet1: {
            padding: '10px',
            width: '330px',
        },
        tablet2: {
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
        tablet1: {
            padding: '12px',
            width: '430px',
        },
        tablet2: {
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

const borders = {
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

    '&.small': sizes.small,
    '&.medium': sizes.medium,
    '&.large': sizes.large,

    '@media screen and (max-width: 768px)': {
        '&.small': sizes.small.tablet1,
        '&.medium': sizes.medium.tablet1,
        '&.large': sizes.large.tablet1,
    },

    '@media screen and (max-width: 592px)': {
        '&.small': sizes.small.tablet2,
        '&.medium': sizes.medium.tablet2,
        '&.large': sizes.large.tablet2,
    },

    '@media screen and (max-width: 414px)': {
        '&.small': sizes.small.phone,
        '&.medium': sizes.medium.phone,
        '&.large': sizes.large.phone,
    },

    '&.success': {
        border: borders.success,
    },
    '&.error': {
        border: borders.error,
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

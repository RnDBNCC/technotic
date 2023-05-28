import { css } from '@emotion/css';

const SMALL_SIZE = '8px';
const SMALL_SIZE_PHONE = '4px';
const SMALL_WIDTH = '320px';
const SMALL_WIDTH_PHONE = '260px';

const MEDIUM_SIZE = '12px';
const MEDIUM_SIZE_PHONE = '8px';
const MEDIUM_WIDTH = '380px';
const MEDIUM_WIDTH_PHONE = '280px';

const LARGE_SIZE = '14px';
const LARGE_SIZE_PHONE = '10px';
const LARGE_WIDTH = '560px';
const LARGE_WIDTH_PHONE = '300px';

const SUCCESS_STATUS = '3px solid green';
const ERROR_STATUS = '3px solid red';

export const styInputBorder = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    width: 'fit-content',
    border: '3px solid #DCDCDC',
    backgroundColor: 'white',
});

export const styInput = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    width: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '100px',

    '&.small': {
        padding: SMALL_SIZE,
        width: SMALL_WIDTH,
    },
    '&.medium': {
        padding: MEDIUM_SIZE,
        width: MEDIUM_WIDTH,
    },
    '&.large': {
        padding: LARGE_SIZE,
        width: LARGE_WIDTH,
    },

    '@media screen and (max-width: 414px)': {
        '&.small': {
            padding: SMALL_SIZE_PHONE,
            width: SMALL_WIDTH_PHONE,
        },
        '&.medium': {
            padding: MEDIUM_SIZE_PHONE,
            width: MEDIUM_WIDTH_PHONE,
        },
        '&.large': {
            padding: LARGE_SIZE_PHONE,
            width: LARGE_WIDTH_PHONE,
        },
    },

    '&.success': {
        border: SUCCESS_STATUS,
    },
    '&.error': {
        border: ERROR_STATUS,
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

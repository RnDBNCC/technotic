import { css } from '@emotion/css';

const SMALL_WIDTH = '320px';
const SMALL_HEIGHT = '160px';

const SMALL_WIDTH_PHONE = '260px';
const SMALL_HEIGHT_PHONE = '100px';

const MEDIUM_WIDTH = '380px';
const MEDIUM_HEIGHT = '180px';

const MEDIUM_WIDTH_PHONE = '280px';
const MEDIUM_HEIGHT_PHONE = '120px';

const LARGE_WIDTH = '420px';
const LARGE_HEIGHT = '200px';

const LARGE_WIDTH_PHONE = '300px';
const LARGE_HEIGHT_PHONE = '140px';

const SUCCESS_STATUS = '3px solid green';
const ERROR_STATUS = '3px solid red';

export const textAreaStyle = css({
    margin: '0px',
    padding: '10px',
    border: '3px solid #DCDCDC',
    resize: 'none',
    outline: 'none',
    backgroundColor: 'white',
    borderRadius: '8px',
    '&.small': {
        width: SMALL_WIDTH,
        height: SMALL_HEIGHT,
    },
    '&.medium': {
        width: MEDIUM_WIDTH,
        height: MEDIUM_HEIGHT,
    },
    '&.large': {
        width: LARGE_WIDTH,
        height: LARGE_HEIGHT,
    },

    '@media screen and (max-width: 414px)': {
        '&.small': {
            width: SMALL_WIDTH_PHONE,
            height: SMALL_HEIGHT_PHONE,
        },
        '&.medium': {
            width: MEDIUM_WIDTH_PHONE,
            height: MEDIUM_HEIGHT_PHONE,
        },
        '&.large': {
            width: LARGE_WIDTH_PHONE,
            height: LARGE_HEIGHT_PHONE,
        },
    },

    '&.success': {
        border: SUCCESS_STATUS,
    },
    '&.error': {
        border: ERROR_STATUS,
    },
});

export const stySizeDefault = css({
    width: MEDIUM_WIDTH,
    height: MEDIUM_HEIGHT,
});

export const styStatusDefault = css({
    margin: '0px',
    padding: '10px',
    border: '3px solid #DCDCDC',
    resize: 'none',
    outline: 'none',
    backgroundColor: 'white',
    borderRadius: '8px',
});

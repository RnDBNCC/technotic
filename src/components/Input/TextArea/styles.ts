import { css } from '@emotion/css';

const SMALL_WIDTH = '300px';
const SMALL_HEIGHT = '160px';

const MEDIUM_WIDTH = '400px';
const MEDIUM_HEIGHT = '200px';

const LARGE_WIDTH = '500px';
const LARGE_HEIGHT = '240px';

const SUCCESS_STATUS = '3px solid green';
const ERROR_STATUS = '3px solid red';

export const textAreaStyle = css({
    margin: '10px',
    padding: '10px',
    border: '3px solid black',
    resize: 'none',
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
    border: '3px solid black',
});

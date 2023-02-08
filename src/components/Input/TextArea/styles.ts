import { css } from '@emotion/css';

const SUCCESS_STATUS = '3px solid green';
const ERROR_STATUS = '3px solid red';

export const textAreaStyle = css({
    margin: '10px',
    padding: '10px',
    border: '3px solid black',
    '&.success': {
        border: SUCCESS_STATUS,
    },
    '&.error': {
        border: ERROR_STATUS,
    },
});

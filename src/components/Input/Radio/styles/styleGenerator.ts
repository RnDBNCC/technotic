// Radio Size
const SMALL_RADIO = '16px';
const MEDIUM_RADIO = '20px';
const LARGE_RADIO = '24px';

const sizeGenerator: { [key: string]: { height: string; width: string } } = {
    small: {
        height: SMALL_RADIO,
        width: SMALL_RADIO,
    },
    medium: {
        height: MEDIUM_RADIO,
        width: MEDIUM_RADIO,
    },
    large: {
        height: LARGE_RADIO,
        width: LARGE_RADIO,
    },
};

export default sizeGenerator;

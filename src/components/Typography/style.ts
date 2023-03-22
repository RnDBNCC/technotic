import { css } from '@emotion/css';
// import styles from 'my.module.css';

// Size
// Heading
const HEADING_1 = '40px';
const HEADING_2 = '32px';
const HEADING_3 = '24px';
const HEADING_4 = '20px';
const HEADING_5 = '16px';
const HEADING_6 = '14px';
const HEADING_7 = '12px';
const HEADING_8 = '10px';

// Body
const BODY_1 = '40px';
const BODY_2 = '32px';
const BODY_3 = '24px';
const BODY_4 = '20px';
const BODY_5 = '16px';
const BODY_6 = '14px';
const BODY_7 = '12px';
const BODY_8 = '10px';

// Weight
const REGULAR = '400';
const MEDIUM = '500';
const SEMI_BOLD = '600';
const BOLD = '700';

export const styLayout = css`
    padding: 10px;
`;

export const styTypography = css({
    // Heading
    '&.heading-1': {
        fontSize: HEADING_1,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-2': {
        fontSize: HEADING_2,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-3': {
        fontSize: HEADING_3,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-4': {
        fontSize: HEADING_4,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-5': {
        fontSize: HEADING_5,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-6': {
        fontSize: HEADING_6,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-7': {
        fontSize: HEADING_7,
        fontFamily: "'Montserrat' , sans-serif",
    },
    '&.heading-8': {
        fontSize: HEADING_8,
        fontFamily: "'Montserrat' , sans-serif",
    },

    // Body
    '&.body-1': {
        fontSize: BODY_1,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-2': {
        fontSize: BODY_2,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-3': {
        fontSize: BODY_3,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-4': {
        fontSize: BODY_4,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-5': {
        fontSize: BODY_5,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-6': {
        fontSize: BODY_6,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-7': {
        fontSize: BODY_7,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.body-8': {
        fontSize: BODY_8,
        fontFamily: "'Poppins' , sans-serif",
    },

    // Weight
    '&.regular': {
        fontWeight: REGULAR,
    },
    '&.medium': {
        fontWeight: MEDIUM,
    },
    '&.semibold': {
        fontWeight: SEMI_BOLD,
    },
    '&.bold': {
        fontWeight: BOLD,
    },
});

export const styUndefinedTypography = css({
    fontSize: BODY_5,
    fontFamily: 'Poppins',
    fontWeight: REGULAR,
});

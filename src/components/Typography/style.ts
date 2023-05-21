import { css } from '@emotion/css';

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
const PARAGRAPH_1 = '40px';
const PARAGRAPH_2 = '32px';
const PARAGRAPH_3 = '24px';
const PARAGRAPH_4 = '20px';
const PARAGRAPH_5 = '16px';
const PARAGRAPH_6 = '14px';
const PARAGRAPH_7 = '12px';
const PARAGRAPH_8 = '10px';

// Weight
const REGULAR = '400';
const MEDIUM = '500';
const SEMI_BOLD = '600';
const BOLD = '700';

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

    // Paragraph
    '&.paragraph-1': {
        fontSize: PARAGRAPH_1,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-2': {
        fontSize: PARAGRAPH_2,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-3': {
        fontSize: PARAGRAPH_3,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-4': {
        fontSize: PARAGRAPH_4,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-5': {
        fontSize: PARAGRAPH_5,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-6': {
        fontSize: PARAGRAPH_6,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-7': {
        fontSize: PARAGRAPH_7,
        fontFamily: "'Poppins' , sans-serif",
    },
    '&.paragraph-8': {
        fontSize: PARAGRAPH_8,
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
    fontSize: PARAGRAPH_5,
    fontFamily: 'Poppins',
    fontWeight: REGULAR,
});

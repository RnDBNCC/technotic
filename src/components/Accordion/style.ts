import { css } from '@emotion/css';

export const styAccordion = css`
    .faq {
        max-width: 700px;
        margin-top: 2rem;
        cursor: pointer;
        padding-left: 10px;
    }

    .question {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: 1.8rem;
            margin: 0;
        }
    }

    .answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 1.4s ease;

        p {
            padding-top: 1rem;
            line-height: 1.6;
            font-size: 1.4rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #000;
            margin: 0;
        }
    }

    .faq.active .answer {
        max-height: 300px;
        animation: fade 1s ease-in-out;
    }

    .faq.active .question .icon {
        transform: rotate(180deg);
    }

    .question .icon {
        transition: transform 0.4s ease-in;
    }

    @keyframes fade {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

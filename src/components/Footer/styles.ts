import { css, injectGlobal } from '@emotion/css';
import '../Typography/fonts.css';

injectGlobal`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: #FFFFFF;
}`;

export const styFooterContainer = (
    bgColor: string,
    fontColor: string
): string => css`
    background-color: ${bgColor};
    color: ${fontColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 4rem 2rem 2rem 2rem;
    & a {
        color: ${fontColor};
    }

    @media (min-width: 640px) {
        padding: 4rem 3rem 2rem 3rem;
    }
    @media (min-width: 768px) {
        padding: 4rem 4rem 2rem 4rem;
    }

    @media (min-width: 1024px) {
        padding: 4rem 6rem 2rem 6rem;
    }

    @media (min-width: 1280px) {
        padding: 4rem 7rem 2rem 7rem;
    }

    @media (min-width: 1536px) {
        padding: 4rem 8rem 2rem 8rem;
    }
`;

export const styFooterTop = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 6rem;
    }
    @media (min-width: 768px) {
        gap: 7rem;
    }

    @media (min-width: 1024px) {
        gap: 8rem;
    }

    @media (min-width: 1280px) {
        gap: 9rem;
    }

    @media (min-width: 1536px) {
        gap: 10rem;
    }
`;

export const styTitleDescContainer = css`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;

    @media (min-width: 640px) {
        width: 300px;
    }
`;

export const styFooterTitle = css`
    font-family: montserrat;
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & img {
        height: 48px;
        object-fit: contain;
    }
`;

export const styFooterDesc = css`
    font-family: poppins;
    font-weight: 500;
    font-size: 0.8rem;
    opacity: 0.6;
`;

export const styLinksContainer = css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4rem;

    @media (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 6rem;
    }
`;

export const styLinkHeading = css`
    font-family: Montserrat;
    font-size: 1.2rem;
    font-weight: 700;
`;

export const styNavLinkContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & a.navLink {
        font-family: poppins;
        font-weight: 500;
        font-size: 0.8rem;
        opacity: 0.6;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    & a.navLink:hover {
        opacity: 1;
    }
`;

export const stySocialMediaContainer = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & a.socialMediaLink {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: poppins;
        font-weight: 500;
        font-size: 0.8rem;
    }
`;

export const styCopyrightText = css`
    font-family: poppins;
    font-weight: 500;
    font-size: 0.75rem;
    text-align: center;
`;

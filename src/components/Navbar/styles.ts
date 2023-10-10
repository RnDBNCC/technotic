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

export const styNavbarContainer = (
    navbarPositionType: string,
    bgColor: string
): string => css`
    position: ${navbarPositionType};
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: ${bgColor};
    font-size: 1rem;
    height: 100px;
    transition: background-color 0.3s ease-in-out;

    @media (min-width: 640px) {
        padding: 1.5rem 3rem;

    @media (min-width: 768px) {
        padding: 1.5rem 4rem;
    }

    @media (min-width: 1024px) {
        padding: 1.5rem 6rem;
    }

    @media (min-width: 1280px) {
        padding: 1.5rem 7rem;
    }

    @media (min-width: 1536px) {
        padding: 1.5rem 8rem;
    }
`;

export const styNavLinks = (fontColor: string): string => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    font-size: 1rem;
    font-weight: 300;
    font-family: poppins;
    & a.navLink {
        display: inline-block;
        position: relative;
        color: ${fontColor};
    }
    & a.navLink::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -8px;
        left: 0;
        background-color: ${fontColor};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    & a.navLink:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const styHamburgerMenuButton = (
    menuColor: string,
    menuBgColor: string
): string => css`
    position: relative;
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    background-color: ${menuBgColor};
    transition: background-color 0.3s ease-in-out;
    & span.menuIcon {
        position: absolute;
        background-color: ${menuColor};
        width: 20px;
        height: 3px;
        border-radius: 99px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    & span.menuIcon:nth-child(1) {
        transform: translateY(-7px);
        transition: transform 0.2s ease;
    }
    & span.menuIcon:nth-child(3) {
        transform: translateY(7px);
        transition: transform 0.2s ease;
    }
`;

export const styCrossMenuButton = (
    menuColor: string,
    menuBgColor: string
): string => css`
    position: relative;
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    background-color: ${menuBgColor};
    transition: background-color 0.3s ease-in-out;
    & span.menuIcon {
        position: absolute;
        background-color: ${menuColor};
        width: 20px;
        height: 3px;
        border-radius: 99px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    & span.menuIcon:nth-child(1) {
        transform: rotate(45deg);
        transition: transform 0.2s ease;
    }
    & span.menuIcon:nth-child(2) {
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    & span.menuIcon:nth-child(3) {
        transform: rotate(-45deg);
        transition: transform 0.2s ease;
    }
`;

export const styMobileNavLinksOpen = (bgColor: string): string => css`
    font-size: 1rem;
    font-weight: 300;
    font-family: poppins;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${bgColor};
    width: 100%;
    transform: translateY(100px);
    transition: transform 0.3s ease, background-color 0.3s ease-in-out;
    max-height: 50vh;
    overflow: auto;
    & a.mobileNavLink {
        padding: 0.5rem 2rem 2rem 2rem;
        text-align: center;
    }
    & div.mobileNavLinkButton {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 2rem 2rem 2rem;
    }
`;

export const styMobileNavLinksClose = (bgColor: string): string => css`
    font-size: 1rem;
    font-weight: 300;
    font-family: poppins;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${bgColor};
    width: 100%;
    transform: translateY(-350px);
    transition: transform 0.3s ease, background-color 0.3s ease-in-out;
    max-height: 50vh;
    overflow: auto;
    & a.mobileNavLink {
        padding: 0.5rem 2rem 2rem 2rem;
        text-align: center;
    }
    & div.mobileNavLinkButton {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 2rem 2rem 2rem;
    }
`;

export const styNavbarTitle = (fontColor: string): string => css`
    color: ${fontColor};
    font-family: montserrat;
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & img {
        height: 36px;
        object-fit: contain;
    }
`;

export const styNavbarButton = (
    bgColor: string,
    fontColor: string
): string => css`
    font-weight: 600;
    font-size: 1.125rem;
    color: ${fontColor};
    background-color: transparent;
    padding: 0.75rem 1.5rem;
    border: 2px ${fontColor} solid;
    border-radius: 1.25rem;
    cursor: pointer;
    font-family: montserrat;
    transition: 150ms;
    :hover {
        background-color: ${fontColor};
        color: ${bgColor};
        transition: 150ms;
    }
`;

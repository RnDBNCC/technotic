import { css, injectGlobal } from '@emotion/css';

injectGlobal`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: #fbfbfb;
}`;

export const navbarContainer = css`
    position: fixed;
    width: 100%;
`;

export const navbar = (color: string, padding: string): string => css`
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${padding};
    background-color: ${color};
    color: #fbfbfb;
    font-size: 1rem;
    height: 100px;
    max-height: 100px;
`;

export const navlinks = css`
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 1rem;
    & a {
        display: inline-block;
        position: relative;
    }
    & a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -8px;
        left: 0;
        background-color: #fbfbfb;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    & a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const navbarHamburgerMenuButton = css`
    position: relative;
    height: 100%;
    width: 16px;
    & span {
        position: absolute;
        background-color: #fbfbfb;
        width: 16px;
        height: 2px;
        border-radius: 99px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    & span:nth-child(1) {
        transform: translateY(-6px);
        transition: transform 0.2s ease;
    }
    & span:nth-child(3) {
        transform: translateY(6px);
        transition: transform 0.2s ease;
    }
`;

export const navbarCrossMenuButton = css`
    position: relative;
    height: 100%;
    width: 16px;
    & span {
        position: absolute;
        background-color: #fbfbfb;
        width: 16px;
        height: 2px;
        border-radius: 99px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    & span:nth-child(1) {
        transform: rotate(45deg);
        transition: transform 0.2s ease;
    }
    & span:nth-child(2) {
        opacity: 0;
        transform: opacity 0.2s ease;
    }
    & span:nth-child(3) {
        transform: rotate(-45deg);
        transition: transform 0.2s ease;
    }
`;

export const mobileNavlinksOpen = css`
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #252525;
    width: 100%;
    transform: translateY(100px);
    transition: transform 0.3s ease;
    max-height: 50vh;
    overflow: auto;
    & a {
        padding: 2rem;
        text-align: center;
    }
`;

export const mobileNavlinksClose = css`
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #252525;
    width: 100%;
    transform: translateY(-350px);
    transition: transform 0.3s ease;
    max-height: 50vh;
    overflow: auto;
    & a {
        padding: 2rem;
        text-align: center;
    }
`;

export const navbarTitle = css`
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

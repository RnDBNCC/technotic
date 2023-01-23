import { css } from '@emotion/css';

export const navbarContainerStyle = css`
    display: flex;
    justify-content: space-between;
    padding: 32px 96px;
    background-color: DarkSlateBlue;
    color: #fbfbfb;
    font-size: 1rem;
    & a {
        text-decoration: none;
        color: #fbfbfb;
        cursor: pointer;
    }
`;

export const navlinks = css`
    display: flex;
    justify-content: center;
    gap: 2rem;
    & a {
        display: inline-block;
        position: relative;
        color: #fbfbfb;
    }
    & a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -6px;
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
    z-index: -100;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #252525;
    width: 100%;
    transform: translateY(82px);
    transition: transform 0.3s ease;
    max-height: 75vh;
    overflow: auto;
    & a {
        padding: 2rem;
        text-align: center;
    }
`;

export const mobileNavlinksClose = css`
    position: absolute;
    z-index: -100;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: #252525;
    width: 100%;
    transform: translateY(-300px);
    transition: transform 0.3s ease;
    max-height: 75vh;
    overflow: auto;
    & a {
        padding: 2rem;
        text-align: center;
    }
`;

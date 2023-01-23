import React, { useState, useEffect } from 'react';
import { cx } from '@emotion/css';

import { NavbarProps } from './types';

import {
    navbarContainerStyle,
    navlinks,
    navbarHamburgerMenuButton,
    navbarCrossMenuButton,
    mobileNavlinksOpen,
    mobileNavlinksClose,
} from './styles';

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize: () => void = () =>
            setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = screenWidth <= 1024;

    const toggleMenu: () => void = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className={cx(navbarContainerStyle)}>
            <a href="/">{title}</a>

            {isMobile ? (
                <div
                    className={`cx(
            ${showMenu ? navbarCrossMenuButton : navbarHamburgerMenuButton}
          )`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : (
                <div className={cx(navlinks)}>
                    {links.map((link, index) => (
                        <a href={`/${link}`} key={index}>
                            {link}
                        </a>
                    ))}
                </div>
            )}

            {isMobile ? (
                <div
                    className={`cx(
          ${showMenu ? mobileNavlinksOpen : mobileNavlinksClose}
        )`}
                >
                    {links.map((link, index) => (
                        <a href={`/${link}`} key={index}>
                            {link}
                        </a>
                    ))}
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;

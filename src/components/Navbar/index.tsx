import React, { useState, useEffect } from 'react';
import { cx } from '@emotion/css';

import { NavbarProps } from './types';

import {
    navbarContainer,
    navbar,
    navlinks,
    navbarHamburgerMenuButton,
    navbarCrossMenuButton,
    mobileNavlinksOpen,
    mobileNavlinksClose,
    navbarTitle,
} from './styles';

const Navbar: React.FC<NavbarProps> = ({
    title = 'technotic',
    links = ['Link1', 'Link2', 'Link3', 'Link4'],
    color = '#22539F',
}) => {
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
        <div className={cx(navbarContainer)}>
            {' '}
            <nav
                className={`cx(
            ${
                isMobile
                    ? navbar(color, '24px 64px')
                    : navbar(color, '24px 128px')
            }
          )`}
            >
                <a href="/" className={cx(navbarTitle)}>
                    {title}
                </a>

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
            </nav>
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
        </div>
    );
};

export default Navbar;

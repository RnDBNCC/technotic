import React, { useState, useEffect } from 'react';
import { cx } from '@emotion/css';

import { NavbarProps } from './navbarProps';

import {
    styNavbarContainer,
    styNavLinks,
    styHamburgerMenuButton,
    styCrossMenuButton,
    styMobileNavLinksOpen,
    styMobileNavLinksClose,
    styNavbarTitle,
    styNavbarButton,
} from './styles';

const Navbar: React.FC<NavbarProps> = ({
    title = 'technotic',
    positionType = 'static',
    bgColorTop = '#22539F',
    bgColorScroll = '#22539F',
    fontColor = '#FFFFFF',
    menuColor = '#000000',
    menuBgColor = '#FFFFFF',
    navLinks = [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/' },
        { text: 'Contact Us', href: '/' },
    ],
    displayButton = true,
    buttonLink = {
        text: 'Sign In',
        href: '/',
    },
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleResize = (): void => setScreenWidth(window.innerWidth);
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isMobile = screenWidth <= 1024;

    const toggleMenu = (): void => {
        setShowMenu(!showMenu);
    };

    return (
        <nav
            className={cx(
                styNavbarContainer(
                    positionType,
                    scrolling ? bgColorScroll : bgColorTop
                )
            )}
        >
            <a href="/" className={cx(styNavbarTitle(fontColor))}>
                {title}
            </a>
            {isMobile ? (
                <div
                    className={cx(
                        showMenu
                            ? styCrossMenuButton(menuColor, menuBgColor)
                            : styHamburgerMenuButton(menuColor, menuBgColor)
                    )}
                    onClick={toggleMenu}
                >
                    <span className="menuIcon"></span>
                    <span className="menuIcon"></span>
                    <span className="menuIcon"></span>
                </div>
            ) : (
                <div className={cx(styNavLinks(fontColor))}>
                    {navLinks.map((navlink, index) => (
                        <a key={index} href={navlink.href} className="navLink">
                            {navlink.text}
                        </a>
                    ))}
                </div>
            )}
            {!isMobile && displayButton && (
                <a
                    href={buttonLink.href}
                    className={cx(
                        styNavbarButton(
                            scrolling ? bgColorScroll : bgColorTop,
                            fontColor
                        )
                    )}
                >
                    {buttonLink.text}
                </a>
            )}
            {isMobile && (
                <div
                    className={cx(
                        showMenu
                            ? styMobileNavLinksOpen(bgColorScroll)
                            : styMobileNavLinksClose(bgColorScroll)
                    )}
                >
                    {navLinks.map((navlink, index) => (
                        <a
                            className="mobileNavLink"
                            key={index}
                            href={navlink.href}
                        >
                            {navlink.text}
                        </a>
                    ))}
                    <div className="mobileNavLinkButton">
                        {displayButton && (
                            <a
                                href={buttonLink.href}
                                className={cx(
                                    styNavbarButton(
                                        scrolling ? bgColorScroll : bgColorTop,
                                        fontColor
                                    )
                                )}
                            >
                                {buttonLink.text}
                            </a>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

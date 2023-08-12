import React, { useState, useEffect } from 'react';
import { cx } from '@emotion/css';

import { NavbarProps } from './types';

import * as styles from './styles';

const Navbar: React.FC<NavbarProps> = ({
    title = 'technotic',
    positionType = 'static',
    bgColor = '#22539F',
    fontColor = '#FFFFFF',
    menuColor = '#000000',
    menuBgColor = '#FFFFFF',
    navLinks = [
        { text: 'link1', href: '/' },
        { text: 'link2', href: '/' },
        { text: 'link3', href: '/' },
    ],
    displayButton = true,
    buttonLink = {
        text: 'Click Me',
        href: '/',
    },
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
        <nav className={cx(styles.styNavbarContainer(positionType))}>
            <div className={cx(styles.styNavbar(bgColor))}>
                <a href="/" className={cx(styles.styNavbarTitle(fontColor))}>
                    {title}
                </a>
                {isMobile ? (
                    <div
                        className={`cx(
            ${
                showMenu
                    ? styles.styNavbarCrossMenuButton(menuColor, menuBgColor)
                    : styles.styNavbarHamburgerMenuButton(
                          menuColor,
                          menuBgColor
                      )
            }
          )`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <div className={cx(styles.styNavlinks(fontColor))}>
                        {navLinks.map((navlink, index) => (
                            <a key={index} href={navlink.href}>
                                {navlink.text}
                            </a>
                        ))}
                    </div>
                )}
                {isMobile
                    ? null
                    : displayButton && (
                          <a
                              href={buttonLink.href}
                              className={cx(
                                  styles.styNavbarButton(bgColor, fontColor)
                              )}
                          >
                              {buttonLink.text}
                          </a>
                      )}
            </div>
            {isMobile ? (
                <div
                    className={`cx(
          ${
              showMenu
                  ? styles.styMobileNavlinksOpen(bgColor)
                  : styles.styMobileNavlinksClose(bgColor)
          }
        )`}
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

                    {displayButton && (
                        <div>
                            <a
                                href={buttonLink.href}
                                className={cx(
                                    styles.styNavbarButton(bgColor, fontColor)
                                )}
                            >
                                {buttonLink.text}
                            </a>
                        </div>
                    )}
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;

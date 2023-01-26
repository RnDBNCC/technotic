import React, { useState, useEffect } from 'react';
import { cx } from '@emotion/css';

import { NavbarProps } from './types';

import * as styles from './styles';

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
        <nav className={cx(styles.styNavbarContainer)}>
            {' '}
            <div
                className={`cx(
            ${
                isMobile
                    ? styles.styNavbar(color, '24px 64px')
                    : styles.styNavbar(color, '24px 128px')
            }
          )`}
            >
                <a href="/" className={cx(styles.styNavbarTitle)}>
                    {title}
                </a>

                {isMobile ? (
                    <div
                        className={`cx(
            ${
                showMenu
                    ? styles.styNavbarCrossMenuButton
                    : styles.styNavbarHamburgerMenuButton
            }
          )`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <div className={cx(styles.styNavlinks)}>
                        {links.map((link, index) => (
                            <a href={`/${link}`} key={index}>
                                {link}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            {isMobile ? (
                <div
                    className={`cx(
          ${
              showMenu
                  ? styles.styMobileNavlinksOpen
                  : styles.styMobileNavlinksClose
          }
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

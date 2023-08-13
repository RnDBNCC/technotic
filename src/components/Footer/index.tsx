import React from 'react';
import { cx } from '@emotion/css';
import { FooterProps, NavLink } from './types';
import * as styles from './styles';
import * as icons from '../Icons';

const Footer: React.FC<FooterProps> = ({
    bgColor = '#111314',
    fontColor = '#FFFFFF',
    title = 'Technotic',
    description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, dolore quos asperiores doloribus ea eaque sed impedit totam voluptate ipsa obcaecati consequuntur sit molestias esse neque ullam?',
    displayNavLinks1 = true,
    navLinksTitle1 = 'NavLinks 1',
    navLinks1 = [
        { text: 'link1', href: '/' },
        { text: 'link2', href: '/' },
        { text: 'link3', href: '/' },
    ],
    displayNavLinks2 = true,
    navLinksTitle2 = 'NavLinks 2',
    navLinks2 = [
        { text: 'link1', href: '/' },
        { text: 'link2', href: '/' },
        { text: 'link3', href: '/' },
    ],
    displayNavLinks3 = true,
    navLinksTitle3 = 'NavLinks 3',
    navLinks3 = [
        { text: 'link1', href: '/' },
        { text: 'link2', href: '/' },
        { text: 'link3', href: '/' },
    ],
    facebook = null,
    instagram = null,
    twitter = null,
    linkedin = null,
    youtube = null,
    copyrightText = 'Copyright © 2023 Technotic. All rights reserved.',
}) => {
    const renderSocialMedia = (): JSX.Element => (
        <span className={cx(styles.stySocialMediaContainer)}>
            {facebook !== null && (
                <a
                    href={facebook?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <icons.FacebookIcon color={fontColor} size={24} />
                    {facebook?.username}
                </a>
            )}

            {instagram !== null && (
                <a
                    href={instagram?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <icons.InstagramIcon color={fontColor} size={24} />
                    {instagram?.username}
                </a>
            )}

            {twitter !== null && (
                <a
                    href={twitter?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <icons.TwitterIcon color={fontColor} size={24} />
                    {twitter?.username}
                </a>
            )}

            {linkedin !== null && (
                <a
                    href={linkedin?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <icons.LinkedInIcon color={fontColor} size={24} />
                    {linkedin?.username}
                </a>
            )}

            {youtube !== null && (
                <a
                    href={youtube?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <icons.YoutubeIcon color={fontColor} size={24} />
                    {youtube?.username}
                </a>
            )}
        </span>
    );

    const renderNavLinks = (
        navLinks: NavLink[],
        navLinksTitle: string
    ): JSX.Element => (
        <span className={cx(styles.styNavLinkContainer)}>
            <h1 className={cx(styles.styLinkHeading)}>{navLinksTitle}</h1>
            {navLinks.map((navlink, index) => (
                <a key={index} href={navlink.href}>
                    {navlink.text}
                </a>
            ))}
        </span>
    );

    const isSocialMediaEmpty = (): boolean => {
        if (
            facebook === null &&
            instagram === null &&
            twitter === null &&
            linkedin === null &&
            youtube === null
        )
            return true;
        else return false;
    };

    return (
        <footer className={cx(styles.styFooterContainer(bgColor, fontColor))}>
            <div className={cx(styles.styFooterTop)}>
                <div className={cx(styles.styTitleDescContainer)}>
                    <a href="/" className={cx(styles.styFooterTitle)}>
                        {title}
                    </a>
                    <p className={cx(styles.styFooterDesc)}>{description}</p>
                </div>
                <div className={cx(styles.styLinksContainer)}>
                    {displayNavLinks1 &&
                        renderNavLinks(navLinks1, navLinksTitle1)}
                    {displayNavLinks2 &&
                        renderNavLinks(navLinks2, navLinksTitle2)}
                    {displayNavLinks3 &&
                        renderNavLinks(navLinks3, navLinksTitle3)}
                    {!isSocialMediaEmpty() && renderSocialMedia()}
                </div>
            </div>
            <p className={cx(styles.styCopyrightText)}>{copyrightText}</p>
        </footer>
    );
};

export default Footer;

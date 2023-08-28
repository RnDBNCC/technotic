import React, { ReactNode } from 'react';
import { cx } from '@emotion/css';
import { FooterProps, NavLink } from './types';
import * as styles from './styles';
import * as icons from '../Icons';

const Footer: React.FC<FooterProps> = ({
    bgColor = '#111314',
    fontColor = '#FFFFFF',
    title = 'Technotic',
    description = 'Design smarter, not harder with Technotics powerful design system.',
    displayNavLinks1 = true,
    navLinksTitle1 = 'Explore',
    navLinks1 = [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/' },
        { text: 'Contact Us', href: '/' },
    ],
    displayNavLinks2 = true,
    navLinksTitle2 = 'Resources',
    navLinks2 = [
        { text: 'Documentation', href: '/' },
        { text: 'Tutorial', href: '/' },
        { text: 'Glossary', href: '/' },
    ],
    displayNavLinks3 = true,
    navLinksTitle3 = 'Connect',
    navLinks3 = [
        { text: 'Newsletter', href: '/' },
        { text: 'Privacy Policy', href: '/' },
        { text: 'Terms of Service', href: '/' },
    ],
    socialMedia = {
        facebook: {
            username: 'Facebook',
            link: 'https://www.facebook.com',
        },
        instagram: {
            username: 'Instagram',
            link: 'https://www.instagram.com',
        },
        twitter: {
            username: 'Twitter',
            link: 'https://twitter.com',
        },
        linkedin: {
            username: 'LinkedIn',
            link: 'https://www.linkedin.com',
        },
        youtube: {
            username: 'YouTube',
            link: 'https://www.youtube.com',
        },
    },
    copyrightText = 'Copyright © 2023 Technotic. All rights reserved.',
}) => {
    const renderSocialMedia = (): ReactNode => (
        <span className={cx(styles.stySocialMediaContainer)}>
            {socialMedia.facebook !== undefined && (
                <a
                    href={socialMedia.facebook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialMediaLink"
                >
                    <icons.FacebookIcon color={fontColor} size={24} />
                    {socialMedia.facebook.username}
                </a>
            )}

            {socialMedia.instagram !== undefined && (
                <a
                    href={socialMedia.instagram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialMediaLink"
                >
                    <icons.InstagramIcon color={fontColor} size={24} />
                    {socialMedia.instagram.username}
                </a>
            )}

            {socialMedia.twitter !== undefined && (
                <a
                    href={socialMedia.twitter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialMediaLink"
                >
                    <icons.TwitterIcon color={fontColor} size={24} />
                    {socialMedia.twitter.username}
                </a>
            )}

            {socialMedia.linkedin !== undefined && (
                <a
                    href={socialMedia.linkedin.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialMediaLink"
                >
                    <icons.LinkedInIcon color={fontColor} size={24} />
                    {socialMedia.linkedin.username}
                </a>
            )}

            {socialMedia.youtube !== undefined && (
                <a
                    href={socialMedia.youtube.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialMediaLink"
                >
                    <icons.YoutubeIcon color={fontColor} size={24} />
                    {socialMedia.youtube.username}
                </a>
            )}
        </span>
    );

    const renderNavLinks = (
        navLinks: NavLink[],
        navLinksTitle: string
    ): ReactNode => (
        <span className={cx(styles.styNavLinkContainer)}>
            <h1 className={cx(styles.styLinkHeading)}>{navLinksTitle}</h1>
            {navLinks.map((navlink, index) => (
                <a key={index} href={navlink.href} className="navLink">
                    {navlink.text}
                </a>
            ))}
        </span>
    );

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
                    {renderSocialMedia()}
                </div>
            </div>
            <p className={cx(styles.styCopyrightText)}>{copyrightText}</p>
        </footer>
    );
};

export default Footer;

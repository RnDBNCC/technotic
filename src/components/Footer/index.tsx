import React, { ReactNode } from 'react';
import { cx } from '@emotion/css';
import { FooterProps, NavLink } from './footerProps';
import * as icons from '../Icons';

import {
    styFooterContainer,
    styFooterTop,
    styTitleDescContainer,
    styFooterTitle,
    styFooterDesc,
    styLinksContainer,
    styLinkHeading,
    styNavLinkContainer,
    stySocialMediaContainer,
    styCopyrightText,
} from './styles';

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
            url: 'https://www.facebook.com',
        },
        instagram: {
            username: 'Instagram',
            url: 'https://www.instagram.com',
        },
        twitter: {
            username: 'Twitter',
            url: 'https://twitter.com',
        },
        linkedin: {
            username: 'LinkedIn',
            url: 'https://www.linkedin.com',
        },
        youtube: {
            username: 'YouTube',
            url: 'https://www.youtube.com',
        },
    },
    copyrightText = 'Copyright © 2023 Technotic. All rights reserved.',
}) => {
    const renderNavLinks = (
        navLinks: NavLink[],
        navLinksTitle: string
    ): ReactNode => (
        <span className={cx(styNavLinkContainer)}>
            <h1 className={cx(styLinkHeading)}>{navLinksTitle}</h1>
            {navLinks.map((navlink, index) => (
                <a key={index} href={navlink.href} className="navLink">
                    {navlink.text}
                </a>
            ))}
        </span>
    );

    return (
        <footer className={cx(styFooterContainer(bgColor, fontColor))}>
            <div className={cx(styFooterTop)}>
                <div className={cx(styTitleDescContainer)}>
                    <a href="/" className={cx(styFooterTitle)}>
                        {title}
                    </a>
                    <p className={cx(styFooterDesc)}>{description}</p>
                </div>
                <div className={cx(styLinksContainer)}>
                    {displayNavLinks1 &&
                        renderNavLinks(navLinks1, navLinksTitle1)}
                    {displayNavLinks2 &&
                        renderNavLinks(navLinks2, navLinksTitle2)}
                    {displayNavLinks3 &&
                        renderNavLinks(navLinks3, navLinksTitle3)}

                    <span className={cx(stySocialMediaContainer)}>
                        {socialMedia.facebook !== undefined && (
                            <a
                                href={socialMedia.facebook.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialMediaLink"
                            >
                                <icons.FacebookIcon
                                    color={fontColor}
                                    size={24}
                                />
                                {socialMedia.facebook.username}
                            </a>
                        )}

                        {socialMedia.instagram !== undefined && (
                            <a
                                href={socialMedia.instagram.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialMediaLink"
                            >
                                <icons.InstagramIcon
                                    color={fontColor}
                                    size={24}
                                />
                                {socialMedia.instagram.username}
                            </a>
                        )}

                        {socialMedia.twitter !== undefined && (
                            <a
                                href={socialMedia.twitter.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialMediaLink"
                            >
                                <icons.TwitterIcon
                                    color={fontColor}
                                    size={24}
                                />
                                {socialMedia.twitter.username}
                            </a>
                        )}

                        {socialMedia.linkedin !== undefined && (
                            <a
                                href={socialMedia.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialMediaLink"
                            >
                                <icons.LinkedInIcon
                                    color={fontColor}
                                    size={24}
                                />
                                {socialMedia.linkedin.username}
                            </a>
                        )}

                        {socialMedia.youtube !== undefined && (
                            <a
                                href={socialMedia.youtube.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialMediaLink"
                            >
                                <icons.YoutubeIcon
                                    color={fontColor}
                                    size={24}
                                />
                                {socialMedia.youtube.username}
                            </a>
                        )}
                    </span>
                </div>
            </div>
            <p className={cx(styCopyrightText)}>{copyrightText}</p>
        </footer>
    );
};

export default Footer;

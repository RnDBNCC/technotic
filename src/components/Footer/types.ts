import { ReactNode } from 'react';

interface SocialMediaLink {
    username: string;
    link: string;
}

interface SocialMedia {
    facebook: SocialMediaLink;
    instagram: SocialMediaLink;
    twitter: SocialMediaLink;
    linkedin: SocialMediaLink;
    youtube: SocialMediaLink;
}

export interface NavLink {
    text: string;
    href: string;
}

export interface FooterProps {
    title?: ReactNode;
    description?: string;
    bgColor?: string;
    fontColor?: string;
    displayNavLinks1?: boolean;
    navLinks1?: NavLink[];
    navLinksTitle1?: string;
    displayNavLinks2?: boolean;
    navLinks2?: NavLink[];
    navLinksTitle2?: string;
    displayNavLinks3?: boolean;
    navLinks3?: NavLink[];
    navLinksTitle3?: string;
    socialMedia?: SocialMedia;
    copyrightText?: string;
}

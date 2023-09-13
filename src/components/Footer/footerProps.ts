import { ReactNode } from 'react';

interface SocialMediaMeta {
    username: string;
    url: string;
}

interface SocialMedia {
    facebook?: SocialMediaMeta;
    instagram?: SocialMediaMeta;
    twitter?: SocialMediaMeta;
    linkedin?: SocialMediaMeta;
    youtube?: SocialMediaMeta;
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

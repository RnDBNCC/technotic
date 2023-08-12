import { ReactNode } from 'react';

interface link {
    text: string;
    href: string;
}
export interface NavbarProps {
    title?: ReactNode;
    navLinks?: link[];
    bgColor?: string;
    fontColor?: string;
    menuColor?: string;
    menuBgColor?: string;
    displayButton?: boolean;
    buttonLink?: link;
    positionType?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
}

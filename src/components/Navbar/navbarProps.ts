import { ReactNode } from 'react';
import { PositionType } from './types';

interface Link {
    text: string;
    href: string;
}

export interface NavbarProps {
    title?: ReactNode;
    navLinks?: Link[];
    bgColorTop?: string;
    bgColorScroll?: string;
    fontColor?: string;
    menuColor?: string;
    menuBgColor?: string;
    displayButton?: boolean;
    buttonLink?: Link;
    positionType?: PositionType;
}

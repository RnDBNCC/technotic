import { ReactNode } from 'react';

export interface NavbarProps {
    title: ReactNode;
    links: string[];
    bgColor: string;
    fontColor: string;
}

import { ReactNode } from 'react';

type TypographySize =
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'heading-7'
    | 'heading-8'
    | 'paragraph-1'
    | 'paragraph-2'
    | 'paragraph-3'
    | 'paragraph-4'
    | 'paragraph-5'
    | 'paragraph-6'
    | 'paragraph-7'
    | 'paragraph-8';
type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface TypographyProps {
    size?: TypographySize;
    weight?: TypographyWeight;
    children: ReactNode;
    color?: string;
}

type TypographySize =
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'heading-7'
    | 'heading-8'
    | 'body-1'
    | 'body-2'
    | 'body-3'
    | 'body-4'
    | 'body-5'
    | 'body-6'
    | 'body-7'
    | 'body-8';
type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export interface TypographyProps {
    size?: TypographySize;
    weight?: TypographyWeight;
    textLabel?: string;
    color?: string;
}

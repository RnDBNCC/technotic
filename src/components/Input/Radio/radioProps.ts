type sizeType = 'small' | 'medium' | 'large' | undefined;
type radioColor = 'primary' | 'secondary';

export interface RadioProps {
    radiosize?: sizeType;
    radiocolor?: radioColor;
    // textLabel?: string;
}

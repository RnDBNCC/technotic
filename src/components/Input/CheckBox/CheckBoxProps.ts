type SizeType = 'small' | 'medium' | 'large' | undefined;
type CheckBoxType = 'primary' | 'secondary' | undefined;

export interface CheckBoxProps extends HTMLInputElement {
    cbValue?: boolean;

    cbLabel?: string;

    cbSize?: SizeType;
    cbType?: CheckBoxType;

    fontSize?: SizeType;
    textLabel?: string;
}

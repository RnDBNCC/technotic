import React from 'react';
import { ButtonStyle } from './styles';
import { cx } from '@emotion/css';

interface ButtonProps {
    // stat: ButtonStyle[];
    stat: string;
    Text: string;
}

const Button = ({ stat, Text }: ButtonProps): JSX.Element => {
    return <button className={stat + ' ' + cx(ButtonStyle)}>{Text}</button>;
};

export default Button;

import React from 'react';

export interface InputProps {
    name: string;
}

const Input = ({ name }: InputProps): JSX.Element => {
    return <button>{name}</button>;
};

export default Input;

import React from 'react';

export interface InputProps {
    rifian: string;
}

const Input = ({ rifian }: InputProps): JSX.Element => {
    return <button>{rifian}</button>;
};

export default Input;

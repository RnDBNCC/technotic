import React from 'react';

export interface InputProps {
    test: string;
}

// type InputTechnotic = {props: InputProps} => JSX.Element;

const Input = ({ test }: InputProps): JSX.Element => {
    return <button> {test} </button>;
};

export default Input;

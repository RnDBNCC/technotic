import React from 'react';
import { navbarContainerStyle } from './styles';
import { Person } from './types';
import { cx } from '@emotion/css';

interface NavbarProps {
    link: number;
    link2?: string;
    person: Person[];
}

type NavbarTechnotic = (props: NavbarProps) => JSX.Element;

const Navbar: NavbarTechnotic = ({ link2 }) => {
    return (
        <div className={cx(navbarContainerStyle)}>
            <a href={link2}>Testing1</a>
            <a href="">Testing2</a>
            <a href="">Testing3</a>
        </div>
    );
};

// const Testing = () => {
//     return (
//         <Navbar
//             person={[
//                 { name: 'Rifian', age: 18 },
//                 { name: 'Joce', age: 50 },
//             ]}
//             link2="https://www.youtube.com"
//             link={1234}
//         />
//     );
// };

export default Navbar;

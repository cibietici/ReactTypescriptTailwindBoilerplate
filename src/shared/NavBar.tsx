import React from 'react';
import home from '../assets/home.svg';
import newOne from '../assets/plus.svg';
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul className="grid grid-cols-2 w-full">
            <li className="p-2">
                <Link to={'/'}><img src={home} className="icons" alt="logo" /></Link> 
            </li>
            <li className="p-2">
                <Link to={'/new'}>
                    <div className="float-right">
                        <img src={newOne} className="icons" alt="new" />
                    </div>
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
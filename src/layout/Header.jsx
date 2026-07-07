import React from 'react';
import logo from  '../asset/images/LOGO.png'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <img src={logo} alt='logo kasa'/>
            <nav>
                <ul>
                   <li><NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}> Accueil </NavLink></li>
                   <li><NavLink to='/a-propos'className={(nav) => (nav.isActive ? "nav-active" : "")}> A propos </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
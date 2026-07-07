import React from 'react';
import logofooter from '../asset/images/LogoFooter.png'

const Footer = () => {
    return (
        <footer>
            <img src={logofooter} alt="logo kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
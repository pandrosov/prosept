import React from 'react';
import Navbar from '../UI/Navbar';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <picture>
                    <source media="(max-width: 360px)" srcSet="/assets/images/header/logo-mobile.png" type="image/png" />
                    <img src="/assets/images/header/logo.png" alt="logo logo-aventus" />
                </picture>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;

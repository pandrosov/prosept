import React from 'react';
import Navbar from '../UI/Navbar';

const Header = ({ moveToRef, productList, main }) => {
    return (
        <header className="header">
            <div className="header-logo">
                <picture>
                    <source media="(max-width: 360px)" srcSet="/assets/images/header/logo-mobile.png" type="image/png" />
                    <source media="(max-width: 360px)" srcSet="/assets/images/header/logo-mobile.webp" type="image/webp" />
                    <source srcSet="/assets/images/header/logo.webp" type="image/webp" />
                    <img src="/assets/images/header/logo.png" alt="logo logo-aventus" />
                </picture>
            </div>
            <Navbar moveToRef={moveToRef} productList={productList} main={main}/>
        </header>
    );
}

export default Header;

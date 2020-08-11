import React, { useState } from 'react';
import ViewCart from './ViewCart';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if(isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <div id="navbar">
            <div className={isOpen ? "wrapper-btn-close active" : "wrapper-btn-close"} onClick={toggleMenu }>
                <div className="btn-close">
                </div>
            </div>
            <div className={isOpen ? "navbar-overlay active" : "navbar-overlay" }>
                <ul className="navbar">
                    <li className="navbar-item"><a className="navbar-link" href="/product">Продукция</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="/about">О нас</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="/contact">Контакты</a></li>
                </ul>
            </div>
            <ViewCart/>
        </div>
    );
}

export default Navbar;

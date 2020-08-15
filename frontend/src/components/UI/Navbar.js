import React, { useState } from 'react';
import ViewCart from './ViewCart';

const Navbar = ({ moveToRef, main, productList }) => {
    const [isOpen, setIsOpen] = useState(false);

    function clickNavItem(ref) {
        setIsOpen(false)
        moveToRef(ref)
        document.body.style = "overflow: none;"
    }

    const toggleMenu = () => {
        if(isOpen) {
            setIsOpen(false);
            document.body.style = "overflow: none;"
        } else {
            setIsOpen(true);
            document.body.style = "overflow: hidden;"
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
                    <li className="navbar-item" onClick={() => clickNavItem(productList)}>Продукция</li>
                    <li className="navbar-item" onClick={() => clickNavItem(main)}>О нас</li>
                    <li className="navbar-item" onClick={() => clickNavItem(main)}>Контакты</li>
                </ul>
            </div>
            <ViewCart/>
        </div>
    );
}

export default Navbar;

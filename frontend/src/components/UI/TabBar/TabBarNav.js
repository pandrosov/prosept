import React from 'react';
import { PropTypes } from 'prop-types';
import './TabBarNav.css'

const TabBarNav = ({
    navLabel, 
    className, 
    onChangeActiveTab,
}) => {
    return (
        <button
            className={`nav-item ${className}`}
            onClick={ () => { onChangeActiveTab(navLabel) } }
        >
            {navLabel}
        </button>
    );
}

TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,
}

TabBarNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {},
}



export default TabBarNav;

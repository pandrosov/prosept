import React from 'react';
import PropTypes from 'prop-types'; 
import './TabBarItem.css'

const TabBarItem = ({children, label, activeTab, ...attrs}) => {
    return (
        <div className={activeTab === label ?'tab-bar-item active' : 'tab-bar-item'}>
            {children}            
        </div>
    );
}

TabBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    activeTab: PropTypes.string
}

TabBarItem.defaultProps = {
    children: null,
    activeTab: ""
}

export default TabBarItem;

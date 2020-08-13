import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TabBarNav from './TabBarNav';
import './TabBar.css';


const TabBar = (props) => {
    const [activeTab, setActiveTab] = useState(null)
    const prevActiveTabRef = useRef();

    useEffect(() => {
        const { children = [] } = props;

        prevActiveTabRef.current = activeTab

        const activeTabNew = getChildrenLabels(children)[0]

        setActiveTab(activeTabNew)
        // eslint-disable-next-line 
    }, [])

    const prevActiveTab = prevActiveTabRef.current

    function getChildrenLabels(children) {
        return children.map(({ props }) => props.label)
    } 

    function setActiveTabNew(activeTab) {
        if(activeTab !== prevActiveTab) {
            setActiveTab(activeTab)
        }
    }

    const renderTabs = () => {
        const { children=[] } = props

        return getChildrenLabels(children).map(navLabel => (
            <TabBarNav
                key={navLabel}
                navLabel={navLabel}
                className={activeTab === navLabel ? 'active' : ''}
                onChangeActiveTab={setActiveTabNew}
            />
        ))
    }

    return (
        <div className={`tab-bar ${props.className} ${props.vertical ? 'vertical' : ''}`}>
            <div className="tab-bar-nav">
                {renderTabs()}
            </div>
            <div className="tab-container">
                {React.Children.map(props.children, child => React.cloneElement(child, { activeTab }))}
            </div>
        </div>
    );
};


TabBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
};

TabBar.defaultProps = {
    children: null,
    className: '',
    vertical: false,
}


export default TabBar;

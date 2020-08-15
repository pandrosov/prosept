import React from 'react';
import styled from 'styled-components';

const LayoutProceedStyle = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: minmax(36px, 50px) 1fr minmax(176px, 202px);
    grid-gap: 30px;
`

const LayoutProceed = ({ children }) => {
    return (
        <LayoutProceedStyle>
            { children }
        </LayoutProceedStyle>
    );
}

export default LayoutProceed;

import React from 'react';
import styled from 'styled-components';

const InfoBlockStyle = styled.div`
    font-size: 20px;
    position: absolute;
    width: calc(100% - 10rem);
`

const InfoBlock = ({submitCart, prevStep, className}) => {
    return (
        <InfoBlockStyle> 
            <button onClick={submitCart}>submit</button>
            <button onClick={prevStep}>back</button>
        </InfoBlockStyle>
    );
}

export default InfoBlock;

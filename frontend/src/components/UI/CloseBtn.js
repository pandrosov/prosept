import React from 'react';
import styled from 'styled-components'

const CloseBtnStyle = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:before, &:after {
    position: absolute;
    left: 15px;
    content: '';
    height: 100%;
    width: 2px;
    background-color: #000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);  
  }
`


const CloseBtn = ({ onClick }) => {
    return (
        <CloseBtnStyle onClick={onClick}/>
    );
}

export default CloseBtn;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../store/action/modalActions'
import styled from 'styled-components'

import ProceedCart from '../../containers/ProceedCart.js/ProceedCart';
import CloseBtn from './../UI/CloseBtn';

const ModalStyle = styled.div`
    position: fixed;
    top: 90px;
    bottom: 90px;
    left: 20vw;
    right: 20vw;
    display: grid;
    max-width: 100%;
    overflow: hidden;
    background-color: #fff;

    &:before {
        content: '';
        position:fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
        background: rgba(208, 213, 229, .8);
        backdrop-filter: blur(20px);
    }

    & .modal-btn-close {
            position: absolute; 
            z-index: 4;
            top: 29px;
            right: 29px;
       }

    & {
        @media screen and (max-width: 1024px) {
            left: 0;
            right: 0;
        }
    }
`


const Modal = () => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()
    

    if(!modal) {
        return false
    }

    const renderModal = () => {
        switch (modal.type) {
            case 'cart':
                return <ProceedCart/>;
            case 'success':
                return <div>Успешно</div>;
            default:
                return null
        }
    }

    return (
        <ModalStyle>
            { renderModal() }
            <CloseBtn className="modal-btn-close" onClick={() => {dispatch(hideModal())}} />
        </ModalStyle>
    );
}

export default Modal;

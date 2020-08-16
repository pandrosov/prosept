import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { showModal, hideModal } from '../../store/action/modalActions'
import './ProceedCart.css';

import CartBlock from '../../components/Cart/CartBlock';
import InfoBlock from '../../components/Cart/InfoBlock';
import { CSSTransition } from 'react-transition-group'

const WrapperProceed = styled.div`
    position: relative;
    z-index: 4;
    overflow: hidden;
    background-color: #fff;
    padding: 5rem;

    & {
        @media screen and (max-width: 510px) {
            padding: 2.5rem;
        }

        @media screen and (max-width: 510px) {
            padding: 2.5rem 0;
        }
    }
`

const ProceedCart = () => {
    const [steps, setSteps] = useState(1)
    const dispatch = useDispatch()

    const submitCart = () => {
        dispatch(hideModal())
        setSteps(3)
        dispatch(showModal({ type: "success" }))
    }

    return (
        <WrapperProceed>
            <CSSTransition
                in={steps === 1}
                timeout={300}
                classNames="card-block"
                unmountOnExit
            >
                <CartBlock className={steps === 1 ? "active" : null} nextStep={() => { setSteps(2) }} />
            </CSSTransition>
            <CSSTransition
                in={steps === 2}
                timeout={300}
                classNames="info-block"
                unmountOnExit
            >
                <InfoBlock className={steps === 2 ? "active" : null} submitCart={submitCart} prevStep={() => setSteps(1)} />
            </CSSTransition>
        </WrapperProceed>
    );
}

export default ProceedCart;

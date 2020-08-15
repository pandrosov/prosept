import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { showModal } from '../../store/action/modalActions'

const Cart = styled.div`
    position: relative;
    margin:0 3em;
    cursor: pointer;

    &:hover {
        &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #000;
        }
    }

    .cart-counter {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -.6em;
        right: -.6em;
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 50%;
        background-color: #FFC241;
        font-size: 13px;
    }

    & {
        @media screen and (max-width: 768px) {
                margin-left: 0;
                margin-right: 4rem;
        }
    }
`




const ViewCart = () => {
    const dispatch = useDispatch()
    const { totalCount } = useSelector(state => state.cart)

    return (
        <Cart className="cart" onClick={() => { dispatch(showModal({ type: 'cart' })) }}>
            <img src="/assets/images/header/cart.png" alt="asdas" srcSet="" />
            <span className="cart-counter">{totalCount}</span>
        </Cart>
    );
}

export default ViewCart;

import { CART_ITEM_ADD } from './actionsTypes';
import e from 'express';

const addToCart = (product, qty) => (dispatch, getState) => {
    const { cartItems } = { ...getState() }

    if (cartItem.length !== 0) {
        cartItems.concat(product)
    } else {

    }


    console.log(cartItems)
    const cartItemsNew = [
        {
            "adas": 3
        },
        {
            "sadfsadf": 5
        }
    ]
    dispatch({ type: CART_ITEM_ADD, payload: cartItemsNew })
}


const delelteFromCart = (id) => (dispatch) => {
    const { cartItems } = { ...getState() }
}

export {
    addToCart,
    delelteFromCart
}
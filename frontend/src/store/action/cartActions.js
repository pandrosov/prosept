import { CART_ITEM_ADD } from './actionsTypes';

const addToCart = (id, selectOption, qty) => (dispatch, getState) => {
    const { cartItems } = {...getState()}

    console.log(cartItems)
    const cartItemsNew = [
        {
            "adas": 3
        },
        {
            "sadfsadf": 5
        }
    ]
    dispatch({type: CART_ITEM_ADD, payload: cartItemsNew})
}
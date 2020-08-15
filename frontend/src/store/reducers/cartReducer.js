import {
    CART_ITEM_ADD

} from '../action/actionsTypes';


function cartReducer(state = {cartItems: [], totalCount: 0, totalCost: 0}, action) {
    switch (action.type) {
        case CART_ITEM_ADD:
            return {...state, cart: action.payload }
        default:
            return state
    }
}


export { cartReducer }
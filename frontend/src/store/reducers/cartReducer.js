import {
    CART_ITEM_ADD

} from '../action/actionsTypes';


function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ITEM_ADD:
            return { ...state, cartItems: action.payload }
        default:
            return state
    }
}


export { cartReducer }
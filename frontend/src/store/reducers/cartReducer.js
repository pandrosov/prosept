import {
    CART_ITEM_ADD,
    CART_TOTAL_COUNT,
    CART_TOTAL_COST,
    CART_ITEM_MINUS,
    CART_ITEM_PLUS,
    CART_ITEM_DELETE
} from '../action/actionsTypes';


function cartReducer(state = { cartItems: [], totalCount: 0, totalCost: 0 }, action) {
    switch (action.type) {
        case CART_ITEM_ADD:
            return { ...state, cartItems: action.payload }
        case CART_TOTAL_COUNT:
            return { ...state, totalCount: action.payload }
        case CART_TOTAL_COST:
            return { ...state, totalCost: action.payload }
        case CART_ITEM_MINUS:
            return { ...state, cartItems: action.payload }
        case CART_ITEM_PLUS:
            return { ...state, cartItems: action.payload }
        case CART_ITEM_DELETE:
            return { ...state, cartItems: action.payload }
        default:
            return state
    }
}


export { cartReducer }
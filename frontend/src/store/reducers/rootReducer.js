import { combineReducers } from 'redux';
import { productListReducer } from './productListReducer'
import { cartReducer } from './cartReducer'
import { modalReducer } from './modalReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
    modal: modalReducer
})

export default rootReducer
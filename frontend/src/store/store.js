import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import rootReducer from './reducers/rootReducer'

const cart = Cookie.getJSON("cart") || {cartItems: [], totalCount: 0, totalCost: 0 }
console.log(cart)
const initialState = {
    cart: {...cart}
}

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnchancer(applyMiddleware(thunk))
);

export default store
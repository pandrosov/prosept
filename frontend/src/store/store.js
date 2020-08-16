import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { saveState, loadState } from './../helpers/localStorage';

const cart = loadState() || { cartItems: [], totalCount: 0, totalCost: 0 }

const initialState = {
    cart
}

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnchancer(applyMiddleware(thunk))
);

store.subscribe(() => {
    const { cart } = store.getState()
    saveState(cart)
});

export default store
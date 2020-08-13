import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {}

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
                    rootReducer, 
                    initialState, 
                    composeEnchancer(applyMiddleware(thunk))
                );

export default store
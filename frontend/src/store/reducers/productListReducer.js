import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_OPTION_CHANGE
} from '../action/actionsTypes'

function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_OPTION_CHANGE:
            return { products: action.payload }
        default:
            return state;
    }
}


export { productListReducer } 
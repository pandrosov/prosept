import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_OPTION_CHANGE
} from './actionsTypes'
import axios from 'axios';


const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const changeOptions = (id, selectOption) => (dispatch, getState) => {
  try {
    const { productList } = {...getState()}
    const { products } = {...productList}
    const newProducts = products.map(product => product._id === id ? {...product, selectOption: selectOption} : product)

    dispatch({ type: PRODUCT_OPTION_CHANGE, payload: newProducts });
  }
  catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}

export {
  listProducts,
  changeOptions
}
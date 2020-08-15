import {
    CART_ITEM_ADD, CART_TOTAL_COUNT, CART_TOTAL_COST
} from './actionsTypes';
import Cookie from 'js-cookie'

const setTotalCost = (newItem, qty) => (dispatch,getState) => {
    const { cart: { totalCost } } = { ...getState() }
    const { productCart: {selectOption} } = newItem

    const cost = totalCost + newItem.productCart.cost[selectOption] * qty
    dispatch({type: CART_TOTAL_COST, payload: cost})

}

const getTotalCount = (qty) => (dispatch, getState) => {
    const { cart: { totalCount } } = { ...getState() }

    const count = totalCount + qty
    dispatch({type: CART_TOTAL_COUNT, payload: count})
}

const addToCart = (product, qty) => (dispatch, getState) => {
    const { cart: { cartItems } } = { ...getState() }

    const indexItem = cartItems.findIndex(item => {
        return JSON.stringify(item.productCart) === JSON.stringify(product)
    })

    if (indexItem === -1) {
        const newProduct = { productCart: { ...product }, qty }
        const newCartItems = [...cartItems, newProduct]
       
        dispatch({ type: CART_ITEM_ADD, payload: newCartItems })
        dispatch(setTotalCost(newProduct, qty))
        dispatch(getTotalCount(qty))
    } else {
        const tempCartItems = [...cartItems]
        const item = { ...tempCartItems[indexItem] }
        item.qty += qty
        tempCartItems[indexItem] = item
        
        dispatch({ type: CART_ITEM_ADD, payload: tempCartItems })
        dispatch(setTotalCost(item, qty))
        dispatch(getTotalCount(qty))

        const { cart } = getState()
        Cookie.set("cart", JSON.stringify(cart))
    }
}

const delelteFromCart = (id) => (dispatch, getState) => {
    const { cart: { cartItems } } = {...getState()}
    const deleteProduct = cartItems.productCart[id]
    const newCartItems = cartItems.productCart.filter(item => item._id !== id)
    console.log(deleteProduct)

    const { cart } = getState()
    Cookie.set("cart", JSON.stringify(cart))
}

export {
    addToCart,
    delelteFromCart
}
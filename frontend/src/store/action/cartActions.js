import {
    CART_ITEM_ADD, CART_TOTAL_COUNT, CART_TOTAL_COST, CART_ITEM_MINUS, CART_ITEM_DELETE
} from './actionsTypes';

const setTotalCost = () => (dispatch, getState) => {
    const { cart: { cartItems } } = { ...getState() }

    const cost = cartItems.reduce((acc, value, index, array) => {
        return acc + value.productCart.cost[value.productCart.selectOption] * value.qty
    }, 0)

    dispatch({ type: CART_TOTAL_COST, payload: cost })
}

const getTotalCount = () => (dispatch, getState) => {
    const { cart: { cartItems, totalCount } } = { ...getState() }

    const cost = cartItems.reduce((acc, value, index, array) => {
        return acc + value.qty
    }, 0)

    dispatch({ type: CART_TOTAL_COUNT, payload: cost })
}

const addToCart = (product, qty) => async (dispatch, getState) => {
    const { cart: { cartItems } } = { ...getState() }
    try {
        const indexItem = cartItems.findIndex(item => {
            return JSON.stringify(item.productCart) === JSON.stringify(product)
        })

        if (indexItem === -1) {
            const newProduct = { productCart: { ...product }, qty }
            const newCartItems = [...cartItems, newProduct]

            dispatch({ type: CART_ITEM_ADD, payload: newCartItems })
            dispatch(setTotalCost())
            dispatch(getTotalCount())
        } else {
            const tempCartItems = [...cartItems]
            const item = { ...tempCartItems[indexItem] }
            item.qty += qty
            tempCartItems[indexItem] = item

            dispatch({ type: CART_ITEM_ADD, payload: tempCartItems })
            dispatch(setTotalCost())
            dispatch(getTotalCount())
        }
    }
    catch (e) {
        console.log(e)
    }


}

const deleteFromCart = (product) => (dispatch, getState) => {
    try {
        const { cart: { cartItems } } = { ...getState() }
        const newCartItems = cartItems.filter(item => JSON.stringify(item.productCart) !== JSON.stringify(product))

        dispatch({ type: CART_ITEM_DELETE, payload: newCartItems })
        if (newCartItems.lenght === 0) {
            dispatch({ type: CART_TOTAL_COST, payload: 0 })
            dispatch({ type: CART_TOTAL_COUNT, payload: 0 })
        } else {
            dispatch(setTotalCost())
            dispatch(getTotalCount())
        }
    }
    catch (e) {
        console.log(e)
    }
}

const minusQtyItem = (product) => (dispatch, getState) => {
    const { cart: { cartItems } } = { ...getState() }

    const indexItem = cartItems.findIndex(item => {
        return JSON.stringify(item.productCart) === JSON.stringify(product)
    })

    const tempCartItems = [...cartItems]
    const tempProduct = { ...cartItems[indexItem] }

    tempProduct.qty -= 1
    tempCartItems[indexItem] = tempProduct

    dispatch({ type: CART_ITEM_MINUS, payload: tempCartItems })
    if (tempCartItems.lenght === 0) {
        dispatch({ type: CART_TOTAL_COST, payload: 0 })
        dispatch({ type: CART_TOTAL_COUNT, payload: 0 })
    } else {
        dispatch(setTotalCost())
        dispatch(getTotalCount())
    }

}

const plusQtyItem = (product) => (dispatch, getState) => {
    const { cart: { cartItems } } = { ...getState() }

    const indexItem = cartItems.findIndex(item => {
        return JSON.stringify(item.productCart) === JSON.stringify(product)
    })

    console.log(indexItem)

    const tempCartItems = [...cartItems]
    const tempProduct = { ...cartItems[indexItem] }

    tempProduct.qty += 1
    tempCartItems[indexItem] = tempProduct

    dispatch({ type: CART_ITEM_MINUS, payload: tempCartItems })
    dispatch(setTotalCost())
    dispatch(getTotalCount())
}

export {
    addToCart,
    deleteFromCart,
    minusQtyItem,
    plusQtyItem
}
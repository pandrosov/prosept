import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../../store/action/productActions'

import Product from '../Product';
import Loader from './../UI/Loader/Loader';


const ProductList = ({ anchor }) => {
    const productList = useSelector((state) => state.productList)
    const { products, error, loading } = productList
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
        //eslint-disable-next-line
    }, [])

    const renderProducts = () => {
        return products
            .map(
                (product, index) =>
                    <Product
                        key={`${product.title}-${index}`}
                        product={product}
                    />
            )
    }

    return (
        <section className="product" ref={anchor}>
            <h1 className="product-title">Наша продукция</h1>
            <div className="product-list">
                {
                    loading ? <Loader />
                            : error ? <div>Невозможно загрузить данные о продуктах</div>
                                    : renderProducts()
                }
            </div>
        </section>
    );
}

export default ProductList;

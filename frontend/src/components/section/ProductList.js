import React from 'react';
import Product from '../Product';
import data from '../../data';

const ProductList = () => {

    return (
        <section className="product">
            <h1 className="product-title">Наша продукция</h1>
            <div className="product-list">
                {
                    data.products
                        .map(
                            (product, index) => 
                                <Product 
                                    key={`${product.title}-${index}`} 
                                    product={product} 
                                />
                        )
                }
            </div>
        </section>
    );
}

export default ProductList;

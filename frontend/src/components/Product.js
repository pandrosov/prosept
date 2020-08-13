import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { changeOptions } from '../store/action/productActions'

const Product = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className="product-list__item">
            <div className="list__item_img">
                <picture>
                    <source srcSet={`${product.src}.webp`} type="image/webp" />
                    <img src={product.src} alt="продукт" />
                </picture>
            </div>
            <div className="list__item_options">
                <button
                    disabled={product.selectOption === 0}
                    onClick={() => dispatch(changeOptions(product._id, 0))}
                    className={product.selectOption === 0 ? "btn-item__option_invert" : "btn-item__option"}
                >{product.options["0"]}
                </button>
                <button
                    disabled={product.selectOption === 1}
                    onClick={() => dispatch(changeOptions(product._id, 1))}
                    className={product.selectOption === 1 ? "btn-item__option_invert" : "btn-item__option"}>
                    {product.options["1"]}
                </button>
            </div>
            <div className="list__item__description">
                <h1 className="list__item__description_title">{product.title}</h1>
                <h4 className="list__item__description_text">{product.text}</h4>
            </div>
            <Link to={{
                pathname: `/preview`,
                state: { id: product._id }
            }}
                className="btn btn-blue btn-blue_invert"
            >
                Подробнее
            </Link>
        </div>
    );
}

export default Product;

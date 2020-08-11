import React from 'react';

const Product = ({ product, onProfiling }) => {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        
    })

    return (
        <div className="product-list__item">
            <div className="list__item_img">
                <img src={product.img} alt="" />
            </div>
            <div className="list__item_options">
                <button
                    className={product.selectOption === 0 ? "btn-item__option_invert" : "btn-item__option"}
                >{product.options["0"]}
                </button>
                <button 
                    className={product.selectOption === 1 ? "btn-item__option_invert" : "btn-item__option"}>
                        {product.options["1"]}
                </button>
            </div>
            <div className="list__item__description">
                <h1 className="list__item__description_title">{product.title}</h1>
                <h4 className="list__item__description_text">{product.text}</h4>
            </div>
            <button className="btn btn-blue">Подробнее</button>
        </div>
    );
}

export default Product;

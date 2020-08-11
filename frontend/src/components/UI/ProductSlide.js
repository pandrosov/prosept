import React from 'react';
import styled, { css } from 'styled-components'
import data from '../../data';

const ProductWrapper = styled.div`
    background-color: #fff;
`

const ProductMain = styled.div`
  display: grid;
  grid-template-columns: 387px 1fr;
  grid-template-rows: repeat(2, 1fr);
  margin: 3rem 3rem 9rem;
`

const ProductSlide = ({ id }) => {
  return (
    <ProductWrapper>
      <ProductMain>
        <img src="/assets/images/product/1.png" alt="" />
        <div className="product__text">
          <h1>PROF-DZ</h1>
          <p>Универсальное средство с дезинфицирующим эффектом на основе спирта</p>
          <div className="product__options__prop">
            <span className="product__options__prop_name">Объем</span>
            <button className="btn-item__option">0,5 л</button>
            <button className="btn-item__option_invert">1 л</button>
            <span className="product__options__prop_cost">20 BYN</span>
          </div>
          <div className="product__options__grp-btn">
            <button>-</button>
            <span>1</span>
            <button>+</button>
            <button className="btn btn-blue">В корзину</button>
          </div>
        </div>

      </ProductMain>
      
    </ProductWrapper>
  );
}

export default ProductSlide;

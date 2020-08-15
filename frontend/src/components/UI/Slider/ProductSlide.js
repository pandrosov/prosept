import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import TabBar from './../TabBar/TabBar';
import TabBarItem from './../TabBar/TabBarItem';
import ViewCart from './../ViewCart';
import CloseBtn from './../CloseBtn'

const ProductWrapper = styled.div`
  background-color: #fff;
  padding: 3rem 3rem;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 300px;
  margin: 10vh 15vw 0; 
  position: relative;
`

const ProductText = styled.div`
  display: grid;

  & .product__options__prop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    & .grp-btn {
      & .gtp-btn_option{
        display: flex;
        margin-top: 1.7rem;
      }
    }
  }
`

const ProductMain = styled.div`
  display: grid;
  grid-template-columns: 387px 1fr;
  margin-bottom: 9.5rem;
  grid-column: 1/4;

  & .product__img {
    display: flex;
    justify-content: center;

    & img {
      object-fit: contain;
      object-position: center;
    }
  }
`

const ProductProp = styled.div`
  grid-column: 1/3;
`

const BtnSlide = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ProductSlide = ({ onChangeOptions, history, product: {
  _id, 
  src,
  title,
  text,
  options,
  selectOption,
  productProp,
  cost,
} }) => {
  const redirectHomePage = () => {
    history.push('/')
  }

  return (
    <>
      <ProductWrapper>
        <ProductMain>
          <div className="product__img">
            <picture>
              <source srcSet={`${src}.webp`} type="image/webp" />
              <img src={`${src}.png`} alt="картинка продукта" />
            </picture>

          </div>
          <ProductText className="product__text">
            <div className="product__text_title">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
            <div className="product__options__prop">
              <div className="grp-btn">
                <span className="product__options__prop_name">Объем</span>
                <div className="gtp-btn_option">
                  <button
                    disabled={selectOption === 0}
                    onClick={() => onChangeOptions(_id, 0)}
                    className={selectOption === 0 ? "btn-item__option_invert" : "btn-item__option"}
                  >
                    {options[0]}
                  </button>
                  <button
                    disabled={selectOption === 1}
                    onClick={() => onChangeOptions(_id, 1)}
                    className={selectOption === 1 ? "btn-item__option_invert" : "btn-item__option"}
                  >
                    {options[1]}
                  </button>
                </div>
              </div>
              <span className="product__options__prop_cost">{cost[selectOption]}</span>
            </div>

          </ProductText>
          <div className="product__options__grp-btn">
            <button>-</button>
            <span>1</span>
            <button>+</button>
            <button className="btn btn-blue btn-blue_standart">В корзину</button>
          </div>
        </ProductMain>
        <ProductProp>
          <TabBar>
            <TabBarItem label="Описание">
              {productProp.description}
            </TabBarItem>
            <TabBarItem label="Технические характеристики">
              {productProp.tehnic}
            </TabBarItem>
            <TabBarItem label="Способ применения">
              {productProp.modeOfApplication}
            </TabBarItem>
          </TabBar>
        </ProductProp>
        <BtnSlide>
          <ViewCart></ViewCart>
          <CloseBtn onClick={redirectHomePage} />
        </BtnSlide>
      </ProductWrapper>
    </>
  );
}

export default withRouter(ProductSlide);

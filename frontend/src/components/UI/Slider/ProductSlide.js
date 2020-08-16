import React, {useState } from 'react';
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import TabBar from './../TabBar/TabBar';
import TabBarItem from './../TabBar/TabBarItem';
import ViewCart from './../ViewCart';
import CloseBtn from './../CloseBtn';
import { addToCart } from '../../../store/action/cartActions'


const ProductWrapper = styled.div`
  background-color: #fff;
  padding: 3rem 3rem;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 300px;
  margin: 10vh 15vw 0; 
  position: relative;
  grid-row-gap: 60px;

  & {
    @media screen and (max-width: 1366px) {
      
    }

    @media screen and (max-width: 1024px) {
      margin: 10vh 0;
    }

    @media screen and (max-width: 510px) {
      padding-top: 4.5rem;
      grid-row-gap: 20px;
      grid-template-columns: minmax(120px, 150px) 1fr;
      grid-template-rows: 1fr minmax(150px, 250px);
      font-size: 20px;
    }
  }
`

const ProductText = styled.div`
  display: grid;


`

const ProductMain = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-row-gap: 2rem;

  & .product__img {
    display: flex;
    justify-content: center;

    & img {
      max-width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  & .product__options__grp-btn {
    display: flex;
    grid-column-gap: 70px;
    grid-column: 2/3;
  }

  & .grp-btn__count {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 133px;
  }

  & .product__options__prop {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 73px;
    
    &_cost {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: 26px;
      font-weight: 700;
    }

    & .grp-btn {
      display: flex;
      flex-direction:column;
      justify-content: space-between;

      & .gtp-btn_option{
        display: flex;
        max-width: 280px;
      }
    }
  }

  & {
    
    @media screen and (max-width: 768px) {
      grid-template-columns: minmax(113px,300px) 1fr;
    }

    @media screen and (max-width: 760px) {
      grid-template-columns: minmax(113px,204px) 1fr;

      & .product__options__grp-btn {
        grid-column: 1/3;
        grid-column-gap: 10px;
      }

      & .product__options__prop {
        grid-column: 1/3;
      }
    }

    @media screen and (max-width: 510px) {
      grid-template-columns: minmax(113px,150px) minmax(120px, 1fr);
    }

  }
`

const ProductProp = styled.div`
  grid-column: 1/3;

  & {
    @media screen and (max-width: 1366px) {
      grid-column: 1/4;
    }
  }
`

const BtnSlide = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ProductSlide = ({ onChangeOptions, history, product, product: {
  _id,
  src,
  title,
  text,
  options,
  selectOption,
  productProp,
  cost,
} }) => {
  const dispatch = useDispatch()

  const redirectHomePage = () => {
    history.push('/')
  }

  const [qty, setQty] = useState(1);

  const plusQty = () => {
    setQty(prevState => (prevState+1))
  }

  const minusQty = () => {
    setQty(prevState => (prevState-1))
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
          </ProductText>
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
              <span className="product__options__prop_cost">{`${qty * cost[selectOption]} BYN`}</span>
            </div>
          <div className="product__options__grp-btn">
            <div className="grp-btn__count">
              <button disabled={qty === 1} className="btn-count" onClick={minusQty}>-</button>
              <span>{qty}</span>
              <button className="btn-count" onClick={plusQty}>+</button>
            </div>
            <button onClick={() => dispatch(addToCart(product, qty))} className="btn btn-blue btn-blue_standart">В корзину</button>
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
          <ViewCart/>
          <CloseBtn onClick={redirectHomePage} />
        </BtnSlide>
      </ProductWrapper>
    </>
  );
}

export default withRouter(ProductSlide);

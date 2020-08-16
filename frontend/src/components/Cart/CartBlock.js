import React, { useState } from 'react';
import styled from 'styled-components'
import Layout from '../HOC/LayoutProceed'
import { plusQtyItem, minusQtyItem, deleteFromCart } from '../../store/action/cartActions'
import { useDispatch, useSelector } from 'react-redux';

const ProductsTop = styled.div`
& {
  @media screen and (max-width: 510px) {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }
}
`
const ProductsBody = styled.div`
    overflow: auto;
    max-height: 100%;
    font-size: 18px;

    & {
      & .remove-btn {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center; 
        align-items: center;
        cursor: pointer;
      }

      tbody {
        tr {
          &:after {
            content: '';
            grid-column: 1/6;
            min-width: 100%;
            height: 2px;
            background: #F3F3FF;
          }
        }
      }

      table {
          display: grid;
          border-collapse: collapse;
          min-width: 100%;
          grid-template-columns: 
            minmax(38%, 1fr)
            96px
            minmax(133px, 140px)
            96px
            minmax(30px, 66px);
        }
        
        thead,
        tbody,
        tr {
          display: contents;
        }
        
        tbody {
          tr {
            td {
              &:last-child {
                display:flex;
                justify-content: center;
              }
            }
          }
        }


        th,
        td {
          display:flex;
          align-items: center;
          padding: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        th {
          position: sticky;
          top: 0;
          background: #F3F3FF;
          text-align: left;
          font-weight: normal;
          font-size: 1.4rem;
          color: #8A8B99;
          height: 33px;
        }
        
        th:last-child {
          border: 0;
        }
        
        td {
          padding-top: 10px;
          padding-bottom: 10px;
          color: #808080;
        }
        
        tr:nth-child(even) td {
          background: #f8f6ff;
        }
    }

  & .grp-btn__count {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 133px;
  }

  & .product-body {
    display: flex;

    &_img {
      min-width: 76px;
      display: flex;
      align-items: center;

      & img {
        max-width: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      
      &_title {
        margin: 0 0 10px 0;
      }

      &_description {
        margin: 0 0 10px 0;
      }
    }
  }

  & {
    @media screen and (max-width: 768px) {
      table {
        display: grid;
        border-collapse: collapse;
        min-width: 100%;
        grid-template-columns: 
          minmax(38%, 1fr)
          minmax(133px, 140px)
          96px
          minmax(30px, 66px);

          th:nth-child(2) {
            display: none;
          }

          tr {

            td:nth-child(1) {
              grid-column: 1/2;
            }

            td:nth-child(2) {
              display:none;
            }
          }
      }
    }

    @media screen and (max-width: 700px) {
      table {
        grid-template-columns: 
          minmax(38%, 1fr)
          minmax(133px, 135px);

          
          th {
            display: none;
          }
          
          tbody {
            tr {
              display: grid;
              grid-template-rows: 1fr 50px;
              grid-column: 1/3;
            }
          }
      }
    }


    @media screen and (max-width: 620px) {
      table {
        grid-template-columns: 
          minmax(266px,1fr)
          minmax(20px, 30px);
          
          tbody {
            tr {
              display: grid;
              grid-template-rows: 1fr 50px;
              grid-column: 1/3;
            }

            td {
              &:nth-child(4) {
                grid-row: 2/3;
              }
            }

            td {
              &:nth-child(3) {
                grid-row: 2/3;
                grid-column: 1/2;
              }
            }
          }
      }


    }

  }
`
const ProductsFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  & button {
    align-self: flex-start;
  }

  & span {
    font-size: 20px;

    &:first-child {
      margin-right: 5rem;
    }
  }
  
  & {
    @media screen and (max-width: 510px) {
      padding: 2.5rem;
    }
  }

`

const CartBlock = ({ nextStep, className }) => {

  const dispatch = useDispatch()
  const { cartItems, totalCost, totalCount } = useSelector(state => state.cart)
  const [qty, setQty] = useState()
  const isEmptyBasket = cartItems.length === 0;

  const renderProducts = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            cartItems.map(({ productCart, qty }, index) => {
              return (
                <tr key={`${productCart.title}-${productCart._id}-${productCart.selectOption}`}>
                  <td>
                    <div className="product-body">
                      <div className="product-body_img">
                        <img src={`${productCart.src}.png`} alt="alt attr" />
                      </div>
                      <div className="product-body__text">
                        <h3 className="product-body__text_title">{productCart.title}</h3>
                        <div className="product-body__text_description">
                          {productCart.text}
                        </div>
                        <span>{productCart[productCart.options[productCart.selectOption]]}</span>
                      </div>
                    </div>
                  </td>
                  <td>00 BYN</td>
                  <td>
                    <div className="grp-btn__count">
                      <button disabled={qty <= 1} onClick={() => dispatch(minusQtyItem(productCart))} className="btn-count" >-</button>
                      <span>{qty}</span>
                      <button onClick={() => dispatch(plusQtyItem(productCart))} className="btn-count" >+</button>
                    </div>
                  </td>
                  <td>{productCart.cost[productCart.selectOption]} BYN</td>
                  <td>
                    <div className="remove-btn" onClick={() => dispatch(deleteFromCart(productCart))}>
                      <img src="/assets/images/cart/remove.png" alt="" />
                    </div>
                  </td>
                </tr>
              )
            }, [])
          }


        </tbody>
      </table>

    )
  }



  return (
    <Layout>
      <ProductsTop>
        <h1>Корзина</h1>
      </ProductsTop>
      <ProductsBody>
        {
          isEmptyBasket ? <div>Корзина пуста</div>
            : (renderProducts())
        }
      </ProductsBody>
      <ProductsFooter>
        <div>
          <span>Итого</span>
          <span>{totalCost} BYN</span>
        </div>
        <button className="btn btn-primary" disabled={isEmptyBasket} onClick={nextStep} >Следующий шаг</button>
      </ProductsFooter>
    </Layout>
  );
}

export default CartBlock;

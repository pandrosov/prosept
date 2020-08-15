import React from 'react';
import styled from 'styled-components'
import Layout from '../HOC/LayoutProceed'

const ProductsTop = styled.div`

`

const ProductsBody = styled.div`
    overflow: auto;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    & {
      table {
          display: grid;
          border-collapse: collapse;
          min-width: 100%;
          grid-template-columns: 
            minmax(150px, 1fr)
            minmax(150px, 1.67fr)
            minmax(0, 1.67fr)
            minmax(0, 1.67fr)
            minmax(150px, 3.33fr)
        }
        
        thead,
        tbody,
        tr {
          display: contents;
        }
        
        th,
        td {
          padding: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        th {
          position: sticky;
          top: 0;
          background: #6c7ae0;
          text-align: left;
          font-weight: normal;
          font-size: 1.1rem;
          color: white;
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
`
const ProductsFooter = styled.div`

`

const CartBlock = ({ nextStep, className, cart }) => {
  const { cartItems, totalCount, totalCost } = cart;

  const isEmptyBasket = cartItems.length === 0;

  const renderProducts = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Street</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000001</td>
            <td>Lani</td>
            <td>Ovendale</td>
            <td>lovendale0@w3.org</td>
            <td>7850 Old Shore Drive</td>
          </tr>
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
          <span>00 BYN</span>
        </div>
        <button disabled={isEmptyBasket} onClick={nextStep} >Следующий шаг</button>
      </ProductsFooter>
    </Layout>
  );
}

export default CartBlock;

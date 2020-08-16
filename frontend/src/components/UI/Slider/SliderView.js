import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from 'react-redux'
import { changeOptions } from '../../../store/action/productActions'
import Slider from 'react-slick'
import styled from 'styled-components';
import ProductSlide from './ProductSlide';
import { listProducts } from '../../../store/action/productActions'
import Loader from '../Loader/Loader'


const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(208, 213, 230, 0.28);
`


const SliderView = props => {
  const { id } = props.location.state;
  const productListState = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    if(productListState.products.length === 0) {
      dispatch(listProducts())
    }
    // eslint-disable-next-line
  }, [])

  const onChangeOptions = (idProduct, select) => dispatch(changeOptions(idProduct, select));

  const initialSlide = (id) => {
    return productListState.products.findIndex((product) => product._id === id)
  }
    
  const isArrow = window.innerWidth <= 1024
  
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isArrow,
    initialSlide: initialSlide(id)
  }

  const renderSlides = () => {
    try {
      return productListState.products.map((product, index) => <ProductSlide onChangeOptions={onChangeOptions} key={`${product._id}`} product={product} />)
    }
    catch (e) {
      return <div>The product not found...</div>
    }
  }

  return (
    <>
      {
        productListState.loading ? <Loader />
          :
          productListState.error ? <div>Возникла ошибка</div>
            :
            (
              <SliderWrapper>
                <Slider {...settings}>
                  {
                    renderSlides()
                  }
                </Slider>
              </SliderWrapper>
            )
      }
    </>
  );
}

export default SliderView;

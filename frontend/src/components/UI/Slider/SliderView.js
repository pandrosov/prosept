import React from 'react';
import {  useSelector } from 'react-redux'
import Slider from 'react-slick'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlide from './ProductSlide';
import Loader from '../Loader/Loader'

const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(208, 213, 230, 0.28);
`


const SliderView = props => {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const { id } = props.location.state;

  const initialSlide = (id) => {
    return products.findIndex((product, index, array) => product._id === id ? index : false)
  }

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: initialSlide(id)
  }

  const renderSlides = () => {
    try {
      return products.map((product, index) => <ProductSlide key={`${product._id}`} product={product} />)
    }
    catch (e) {
      return <div>The product not found...</div>
    }
  }

  return (
    <>
      {
        loading ? <Loader />
                :
          error ? <div>Возникла ошибка</div>
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

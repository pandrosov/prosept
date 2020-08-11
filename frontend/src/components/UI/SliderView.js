import React from 'react';
import Slider from 'react-slick'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlide from './ProductSlide';

const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 10vw 20vh;
  background: rgba(208, 213, 230, 0.28);
`


const SliderView = props => {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <ProductSlide id={1}/>
      </Slider>
    </SliderWrapper>
  );
}

export default SliderView;

import React from 'react';
import Slider from '../components/Swiper';
import Delivery from '../components/Delivery';
import HomePageProducts from '../components/HomePageProducts';
import styled from 'styled-components';

const Home = ({ sliderData, productData }) => {
  return (
    <StyledHome>
      <Slider sliderData={sliderData} />
      <Delivery />
      <HomePageProducts products={productData} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  overflow-x: hidden;
`;

export default Home;

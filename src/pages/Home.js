import React from 'react';
import Slider from '../components/Swiper';
import Delivery from '../components/Delivery';
import HomePageProducts from '../components/HomePageProducts';
import styled from 'styled-components';
import SubscribeBanner from '../components/SubscribeBanner';

const Home = ({ sliderData, productData }) => {
  return (
    <StyledHome>
      <Slider className="swiper" sliderData={sliderData} />
      <Delivery />
      <HomePageProducts products={productData} />
      <SubscribeBanner />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

export default Home;

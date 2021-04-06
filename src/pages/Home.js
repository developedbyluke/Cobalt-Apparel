import React from 'react';
import Slider from '../components/Swiper';
import Delivery from '../components/Delivery';
import ProductThumbnail from '../components/ProductThumbnail';
import HomePageProducts from '../components/HomePageProducts';

const Home = ({ sliderData, productData }) => {
  return (
    <div>
      <Slider sliderData={sliderData} />
      <Delivery />
      <HomePageProducts products={productData} />
    </div>
  );
};

export default Home;

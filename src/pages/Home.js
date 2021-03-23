import React from 'react';
import Slider from '../components/Swiper';

const Home = ({sliderData}) => {
  return (
    <div>
      <Slider sliderData={sliderData}/>
    </div>
  );
};

export default Home;

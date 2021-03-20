import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styled from 'styled-components';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import '../styles/swiperStyles.css';
// Import imgs
import homeSlider1 from '../img/sliderimgs/homeSliderImg1L.jpg';
import homeSlider2 from '../img/sliderimgs/homeSliderImg2L.jpg';
import homeSlider3 from '../img/sliderimgs/homeSliderImg3L.jpg';
import homeSlider4 from '../img/sliderimgs/homeSliderImg4L.jpg';
import { siteData } from '../SiteData';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  const imgs = [homeSlider1, homeSlider2, homeSlider3, homeSlider4];
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {siteData.slider.map((item, i) => (
        <SwiperSlide>
          <img key={i} src={imgs[i]} alt="" style={{ width: '100%' }} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Slider;

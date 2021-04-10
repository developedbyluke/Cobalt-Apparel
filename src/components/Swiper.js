import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFade, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import '../styles/swiperStyles.scss';

SwiperCore.use([Pagination, EffectFade, Autoplay]);

const Slider = ({ sliderData }) => {
  return (
    <Swiper
      spaceBetween={0}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      {sliderData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="slide-container-for-header">
            <img key={i} src={item.img} alt="" style={{ width: '100%' }} />
            <figcaption className="slide-heading-and-button">
              <h3>{item.header}</h3>
              <h2>
                {item.title}
                <br />
                {item.subtitle}
              </h2>
              <button type="button">Shop Now</button>
            </figcaption>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

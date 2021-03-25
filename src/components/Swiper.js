import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "../styles/swiperStyles.scss";
// Import imgs
import homeSlider1 from "../img/sliderimgs/homeSliderImg1L.jpg";
import homeSlider2 from "../img/sliderimgs/homeSliderImg2L.jpg";
import homeSlider3 from "../img/sliderimgs/homeSliderImg3L.jpg";
import homeSlider4 from "../img/sliderimgs/homeSliderImg4L.jpg";
import { siteData } from "../SiteData";

SwiperCore.use([Pagination, EffectFade, Autoplay]);

const Slider = ({ sliderData }) => {
  const imgs = [homeSlider1, homeSlider2, homeSlider3, homeSlider4];

  return (
    <Swiper
      spaceBetween={0}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      slidesPerView={1}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {sliderData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="slide-container">
            <img key={i} src={imgs[i]} alt="" style={{ width: "100%" }} />
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

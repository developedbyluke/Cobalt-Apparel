import React from 'react';
import ProductThumbnail from './ProductThumbnail';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const HomePageProducts = ({ products }) => {
  return (
    <>
      {products && (
        <HomeProducts>
          <SectionContainer className="latest">
            <h4>Latest </h4>
            {/* Hides unless app is in mobile view */}
            <Swiper className="Swiper" spaceBetween={10} slidesPerView="auto">
              {products.map((product, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-container">
                    <ProductThumbnail key={i} product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper">
              {products.map((product, i) => (
                <ProductThumbnail key={i} product={product} />
              ))}
            </div>
          </SectionContainer>

          <SectionContainer className="reccomended">
            <h4>Recommended</h4>
            {/* Hides unless app is in mobile view */}
            <Swiper className="Swiper" spaceBetween={10} slidesPerView="auto">
              {products.map((product, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-container">
                    <ProductThumbnail
                      className="TN"
                      key={i}
                      product={product}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper">
              {products.map((product, i) => (
                <ProductThumbnail key={i} product={product} />
              ))}
            </div>
          </SectionContainer>
        </HomeProducts>
      )}
    </>
  );
};

const HomeProducts = styled.section`
  padding: 0 6rem;
  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }

  .Swiper {
    overflow-x: hidden;
    opacity: 0;
    position: absolute;
    top: 3rem;
    pointer-events: none;
    * {
      width: 11rem;
    }
    @media screen and (max-width: 700px) {
      opacity: 1;
      pointer-events: initial;
    }
  }
`;
const SectionContainer = styled.div`
  height: 23rem;
  position: relative;
  margin: 4rem 0;
  h4 {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .swiper-slide {
    width: auto;
    margin-right: 0.4rem;
  }
  .swiper {
    position: absolute;
    top: 3;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.5rem;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    margin: 0rem;
    padding: 1rem 0;
  }
`;

export default HomePageProducts;

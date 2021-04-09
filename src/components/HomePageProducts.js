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
            <Swiper className="Swiper" spaceBetween={50} slidesPerView={2.5}>
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
            <Swiper className="Swiper" spaceBetween={50} slidesPerView={2.2}>
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
    opacity: 0;
    position: absolute;
    top: 2rem;
    pointer-events: none;
    * {
      width: 13rem;
    }
    @media screen and (max-width: 700px) {
      opacity: 1;
      pointer-events: initial;
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .slide-container {
    /* width: 13rem; */
  }
`;
const SectionContainer = styled.div`
  height: 23rem;
  position: relative;
  margin: 3rem 0;
  h4 {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .swiper {
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.5rem;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export default HomePageProducts;

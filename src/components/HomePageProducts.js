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
            <Swiper className="Swiper" spaceBetween={20} slidesPerView={3.5}>
              {products.map((product, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-container">
                    <ProductThumbnail className="x" key={i} product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="product-list">
              {products.map((product, i) => (
                <ProductThumbnail key={i} product={product} />
              ))}
            </div>
          </SectionContainer>

          <SectionContainer className="recommended">
            <h4>Recommended</h4>
            {/* Hides unless app is in mobile view */}
            <Swiper className="Swiper" spaceBetween={20} slidesPerView={3.5}>
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
            <div className="product-list">
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
  padding-bottom: 3rem;
  @media screen and (max-width: 1000px) {
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 700px) {
    padding-bottom: 1rem;
  }
`;
const SectionContainer = styled.div`
  /* border: 1px solid blue; */
  @media screen and (max-width: 1000px) {
    padding: 2rem;
  }
  @media screen and (max-width: 700px) {
    padding: 1rem 1rem 0 1rem;
    height: 20rem;
  }
  position: relative;
  padding: 3rem 3rem 0 3rem;
  h4 {
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .product-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.5rem;
    @media screen and (max-width: 700px) {
      pointer-events: none;
      opacity: 0;
    }
  }
  .Swiper {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    padding-right: 2rem;
    height: 100%;
    * {
      /* width: 11rem; */
    }
    @media screen and (max-width: 700px) {
      opacity: 1;
      pointer-events: initial;
    }
  }
`;

export default HomePageProducts;

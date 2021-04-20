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
            <h4 className="product-section-header">Latest </h4>
            {/* Hides unless app is in mobile view */}
            <Swiper className="Swiper" spaceBetween={5} slidesPerView="auto">
              {products
                .filter((product) => product.homepage === 'latest')
                .map((product, i) => (
                  <SwiperSlide key={i}>
                    <div className="slide-container">
                      <ProductThumbnail
                        className="x"
                        key={i}
                        product={product}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </SectionContainer>

          <SectionContainer className="recommended">
            <h4 className="product-section-header">Recommended</h4>
            {/* Hides unless app is in mobile view */}
            <Swiper className="Swiper" spaceBetween={5} slidesPerView="auto">
              {products
                .filter((product) => product.homepage === 'recommended')
                .map((product, i) => (
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
          </SectionContainer>
        </HomeProducts>
      )}
    </>
  );
};

const HomeProducts = styled.section`
  display: none;
  padding: 0 var(--mobile-screen-padding);
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
const SectionContainer = styled.div`
  margin: 2rem 0;
  .product-section-header {
    margin-bottom: 0.66rem;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-right: 1.5rem;
  }
  .swiper-slide {
    width: 30%;
  }
`;

export default HomePageProducts;

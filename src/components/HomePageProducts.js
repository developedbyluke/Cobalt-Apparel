import React from 'react';
import ProductThumbnail from './ProductThumbnail';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const HomePageProducts = ({ products }) => {
  // const params = {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  // };
  return (
    <>
      {products && (
        <HomeProducts>
          <SectionContainer className="latest">
            <h4>Latest </h4>

            <Swiper className="Swiper" spaceBetween={50} slidesPerView={1}>
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
            <Swiper className="Swiper">
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
  overflow-x: hidden;
  padding: 0 6rem;
  position: relative;
  .Swiper {
    /* display: none; */
    * {
      width: 13rem;
    }
    @media screen and (max-width: 700px) {
      display: initial;
    }
  }
  .swiper-wrapper {
    background: blue;
    /* width: 100%; */
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
  margin: 3rem 0;
  h4 {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .swiper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.5rem;
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export default HomePageProducts;

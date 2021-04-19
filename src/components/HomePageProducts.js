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
            <h4 className="product-section-header">Latest</h4>
            <div className="product-list">
              {products.map((product, i) => (
                <ProductThumbnail key={i} product={product} />
              ))}
            </div>
          </SectionContainer>

          <SectionContainer className="recommended">
            <h4 className="product-section-header">Recommended</h4>
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
  padding: 0 var(--large-screen-padding);
  @media screen and (max-width: 1160px) {
    padding: 0 var(--medium-screen-padding);
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const SectionContainer = styled.div`
  margin: 3rem 0;
  .product-section-header {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .product-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.5rem;
  }
`;

export default HomePageProducts;

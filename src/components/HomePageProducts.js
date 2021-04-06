import React from 'react';
import ProductThumbnail from './ProductThumbnail';
import styled from 'styled-components';

const HomePageProducts = ({ products }) => {
  return (
    <HomeProducts>
      <SectionContainer className="latest">
        <h4>Latest </h4>
        <div className="swiper">
          {products.map((product, i) => (
            <ProductThumbnail key={i} product={product} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="latest">
        <h4>Recommended</h4>
        <div className="swiper">
          {products.map((product, i) => (
            <ProductThumbnail key={i} product={product} />
          ))}
        </div>
      </SectionContainer>
    </HomeProducts>
  );
};

const HomeProducts = styled.section`
  padding: 0 6rem;
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
    display: flex;
    justify-content: space-between;
    margin: 0 -0.5rem;
  }
`;

export default HomePageProducts;

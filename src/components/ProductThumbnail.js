import React, { useState } from "react";
import styled from "styled-components";
import { siteData } from "../SiteData";

const ProductThumbnail = ({ product }) => {
  const [hover, updateHover] = useState(false);
  const handleHover = () => {
    updateHover(!hover);
  };
  return (
    <Thumbnail onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="img-container">
        <img src={product.img1} alt="" />
        <div className={hover ? "show-sizes sizes" : "sizes"}>
          Sizes:
          <br />
          {product.sizes.map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>
      </div>
      <h5 className="description">
        {product.title} <span>, {product.style}</span>{" "}
      </h5>
      <h5 className="price">£{product.price / 100}.00</h5>
    </Thumbnail>
  );
};

const Thumbnail = styled.div`
  @media screen and (max-width: 1500px) {
    width: 15rem;
  }
  cursor: pointer;
  width: 23rem;
  margin: 0.5rem;
  * {
    width: 100%;
  }
  .img-container {
    position: relative;
    overflow: hidden;
    padding-bottom: -2rem;
    height: auto;
    img {
      margin-bottom: -1rem;
    }
  }
  .sizes {
    position: absolute;
    bottom: -100%;
    transition: all 0.4s ease;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 0.8rem;
    width: 100%;
  }
  .show-sizes {
    bottom: 0;
  }
  .description {
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    &:hover {
      color: #02e1f5;
    }
    span {
      font-weight: 300;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .price {
    padding: 0 0.5rem 0.25rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export default ProductThumbnail;

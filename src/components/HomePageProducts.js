import React from "react";
import ProductThumbnail from "./ProductThumbnail";

const HomePageProducts = ({ products }) => {
  return (
    <section className="home-products">
      <div className="latest">
        <h4>Latest </h4>
        <div className="swiper">
          {products.map((product) => (
            <ProductThumbnail product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageProducts;

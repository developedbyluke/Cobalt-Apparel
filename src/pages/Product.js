import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ProductPage = ({ productData }) => {
  const history = useHistory();
  const url = history.location.pathname;
  const productId = url.split("/")[2];
  const [products, updateProducts] = useState(productData);
  const [currentProduct, updateCurrentProduct] = useState(null);

  useEffect(() => {
    updateCurrentProduct(
      ...products.filter((product) => product.id === productId)
    );
  }, [url, productId, productData]);
  console.log(currentProduct);
  return (
    <>
      {currentProduct && (
        <Product>
          <div className="product-page-left">
            <h3>{currentProduct.title}</h3>
            <h3>£{currentProduct.price / 100}.00</h3>
            <p>{currentProduct.style}</p>
            <button>Add To Basket</button>
            <button>Size</button>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ea
              eius, voluptatibus natus eligendi vitae veritatis sunt alias
              debitis, modi reprehenderit soluta odio repellendus! Corrupti
              vitae vel veritatis adipisci laborum? Vel consectetur corporis
              facilis! Non quisquam laboriosam quos eum quidem provident
              molestiae facere. Voluptates tenetur eum et obcaecati doloremque.
              Autem debitis iure magni doloremque facilis officia dolor cum,
              perspiciatis, magnam in provident est optio? Sed corporis
              blanditiis earum exercitationem at accusamus a ex libero aliquid
              ducimus molestias quisquam, quibusdam nam veritatis debitis maxime
              omnis, culpa aliquam fuga quis, similique consequuntur. Quibusdam
              numquam repellat culpa suscipit aspernatur. Voluptate molestias
              quibusdam veniam.
            </p>
          </div>
          <div className="product-page-right">
            <img src={currentProduct.img1} alt="" />
          </div>
        </Product>
      )}
    </>
  );
};

const Product = styled.div`
  padding: 8rem 10rem;
  display: flex;
  .product-page-left,
  .product-page-right {
    width: 50%;
  }
  .product-page-right {
    padding-left: 1rem;
    img {
      width: 100%;
    }
  }
  .product-page-left {
    margin: -0.5rem 0;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    * {
      margin: 0.5rem 0;
      color: #515151;
    }
    h3 {
      color: #323232;
    }
    button {
      display: inline-block;
      width: 100%;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;

export default ProductPage;

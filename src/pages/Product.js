import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ProductPage = ({ productData }) => {
  const history = useHistory();
  const url = history.location.pathname;
  const productId = url.split("/")[2];
  const [currentProduct, updateCurrentProduct] = useState(null);

  useEffect(() => {
    updateCurrentProduct(
      productData.filter((product) => product.id === productId)
    );
  }, [url, productId, productData]);
  return (
    <Product>
      <h1>Productss Bruv</h1>
    </Product>
  );
};

const Product = styled.div`
  padding: 4rem 10rem;

  h1 {
    background: blue;
    height: 100vh;
  }
`;

export default ProductPage;

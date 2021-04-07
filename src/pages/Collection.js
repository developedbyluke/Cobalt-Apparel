import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductThumbnail from '../components/ProductThumbnail';
import Delivery from '../components/Delivery';
import styled from 'styled-components';

const CollectionPage = ({ productData, collection, updateIsNavActive }) => {
  const [products, updateProducts] = useState(productData);
  const [filteredCollection, updateFilteredCollection] = useState(null);
  const history = useHistory();
  const url = history.location.pathname;
  const x = url.split('/');
  useEffect(() => {
    const CollectionFilter = (collection, secondFilter) => {
      updateIsNavActive(false);
      return products.filter((product) => {
        if (!secondFilter) return product.collection.includes(collection);
        return (
          product.collection.includes(collection) &&
          product.collection.includes(secondFilter.toLowerCase())
        );
      });
    };

    const filteredResults = CollectionFilter(x[2], x[3]);
    updateFilteredCollection(filteredResults);
    console.log(url);
  }, [collection, products, url]);
  return (
    <Container>
      <h3>{x[3] ? x[2] + ' - ' + x[3] : 'All ' + x[2]}</h3>
      <Delivery />
      {filteredCollection && (
        <Collection>
          {filteredCollection.map((product, i) => {
            return <ProductThumbnail key={i} product={product} />;
          })}
        </Collection>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 6rem;
  width: 100%;
  min-height: 100vh;
  padding: 0 6rem;
  h3 {
    color: rgba(0, 0, 0, 0.7);
    margin: 1rem 0;
    font-size: 1.7rem;
    text-transform: capitalize;
  }
`;

const Collection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 -0.25rem;
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default CollectionPage;

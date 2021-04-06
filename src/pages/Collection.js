import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductThumbnail from '../components/ProductThumbnail';
import styled from 'styled-components';

const CollectionPage = ({ productData, collection }) => {
  const [products, updateProducts] = useState(productData);
  const [filteredCollection, updateFilteredCollection] = useState(null);
  const history = useHistory();
  const url = history.location.pathname;

  useEffect(() => {
    const CollectionFilter = (collection, secondFilter) => {
      return products.filter((product) => {
        if (!secondFilter) return product.collection.includes(collection);
        return (
          product.collection.includes(collection) &&
          product.collection.includes(secondFilter.toLowerCase())
        );
      });
    };
    const x = url.split('/');
    const filteredResults = CollectionFilter(x[2], x[3]);
    updateFilteredCollection(filteredResults);
    console.log(url);
  }, [collection, products, url]);

  return (
    <>
      {filteredCollection && (
        <Collection>
          {filteredCollection.map((product, i) => {
            return <ProductThumbnail key={i} product={product} />;
          })}
        </Collection>
      )}
    </>
  );
};

const Collection = styled.div`
  padding: 8rem 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 13rem));
  justify-content: space-between;
  grid-gap: 1rem;
  margin: 0 -0.5rem;
   {
  }
`;

export default CollectionPage;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
    const x = url.split("/");
    const filteredResults = CollectionFilter(x[2], x[3]);
    updateFilteredCollection(filteredResults);
    console.log(url);
  }, [collection, products, url]);

  return (
    <>
      {filteredCollection && (
        <div className="hello">
          {filteredCollection.map((item, i) => {
            return <div key={i}>{item.title}</div>;
          })}
        </div>
      )}
    </>
  );
};

export default CollectionPage;

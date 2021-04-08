// Add disabled attribute the basket button if !size

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ProductPage = ({ productData, updateCartContent }) => {
  const history = useHistory();
  const url = history.location.pathname;
  const productId = url.split('/')[2];
  const [products, updateProducts] = useState(productData);
  const [currentProduct, updateCurrentProduct] = useState(null);
  const [currentSize, updateCurrentSize] = useState('Size');
  const [sizePanelOpen, updateSizePanelOpen] = useState(false);

  useEffect(() => {
    updateCurrentProduct(
      ...products.filter((product) => product.id === productId)
    );
  }, [url, productId, productData, products]);

  // Functions
  const handleSizeClick = (e) => {
    const size = e.currentTarget.id;
    updateCurrentSize(size);
    updateSizePanelOpen(false);
  };

  const handleAddToBasket = (e) => {
    updateCartContent((arr) => [...arr, currentProduct]);
  };

  const hasChosenSize = currentSize !== 'Size';
  return (
    <>
      {currentProduct && (
        <Product>
          <div className="product-page-left">
            <h3>{currentProduct.title}</h3>
            <h3>£{currentProduct.price / 100}.00</h3>
            <p>{currentProduct.style}</p>
            <button
              className={hasChosenSize ? '' : 'disabled'}
              onClick={handleAddToBasket}
            >
              {hasChosenSize ? 'Add to basket' : 'Choose a size'}
            </button>
            <div className="dropdown-wrapper">
              <button onClick={() => updateSizePanelOpen(!sizePanelOpen)}>
                {currentSize}{' '}
                <span className="material-icons arrow">
                  {sizePanelOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              <ul className={sizePanelOpen ? 'open' : ''}>
                {currentProduct.sizes
                  .filter((size) => size !== 'More...')
                  .map((size, i) => (
                    <li id={size} key={i} onClick={handleSizeClick}>
                      {size}
                    </li>
                  ))}
              </ul>
            </div>
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
  overflow-x: hidden;
  padding: 8rem 6rem;
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
      position: relative;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
    }
    .dropdown-wrapper {
      height: 3rem;
      position: relative;
      text-align: center;
      ul {
        opacity: 0;
        background: rgba(136, 136, 136);
        pointer-events: none;
        li {
          color: white;
          &:hover {
            color: black;
            cursor: pointer;
          }
        }
      }
      .open {
        opacity: 1;
        pointer-events: all;
      }
    }
    .disabled {
      pointer-events: none;
      background: #c8c8c8;
    }
    .arrow {
      height: 1rem;
      /* background: blue; */
      position: absolute;
      right: 0.5rem;
      top: 0;
      height: 100%;
      font-size: 1rem;
    }
  }
`;

export default ProductPage;

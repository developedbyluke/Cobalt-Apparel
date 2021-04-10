import React from 'react';
import styled from 'styled-components';

const Cart = ({ isCartActive, cartContent, updateCartContent }) => {
  const removeCartItem = (e) => {
    const id = e.currentTarget.id;
    updateCartContent(cartContent.filter((item) => item.id !== id));
  };

  return (
    <StyledCart className={isCartActive ? 'show' : 'hide'}>
      <ul>
        {cartContent.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.img1} alt="" />
              <div className="description">
                <h3>{product.title}</h3>
                <h4>
                  {product.style} <span>x 1</span>
                </h4>
              </div>
              <h4 className="price">£{product.price / 100}.00</h4>
              <button id={product.id} onClick={removeCartItem}>
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div className="buttons">
        <button>View Basket</button>
        <button>Checkout</button>
      </div>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  overflow-x: hidden;
  position: absolute;
  background: #ebebe6;
  top: 4rem;
  right: 0;
  color: black;
  padding: 1rem 1rem;
  max-height: 30rem;
  width: 45vw;
  ul {
    margin-bottom: 1rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 0;

      * {
        margin: 0 0.5rem;
      }
    }
    .description {
      width: 55%;
    }
    h3 {
      font-size: 1rem;
    }
    img {
      height: 4rem;
    }
    h4 {
      font-size: 0.9rem;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.466);
    }
    span {
      color: black;
    }
    .price {
      text-align: center;
      font-weight: 400;
      color: black;
    }
    button {
      width: 2rem;
      height: 2rem;
      text-align: center;
      background: #ebebe6;
      &:hover {
        background-color: #02e1f5;
      }
    }
  }
  .buttons {
    display: flex;
    /* justify-content: space-around; */
    button {
      width: 100%;
      margin: 0 0.5rem;
      background-color: #02e1f5;
      &:hover {
        background-color: #25cad8;
      }
    }
  }
  @media screen and (max-width: 700px) {
    max-height: 100vh;
    height: calc(100vh - 4rem);
    width: 100%;
  }
`;

export default Cart;

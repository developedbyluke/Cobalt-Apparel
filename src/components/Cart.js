import React from "react";
import styled from "styled-components";
import "../styles/headerToggleClasses.scss";

const Cart = ({ isCartActive }) => {
  const x = "x";
  return (
    <StyledCart className={isCartActive ? "show" : "hide"}>
      <ul>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/1202/6102/products/nike-sb-blazer-mid-shoes-photon-dust-psychic-blue-photon-dust-1_small.jpg?v=1616776986"
            alt=""
          />
          <div className="description">
            <h3>Nike SB Blazer Mid Shoes,</h3>
            <h4>
              Photon Dust, Psychic Blue, Photon DustUK 7.5 <span>x 1</span>
            </h4>
          </div>
          <h4 className="price">£75</h4>
          <button>X</button>
        </li>
      </ul>
      <div className="buttons">
        <button>View Basket</button>
        <button>Checkout</button>
      </div>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  position: absolute;
  background: #ebebe6;
  top: 8vh;
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
      * {
        margin: 0 0.5rem;
      }
    }
    h3 {
      font-size: 1rem;
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
`;

export default Cart;

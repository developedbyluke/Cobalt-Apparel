import React from 'react';
import styled from 'styled-components';

const NavButtons = ({
  isMobileNavActive,
  updateIsMobileNavActive,
  updateIsCartActive,
  updateIsSearchBarActive,
  isSearchBarActive,
  isCartActive,
  cartContent,
  updateIsNavButtonActive,
  isNavButtonActive,
}) => {
  return (
    <Buttons>
      {/* Currency Options */}
      <div className="currency nav-button">
        <CurrencyOptions name="cars" id="cars">
          <option value="0">GBP</option>
          <option value="1">AUD</option>
          <option value="2">CAD</option>
          <option value="3">HKD</option>
          <option value="4">JPY</option>
          <option value="5">NZD</option>
          <option value="6">SGD</option>
          <option value="7">USD</option>
        </CurrencyOptions>
      </div>
      {/* Search Bar Btn */}
      <div
        className={
          isSearchBarActive
            ? 'nav-button-active search-button nav-button'
            : 'search-button nav-button'
        }
        onClick={() => {
          updateIsCartActive(false);
          updateIsMobileNavActive(false);
          updateIsSearchBarActive(!isSearchBarActive);
          updateIsNavButtonActive(!isNavButtonActive);
        }}
      >
        <span className="icon material-icons">search</span>
      </div>
      {/* Shopping Cart Btn */}
      <div
        className={isCartActive ? 'nav-button-active nav-button' : 'nav-button'}
        onClick={() => {
          updateIsSearchBarActive(false);
          updateIsMobileNavActive(false);
          updateIsCartActive(!isCartActive);
        }}
      >
        <span className="icon material-icons">shopping_cart</span>
        <span className="cart-counter">
          {cartContent.length ? '(' + cartContent.length + ')' : ''}
        </span>
      </div>
      {/* Nav Burger */}
      <div
        className={
          isMobileNavActive
            ? 'nav-button-active menu-bar nav-button'
            : 'menu-bar nav-button'
        }
        onClick={() => {
          updateIsSearchBarActive(false);
          updateIsCartActive(false);
          updateIsMobileNavActive(!isMobileNavActive);
        }}
      >
        <span className="icon material-icons">menu</span>
      </div>
    </Buttons>
  );
};

const Buttons = styled.div`
  @media screen and (max-width: 1160px) {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  overflow-y: hidden;
  display: flex;
  align-items: center;
  * {
    display: flex;
    align-items: center;
    margin: 0 0.3rem;
    cursor: pointer;
  }
  .menu-bar {
    display: none;
    @media screen and (max-width: 1160px) {
      display: initial;
    }
  }
  .search-button {
    display: initial;
    @media screen and (max-width: 1160px) {
      display: none;
    }
  }
  .currency {
    display: initial;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .nav-button {
    filter: blur(0) brightness(100%);
    &:hover {
      color: var(--main-blue);
    }
  }

  .cart-counter {
    color: var(--main-blue);
  }
  .nav-button-active {
    color: var(--main-blue);
  }
`;
const CurrencyOptions = styled.select`
  background: none;
  color: white;
  border: none;
  width: 4rem;
  outline: none;
  font-size: 1rem;
`;

export default NavButtons;

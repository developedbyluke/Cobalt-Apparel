import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import SearchBar from '../components/SearchBar';
import SubNav from '../components/SubNav';
import '../styles/headerToggleClasses.scss';
import Cart from './Cart';
import { Link, useHistory } from 'react-router-dom';

const Header = ({
  navData,
  productData,
  cartContent,
  updateCartContent,
  updateCollection,
  updateIsNavActive,
  isNavActive,
}) => {
  const history = useHistory();

  const [navItemSelected, updateNavItemSelected] = useState('brands');
  const [isSearchBarActive, updateIsSearchBarActive] = useState(false);
  const [isCartActive, updateIsCartActive] = useState(false);
  const [isMobileNavActive, updateIsMobileNavActive] = useState(false);
  const TriangleRef = useRef();
  const SubNavRef = useRef();

  useEffect(() => {
    return history.listen(() => {
      updateIsCartActive(false);
      updateIsSearchBarActive(false);
    });
  }, [history]);

  return (
    <StyledHeader>
      <Logo id="logo">
        <Link to="/">Cobalt Apparel</Link>
      </Logo>
      <Nav
        updateCollection={updateCollection}
        navData={navData}
        ref={TriangleRef}
        SubNavRef={SubNavRef}
        updateNavItemSelected={updateNavItemSelected}
        updateIsNavActive={updateIsNavActive}
        headingData={navData.filter((i) => i.id === navItemSelected)[0]}
        isMobileNavActive={isMobileNavActive}
      />
      {/* <MobileNav navData={navData} /> */}
      <NavButtons>
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
          className="search-button nav-button"
          onClick={() => {
            updateIsCartActive(false);
            updateIsSearchBarActive(!isSearchBarActive);
          }}
        >
          <span className="icon material-icons">search</span>
        </div>
        {/* Shopping Cart Btn */}
        <div
          className="nav-button"
          onClick={() => {
            updateIsSearchBarActive(false);
            updateIsCartActive(!isCartActive);
          }}
        >
          <span className="icon material-icons">shopping_cart</span>
        </div>
        {/* Nav Burger */}
        <div
          className="menu-bar nav-button"
          onClick={() => {
            updateIsSearchBarActive(false);
            // updateIsCartActive(!isCartActive);
            updateIsMobileNavActive(!isMobileNavActive);
          }}
        >
          <span className="icon material-icons">menu</span>
        </div>
      </NavButtons>
      <SearchBar isSearchBarActive={isSearchBarActive} />
      <Cart
        isCartActive={isCartActive}
        updateCartContent={updateCartContent}
        cartContent={cartContent}
      />
      <SubNav
        updateCollection={updateCollection}
        productData={productData}
        TriangleRef={TriangleRef}
        updateIsNavActive={updateIsNavActive}
        ref={SubNavRef}
        isNavActive={isNavActive}
        headingData={navData.filter((i) => i.id === navItemSelected)[0]}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  color: white;
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  a {
    color: white;
    font-family: 'Caveat', cursive;
    font-weight: 400;
    font-size: 2.2rem;
    @media screen and (max-width: 1060px) {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1060px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  /* @media screen and (max-width: 1250px) {
    padding-left: 2rem;
  } */
`;
const NavButtons = styled.div`
  @media screen and (max-width: 1060px) {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  overflow-y: hidden;
  display: flex;
  align-items: center;
  margin: 0 -0.3rem;
  * {
    padding-top: 0.3rem;
    margin: 0 0.3rem;
    cursor: pointer;
  }
  .menu-bar {
    display: none;
    @media screen and (max-width: 1060px) {
      display: initial;
    }
  }
  .search-button {
    display: initial;
    @media screen and (max-width: 1060px) {
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
    &:hover {
      color: var(--main-blue);
    }
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

export default Header;

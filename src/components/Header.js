import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
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
      />
      <NavButtons>
        {/* Currency Options */}
        <div>
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
          onClick={() => {
            updateIsCartActive(false);
            updateIsSearchBarActive(!isSearchBarActive);
          }}
        >
          <span className="icon material-icons">search</span>
        </div>
        {/* Shopping Cart Btn */}
        <div
          onClick={() => {
            updateIsSearchBarActive(false);
            updateIsCartActive(!isCartActive);
          }}
        >
          <span className="icon material-icons">shopping_cart</span>
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
  color: white;
  z-index: 2;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.783);
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6rem;
  @media screen and (max-width: 1250px) {
    padding-left: 2rem;
  }
  a {
    color: white;
    font-family: 'Caveat', cursive;
    font-weight: 400;
    font-size: 2rem;
  }
`;
const NavButtons = styled.div`
  overflow-y: hidden;
  display: flex;
  align-items: center;
  padding-right: 6rem;
  @media screen and (max-width: 1250px) {
    padding-right: 2rem;
  }
  /* padding-right: 1rem; */
  * {
    padding-top: 0.3rem;
    margin-left: 0.8rem;
    cursor: pointer;
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

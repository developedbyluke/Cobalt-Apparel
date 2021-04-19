import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
import NavButtons from '../components/NavButtons';
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

      <NavButtons
        isMobileNavActive={isMobileNavActive}
        updateIsMobileNavActive={updateIsMobileNavActive}
        updateIsCartActive={updateIsCartActive}
        updateIsSearchBarActive={updateIsSearchBarActive}
        isSearchBarActive={isSearchBarActive}
        isCartActive={isCartActive}
        cartContent={cartContent}
      />
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
  padding: 0 var(--large-screen-padding);
  @media screen and (max-width: 1160px) {
    padding: 0 var(--medium-screen-padding);
  }
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
    @media screen and (max-width: 1160px) {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1160px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Header;

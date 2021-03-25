import React, { useState, useRef } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import SubNav from "../components/SubNav";
import "../styles/headerToggleClasses.scss";

const Header = ({ navData }) => {
  const [navItemSelected, updateNavItemSelected] = useState("brands");
  const [isNavActive, updateIsNavActive] = useState(false);
  const TriangleRef = useRef();
  const SubNavRef = useRef();
  return (
    <StyledHeader>
      <Logo id="logo">
        <a href="#">Cobalt Apparel</a>
      </Logo>
      <Nav
        navData={navData}
        ref={TriangleRef}
        SubNavRef={SubNavRef}
        updateNavItemSelected={updateNavItemSelected}
        updateIsNavActive={updateIsNavActive}
      />
      <NavButtons>
        <div>
          <span className="material-icons">3d_rotation</span>
        </div>
        <div>
          <span className="material-icons">search</span>
        </div>
        <div>
          <span className="material-icons">shopping_cart</span>
        </div>
      </NavButtons>
      <SearchBar />
      <SubNav
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
  height: 8vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  padding-left: 4.5rem;

  a {
    color: white;
    font-family: "Caveat", cursive;
    font-weight: 400;
    font-size: 2rem;
  }
`;
const NavButtons = styled.div`
  display: flex;
  align-items: center;
  padding-right: 4.5rem;
  * {
    padding-top: 0.3rem;
    margin-left: 0.8rem;
  }
`;

export default Header;

import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <Header>
    <Logo id="logo">
      <a href="#">Cobalt Apparel</a>
    </Logo>
  </Header>
);

const Header = styled.header`
  z-index: 2;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.783);
  padding: 0.8rem 3rem;
  height: 8vh;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  a {
    color: white;
    font-family: 'Caveat', cursive;
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export default Nav;

import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <Header>
    <Logo id="logo">
      <a href="#">Cobalt Apparel</a>
    </Logo>
    <nav>
      <ul>
        <li className="start">
          <a href="#">Brands</a>
        </li>
        <li>
          <a href="#">Shoes</a>
        </li>
        <li>
          <a href="#">Clothing</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li className="end">
          <a href="#">Sale</a>
        </li>
      </ul>
    </nav>
    <div className="nav-buttons">
      <h4>Currency</h4>
      <h4>Search</h4>
      <h4>Cart</h4>
    </div>
  </Header>
);

const Header = styled.header`
  color: white;
  z-index: 2;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.783);
  padding: 0.8rem 4.5rem;
  height: 8vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    a {
      font-size: 1rem;
      padding: 0 2rem;
    }
    li::after {
      content: '|';
      color: grey;
    }
    .end {
      ::after {
        content: '';
      }
      a {
        padding-right: 0 0 0 2rem;
      }
    }
    .start {
      a {
        padding: 0 2rem 0 0;
      }
    }
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  a {
    color: white;
    font-family: 'Caveat', cursive;
    font-weight: 400;
    font-size: 2rem;
  }
`;

export default Nav;

import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NavTriangle } from '../img/navTriangle.svg';

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
    <NavTriangle className='triangle'/>
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
  </Header>
);

const Header = styled.header`
  color: white;
  z-index: 2;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.783);
  padding: 0 4.5rem;
  height: 8vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 8vh;
    li{
      height: 100%;
      display: flex;
    align-items: center;
    }
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
        padding: 0 2rem;
      }
    }
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
  a {
    color: white;
    font-family: 'Caveat', cursive;
    font-weight: 400;
    font-size: 2rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  * {
    padding-top: 0.3rem;
    margin-left: 0.8rem;
  }
`;

export default Nav;

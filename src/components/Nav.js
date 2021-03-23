import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as NavTriangle } from '../img/navTriangle.svg';

const Nav = ({navData}) => {
  const [navItemSelected, updateNavItemSelected] = useState('brands');
  const [isNavActive, updateIsNavActive] = useState(false); 
  const TriangleRef = useRef();
  const subNavRef = useRef();
  
  const hoverNav = (e) => {
    const navElementOffset = e.currentTarget.offsetLeft + (e.currentTarget.offsetWidth / 2);  
    TriangleRef.current.style.left = `${navElementOffset}px`;
    TriangleRef.current.style.opacity = '1';
    updateNavItemSelected(e.currentTarget.id);
    updateIsNavActive(true);
  }
  const hoverExitNav = (e ) => {
    const subNavRect = subNavRef.current.getBoundingClientRect();
    if (subNavRect.top - e.pageY > 2) {
      updateIsNavActive(false)
      TriangleRef.current.style.opacity = '0';
    } 
  }

  return (
  <Header>
    <Logo id="logo">
      <a href="#">Cobalt Apparel</a>
    </Logo>
    <nav onMouseLeave={hoverExitNav}>
      <ul>
        <li className="start" onMouseEnter={hoverNav} id='brands'>
          <a href="#">Brands</a>
        </li>
        <li onMouseEnter={hoverNav} id='shoes'>
          <a href="#">Shoes</a>
        </li>
        <li onMouseEnter={hoverNav} id='clothing'>
          <a href="#">Clothing</a>
        </li>
        <li onMouseEnter={hoverNav} id='accessories'>
          <a href="#">Accessories</a>
        </li>
        <li className="end" onMouseEnter={hoverNav} id='sale'>
          <a href="#">Sale</a>
        </li>
      </ul>
    <NavTriangle className='triangle' ref={TriangleRef}/>
    </nav>
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
    <SubNav TriangleRef={TriangleRef} updateIsNavActive={updateIsNavActive} ref={subNavRef} isNavActive={isNavActive} headingData={navData.filter(i => i.id === navItemSelected)[0]}/>
  </Header>
)};



const SubNav = React.forwardRef(({headingData, isNavActive, updateIsNavActive, TriangleRef}, ref) => {
  const subNavMouseLeave = (e) => {
    updateIsNavActive(false)
    TriangleRef.current.style.opacity = '0';
}
  if(!headingData) return;
return (
  <StyledSubNav onMouseLeave={subNavMouseLeave} className={isNavActive ? 'show-nav' : 'hide-nav'} ref={ref}>
    <div className="header">{headingData.id}</div>
    <div className="list">{headingData.listItems}</div>
    <div className="button">button</div>
  </StyledSubNav>
)
});


const Header = styled.header`
  color: white;
  z-index: 2;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.783);
  /* padding: 0 4.5rem; */
  height: 8vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .hide-nav{
  height: 0;
transition: all 0.5s ease;

  *{
    display: none;
  }
}
.show-nav{
  height: auto;
transition: all 0.5s ease;

}

  nav{
    position: relative;
    svg{
      position: absolute;
      bottom: 0;
      opacity: 0;
      transform: translateX(-50%);
      pointer-events: none;
      transition: all 0.1s ease;
    }
  }

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
  padding-left: 4.5rem;
  
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
  padding-right: 4.5rem;
  * {
    padding-top: 0.3rem;
    margin-left: 0.8rem;
  }
`;

const StyledSubNav = styled.div`
position: absolute;
top: 8vh;
color: white;
background: #02e1f5;
width: 100vw;

`

export default Nav;

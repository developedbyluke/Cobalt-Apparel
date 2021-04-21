import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as NavTriangle } from '../img/navTriangle.svg';
import { Link } from 'react-router-dom';
import useWindowSize from '../helperFunctions/useWindowSize';
import '../styles/headerToggleClasses.scss';

const Nav = React.forwardRef(
  (
    {
      updateNavItemSelected,
      updateIsNavActive,
      SubNavRef,
      headingData,
      updateCollection,
      isMobileNavActive,
    },
    ref
  ) => {
    // useWindowSize exported from helperFunctions
    const isWindowSizeInMobile = useWindowSize();
    const [shouldNavShow, updateShouldNavShow] = useState(true);
    const navMouseEnter = (e) => {
      updateNavItemSelected(e.currentTarget.id);
      if (isWindowSizeInMobile) return;
      const navElementOffset =
        e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
      ref.current.style.left = `${navElementOffset}px`;
      ref.current.style.opacity = '1';
      updateIsNavActive(true);
    };

    const navMouseLeave = (e) => {
      const subNavRect = SubNavRef.current.getBoundingClientRect();
      if (subNavRect.top - e.pageY > 2) {
        ref.current.style.opacity = '0';
        updateIsNavActive(false);
      }
    };

    const handleLinkClick = () => {
      updateCollection(`/collection/${headingData.id}`);
      updateIsNavActive(false);
      ref.current.style.opacity = '0';
    };
    useEffect(() => {
      if (!isWindowSizeInMobile) updateShouldNavShow(true);
      if (isWindowSizeInMobile && isMobileNavActive) updateShouldNavShow(true);
      if (isWindowSizeInMobile && !isMobileNavActive)
        updateShouldNavShow(false);
    }, [isMobileNavActive, isWindowSizeInMobile]);

    return (
      <StyledNav
        onMouseLeave={navMouseLeave}
        className={shouldNavShow ? 'show' : 'hide'}
      >
        <ul>
          <li className="start" onMouseEnter={navMouseEnter} id="brands">
            <Link
              onClick={handleLinkClick}
              to={`/collection/${headingData.id}`}
            >
              Brands
            </Link>
          </li>
          <li onMouseEnter={navMouseEnter} id="shoes">
            <Link
              onClick={handleLinkClick}
              to={`/collection/${headingData.id}`}
            >
              Shoes
            </Link>
          </li>
          <li onMouseEnter={navMouseEnter} id="clothing">
            <Link
              onClick={handleLinkClick}
              to={`/collection/${headingData.id}`}
            >
              Clothing
            </Link>
          </li>
          <li onMouseEnter={navMouseEnter} id="accessories">
            <Link
              onClick={handleLinkClick}
              to={`/collection/${headingData.id}`}
            >
              Accessories
            </Link>
          </li>
          <li className="end" onMouseEnter={navMouseEnter} id="sale">
            <Link
              onClick={handleLinkClick}
              to={`/collection/${headingData.id}`}
            >
              Sale
            </Link>
          </li>
        </ul>
        <NavTriangle className="triangle" ref={ref} />
      </StyledNav>
    );
  }
);

const StyledNav = styled.nav`
  overflow-x: hidden;
  @media screen and (max-width: 1160px) {
    position: absolute;
    top: 4rem;
    left: 0;
    height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    width: 100vw;
    background-color: white;
  }
  position: relative;
  svg {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transform: translateX(-50%);
    pointer-events: none;
    transition: left 0.1s ease;
  }
  ul {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 4rem;
    @media screen and (max-width: 1160px) {
      flex-direction: column;
      height: 70%;
      width: 100%;
    }
    li {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1160px) {
        align-items: left;
        justify-content: flex-start;
        text-align: left;
        :before {
          content: '|';
          color: grey;
          /* font-size: 0.8rem; */
        }
      }
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      height: 100%;
      width: 100%;
      padding: 0 2rem;
      color: white;
      @media screen and (max-width: 1160px) {
        text-align: left;
        justify-content: flex-start;
        font-size: 1.8rem;
        font-weight: 300;
        width: 10rem;
        color: black;
      }
    }
    li::after {
      content: '|';
      color: grey;
      @media screen and (max-width: 1160px) {
        content: '';
      }
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

export default Nav;

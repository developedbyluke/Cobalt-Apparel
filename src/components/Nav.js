import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NavTriangle } from '../img/navTriangle.svg';
import { Link } from 'react-router-dom';

const Nav = React.forwardRef(
  (
    {
      updateNavItemSelected,
      updateIsNavActive,
      SubNavRef,
      headingData,
      updateCollection,
    },
    ref
  ) => {
    const navMouseEnter = (e) => {
      const navElementOffset =
        e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
      ref.current.style.left = `${navElementOffset}px`;
      ref.current.style.opacity = '1';
      updateNavItemSelected(e.currentTarget.id);
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

    return (
      <StyledNav onMouseLeave={navMouseLeave}>
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
    li {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
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

export default Nav;

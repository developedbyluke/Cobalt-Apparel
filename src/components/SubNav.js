import React from 'react';
import styled from 'styled-components';
import '../styles/headerToggleClasses.scss';
import { Link } from 'react-router-dom';

const SubNav = React.forwardRef(
  (
    {
      headingData,
      productData,
      isNavActive,
      updateIsNavActive,
      TriangleRef,
      updateCollection,
    },
    ref
  ) => {
    const subNavMouseLeave = () => {
      TriangleRef.current.style.opacity = '0';
      updateIsNavActive(false);
    };

    return (
      <StyledSubNav
        onMouseLeave={subNavMouseLeave}
        className={isNavActive ? 'show' : 'hide'}
        ref={ref}
      >
        <div className="sub-nav-header">{headingData.id}</div>
        <ul className="sub-nav-list">
          {headingData.listItems.sort().map((item) => {
            return (
              <li key={item}>
                <Link
                  onClick={() =>
                    updateCollection(`/collection/${headingData.id}/${item}`)
                  }
                  to={`/collection/${headingData.id}/${item}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <h3>
          <Link
            onClick={() => updateCollection(`/collection/${headingData.id}`)}
            to={`/collection/${headingData.id}`}
          >
            View All{' '}
            {headingData.id.charAt(0).toUpperCase() + headingData.id.slice(1)}
          </Link>
        </h3>
      </StyledSubNav>
    );
  }
);

const StyledSubNav = styled.div`
  position: absolute;
  top: 4rem;
  background: #02e1f5;
  width: 100vw;
  color: black;
  padding: 0 25vw;
  .sub-nav-header {
    font-size: 2rem;
    font-weight: 300;
    text-transform: capitalize;
    margin: 1rem 0;
    color: rgba(0, 0, 0, 0.3);
  }
  .sub-nav-list {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0;
    li {
      margin: 0.5rem 0.5rem 0.5rem 0;
      a {
        font-size: 1rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
        &:hover {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase;
    a {
      color: rgba(0, 0, 0, 0.8);
    }
    a:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export default SubNav;

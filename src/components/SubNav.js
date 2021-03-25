import React from "react";
import styled from "styled-components";
import "../styles/headerToggleClasses.scss";

const SubNav = React.forwardRef(
  ({ headingData, isNavActive, updateIsNavActive, TriangleRef }, ref) => {
    const subNavMouseLeave = () => {
      TriangleRef.current.style.opacity = "0";
      updateIsNavActive(false);
    };
    if (!headingData) return;
    return (
      <StyledSubNav
        onMouseLeave={subNavMouseLeave}
        className={isNavActive ? "show-nav" : "hide-nav"}
        ref={ref}
      >
        <div className="sub-nav-header">{headingData.id}</div>
        <ul className="sub-nav-list">
          {headingData.listItems.sort().map((item) => {
            return (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
        <h3>
          <a href="#">
            View All{" "}
            {headingData.id.charAt(0).toUpperCase() + headingData.id.slice(1)}
          </a>
        </h3>
      </StyledSubNav>
    );
  }
);

const StyledSubNav = styled.div`
  position: absolute;
  top: 8vh;
  color: white;
  background: #02e1f5;
  width: 100vw;
  color: black;
  padding: 0 30vw;
  .sub-nav-header {
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
    margin: 1rem 0;
    color: rgba(0, 0, 0, 0.266);
  }
  .sub-nav-list {
    margin-bottom: 1.5rem;
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
        font-weight: 300;
        &:hover {
          color: rgba(0, 0, 0, 0.666);
        }
      }
    }
  }

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 500;
    a:hover {
      color: rgba(0, 0, 0, 0.666);
    }
  }
`;

export default SubNav;

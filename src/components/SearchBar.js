import React from "react";
import styled from "styled-components";
import "../styles/headerToggleClasses.scss";

const SearchBar = () => {
  return (
    <StyledForm action="" method="get" className="show-search-bar">
      <input type="text"></input>
      <button className="material-icons">search</button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  position: absolute;
  top: 8vh;
  height: 4vh;
  /* border: 1px solid red; */
  display: flex;
  input {
    height: 100%;
    margin: 0;
    outline: none;
    font-size: 1rem;
    border: none;
    width: 25rem;
    padding: 0rem 0.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
  button {
    height: 100%;
    border: none;
    width: 5rem;
  }
`;

export default SearchBar;

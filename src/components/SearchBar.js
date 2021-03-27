import React from "react";
import styled from "styled-components";
import "../styles/headerToggleClasses.scss";

const SearchBar = ({ isSearchBarActive }) => {
  return (
    <StyledForm
      action=""
      method="get"
      className={isSearchBarActive ? "show-search-bar" : "hide-search-bar"}
    >
      <input type="text"></input>
      <button className="material-icons">search</button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  position: absolute;
  top: 8vh;
  height: 4vh;
  transition: right 0.5s ease;
  display: flex;
  width: 45vw;
  input {
    height: 100%;
    margin: 0;
    outline: none;
    font-size: 1rem;
    border: none;
    width: 100%;
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

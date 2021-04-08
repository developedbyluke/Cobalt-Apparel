import React from 'react';
import styled from 'styled-components';
import '../styles/headerToggleClasses.scss';

const SearchBar = ({ isSearchBarActive }) => {
  return (
    <StyledForm
      action=""
      method="get"
      className={isSearchBarActive ? 'show' : 'hide'}
    >
      <input type="text" autoFocus></input>
      <button className="material-icons">search</button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  /* box-shadow: 0px 2px 6px rgb(100, 100, 100); */
  border: 1px solid grey;
  position: absolute;
  top: 4rem;
  right: 0;
  height: 2rem;
  transition: right 0.5s ease;
  display: flex;
  width: 50%;
  input {
    background-color: rgba(0, 0, 0, 0.783);
    height: 100%;
    margin: 0;
    outline: none;
    font-size: 1rem;
    border: none;
    width: 100%;
    padding: 0rem 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: white;
  }
  button {
    height: 100%;
    border: none;
    width: 5rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.783);
    &:hover {
      color: rgba(0, 0, 0, 0.783);
      background-color: #02e1f5;
    }
  }
`;

export default SearchBar;

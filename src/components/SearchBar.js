import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SearchBar = ({ isSearchBarActive }) => {
  const SearchBarRef = useRef();
  useEffect(() => {
    console.log(SearchBarRef);
    if (isSearchBarActive) {
      SearchBarRef.current[0].focus();
    }
  }, [isSearchBarActive]);
  return (
    <StyledForm
      ref={SearchBarRef}
      action=""
      method="get"
      className={isSearchBarActive ? 'show' : 'hide'}
    >
      <input type="text" autoFocus={true} placeholder="Search"></input>
      <button className="material-icons">search</button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  border: 1px solid grey;
  position: absolute;
  top: 40vh;
  right: 50vw;
  transform: translate(50%, -60%);
  height: 5rem;
  transition: right 0.5s ease;
  display: flex;
  width: 50%;
  input {
    background-color: rgba(0, 0, 0, 0.783);
    height: 100%;
    margin: 0;
    outline: none;
    font-size: 2rem;
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
    width: 6rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.783);
    &:hover {
      color: rgba(0, 0, 0, 0.783);
      background-color: #02e1f5;
    }
  }
`;

export default SearchBar;

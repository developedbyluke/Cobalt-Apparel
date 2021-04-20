import React from 'react';
import BannerImg from '../img/subscribeBanner.jpg';
import styled from 'styled-components';

const SubscribeBanner = () => {
  return (
    <StyledBanner>
      <img src={BannerImg} alt="" />
      <div className="text-container">
        <h2>Subscribe to our newsletter for 20% off your first order.</h2>
        <form action="">
          <input type="Email" placeholder="Email.." />
          <button type="Submit">Submit</button>
        </form>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1250px) {
    align-items: flex-end;
  }
  height: 42rem;
  img {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .text-container {
    width: 40%;
    @media screen and (max-width: 1250px) {
      width: 100%;
      button {
        background: white;
        height: 1.9rem;
        border-radius: 3px;
      }
      h2 {
        font-size: 2rem;
        line-height: 2.8rem;
      }
    }
    padding: 2rem;
    color: white;
    background: black;
    /* width: 30%; */
    form {
      display: flex;
      align-items: center;
      margin: 0 -0.2rem;
      * {
        margin: 0 0.2rem;
      }
    }
    input {
      flex: 1;
      height: 2rem;
      outline: none;
      font-family: 'Lexend', sans-serif;
      padding: 0 0.2rem;
    }
  }
  h2 {
    font-family: 'Lexend', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    line-height: 4rem;
  }
`;

export default SubscribeBanner;

import React from 'react';
import BannerImg from '../img/subscribeBanner.jpg';
import styled from 'styled-components';

const SubscribeBanner = () => {
  return (
    <StyledBanner>
      <img src={BannerImg} alt="" />
      <div className="text-container">
        <h2>Subscribe to our newsletter for 20% off your first order</h2>
        <form action="">
          <input type="Email" placeholder="Email.." />
          <button type="Submit">Submit</button>
        </form>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;

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
    @media screen and (max-width: 1250px) {
      width: 100%;
      form {
        width: 80%;
      }
    }
    padding: 2rem;
    background: black;
    color: white;
    width: 30%;
    form {
      display: flex;
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

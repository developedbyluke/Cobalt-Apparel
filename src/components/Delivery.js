import React from 'react';
import styled from 'styled-components';

const Delivery = () => {
  return (
    <DeliveryBanner>
      <h5>
        Free UK delivery on all orders over £80{' '}
        <span className="material-icons">local_shipping</span>
      </h5>
    </DeliveryBanner>
  );
};

const DeliveryBanner = styled.div`
  width: 100%;
  background: #ebebe6;
  height: 3rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  h5 {
    display: flex;
    align-items: center;
    font-weight: 300;
  }
  span {
    margin: 0 0 0.1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Delivery;
